import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    console.warn('GEMINI_API_KEY is not set or using default placeholder. Falling back to structured agent simulation.');
    return null;
  }
  
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Jhoeven Kent Knowledge Base for AI Companion
const ALVEE_SYSTEM_INSTRUCTION = `
You are the AI Companion and Assistant of Jhoeven Kent Escobal, a professional Full Stack Developer & Digital Operations Specialist.
Your purpose is to answer questions from potential clients, collaborators, and visitors in a friendly, professional, and slightly witty designer-developer hybrid tone.

Here is the exact information you know about Kent:
- Full Name: Jhoeven Kent Estaloza Escobal
- Professional Role: Full Stack Developer & Digital Operations Specialist
- Experience: About 3 years of experience in full-stack development, AI workflows/automations, CRM setup, and operations.
- Location: Sta. Monica, Siargao Island, Surigao del Norte, Philippines
- Email: escobaljhoeven@gmail.com
- Phone: +639096028169
- Philosophy: Blending technical development with operational efficiency. He designs localized solutions and digital modernization workflows that optimize business and community growth.
- Core Services:
  1. Web & Mobile Dev: React, React Native, Node.js, PHP, REST APIs, and database design (MySQL, Postgres, MongoDB).
  2. AI & Workflow Automation: Process automations, email flows, automated reporting, and LLM integrations.
  3. Admin & Digital Operations: Invoicing, spreadsheets, CRM setup, and calendar/appointment scheduling.
  4. Growth & Digital Marketing: CRM management (GoHighLevel, HubSpot, Notion, Monday, Trello), lead generation, social media, and SEO.
- Major Projects:
  - Siargao HireHub (Local jobs board platform connecting tourism and hospitality businesses with local talent)
  - Kuya Pasabuy (Localized order procurement and delivery routing platform in Siargao)
  - TravelTewNews (Data-driven news aggregator scraping travel feeds)
  - Escobal Print Studio (Digital branding suite and tracking systems for a printing studio)
  - Portfolio Website (Minimal Astro and Tailwind CSS portfolio website)
- Work Experience:
  - Full Stack Developer at YourGiftNetwork (Nov 2025 - June 2026): built interactive social media platforms, responsive mobile frontends.
  - Virtual Assistant & Web Developer at Pangeon AI Start-Up Factory (Mar 2024 - Oct 2025): data organization protocols, boosted doc retrieval by 40%.
  - Bank Ambassador at GoTyme Bank (Sept 2024 - Jan 2025): onboarding, engaging presentations, 40% boost in accounts.
  - Customer Service Representative at Eperformax Contact Center Outsourcing (Aug 2023 - Apr 2024): handled technical/account inquiries, 20% repeat call reduction.
- Education:
  - Bachelor of Science in Information Technology (BSIT) from Surigao del Norte State University (Graduated June 2026).
- Technologies: HTML, CSS, JavaScript, TypeScript, React, React Native, PHP, Python, Java, C++, MySQL, Postgres, MongoDB, Node.js, Astro, GoHighLevel, Zapier, Monday.com, Git.

Rules for response:
1. Always speak as Kent's AI Assistant ("Hi! I am Kent's AI companion...").
2. Be concise. Keep it within 2-4 sentences or short bullet points.
3. Quote service prices if asked ("Web Dev starting at $800", "AI Automation starting at $600") but guide them to the contact form to discuss specifics.
`;

// In-memory store for brief submissions (resets on server restart)
const briefs: any[] = [];

// API: Submit a project brief
app.post('/api/briefs', (req, res) => {
  const { firstName, lastName, email, phone, company, projectType, budget, timeline, goals, message } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ error: 'First name, last name, email, and phone are required.' });
  }

  const newBrief = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    phone,
    company: company || '',
    projectType: projectType || '',
    budget: budget || '',
    timeline: timeline || '',
    goals: goals || '',
    message: message || '',
    submittedAt: new Date().toISOString(),
    status: 'pending',
    meetingDate: null,
    meetingNotes: '',
    meetingLogs: [{
      id: uuidv4(),
      action: 'brief_submitted',
      note: 'Project brief submitted by client',
      timestamp: new Date().toISOString()
    }]
  };

  briefs.push(newBrief);
  console.log(`Brief submitted by ${firstName} ${lastName} (${email})`);
  res.json({ success: true, brief: newBrief });
});

