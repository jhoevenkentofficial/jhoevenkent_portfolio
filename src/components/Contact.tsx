import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, MessageSquareCode, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am Kent's AI companion. Ask me anything about his full-stack engineering, AI automations, digital operations, or freelance availability!"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Prefill subject from Session Storage if set via Services component
  useEffect(() => {
    const prefilled = sessionStorage.getItem('prefilled_subject');
    if (prefilled) {
      setFormData(prev => ({ ...prev, subject: prefilled }));
      sessionStorage.removeItem('prefilled_subject');
    }
  }, []);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatLoading]);

  // Form Submit Handler
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormSuccess(null);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit message.');

      setFormSuccess(data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setFormError(err.message || 'Something went wrong.');
    } finally {
      setFormLoading(false);
    }
  };

  // Chat Submit Handler
  const handleChatSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: chatInput
    };

    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      // Package conversation history
      const history = messages.slice(1).map(m => ({ role: m.role, content: m.content }));
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content, history })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to connect to AI companion.');

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response
        }
      ]);
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "Oops! I encountered an issue. Please rest assured Kent is highly capable—you can contact him directly using the form on the left or via email!"
        }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setChatInput(text);
    // Submit using the selected suggestion text immediately
    setTimeout(() => {
      const submitBtn = document.getElementById('chat-submit-btn');
      submitBtn?.click();
    }, 50);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-brand-beige relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/4 -right-24 w-72 h-72 bg-[#FF7824]/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center md:text-left mb-16 max-w-2xl" id="contact-header-container">
          <p className="text-[#FF7824] font-bold text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-display text-brand-navy tracking-tight">
            Let's Collaborate
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-sans text-sm md:text-base">
            Ready to start your next premium digital experience? Fill out the project brief form, or have a direct chat with Jhoeven Kent's AI companion below!
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="contact-dual-grid">
          
          {/* Left Block: Traditional Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#EADCD0]/30 shadow-xl shadow-brand-navy/5 flex flex-col justify-between"
            id="contact-form-card"
          >
            <div>
              <div className="flex items-center gap-3 mb-6" id="form-header">
                <div className="w-10 h-10 rounded-xl bg-[#FF7824]/10 text-[#FF7824] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sans text-brand-navy">Project Brief Form</h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4" id="project-brief-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label htmlFor="name-input" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Your Name</label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-[#FF7824] focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label htmlFor="email-input" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-[#FF7824] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="subject-input" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Subject</label>
                  <input
                    id="subject-input"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Interactive Dashboard Project"
                    className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-[#FF7824] focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="message-input" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Message Brief</label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Kent about your project requirements, scope, and deadlines..."
                    className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-[#FF7824] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Feedback */}
                <AnimatePresence>
                  {formSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl flex items-center gap-2"
                      id="form-success-msg"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600" />
                      <span>{formSuccess}</span>
                    </motion.div>
                  )}

                  {formError && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2"
                      id="form-error-msg"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-4 bg-[#FF7824] hover:bg-[#E05E12] text-white font-sans font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-[#FF7824]/60 cursor-pointer"
                  id="form-submit-btn"
                >
                  {formLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Project Brief...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans gap-2" id="form-foot">
              <span>Direct: <strong className="text-brand-navy">escobaljhoeven@gmail.com</strong></span>
              <span>Response standard: <strong className="text-[#FF7824]">Within 12 Hours</strong></span>
            </div>
          </motion.div>

          {/* Right Block: Dynamic AI Chat Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#1E2E5C] text-white rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col justify-between max-h-[560px]"
            id="contact-ai-chat-card"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10" id="chat-header">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FF7824] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold font-sans text-sm text-white">Kent's virtual AI</h3>
                  <p className="text-[10px] font-mono text-green-400 flex items-center gap-1 leading-none mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Gemini 3.5 Engine Ready
                  </p>
                </div>
              </div>
            </div>

            {/* Chat message space */}
            <div 
              className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 h-[240px] md:h-[300px] scrollbar-thin scrollbar-thumb-white/10"
              id="chat-messages-container"
            >
              {messages.map((m) => (
                <div 
                  key={m.id}
                  className={`flex flex-col max-w-[80%] ${
                    m.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                  }`}
                  id={`chat-bubble-${m.id}`}
                >
                  <div 
                    className={`p-3 rounded-2xl text-xs leading-relaxed font-sans text-left ${
                      m.role === 'user' 
                        ? 'bg-[#FF7824] text-white rounded-br-none' 
                        : 'bg-white/10 text-slate-100 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div className="flex flex-col items-start max-w-[80%] mr-auto" id="chat-loading-indicator">
                  <div className="p-3 bg-white/5 border border-white/5 text-slate-400 text-xs rounded-2xl rounded-bl-none flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-orange" />
                    <span>Analyzing codebase context...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Chips */}
            <div className="mb-4" id="chat-suggestion-chips">
              <p className="text-[10px] font-mono text-slate-400 mb-2 text-left">Quick Questions:</p>
              <div className="flex flex-wrap gap-1.5">
                <button 
                  onClick={() => handleSuggestionClick("What's Kent's development stack?")}
                  className="px-2.5 py-1 text-[10px] font-sans font-semibold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 transition-colors cursor-pointer"
                >
                  💻 Technical Stack
                </button>
                <button 
                  onClick={() => handleSuggestionClick("Is Kent open for freelance contracts?")}
                  className="px-2.5 py-1 text-[10px] font-sans font-semibold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 transition-colors cursor-pointer"
                >
                  💼 Freelance Rates
                </button>
                <button 
                  onClick={() => handleSuggestionClick("How many projects has Kent completed?")}
                  className="px-2.5 py-1 text-[10px] font-sans font-semibold bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 transition-colors cursor-pointer"
                >
                  🏆 Experience Level
                </button>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleChatSubmit} className="flex gap-2" id="chat-input-form">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Kent Bot..."
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#FF7824] focus:bg-white/10 transition-all font-sans"
              />
              <button
                type="submit"
                id="chat-submit-btn"
                disabled={!chatInput.trim() || chatLoading}
                className="w-10 h-10 shrink-0 bg-[#FF7824] hover:bg-[#E05E12] disabled:bg-slate-700 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center shadow-md transition-all cursor-pointer"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
