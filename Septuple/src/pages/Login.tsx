import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, CheckCircle2, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { motion } from 'motion/react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    dispatch(login({
      user: {
        id: '1',
        name: 'John Doe',
        email: email || 'john@example.com',
        organization: 'Septuple Corp'
      },
      token: 'mock_token'
    }));
    navigate('/');
  };

  const features = [
    { icon: Zap, text: 'Real-time SEO auditing' },
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Globe, text: 'Global rank tracking' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1000px] relative z-10"
      >
        <Card className="overflow-hidden flex flex-col md:flex-row shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-none rounded-[24px] min-h-[640px]">
          {/* Left Side - Brand & Features */}
          <div className="hidden md:flex w-[45%] bg-primary p-12 flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(225deg,rgba(255,255,255,0.15)_0%,transparent_100%)]" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" 
              />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-black/10"
              >
                <span className="text-primary font-black text-3xl">S</span>
              </motion.div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-black text-white mb-6 tracking-tight"
              >
                Septuple
              </motion.h1>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-primary-foreground/90 text-xl font-medium leading-relaxed mb-12"
              >
                The next generation of <br />
                <span className="text-white font-bold underline decoration-white/30 underline-offset-8">SEO Intelligence.</span>
              </motion.p>

              <div className="space-y-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80 font-semibold group-hover:text-white transition-colors">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-12 border-t border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium">Trusted by 2,000+ teams</span>
              </div>
              <p className="text-primary-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                © 2026 Septuple Inc.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-[55%] bg-white p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Welcome back</h2>
                <p className="text-slate-500 text-base">Enter your credentials to access your dashboard.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="pl-12 h-12 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl bg-slate-50/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Password</label>
                    <Link to="/forgot-password" title="Forgot password?" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pl-12 pr-12 h-12 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl bg-slate-50/50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 py-1">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe} 
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor="remember" className="text-sm font-semibold text-slate-600 cursor-pointer select-none">
                    Keep me signed in
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button type="submit" className="h-12 text-sm font-black bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-xl transition-all active:scale-[0.98]">
                    Sign in
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setEmail('demo@septuple.com');
                      setPassword('password123');
                      setTimeout(() => {
                        dispatch(login({
                          user: {
                            id: 'demo-user',
                            name: 'Demo User',
                            email: 'demo@septuple.com',
                            organization: 'Demo Org'
                          },
                          token: 'demo_token'
                        }));
                        navigate('/');
                      }, 600);
                    }}
                    className="h-12 text-sm font-black border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Demo Login
                  </Button>
                </div>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                    <span className="bg-white px-4 text-slate-400 font-bold">or continue with</span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full h-12 flex items-center justify-center space-x-3 border-slate-200 hover:bg-slate-50 rounded-xl font-black text-slate-700 transition-all active:scale-[0.98]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span>Google</span>
                </Button>
              </form>

              <p className="mt-10 text-center text-sm text-slate-500 font-medium">
                Don't have an account?{' '}
                <Link to="/register" className="font-black text-primary hover:underline underline-offset-4">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