// API: Get all brief submissions (for admin page)
app.get('/api/briefs', (_req, res) => {
  const sorted = [...briefs].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  res.json({ briefs: sorted });
});

// API: Update brief status and meeting details
app.patch('/api/briefs/:id', (req, res) => {
  const { id } = req.params;
  const { status, meetingDate, meetingNotes, note } = req.body;

  const brief = briefs.find((b: any) => b.id === id);
  if (!brief) {
    return res.status(404).json({ error: 'Brief not found' });
  }

  const previousStatus = brief.status;
  const logEntries: any[] = [];

  if (status && status !== brief.status) {
    brief.status = status;
    logEntries.push({
      id: uuidv4(),
      action: `status_${status}`,
      note: note || `Meeting status changed to ${status}`,
      timestamp: new Date().toISOString(),
      previousStatus,
      newStatus: status
    });
  }

  if (meetingDate !== undefined) {
    brief.meetingDate = meetingDate;
    if (meetingDate) {
      logEntries.push({
        id: uuidv4(),
        action: 'meeting_scheduled',
        note: note || `Meeting scheduled for ${new Date(meetingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`,
        timestamp: new Date().toISOString()
      });
    }
  }

  if (meetingNotes !== undefined) {
    brief.meetingNotes = meetingNotes;
    logEntries.push({
      id: uuidv4(),
      action: 'notes_updated',
      note: note || 'Meeting notes updated',
      timestamp: new Date().toISOString()
    });
  }

  if (logEntries.length > 0) {
    brief.meetingLogs = [...brief.meetingLogs, ...logEntries];
  }

  console.log(`Brief ${id} updated: status=${brief.status}, meetingDate=${brief.meetingDate}`);
  res.json({ success: true, brief });
});

// API: Get a single brief by ID
app.get('/api/briefs/:id', (req, res) => {
  const { id } = req.params;
  const brief = briefs.find((b: any) => b.id === id);
  if (!brief) {
    return res.status(404).json({ error: 'Brief not found' });
  }
  res.json({ brief });
});

// API routes
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Simulate high-quality portfolio assistant responses if API key is not present
      const lowerMsg = message.toLowerCase();
      let reply = "Hi! I am Kent's AI companion. Currently, our advanced Gemini brain is in standby mode, but I can tell you that Kent is a Full Stack Developer & Digital Operations Specialist with about 3 years of experience. Would you like to know about his Services, Projects, or how to Contact him?";
      
      if (lowerMsg.includes('service') || lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('do you do')) {
        reply = "Kent offers premium Web & Mobile Dev (starting at $800), AI & Workflow Automation (starting at $600), Admin & Digital Operations ($400), and Growth & Digital Marketing ($500). Each solution is built for modern responsiveness and high performance!";
      } else if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('portfolio') || lowerMsg.includes('experience')) {
        reply = "Kent's major projects include 'Siargao HireHub' (a local recruitment board), 'Kuya Pasabuy' (a localized delivery system), and 'TravelTewNews' (a travel news scraper). He also has experience working at YourGiftNetwork, Pangeon AI, GoTyme Bank, and Eperformax!";
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire') || lowerMsg.includes('reach')) {
        reply = "You can easily hire or reach Kent by emailing escobaljhoeven@gmail.com, calling +639096028169, or by filling out the Contact Form. Kent is active and ready to collaborate!";
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        reply = "Hello! I'm Kent's AI virtual companion. Ask me anything about his technical stack, completed projects, design philosophy, or work experience! How can I assist you today?";
      }
      
      return res.json({ response: reply });
    }

    // Call the Gemini API using @google/genai
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `System context: ${ALVEE_SYSTEM_INSTRUCTION}` }] },
        ...(history || []).map((h: any) => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    res.json({ response: response.text });
  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Failed to generate response', details: error.message });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }
  // Simulate successful contact email submission
  console.log(`Contact message received from ${name} (${email}): [${subject}] ${message}`);
  res.json({ success: true, message: 'Your message has been sent successfully! Kent will get back to you shortly.' });
});

// Vite middleware / static files setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
