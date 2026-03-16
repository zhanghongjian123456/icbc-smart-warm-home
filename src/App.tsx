/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Activity, 
  Heart, 
  Coffee, 
  BookOpen, 
  Send, 
  ArrowLeft, 
  Music,
  Wind,
  Baby,
  Sparkles,
  ShoppingBag,
  Utensils,
  Headphones,
  Library,
  Star,
  MessageSquare,
  Calendar,
  ShieldCheck,
  Search,
  BarChart2,
  PieChart,
  Users,
  Map,
  Settings,
  Layout,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

type Theme = 'pink' | 'yellow' | 'green' | 'blue';
type Page = 'main' | 'energy' | 'healing' | 'life' | 'learning' | 'baby' | 'admin';

export default function App() {
  const [theme, setTheme] = useState<Theme>('pink');
  const [page, setPage] = useState<Page>('main');
  const [showHearts, setShowHearts] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showIpImage, setShowIpImage] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "今天也要加油呀！",
    "暖暖的，每一天！",
    "你是最棒的！",
    "保持微笑，好运常在。",
    "心怀暖意，向光而行。"
  ];

  const themes: Theme[] = ['pink', 'yellow', 'green', 'blue'];

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    document.body.className = `min-h-screen theme-${theme}`;
  }, [theme]);

  const isGreen = theme === 'green';

  return (
    <div className="min-h-screen bg-[var(--body-bg)] transition-colors duration-1000">
      {/* Main Content Container - Full Screen */}
      <div 
        id="appShell"
        className="w-full min-h-screen relative overflow-x-hidden"
      >
          {/* Status Bar Spacer - for notched phones */}
          <div className="safe-area-top"></div>
          
          <AnimatePresence mode="wait">
        {page === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="min-h-screen pb-32 p-6 space-y-4 overflow-y-auto"
          >
            {/* Header */}
            <header className="flex justify-between items-center pt-6">
              <div className="text-left">
                <img 
                  src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E6%96%87%E5%AD%97.png" 
                  alt="工银智慧温暖家" 
                  className="h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <button 
                onClick={toggleTheme} 
                className="w-10 h-10 theme-bg-soft border theme-border rounded-full flex items-center justify-center shadow-sm shrink-0 active:scale-90 transition-all group overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-0.5 group-hover:rotate-180 transition-transform duration-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF8BA7]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#89CFF0]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E2FF54]"></div>
                </div>
              </button>
            </header>

            {/* IP Display Area */}
            <div className="relative h-48 w-full group">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden border theme-border theme-bg-soft smooth-transition">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <AnimatePresence mode="wait">
                    {showIpImage ? (
                      <motion.img 
                        key="ip-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E4%B8%BB%E8%A7%86%E8%A7%89.png" 
                        alt="IP" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain translate-y-1 transition-transform group-hover:scale-125 duration-1000"
                      />
                    ) : (
                      <motion.div
                        key="ip-message"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center px-8"
                      >
                        <p className="text-xl font-bold brand-text leading-relaxed italic">
                          {messages[messageIndex]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
                  <div className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-sm">
                    <button 
                      onClick={() => {
                        if (showIpImage) {
                          setShowIpImage(false);
                          setMessageIndex(0);
                        } else {
                          setMessageIndex((prev) => (prev + 1) % messages.length);
                        }
                      }}
                      className={`text-[10px] font-black italic tracking-tighter transition-all active:scale-90 ${!showIpImage ? 'brand-text' : 'text-gray-400'}`}
                    >
                      HEART-LAB
                    </button>
                    <div className="h-3 w-[1px] bg-gray-500/30"></div>
                    <button 
                      onClick={() => setShowIpImage(true)}
                      className={`text-[9px] font-bold tracking-widest uppercase transition-all active:scale-90 ${showIpImage ? (isGreen ? 'text-white' : 'text-gray-800') : 'text-gray-400'}`}
                    >
                      Soul Master
                    </button>
                  </div>
                  <button className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center border-4 border-[var(--body-bg)] brand-bg smooth-transition">
                    <Plus className="text-white" size={20} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div 
                  onClick={() => setPage('energy')} 
                  className={`w-[45%] h-32 p-4 rounded-[32px] flex flex-col justify-between items-start transition-all active:scale-95 cursor-pointer border ${isGreen ? 'bg-[#18181b] border-[#27272a] text-white' : 'theme-bg-soft theme-border text-black'}`}
                >
                  <div className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center">
                    <Activity size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] uppercase font-black tracking-[0.15em] opacity-40 mb-1">Energy</p>
                    <span className="text-sm font-black tracking-tight">暖暖能量站</span>
                  </div>
                </div>
                <div 
                  onClick={() => setPage('healing')} 
                  className="w-[55%] h-32 brand-bg p-4 rounded-[32px] flex flex-col justify-between items-start transition-all active:scale-95 cursor-pointer text-white shadow-lg"
                >
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] uppercase font-black tracking-[0.15em] opacity-60 mb-1">Healing</p>
                    <span className="text-sm font-black tracking-tight">暖暖疗愈所</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div 
                  onClick={() => setPage('life')}
                  className={`w-1/2 h-28 p-4 rounded-[32px] flex flex-col justify-between items-start transition-all active:scale-95 cursor-pointer border ${isGreen ? 'bg-[#18181b] border-[#27272a] text-white' : 'theme-bg-soft theme-border text-black'}`}
                >
                  <div className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center">
                    <Coffee size={18} />
                  </div>
                  <span className="text-sm font-black tracking-tight">暖心生活家</span>
                </div>
                <div 
                  onClick={() => setPage('learning')}
                  className={`w-1/2 h-28 p-4 rounded-[32px] flex flex-col justify-between items-start transition-all active:scale-95 cursor-pointer ${isGreen ? 'bg-[#27272a] text-white' : 'bg-[#F5F5F0] text-black'}`}
                >
                  <div className="w-9 h-9 bg-black/5 rounded-full flex items-center justify-center">
                    <BookOpen size={18} />
                  </div>
                  <span className="text-sm font-black tracking-tight">暖暖研学社</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div 
                  onClick={() => setPage('baby')}
                  className={`w-full h-24 p-4 rounded-[32px] flex items-center justify-between transition-all active:scale-95 cursor-pointer border ${isGreen ? 'bg-[#18181b] border-[#27272a] text-white' : 'theme-bg-soft theme-border text-black'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                      <Baby size={24} />
                    </div>
                    <span className="text-base font-black tracking-tight">暖暖宝贝屋</span>
                  </div>
                  <Plus size={20} className="opacity-20" />
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            {/* Bottom Navigation - Fixed Position */}
            <div 
              className="fixed bottom-0 left-0 right-0 flex items-end justify-center px-6 pb-6 z-50 pointer-events-none"
            >
              <div 
                className="w-full max-w-md h-20 rounded-full flex items-center px-2 justify-between shadow-2xl transition-colors duration-700 pointer-events-auto mb-[env(safe-area-inset-bottom,0px)]"
                style={{ backgroundColor: isGreen ? '#27272a' : 'black' }}
              >
              <div className="flex items-center gap-3 ml-2">
                <div 
                  onClick={() => setPage('admin')}
                  className="w-12 h-12 bg-white rounded-full overflow-hidden border-2 shrink-0 smooth-transition cursor-pointer active:scale-90" 
                  style={{ borderColor: 'var(--brand)' }}
                >
                  <img 
                    src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E4%B8%BB%E8%A7%86%E8%A7%89.png" 
                    className="w-full h-full object-cover scale-[1.8] translate-y-1"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-white font-bold text-sm tracking-tight truncate">暖暖</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] truncate">Customer Manager</p>
                </div>
              </div>
              <div className="flex gap-1.5 mr-2 shrink-0">
                <button className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white">
                  <Send size={18} />
                </button>
                <button className={`px-5 h-14 rounded-full flex items-center justify-center font-black text-[10px] tracking-widest uppercase brand-bg transition-colors ${isGreen ? 'text-black' : 'text-white'}`}>
                  Profile
                </button>
              </div>
                </div>
              </div>
          </motion.div>
        )}

        {page === 'energy' && (
          <motion.div
            key="energy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full no-scrollbar p-8 pt-16 overflow-y-auto relative"
          >
            {/* Decorative IP Pattern */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-12 right-0 w-48 h-48 z-0 pointer-events-none"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E8%BF%90%E5%8A%A8.png" 
                alt="Energy IP" 
                className="w-full h-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <button 
              onClick={() => setPage('main')} 
              className={`mb-10 w-12 h-12 border rounded-full flex items-center justify-center active:scale-90 shadow-sm transition-colors relative z-10 ${isGreen ? 'bg-zinc-900 border-zinc-700 text-white' : 'theme-bg-soft theme-border text-black'}`}
            >
              <ArrowLeft size={18} />
            </button>
            <div className="relative z-10">
              <h2 className={`text-4xl font-serif italic mb-2 leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>能量状态 <br/><span className="text-2xl opacity-40">Energy Status</span></h2>
              <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-8">暖暖能量站</p>
            </div>
            
            <div className="space-y-6">
              <div className={`p-8 rounded-[48px] space-y-4 ${isGreen ? 'bg-zinc-900' : 'theme-bg-soft'}`}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Latest Metrics</p>
                <div className="flex items-end gap-2">
                  <span className={`text-6xl font-black italic ${isGreen ? 'text-[#E2FF54]' : ''}`}>72</span>
                  <span className="text-xl font-serif text-gray-400 mb-2">bpm</span>
                </div>
                <p className="text-sm font-bold text-gray-400">静息心率 · 表现极佳</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-black rounded-[40px] text-white h-44 flex flex-col justify-between border border-zinc-800">
                  <Cpu size={28} color="#E2FF54" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">AI Mirror</p>
                    <p className="text-lg font-bold leading-tight text-[#E2FF54]">AI 健身镜</p>
                  </div>
                </div>
                <div className={`p-6 rounded-[40px] h-44 flex flex-col justify-between border theme-bg-soft theme-border`}>
                  <Wind size={28} className="brand-text" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Air Quality</p>
                    <p className={`text-lg font-bold leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>空气管家</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {page === 'healing' && (
          <motion.div
            key="healing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full no-scrollbar p-8 pt-16 overflow-y-auto relative"
          >
            <button 
              onClick={() => setPage('main')} 
              className={`mb-10 w-12 h-12 border rounded-full flex items-center justify-center active:scale-90 shadow-sm transition-colors ${isGreen ? 'bg-zinc-900 border-zinc-700 text-white' : 'theme-bg-soft theme-border text-black'}`}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className={`text-4xl font-serif italic mb-2 leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>暖暖疗愈</h2>
            <p className="text-[10px] font-black tracking-[0.2em] brand-text uppercase mb-8">你的专属情感树洞</p>
            
            <div className="space-y-6 relative z-10">
              <div className={`p-10 rounded-[56px] shadow-sm text-center border ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E5%BF%83%E6%83%851.png" 
                    alt="Mood" 
                    className="w-24 h-24 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className={`text-4xl font-black italic ${isGreen ? 'text-white' : 'text-black'}`}>88</p>
                <p className="text-sm font-bold text-gray-400 mt-2">今日心情指数：极佳</p>
              </div>
              
              <div className="space-y-4">
                <div className={`p-6 rounded-[40px] flex items-center gap-4 border ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Music size={20} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>白噪音冥想</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">15 Mins</p>
                  </div>
                </div>

                <div className={`p-6 rounded-[40px] flex items-center gap-4 border ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Activity size={20} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>今日正念</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">10 Mins</p>
                  </div>
                </div>

                <div className={`p-6 rounded-[40px] flex items-center gap-4 border ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Wind size={20} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>智能香氛机</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Running</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative IP Pattern - Moved to Top Right and Clickable */}
            <motion.div 
              onClick={() => setShowHearts(!showHearts)}
              whileTap={{ scale: 0.9 }}
              className="absolute top-12 right-2 w-44 h-44 cursor-pointer z-50 group"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E7%96%97%E6%84%88.png" 
                alt="Decorative IP" 
                className="w-full h-full object-contain drop-shadow-lg group-hover:rotate-6 transition-transform"
                referrerPolicy="no-referrer"
              />
              {showHearts && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
              )}
            </motion.div>

            {/* Floating Hearts Effect */}
            <AnimatePresence>
              {showHearts && (
                <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 0, 
                        y: 800, 
                        x: Math.random() * 350,
                        scale: 0.5 + Math.random() * 0.5
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: -100,
                        x: (Math.random() - 0.5) * 100 + (Math.random() * 350)
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: "easeOut"
                      }}
                      className="absolute text-2xl"
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {page === 'life' && (
          <motion.div
            key="life"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full no-scrollbar p-8 pt-16 overflow-y-auto relative"
          >
            <button 
              onClick={() => setPage('main')} 
              className={`mb-10 w-12 h-12 border rounded-full flex items-center justify-center active:scale-90 shadow-sm transition-colors ${isGreen ? 'bg-zinc-900 border-zinc-700 text-white' : 'theme-bg-soft theme-border text-black'}`}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className={`text-4xl font-serif italic mb-2 leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>暖心生活 <br/><span className="text-2xl opacity-40">Warm Life</span></h2>
            <p className="text-[10px] font-black tracking-[0.2em] brand-text uppercase mb-8">暖心生活家</p>
            
            <div className="space-y-6 relative z-10">
              <div className={`p-8 rounded-[48px] space-y-6 border ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Sparkles size={24} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-base font-bold ${isGreen ? 'text-white' : 'text-black'}`}>养生小贴士</p>
                    <p className="text-xs text-gray-400">春季养肝，宜食辛甘发散之品</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-500/10"></div>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Coffee size={24} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-base font-bold ${isGreen ? 'text-white' : 'text-black'}`}>今日茶饮</p>
                    <p className="text-xs text-gray-400">玫瑰薄荷茶 · 疏肝理气</p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-500/10"></div>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <ShoppingBag size={24} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-base font-bold ${isGreen ? 'text-white' : 'text-black'}`}>智能货柜</p>
                    <p className="text-xs text-gray-400">补货中 · 预计 10:00 完成</p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-[40px] border flex items-center justify-between ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'bg-white theme-border'}`}>
                <div className="flex items-center gap-3">
                  <Utensils size={20} className="brand-text" />
                  <span className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>膳食建议</span>
                </div>
                <Plus size={18} className="opacity-20" />
              </div>
            </div>

            {/* Decorative IP Pattern */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-12 right-0 w-48 h-48 z-0 pointer-events-none"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E7%94%9F%E6%B4%BB.png" 
                alt="Life IP" 
                className="w-full h-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              className="absolute top-12 right-2 w-40 h-40 z-[-1] opacity-20 pointer-events-none"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E6%96%87%E5%AD%97.png" 
                alt="Decorative IP" 
                className="w-full h-full object-contain grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}

        {page === 'learning' && (
          <motion.div
            key="learning"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full no-scrollbar p-8 pt-16 overflow-y-auto relative"
          >
            <button 
              onClick={() => setPage('main')} 
              className={`mb-10 w-12 h-12 border rounded-full flex items-center justify-center active:scale-90 shadow-sm transition-colors ${isGreen ? 'bg-zinc-900 border-zinc-700 text-white' : 'theme-bg-soft theme-border text-black'}`}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className={`text-4xl font-serif italic mb-2 leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>暖暖研学社 <br/><span className="text-2xl opacity-40">Learning Club</span></h2>
            <p className="text-[10px] font-black tracking-[0.2em] brand-text uppercase mb-8">知识赋能温暖家</p>
            
            <div className="space-y-8 relative z-10">
              {/* Search Bar for Learning Recommendation */}
              <div className={`relative group transition-all`}>
                <div className={`absolute left-5 top-1/2 -translate-y-1/2 ${isGreen ? 'text-white/40' : 'text-gray-400'}`}>
                  <Search size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="搜索学习推荐内容..."
                  className={`w-full h-14 pl-14 pr-6 rounded-2xl border outline-none transition-all ${isGreen ? 'bg-zinc-900 border-zinc-800 text-white focus:border-[#E2FF54]/50' : 'bg-white border-gray-100 text-black focus:border-[#FF8BA7]/50 shadow-sm'}`}
                />
              </div>

              {/* Bookshelf for Financial Knowledge Books */}
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <h3 className={`text-lg font-bold ${isGreen ? 'text-white' : 'text-black'}`}>金融知识书籍</h3>
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Bookshelf</span>
                </div>
                <div className={`p-6 rounded-[40px] border flex gap-4 overflow-x-auto no-scrollbar ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  {[
                    { title: '聪明的投资者', seed: 'invest' },
                    { title: '富爸爸穷爸爸', seed: 'rich' },
                    { title: '金融炼金术', seed: 'finance' },
                    { title: '小狗钱钱', seed: 'money' },
                    { title: '巴菲特信', seed: 'warren' }
                  ].map((book, i) => (
                    <div key={i} className="flex-shrink-0 w-28 space-y-3 group cursor-pointer">
                      <div className={`h-36 rounded-xl shadow-md transition-transform group-hover:-translate-y-2 ${isGreen ? 'bg-zinc-800' : 'bg-white'} flex items-center justify-center overflow-hidden relative`}>
                        <img 
                          src={`https://picsum.photos/seed/${book.seed}/200/300`} 
                          alt={book.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 brand-bg"></div>
                      </div>
                      <p className={`text-[11px] font-bold text-center truncate px-1 ${isGreen ? 'text-white' : 'text-black'}`}>{book.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Cards for Audio Books and Q&A */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-5 rounded-[32px] border flex flex-col justify-between h-32 transition-all active:scale-95 cursor-pointer ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Headphones size={18} className="brand-text" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>有声听书</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">Audio Books</p>
                  </div>
                </div>
                <div className={`p-5 rounded-[32px] border flex flex-col justify-between h-32 transition-all active:scale-95 cursor-pointer ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <MessageSquare size={18} className="brand-text" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>党建知识问答</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">Q&A Session</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative IP Pattern - Top Layer and Original Color */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute top-12 right-0 w-44 h-44 z-[100] pointer-events-none"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E6%80%9D%E8%80%83.png" 
                alt="Learning IP" 
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}

        {page === 'baby' && (
          <motion.div
            key="baby"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full no-scrollbar p-8 pt-16 overflow-y-auto relative"
          >
            <button 
              onClick={() => setPage('main')} 
              className={`mb-10 w-12 h-12 border rounded-full flex items-center justify-center active:scale-90 shadow-sm transition-colors ${isGreen ? 'bg-zinc-900 border-zinc-700 text-white' : 'theme-bg-soft theme-border text-black'}`}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className={`text-4xl font-serif italic mb-2 leading-tight ${isGreen ? 'text-white' : 'text-black'}`}>暖暖宝贝屋 <br/><span className="text-2xl opacity-40">Baby Room</span></h2>
            <p className="text-[10px] font-black tracking-[0.2em] brand-text uppercase mb-8">贴心守护每一刻</p>
            
            <div className="space-y-4 relative z-10">
              <div className={`p-6 rounded-[40px] flex items-center justify-between border transition-all active:scale-[0.98] cursor-pointer ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <Calendar size={20} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>母婴室预约</p>
                    <p className="text-[10px] text-gray-400">提前锁定温馨私密空间</p>
                  </div>
                </div>
                <Plus size={18} className="opacity-20" />
              </div>

              <div className={`p-6 rounded-[40px] flex items-center justify-between border transition-all active:scale-[0.98] cursor-pointer ${isGreen ? 'bg-zinc-900 border-zinc-800' : 'theme-bg-soft theme-border'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-white/5' : 'bg-black/5'}`}>
                    <ShieldCheck size={20} className="brand-text" />
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-bold ${isGreen ? 'text-white' : 'text-black'}`}>贴心呵护</p>
                    <p className="text-[10px] text-gray-400">全方位的育儿辅助支持</p>
                  </div>
                </div>
                <Plus size={18} className="opacity-20" />
              </div>
            </div>

            {/* Decorative IP Pattern */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-12 right-0 w-48 h-48 z-0 pointer-events-none"
            >
              <img 
                src="https://raw.githubusercontent.com/Harrian-moo/design-assets/main/images/ip/%E4%B8%BB%E8%A7%86%E8%A7%89.png" 
                alt="Baby IP" 
                className="w-full h-full object-contain drop-shadow-xl opacity-20"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}

        {page === 'admin' && (
          <motion.div
            key="admin"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full no-scrollbar p-6 pt-12 overflow-y-auto relative bg-white text-black"
          >
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => setPage('main')} 
                className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center active:scale-90 transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <div className="text-right">
                <h2 className="text-xl font-bold tracking-tight">工银幸福云平台</h2>
                <p className="text-[9px] font-black tracking-[0.2em] text-[#E60012] uppercase">Happiness Cloud Platform</p>
              </div>
            </div>

            {/* Data Dashboard */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <Layout size={14} className="text-[#E60012]" />
                  数据看板
                </h3>
                <span className="text-[10px] opacity-40 font-mono">LIVE MONITORING</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Online Users */}
                <div className="bg-black/[0.02] border border-black/[0.05] rounded-3xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Users size={16} />
                  </div>
                  <p className="text-[10px] text-black/40 mb-1">在线人数</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-mono font-bold">1,284</span>
                    <span className="text-[10px] text-[#E60012] mb-1 flex items-center gap-0.5">
                      <TrendingUp size={10} /> +12%
                    </span>
                  </div>
                  <div className="mt-4 h-12 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[
                        {v: 400}, {v: 600}, {v: 500}, {v: 800}, {v: 700}, {v: 1100}, {v: 1284}
                      ]}>
                        <Line type="monotone" dataKey="v" stroke="#E60012" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Employee Emotion Cloud Map (Radar Chart) */}
                <div className="bg-black/[0.02] border border-black/[0.05] rounded-3xl p-5 relative overflow-hidden">
                  <p className="text-[10px] text-black/40 mb-1">职工情绪云图</p>
                  <div className="h-24 w-full mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                        { subject: '开心', A: 120 },
                        { subject: '平静', A: 98 },
                        { subject: '压力', A: 86 },
                        { subject: '疲劳', A: 99 },
                        { subject: '兴奋', A: 85 },
                      ]}>
                        <PolarGrid stroke="rgba(0,0,0,0.05)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 8 }} />
                        <Radar name="Emotion" dataKey="A" stroke="#E60012" fill="#E60012" fillOpacity={0.5} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Satisfaction Trend Chart */}
              <div className="bg-black/[0.02] border border-black/[0.05] rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[10px] text-black/40 uppercase tracking-widest">职工满意度趋势图</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E60012]"></div>
                    <div className="w-2 h-2 rounded-full bg-black/10"></div>
                  </div>
                </div>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Jan', val: 85 },
                      { name: 'Feb', val: 88 },
                      { name: 'Mar', val: 92 },
                      { name: 'Apr', val: 90 },
                      { name: 'May', val: 95 },
                      { name: 'Jun', val: 98 },
                    ]}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(0,0,0,0.3)', fontSize: 10 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}
                        itemStyle={{ color: '#E60012' }}
                      />
                      <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                        { [85, 88, 92, 90, 95, 98].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 5 ? '#E60012' : 'rgba(0,0,0,0.05)'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Equipment Panoramic Map */}
              <div className="bg-black/[0.02] border border-black/[0.05] rounded-3xl p-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] text-black/40 uppercase tracking-widest">设备全景地图</p>
                  <Map size={14} className="text-black/20" />
                </div>
                <div className="aspect-video bg-black/[0.02] rounded-2xl relative flex items-center justify-center border border-black/[0.05]">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative">
                    <div className="w-32 h-20 border border-[#E60012]/30 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#E60012] rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute -top-4 -left-4 w-2 h-2 bg-black/20 rounded-full"></div>
                    <div className="absolute -bottom-2 -right-6 w-2 h-2 bg-black/20 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    <div className="w-8 h-1 bg-[#E60012] rounded-full"></div>
                    <div className="w-4 h-1 bg-black/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Function Cards */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              <div className="bg-black/[0.02] border border-black/[0.05] rounded-[32px] p-4 flex flex-col items-center justify-center text-center gap-3 transition-all active:scale-95 cursor-pointer hover:bg-black/[0.05]">
                <div className="w-10 h-10 rounded-full bg-[#E60012]/10 flex items-center justify-center text-[#E60012]">
                  <Cpu size={18} />
                </div>
                <span className="text-[10px] font-bold leading-tight">设备一键管理</span>
              </div>
              <div className="bg-black/[0.02] border border-black/[0.05] rounded-[32px] p-4 flex flex-col items-center justify-center text-center gap-3 transition-all active:scale-95 cursor-pointer hover:bg-black/[0.05]">
                <div className="w-10 h-10 rounded-full bg-[#FF8BA7]/10 flex items-center justify-center text-[#FF8BA7]">
                  <Calendar size={18} />
                </div>
                <span className="text-[10px] font-bold leading-tight">活动发布</span>
              </div>
              <div className="bg-black/[0.02] border border-black/[0.05] rounded-[32px] p-4 flex flex-col items-center justify-center text-center gap-3 transition-all active:scale-95 cursor-pointer hover:bg-black/[0.05]">
                <div className="w-10 h-10 rounded-full bg-[#89CFF0]/10 flex items-center justify-center text-[#89CFF0]">
                  <Send size={18} />
                </div>
                <span className="text-[10px] font-bold leading-tight">内容推送</span>
              </div>
            </div>

            {/* Search Box / Report Generation */}
            <div className="relative mb-12">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E60012]">
                <BarChart2 size={18} />
              </div>
              <input 
                type="text" 
                readOnly
                placeholder="一键生成数据报告"
                className="w-full h-16 pl-14 pr-6 rounded-full bg-black/[0.02] border border-black/[0.05] text-sm outline-none cursor-pointer hover:bg-black/[0.05] transition-all text-black/60"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full brand-bg flex items-center justify-center">
                <Plus size={16} className="text-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor - Hidden on mobile */}
      <motion.div
        className="hidden md:block absolute pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePos.x - 7,
          y: mousePos.y - 7,
          scale: isClicked ? 1.4 : (isHovering ? 1 : 0),
          opacity: isHovering ? 0.9 : 0,
        }}
        transition={{ 
          type: 'spring', 
          damping: 25, 
          stiffness: 250, 
          mass: 0.5
        }}
        style={{
          width: '14px',
          height: '14px',
          left: 0,
          top: 0,
        }}
      />
      </div>
    </div>
  );
}
