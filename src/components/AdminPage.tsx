import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, Phone, Building2, Target, Calendar, DollarSign, FileText, Clock,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, RefreshCw, AlertCircle, Search,
  Filter, CheckCircle2, XCircle, PlayCircle, RotateCcw,
  CalendarCheck, MessageSquare, History,
  Edit3, Save, ListChecks
} from 'lucide-react';
import { Brief, MeetingStatus } from '../types';

const STATUS_CONFIG: Record<MeetingStatus, { label: string; color: string; bg: string; icon: any; dot: string }> = {
  pending: { label: 'Pending', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', icon: Clock, dot: 'bg-amber-400' },
  scheduled: { label: 'Scheduled', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', icon: CalendarCheck, dot: 'bg-blue-500' },
  ongoing: { label: 'Ongoing', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', icon: PlayCircle, dot: 'bg-purple-500' },
  completed: { label: 'Completed', color: 'text-green-600', bg: 'bg-green-50 border-green-200', icon: CheckCircle2, dot: 'bg-green-500' },
  cancelled: { label: 'Cancelled', color: 'text-red-600', bg: 'bg-red-50 border-red-200', icon: XCircle, dot: 'bg-red-500' },
  rescheduled: { label: 'Rescheduled', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200', icon: RotateCcw, dot: 'bg-orange-500' }
};

const STATUS_TRANSITIONS: Record<MeetingStatus, MeetingStatus[]> = {
  pending: ['scheduled', 'cancelled'],
  scheduled: ['ongoing', 'rescheduled', 'cancelled'],
  ongoing: ['completed', 'cancelled'],
  completed: [],
  cancelled: ['pending', 'scheduled'],
  rescheduled: ['scheduled', 'cancelled']
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function AdminPage() {
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [statusFilter, setStatusFilter] = useState<MeetingStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [calendarMonth, setCalendarMonth] = useState(() => new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(() => new Date().getFullYear());

  const [editStatus, setEditStatus] = useState<MeetingStatus>('pending');
  const [editMeetingDate, setEditMeetingDate] = useState('');
  const [editMeetingNotes, setEditMeetingNotes] = useState('');
  const [editNote, setEditNote] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBrief, setEditingBrief] = useState<Brief | null>(null);

  const ADMIN_PASSWORD = 'kentadmin2026';

  const fetchBriefs = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/briefs');
      const data = await res.json();
      if (data.briefs) setBriefs(data.briefs);
    } catch {
      setError('Failed to load briefs. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { if (authenticated) fetchBriefs(); }, [authenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  const openEditModal = (brief: Brief) => {
    setEditingBrief(brief);
    setEditStatus(brief.status);
    setEditMeetingDate(brief.meetingDate || '');
    setEditMeetingNotes(brief.meetingNotes || '');
    setEditNote('');
    setShowEditModal(true);
  };

  const handleUpdateBrief = async () => {
    if (!editingBrief) return;
    setUpdatingId(editingBrief.id);
    try {
      const res = await fetch(`/api/briefs/${editingBrief.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: editStatus, meetingDate: editMeetingDate || null, meetingNotes: editMeetingNotes, note: editNote || undefined })
      });
      const data = await res.json();
      if (data.success) {
        setBriefs(prev => prev.map(b => b.id === editingBrief.id ? data.brief : b));
        setShowEditModal(false);
        setEditingBrief(null);
      }
    } catch {
      setError('Failed to update brief');
    } finally {
      setUpdatingId(null);
    }
  };

  const quickStatusUpdate = async (brief: Brief, newStatus: MeetingStatus) => {
    setUpdatingId(brief.id);
    try {
      const res = await fetch(`/api/briefs/${brief.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, note: `Status changed to ${newStatus}` })
      });
      const data = await res.json();
      if (data.success) setBriefs(prev => prev.map(b => b.id === brief.id ? data.brief : b));
    } catch {
      setError('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleExpand = (id: string) => setExpandedId(expandedId === id ? null : id);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const formatDateShort = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getProjectTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      website: 'Website Development', webapp: 'Web Application', ecommerce: 'E-commerce',
      automation: 'AI Automation', consulting: 'Technical Consulting', other: 'Other'
    };
    return labels[type] || type;
  };

  const getBudgetLabel = (budget: string) => {
    const labels: Record<string, string> = {
      '5k-10k': '$5,000 - $10,000', '10k-25k': '$10,000 - $25,000',
      '25k-50k': '$25,000 - $50,000', '50k+': '$50,000+', 'not-sure': 'Not sure yet'
    };
    return labels[budget] || budget;
  };

  const getStatusCount = (status: MeetingStatus) => briefs.filter(b => b.status === status).length;

  const filteredBriefs = briefs.filter(brief => {
    const matchesStatus = statusFilter === 'all' || brief.status === statusFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query ||
      brief.firstName.toLowerCase().includes(query) ||
      brief.lastName.toLowerCase().includes(query) ||
      brief.email.toLowerCase().includes(query) ||
      brief.company?.toLowerCase().includes(query) ||
      brief.projectType?.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  // Calendar helpers
  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const getBriefsForDate = (day: number) => {
    const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return briefs.filter(b => {
      if (!b.meetingDate) return false;
      return b.meetingDate.substring(0, 10) === dateStr && ['scheduled', 'ongoing', 'completed'].includes(b.status);
    });
  };

  const prevMonth = () => {
    if (calendarMonth === 0) { setCalendarMonth(11); setCalendarYear(p => p - 1); }
    else { setCalendarMonth(p => p - 1); }
  };

  const nextMonth = () => {
    if (calendarMonth === 11) { setCalendarMonth(0); setCalendarYear(p => p + 1); }
    else { setCalendarMonth(p => p + 1); }
  };

  const goToToday = () => { const n = new Date(); setCalendarMonth(n.getMonth()); setCalendarYear(n.getFullYear()); };

  const getStatusColor = (status: MeetingStatus): string => {
    switch (status) {
      case 'scheduled': return '#2563eb';
      case 'ongoing': return '#9333ea';
      case 'completed': return '#16a34a';
      case 'cancelled': return '#dc2626';
      case 'rescheduled': return '#ea580c';
      default: return '#d97706';
    }
  };

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-brand-beige flex flex-col items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-navy/5 border border-[#EADCD0]/30">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-orange" />
              </div>
              <h1 className="text-2xl font-black font-display text-brand-navy tracking-tight mb-2">Brief Admin</h1>
              <p className="text-sm text-slate-500">Enter the admin password to manage client briefs and meetings.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold text-slate-500 mb-1.5 ml-1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password" autoFocus
                  className="w-full px-4 py-3.5 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all" />
              </div>
              {error && <p className="text-red-500 text-xs flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" />{error}</p>}
              <button type="submit" className="w-full px-8 py-3.5 bg-brand-orange hover:bg-[#E05E12] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">Access Admin Panel</button>
            </form>
            <p className="text-xs text-slate-400 text-center mt-6">This area is restricted to the site owner only.</p>
          </div>
        </div>
      </div>
    );
  }

  const renderCalendarView = () => (
    <div className="bg-white rounded-2xl border border-[#EADCD0]/30 shadow-sm overflow-hidden">
      <div className="p-5 md:p-6 border-b border-[#EADCD0]/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-brand-beige text-slate-500 transition-all cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
            <h2 className="text-lg font-black font-display text-brand-navy tracking-tight">{MONTHS[calendarMonth]} {calendarYear}</h2>
            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-brand-beige text-slate-500 transition-all cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
          </div>
          <button onClick={goToToday} className="px-4 py-2 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-xl hover:bg-brand-orange/20 transition-all cursor-pointer">Today</button>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: getFirstDayOfMonth(calendarMonth, calendarYear) }).map((_, i) => (
            <div key={`e-${i}`} className="min-h-[90px] md:min-h-[110px] rounded-xl bg-brand-beige/30" />
          ))}
          {Array.from({ length: getDaysInMonth(calendarMonth, calendarYear) }).map((_, i) => {
            const day = i + 1;
            const dayBriefs = getBriefsForDate(day);
            const isToday = new Date().getDate() === day && new Date().getMonth() === calendarMonth && new Date().getFullYear() === calendarYear;
            return (
              <div key={day} className={`min-h-[90px] md:min-h-[110px] rounded-xl border p-1.5 transition-all ${
                isToday ? 'border-brand-orange/40 bg-brand-orange/[0.02]' : 'border-[#EADCD0]/20 hover:border-[#EADCD0]/40 bg-white'
              }`}>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md inline-block mb-1 ${isToday ? 'bg-brand-orange text-white' : 'text-slate-500'}`}>{day}</span>
                <div className="space-y-0.5">
                  {dayBriefs.slice(0, 3).map(b => {
                    const cfg = STATUS_CONFIG[b.status];
                    return (
                      <button key={b.id} onClick={() => { setExpandedId(b.id); setViewMode('list'); setStatusFilter(b.status); }}
                        className="w-full text-left px-1.5 py-1 rounded-md text-[9px] font-semibold leading-tight truncate transition-all hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: cfg.bg.replace('bg-', '').split(' ')[0], color: getStatusColor(b.status) }}>
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 align-middle ${cfg.dot}`} />
                        {b.firstName.split(' ')[0]}
                      </button>
                    );
                  })}
                  {dayBriefs.length > 3 && <p className="text-[9px] text-slate-400 px-1 font-medium">+{dayBriefs.length - 3} more</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-5 md:px-6 pb-5 md:pb-6 flex flex-wrap items-center gap-4">
        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Legend:</span>
        {(['scheduled', 'ongoing', 'completed'] as MeetingStatus[]).map(status => {
          const cfg = STATUS_CONFIG[status];
          return (
            <span key={status} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
              <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />{cfg.label}
            </span>
          );
        })}
        <button onClick={() => setViewMode('list')} className="ml-auto text-[10px] font-semibold text-brand-orange hover:underline cursor-pointer">Switch to List View →</button>
      </div>
    </div>
  );

  const renderListView = () => (
    <>
      {/* Status Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {(['pending', 'scheduled', 'ongoing', 'completed', 'cancelled', 'rescheduled'] as MeetingStatus[]).map(status => {
          const cfg = STATUS_CONFIG[status];
          const count = getStatusCount(status);
          const isActive = statusFilter === status;
          return (
            <button key={status} onClick={() => setStatusFilter(isActive ? 'all' : status)}
              className={`relative p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                isActive ? `${cfg.bg} border-opacity-100 shadow-md` : 'bg-white border-[#EADCD0]/30 hover:border-[#EADCD0]/60'
              }`}>
              <div className="flex items-center justify-between mb-1.5">
                <cfg.icon className={`w-4 h-4 ${cfg.color}`} />
                <span className={`text-lg font-black font-display ${cfg.color}`}>{count}</span>
              </div>
              <p className={`text-[10px] font-semibold uppercase tracking-wider ${cfg.color}`}>{cfg.label}</p>
            </button>
          );
        })}
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, company..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EADCD0]/30 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-orange transition-all" />
        </div>
        {statusFilter !== 'all' && (
          <button onClick={() => setStatusFilter('all')}
            className="px-3 py-2.5 bg-brand-beige border border-[#EADCD0]/30 rounded-xl text-xs font-semibold text-slate-500 hover:text-brand-navy transition-all flex items-center gap-1.5 cursor-pointer">
            <Filter className="w-3.5 h-3.5" />Clear Filter
          </button>
        )}
      </div>

      {/* Content */}
      {loading && briefs.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-10 h-10 border-3 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin mx-auto mb-3" />
          <p className="text-slate-500 text-sm">Loading briefs...</p>
        </div>
      ) : error && briefs.length === 0 ? (
        <div className="text-center py-20">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <p className="text-red-500 text-sm">{error}</p>
          <button onClick={fetchBriefs} className="mt-3 px-5 py-2 bg-brand-orange text-white rounded-xl text-sm font-semibold cursor-pointer">Try Again</button>
        </div>
      ) : filteredBriefs.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-14 h-14 rounded-2xl bg-brand-beige border-2 border-dashed border-[#EADCD0]/50 flex items-center justify-center mx-auto mb-3">
            <FileText className="w-7 h-7 text-slate-300" />
          </div>
          <h3 className="text-base font-bold font-display text-brand-navy mb-1">
            {statusFilter !== 'all' ? `No ${STATUS_CONFIG[statusFilter].label.toLowerCase()} briefs` : 'No briefs yet'}
          </h3>
          <p className="text-xs text-slate-500">
            {statusFilter !== 'all' ? 'Try a different filter' : 'Client brief submissions will appear here.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredBriefs.map((brief) => {
            const statusCfg = STATUS_CONFIG[brief.status];
            const StatusIcon = statusCfg.icon;
            const isExpanded = expandedId === brief.id;
            const isUpdating = updatingId === brief.id;
            const allowedTransitions = STATUS_TRANSITIONS[brief.status];

            return (
              <motion.div key={brief.id} layout
                className={`bg-white rounded-2xl border border-[#EADCD0]/30 shadow-sm overflow-hidden transition-all ${
                  isExpanded ? 'shadow-md' : 'hover:shadow-md'
                } ${isUpdating ? 'opacity-60' : ''}`}>
                
                {/* Header Row */}
                <div className="flex items-center gap-3 p-4 md:p-5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0 font-bold text-xs">
                    {brief.firstName[0]}{brief.lastName[0]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-brand-navy text-sm truncate">{brief.firstName} {brief.lastName}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusCfg.bg} ${statusCfg.color}`}>
                        <StatusIcon className="w-3 h-3" />{statusCfg.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-0.5">
                      <span className="flex items-center gap-1 text-[11px] text-slate-500"><Mail className="w-3 h-3" />{brief.email}</span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-500"><Clock className="w-3 h-3" />{formatDateShort(brief.submittedAt)}</span>
                      {brief.meetingDate && (
                        <span className="flex items-center gap-1 text-[11px] text-blue-500"><Calendar className="w-3 h-3" />{formatDateShort(brief.meetingDate)}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {allowedTransitions.slice(0, 2).map(nextStatus => {
                      const nextCfg = STATUS_CONFIG[nextStatus];
                      const NextIcon = nextCfg.icon;
                      return (
                        <button key={nextStatus} onClick={() => quickStatusUpdate(brief, nextStatus)}
                          title={`Mark as ${nextCfg.label}`}
                          className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer hover:scale-105"
                          style={{ borderColor: getStatusColor(nextStatus), color: getStatusColor(nextStatus) }}>
                          <NextIcon className="w-3 h-3" />{nextCfg.label}
                        </button>
                      );
                    })}
                    <button onClick={() => openEditModal(brief)} className="p-1.5 rounded-lg hover:bg-brand-beige text-slate-400 hover:text-brand-orange transition-all cursor-pointer" title="Manage meeting">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => toggleExpand(brief.id)} className="p-1.5 rounded-lg hover:bg-brand-beige text-slate-400 transition-all cursor-pointer">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }} className="border-t border-[#EADCD0]/20 overflow-hidden">
                      <div className="p-4 md:p-5 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-2.5">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                                <a href={`mailto:${brief.email}`} className="hover:text-brand-orange transition-colors text-sm">{brief.email}</a>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                                <a href={`tel:${brief.phone}`} className="hover:text-brand-orange transition-colors text-sm">{brief.phone}</a>
                              </div>
                              {brief.company && (
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" /><span className="text-sm">{brief.company}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2.5">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project</h4>
                            <div className="space-y-2">
                              {brief.projectType && (
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <Target className="w-4 h-4 text-slate-400 shrink-0" /><span className="text-sm">{getProjectTypeLabel(brief.projectType)}</span>
                                </div>
                              )}
                              {brief.budget && (
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <DollarSign className="w-4 h-4 text-slate-400 shrink-0" /><span className="text-sm">{getBudgetLabel(brief.budget)}</span>
                                </div>
                              )}
                              {brief.timeline && (
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" /><span className="text-sm">{brief.timeline}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {brief.goals && (
                          <div className="pt-4 border-t border-[#EADCD0]/20">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Project Goals</h4>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{brief.goals}</p>
                          </div>
                        )}
                        {brief.message && (
                          <div className="pt-4 border-t border-[#EADCD0]/20">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Additional Details</h4>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{brief.message}</p>
                          </div>
                        )}

                        <div className="pt-4 border-t border-[#EADCD0]/20">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />Meeting Details
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-[11px] font-semibold text-slate-500 w-20">Status:</span>
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusCfg.bg} ${statusCfg.color}`}>
                                <StatusIcon className="w-3 h-3" />{statusCfg.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-[11px] font-semibold text-slate-500 w-20">Date:</span>
                              <span className="text-sm text-slate-600">{brief.meetingDate ? formatDate(brief.meetingDate) : 'Not scheduled'}</span>
                            </div>
                          </div>
                          {brief.meetingNotes && (
                            <div className="mt-3 p-3 bg-brand-beige/50 rounded-xl">
                              <div className="flex items-start gap-2">
                                <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-600 whitespace-pre-wrap">{brief.meetingNotes}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="pt-4 border-t border-[#EADCD0]/20">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <History className="w-3.5 h-3.5" />Activity Log ({brief.meetingLogs?.length || 0})
                          </h4>
                          <div className="space-y-0">
                            {brief.meetingLogs && [...brief.meetingLogs].reverse().map((log, idx) => (
                              <div key={log.id} className="flex gap-3 pb-3 relative">
                                {idx < brief.meetingLogs.length - 1 && <div className="absolute left-[7px] top-5 bottom-0 w-px bg-[#EADCD0]/40" />}
                                <div className={`w-[15px] h-[15px] rounded-full border-2 shrink-0 mt-0.5 ${
                                  log.action === 'brief_submitted' ? 'border-brand-orange bg-brand-orange/20' :
                                  log.action === 'status_completed' ? 'border-green-500 bg-green-100' :
                                  log.action === 'status_cancelled' ? 'border-red-500 bg-red-100' :
                                  log.action === 'status_ongoing' ? 'border-purple-500 bg-purple-100' :
                                  log.action === 'status_rescheduled' ? 'border-orange-500 bg-orange-100' :
                                  log.action === 'meeting_scheduled' ? 'border-blue-500 bg-blue-100' :
                                  'border-slate-300 bg-slate-100'
                                }`} />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-slate-700">{log.note}</p>
                                  <p className="text-[10px] text-slate-400 mt-0.5">{formatDate(log.timestamp)}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EADCD0]/30 py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-black font-display text-brand-navy tracking-tight">Brief Admin</h1>
              <p className="text-[10px] text-slate-500">{briefs.length} submission{briefs.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-brand-beige rounded-xl border border-[#EADCD0]/30 p-0.5 mr-1">
              <button onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${viewMode === 'list' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-500 hover:text-brand-navy'}`}>
                <ListChecks className="w-3.5 h-3.5 inline mr-1" />List
              </button>
              <button onClick={() => setViewMode('calendar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${viewMode === 'calendar' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-500 hover:text-brand-navy'}`}>
                <Calendar className="w-3.5 h-3.5 inline mr-1" />Calendar
              </button>
            </div>
            <button onClick={fetchBriefs} className="px-3 py-1.5 bg-brand-beige hover:bg-[#EADCD0]/50 text-brand-navy text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 border border-[#EADCD0]/30 cursor-pointer">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />Refresh
            </button>
            <a href="/" className="px-3 py-1.5 bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
              <ExternalLink className="w-3.5 h-3.5" />Site
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'calendar' ? renderCalendarView() : renderListView()}
        </div>
      </main>

      {/* Edit Modal */}
      <AnimatePresence>
        {showEditModal && editingBrief && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowEditModal(false)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl border border-[#EADCD0]/30 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-black font-display text-brand-navy tracking-tight">Manage Meeting</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{editingBrief.firstName} {editingBrief.lastName}</p>
                </div>
                <button onClick={() => setShowEditModal(false)} className="p-1.5 rounded-lg hover:bg-brand-beige text-slate-400 hover:text-brand-navy transition-all cursor-pointer">
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 ml-1 block">Meeting Status</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['pending', 'scheduled', 'ongoing', 'completed', 'cancelled', 'rescheduled'] as MeetingStatus[]).map(status => {
                      const cfg = STATUS_CONFIG[status];
                      const Icon = cfg.icon;
                      const isSelected = editStatus === status;
                      const isAllowed = (editingBrief && STATUS_TRANSITIONS[editingBrief.status].includes(status)) || status === editingBrief.status;
                      return (
                        <button key={status} onClick={() => isAllowed && setEditStatus(status)} disabled={!isAllowed}
                          className={`flex flex-col items-center gap-1 p-2.5 rounded-xl border-2 text-center transition-all cursor-pointer ${
                            isSelected ? `${cfg.bg} border-current` : isAllowed ? 'border-[#EADCD0]/30 hover:border-[#EADCD0]/60 bg-white' : 'border-[#EADCD0]/20 bg-slate-50 opacity-40 cursor-not-allowed'
                          }`}>
                          <Icon className={`w-4 h-4 ${cfg.color}`} />
                          <span className={`text-[10px] font-semibold ${cfg.color}`}>{cfg.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 ml-1 block">Meeting Date & Time</label>
                  <input type="datetime-local" value={editMeetingDate} onChange={(e) => setEditMeetingDate(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all" />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 ml-1 block">Meeting Notes</label>
                  <textarea value={editMeetingNotes} onChange={(e) => setEditMeetingNotes(e.target.value)} rows={3}
                    placeholder="Add notes about the meeting..."
                    className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none" />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1.5 ml-1 block">Activity Log Note <span className="text-slate-300 font-normal">(optional)</span></label>
                  <input type="text" value={editNote} onChange={(e) => setEditNote(e.target.value)}
                    placeholder="e.g. Client confirmed availability"
                    className="w-full px-4 py-3 bg-brand-beige/30 border border-[#EADCD0]/60 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-orange focus:bg-white transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-6 pt-5 border-t border-[#EADCD0]/20">
                <button onClick={() => setShowEditModal(false)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-brand-beige transition-all cursor-pointer">Cancel</button>
                <button onClick={handleUpdateBrief} disabled={updatingId === editingBrief.id}
                  className="px-6 py-2.5 bg-brand-orange hover:bg-[#E05E12] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60">
                  {updatingId === editingBrief.id ? (
                    <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Saving...</>
                  ) : (
                    <><Save className="w-4 h-4" />Save Changes</>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-white border-t border-[#EADCD0]/30 py-4 px-6 text-center">
        <p className="text-[10px] text-slate-400">Brief Admin Panel &copy; {new Date().getFullYear()} Jhoeven Kent Escobal</p>
      </footer>
    </div>
  );
}