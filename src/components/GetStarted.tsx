import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, User, Building2, Target, Calendar, CalendarDays, ExternalLink, AlertCircle, Clock, DollarSign } from 'lucide-react';
import Header from './Header';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDay(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const [activeSection, setActiveSection] = useState('getstarted');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [calMonth, setCalMonth] = useState(() => new Date().getMonth());
  const [calYear, setCalYear] = useState(() => new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    goals: '',
    message: ''
  });

  const totalSteps = 4;

  const prevCalMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(p => p - 1); }
    else { setCalMonth(p => p - 1); }
  };

  const nextCalMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(p => p + 1); }
    else { setCalMonth(p => p + 1); }
  };

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime('');
    updateField('timeline', dateStr);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const res = await fetch('/api/briefs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitSuccess(true);
        // Reset form after brief submission
        setStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          goals: '',
          message: ''
        });
        // Auto-dismiss success message after 7 seconds
        setTimeout(() => setSubmitSuccess(false), 7000);
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const stepIcons = [User, Building2, Target, Calendar];
  const stepLabels = ['About You', 'Business', 'Goals', 'Schedule'];

  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-sans">
      {/* Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#EADCD0]/30 py-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-slate-500 font-mono">STEP {step} OF {totalSteps}</span>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {stepLabels.map((label, idx) => {
              const Icon = stepIcons[idx];
              const isActive = step === idx + 1;
              const isCompleted = step > idx + 1;
              
              return (
                <div key={label} className="flex-1 flex flex-col items-center">
                  <div className="flex items-center w-full">
                    <div className="flex-1 h-0.5 bg-slate-200 relative">
                      {isCompleted && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute inset-0 bg-brand-orange origin-left"
                        />
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-110' 
                        : isCompleted 
                          ? 'bg-brand-orange text-white' 
                          : 'bg-slate-100 text-slate-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 relative">
                      {isCompleted && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute inset-0 bg-brand-orange origin-right"
                        />
                      )}
                    </div>
                  </div>
                  <span className={`text-xs mt-2 font-medium ${
                    isActive ? 'text-brand-orange' : isCompleted ? 'text-brand-navy' : 'text-slate-400'
                  }`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-navy/5 border border-[#EADCD0]/30"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black font-display text-brand-navy tracking-tight mb-3">
                {step === 1 && "Tell us who you are"}
                {step === 2 && "Tell us about your business"}
                {step === 3 && "What are your goals?"}
                {step === 4 && "When should we start?"}
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {step === 1 && "We'll only use your details to reach out about your project — no spam, ever."}
                {step === 2 && "Help us understand your business context to provide tailored solutions."}
                {step === 3 && "Let us know what you want to achieve with this project."}
                {step === 4 && "Pick a timeline that works best for you."}
              </p>
            </div>

            {/* Success Message Banner */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Brief Submitted!</p>
                    <p className="text-xs text-green-700 mt-0.5">Thank you! Kent will reach out within 12 hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message Banner */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-800">Submission Failed</p>
                    <p className="text-xs text-red-700 mt-0.5">{submitError}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col text-left">
                        <label htmlFor="firstName" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">First Name *</label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => updateField('firstName', e.target.value)}
                          placeholder="Maverick"
                          className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <label htmlFor="lastName" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Last Name *</label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => updateField('lastName', e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Active Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="flex flex-col text-left">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Company / Organization</label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        placeholder="e.g. Acme Inc."
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="projectType" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Project Type *</label>
                      <select
                        id="projectType"
                        required
                        value={formData.projectType}
                        onChange={(e) => updateField('projectType', e.target.value)}
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      >
                        <option value="">Select a project type</option>
                        <option value="website">Website Development</option>
                        <option value="webapp">Web Application</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="automation">AI Automation</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="budget" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Budget Range *</label>
                      <select
                        id="budget"
                        required
                        value={formData.budget}
                        onChange={(e) => updateField('budget', e.target.value)}
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      >
                        <option value="">Select your budget</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="flex flex-col text-left">
                      <label htmlFor="goals" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Project Goals *</label>
                      <textarea
                        id="goals"
                        required
                        rows={4}
                        value={formData.goals}
                        onChange={(e) => updateField('goals', e.target.value)}
                        placeholder="What do you want to achieve? (e.g., increase sales, automate workflows, improve user experience)"
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Additional Details</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Any other details, requirements, or questions?"
                        className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl font-sans text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                      {/* Left: Calendar */}
                      <div className="lg:col-span-3 bg-brand-beige/30 rounded-2xl p-4 md:p-5 border border-[#EADCD0]/30">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-4">
                          <button
                            type="button"
                            onClick={prevCalMonth}
                            className="p-2 rounded-xl hover:bg-white text-slate-500 transition-all cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <h3 className="text-sm font-bold font-display text-brand-navy tracking-tight">
                            {MONTHS[calMonth]} {calYear}
                          </h3>
                          <button
                            type="button"
                            onClick={nextCalMonth}
                            className="p-2 rounded-xl hover:bg-white text-slate-500 transition-all cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 mb-1 gap-0.5">
                          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                            <div key={d} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider py-1.5">{d}</div>
                          ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-0.5">
                          {Array.from({ length: getFirstDay(calMonth, calYear) }).map((_, i) => (
                            <div key={`e-${i}`} />
                          ))}
                          {Array.from({ length: getDaysInMonth(calMonth, calYear) }).map((_, i) => {
                            const day = i + 1;
                            const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            const isPast = new Date(dateStr) < new Date(new Date().toDateString());
                            const isSelected = selectedDate === dateStr;
                            const isToday = dateStr === new Date().toISOString().substring(0, 10);
                            return (
                              <button
                                key={day}
                                type="button"
                                disabled={isPast}
                                onClick={() => handleDateSelect(dateStr)}
                                className={`aspect-square rounded-xl text-sm font-semibold transition-all cursor-pointer flex flex-col items-center justify-center ${
                                  isSelected
                                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-105'
                                    : isToday
                                      ? 'bg-brand-orange/10 text-brand-orange border-2 border-brand-orange/30'
                                      : isPast
                                        ? 'text-slate-300 cursor-not-allowed'
                                        : 'text-brand-navy hover:bg-white hover:shadow-sm'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Time slots */}
                        <div className="mt-4 pt-4 border-t border-[#EADCD0]/20">
                          <h4 className="text-xs font-bold text-slate-500 mb-2.5 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {selectedDate ? `Available times for ${new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : 'Select a date to see available times'}
                          </h4>
                          {selectedDate && (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                              {TIME_SLOTS.map(slot => {
                                const isSelectedTime = selectedTime === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setSelectedTime(slot)}
                                    className={`py-2 px-2 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                                      isSelectedTime
                                        ? 'bg-brand-orange text-white border-brand-orange shadow-sm'
                                        : 'bg-white text-brand-navy border-[#EADCD0]/40 hover:border-brand-orange/40 hover:bg-brand-orange/5'
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Details Panel */}
                      <div className="lg:col-span-2 space-y-4">
                        {/* Selected Date/Time Card */}
                        <div className="bg-white rounded-2xl p-5 border-2 border-brand-orange/20 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-brand-navy text-sm">Your Appointment</h4>
                              <p className="text-[11px] text-slate-500">Free 30-minute strategy call</p>
                            </div>
                          </div>
                          <div className="space-y-2.5">
                            <div className={`flex items-center gap-2.5 p-2.5 rounded-xl text-sm ${
                              selectedDate ? 'bg-brand-beige/50 text-brand-navy' : 'bg-slate-50 text-slate-400'
                            }`}>
                              <CalendarDays className="w-4 h-4 shrink-0" />
                              <span className="font-medium">{selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : 'No date selected'}</span>
                            </div>
                            <div className={`flex items-center gap-2.5 p-2.5 rounded-xl text-sm ${
                              selectedTime ? 'bg-brand-beige/50 text-brand-navy' : 'bg-slate-50 text-slate-400'
                            }`}>
                              <Clock className="w-4 h-4 shrink-0" />
                              <span className="font-medium">{selectedTime || 'No time selected'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Summary Card */}
                        <div className="bg-white rounded-2xl p-5 border border-[#EADCD0]/30">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Brief Summary</h4>
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{formData.firstName} {formData.lastName}</span>
                            </div>
                            {formData.company && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span>{formData.company}</span>
                              </div>
                            )}
                            {formData.projectType && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Target className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span>{formData.projectType === 'website' ? 'Website Development' : formData.projectType === 'webapp' ? 'Web Application' : formData.projectType === 'ecommerce' ? 'E-commerce' : formData.projectType === 'automation' ? 'AI Automation' : formData.projectType === 'consulting' ? 'Technical Consulting' : formData.projectType}</span>
                              </div>
                            )}
                            {formData.budget && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <DollarSign className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span>{formData.budget === '5k-10k' ? '$5,000 - $10,000' : formData.budget === '10k-25k' ? '$10,000 - $25,000' : formData.budget === '25k-50k' ? '$25,000 - $50,000' : formData.budget === '50k+' ? '$50,000+' : formData.budget === 'not-sure' ? 'Not sure yet' : formData.budget}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* What you'll get */}
                        <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-2xl p-4 border border-brand-orange/20">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                              <span>Free 30-minute strategy call</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                              <span>Custom system roadmap</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                              <span>No-obligation quote</span>
                            </li>
                          </ul>
                        </div>

                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Takes about 3 minutes · No commitment
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl font-sans font-semibold text-sm text-brand-navy hover:bg-brand-beige/50 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3.5 bg-brand-orange hover:bg-[#E05E12] text-white font-sans font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-8 py-3.5 bg-brand-orange hover:bg-[#E05E12] text-white font-sans font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Project Brief
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-10 text-center">
            <p className="text-xs text-slate-400 mb-4">Trusted by growing businesses across industries</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale">
              <span className="font-display font-bold text-sm text-brand-navy">HIPE.</span>
              <span className="font-display font-bold text-sm text-brand-navy">MELON LEMON</span>
              <span className="font-display font-bold text-sm text-brand-navy">bhnd.</span>
              <span className="font-display font-bold text-sm text-brand-navy">ALA CINCO</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}