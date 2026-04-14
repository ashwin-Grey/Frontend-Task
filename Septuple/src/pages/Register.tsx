import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building2, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length > 6) strength += 33;
    if (/[A-Z]/.test(pass)) strength += 33;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) strength += 34;
    return strength;
  };

  const strength = getPasswordStrength(password);
  const strengthColor = strength <= 33 ? 'bg-red-500' : strength <= 66 ? 'bg-amber-500' : 'bg-emerald-500';
  const strengthLabel = strength <= 33 ? 'Weak' : strength <= 66 ? 'Fair' : 'Strong';

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({
      user: {
        id: '1',
        name: 'New User',
        email: 'user@example.com',
        organization: 'New Org'
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
        <Card className="overflow-hidden flex flex-col md:flex-row shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-none rounded-[24px] min-h-[700px]">
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
                Start your journey with <br />
                <span className="text-white font-bold underline decoration-white/30 underline-offset-8">SEO Excellence.</span>
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
              <p className="text-primary-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                © 2026 Septuple Inc.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-[55%] bg-white p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Create account</h2>
                <p className="text-slate-500 text-base">Join Septuple and start auditing today.</p>
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      placeholder="John Doe" 
                      className="pl-12 h-12 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl bg-slate-50/50"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="pl-12 h-12 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl bg-slate-50/50"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Organization Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                      placeholder="Acme Inc" 
                      className="pl-12 h-12 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-xl bg-slate-50/50"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">Password</label>
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
                  {password && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2 pt-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Strength: {strengthLabel}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${strength}%` }}
                          className={cn("h-full transition-all duration-300", strengthColor)} 
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox 
                    id="terms" 
                    required 
                    className="mt-0.5 border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed font-medium">
                    I agree to the <Link to="/terms" className="text-primary font-bold hover:underline underline-offset-2">Terms of Service</Link> and <Link to="/privacy" className="text-primary font-bold hover:underline underline-offset-2">Privacy Policy</Link>.
                  </label>
                </div>

                <Button type="submit" className="w-full h-12 text-sm font-black bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-xl transition-all active:scale-[0.98] mt-4">
                  Create account
                </Button>
              </form>

              <p className="mt-10 text-center text-sm text-slate-500 font-medium">
                Already have an account?{' '}
                <Link to="/login" className="font-black text-primary hover:underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
