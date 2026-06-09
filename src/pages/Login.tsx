import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft, Loader2, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success('Login efetuado com sucesso!');
      navigate('/admin/eventos');
    } catch (error: any) {
      console.error('Error logging in:', error);
      toast.error(error.message || 'Erro ao realizar login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decoração de Fundo Simples */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange-light/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="w-full max-w-md z-10 relative">
        <Link to="/" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 w-fit mx-auto">
          <ArrowLeft size={16} />
          Voltar ao site
        </Link>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-black/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
              <Lock className="text-brand-gold" size={32} />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl text-white mb-2 tracking-wide">
              Área <span className="text-brand-gold">Admin</span>
            </h1>
            <p className="text-white/60 font-inter text-sm">
              Acesso restrito para gerenciamento de eventos.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-white/80 font-inter text-sm font-medium">E-mail</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 font-inter text-sm font-medium">Senha</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-gold hover:bg-brand-orange-light text-brand-black font-semibold text-base py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-lg shadow-brand-gold/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Entrando...
                </>
              ) : (
                'Acessar Painel'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
