import { useState } from 'react';
import { motion } from 'motion/react';
import { Landmark, DollarSign, Heart, Users, ArrowRight, Cpu, Database, Terminal, Code } from 'lucide-react';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  const advantages = [
    {
      icon: Landmark,
      emoji: '🏛️',
      title: 'Chính sách Sandbox',
      description: 'Đà Nẵng đang thí điểm cơ chế đặc thù cho AI, fintech, blockchain'
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Chi phí tối ưu',
      description: 'Vận hành thấp hơn 40-50% so với TP.HCM và Hà Nội'
    },
    {
      icon: Heart,
      emoji: '🌊',
      title: 'Chất lượng sống',
      description: 'Thành phố đáng sống, thu hút và giữ chân nhân tài tech'
    },
    {
      icon: Users,
      emoji: '🤝',
      title: 'Hệ sinh thái',
      description: 'Kết nối trực tiếp với chính quyền, đại học, và cộng đồng startup'
    }
  ];

  const targetAudience = [
    'Startup AI/Blockchain đang tìm môi trường thử nghiệm',
    'Công ty công nghệ muốn R&D tại Việt Nam',
    'Team quốc tế cần base tại Đông Nam Á',
    'Doanh nghiệp muốn pilot giải pháp AI trong khuôn khổ sandbox'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ff88 1px, transparent 1px),
              linear-gradient(to bottom, #00ff88 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Neon geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-2 border-cyan-400"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-96 h-96 border-2 border-purple-500/30"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32 md:py-48 min-h-screen flex items-center">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 border border-emerald-400/50 bg-emerald-400/5">
                    <div className="w-2 h-2 bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-mono uppercase tracking-wider">System Online</span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-7xl md:text-8xl font-black mb-4 tracking-tight"
                >
                  <span className="text-white">DAB</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">-Lab</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-3 mb-8"
                >
                  <p className="text-2xl text-slate-300 font-light">
                    Da Nang AI & Blockchain Lab
                  </p>
                  <div className="h-px bg-gradient-to-r from-emerald-400 via-transparent to-transparent w-3/4" />
                  <p className="text-slate-400 leading-relaxed max-w-xl">
                    Không gian nghiên cứu và phát triển đặt tại Trung tâm Phần mềm Đà Nẵng — hub công nghệ năng động nhất miền Trung Việt Nam
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex gap-4"
                >
                  <Button className="bg-emerald-400 text-black hover:bg-emerald-300 font-bold px-8 h-12 group">
                    Khám phá
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 h-12">
                    Liên hệ
                  </Button>
                </motion.div>
              </div>

              {/* Right Column - Tech Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-[500px]">
                  {/* Central core */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full border-2 border-emerald-400 bg-emerald-400/10 backdrop-blur flex items-center justify-center">
                      <Cpu className="w-16 h-16 text-emerald-400" />
                    </div>
                  </motion.div>

                  {/* Orbiting icons */}
                  {[
                    { icon: Database, angle: 0, distance: 150, color: 'cyan' },
                    { icon: Terminal, angle: 90, distance: 150, color: 'purple' },
                    { icon: Code, angle: 180, distance: 150, color: 'emerald' },
                    { icon: Cpu, angle: 270, distance: 150, color: 'pink' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        marginLeft: -20,
                        marginTop: -20,
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(${item.angle}deg) translateX(${item.distance}px) rotate(-${item.angle}deg)`,
                        }}
                        className={`w-10 h-10 border border-${item.color}-400 bg-black flex items-center justify-center`}
                      >
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                    </motion.div>
                  ))}

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[0, 90, 180, 270].map((angle, i) => (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="50%"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5
                        }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Operating Model */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="border-l-4 border-emerald-400 pl-8 mb-16">
              <h2 className="text-5xl font-black mb-2">Mô hình hoạt động</h2>
              <div className="text-emerald-400 font-mono text-sm">/ OPERATION_MODEL</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                'Các công ty tham gia theo dạng project-based',
                'Được hưởng chính sách sandbox của thành phố về AI và công nghệ mới',
                'Môi trường thử nghiệm linh hoạt, giảm rào cản pháp lý'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  <div className="relative bg-black border border-slate-700 p-8 h-full">
                    <div className="font-mono text-emerald-400 text-4xl font-bold mb-4">
                      0{index + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Advantages */}
        <section className="container mx-auto px-6 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="border-l-4 border-cyan-400 pl-8 mb-16">
              <h2 className="text-5xl font-black mb-2">Tại sao chọn DAB-Lab?</h2>
              <div className="text-cyan-400 font-mono text-sm">/ ADVANTAGES</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  <div className="absolute -top-4 -left-4 text-8xl opacity-5 font-black select-none">
                    {advantage.emoji}
                  </div>
                  <div className="relative border-2 border-slate-800 hover:border-cyan-400 transition-colors p-8 bg-gradient-to-br from-slate-900/50 to-black h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 border border-cyan-400/50 bg-cyan-400/5">
                        <advantage.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{advantage.title}</h3>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent mb-3" />
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed pl-16">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Target Audience */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="border-l-4 border-purple-400 pl-8 mb-16">
              <h2 className="text-5xl font-black mb-2">Dành cho ai?</h2>
              <div className="text-purple-400 font-mono text-sm">/ TARGET_AUDIENCE</div>
            </div>

            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-6 p-6 border-l-2 border-slate-800 hover:border-purple-400 hover:bg-purple-400/5 transition-all"
                >
                  <div className="font-mono text-purple-400 text-xl font-bold mt-1 min-w-[40px]">
                    [{index + 1}]
                  </div>
                  <p className="text-slate-300 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative border-4 border-emerald-400 p-12 bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-purple-500/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white -m-1" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white -m-1" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white -m-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white -m-1" />

              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Sẵn sàng build cùng DAB-Lab?
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-6" />
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Đăng ký tham quan Lab hoặc đặt lịch trao đổi. Cùng xây dựng tương lai AI tại Đà Nẵng.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="your.email@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-black border-2 border-slate-700 focus:border-emerald-400 h-14 text-white placeholder:text-slate-600 font-mono"
                    />
                    <Button
                      type="submit"
                      className="bg-emerald-400 text-black hover:bg-emerald-300 font-bold h-14 px-10 group"
                    >
                      SUBMIT
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-4 border-2 border-emerald-400 bg-emerald-400/10">
                    <div className="w-3 h-3 bg-emerald-400 animate-pulse" />
                    <p className="text-emerald-400 font-mono font-bold">REGISTRATION SUCCESSFUL</p>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16 border-t border-slate-800">
          <div className="text-center">
            <p className="text-slate-400 text-xl font-light italic mb-6">
              "DAB-Lab — Sandbox cho những ý tưởng lớn"
            </p>
            <div className="flex items-center justify-center gap-3 text-slate-600 font-mono text-sm">
              <div className="w-2 h-2 bg-emerald-400" />
              <span>Da Nang AI & Blockchain Lab</span>
              <div className="w-2 h-2 bg-emerald-400" />
              <span>2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
