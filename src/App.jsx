import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Shield, Github, Linkedin, Mail, ExternalLink, Lock, Brain, Cloud, Network, Bug, GraduationCap, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/30">
              <Shield size={18} />
            </span>
            <span className="font-semibold tracking-wide">Nirmal • Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors"><Mail size={16}/> Hire Me</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white transition-colors">{l.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#contact" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors"><Mail size={16}/> Hire Me</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-28 md:pt-32 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 right-1/2 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <Sparkles size={14} /> MCA Graduate • Cybersecurity • AI • Cloud
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm Nirmal
          </h1>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Passionate about cybersecurity, cybercrime investigation, artificial intelligence, networking, and cloud computing. I build secure, intelligent systems and investigate threats with a curious, engineering mindset.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-md font-medium hover:bg-slate-100">
              View Projects <ExternalLink size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium border border-white/20 text-white hover:bg-white/10">
              Contact Me <Mail size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

function Pill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white ring-1 ring-white/10">
      {Icon && <Icon size={14} />} {label}
    </span>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-4rem] left-1/2 -translate-x-1/2 h-32 w-[90%] rounded-full bg-gradient-to-b from-cyan-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-3 text-slate-400">MCA graduate focused on defensive and offensive security, AI-driven analysis, and modern infrastructure.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill icon={Lock} label="Cybersecurity" />
              <Pill icon={Bug} label="Investigation" />
              <Pill icon={Brain} label="AI" />
              <Pill icon={Network} label="Networking" />
              <Pill icon={Cloud} label="Cloud" />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <FeatureCard icon={Lock} title="Security-first mindset" desc="Threat modeling, secure coding, and continuous assessment across the stack." />
            <FeatureCard icon={Brain} title="AI x Security" desc="Leveraging ML for anomaly detection, threat triage, and incident response automation." />
            <FeatureCard icon={Cloud} title="Cloud-native" desc="Designing resilient, scalable architectures with identity, secrets, and zero trust in mind." />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
      <div className="relative flex items-start gap-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 text-white">
          <Icon />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-slate-400 mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Skills() {
  const skillGroups = [
    { title: 'Security', items: ['Threat Modeling', 'Vulnerability Assessment', 'OSINT', 'SIEM', 'Endpoint Hardening'] },
    { title: 'AI & Data', items: ['Python', 'Scikit-learn', 'LLMs', 'Anomaly Detection', 'Data Pipelines'] },
    { title: 'Networking', items: ['TCP/IP', 'Firewalls', 'IDS/IPS', 'Wireshark', 'Routing & Switching'] },
    { title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
    { title: 'Languages', items: ['Python', 'JavaScript', 'Bash', 'SQL'] },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <GraduationCap className="text-cyan-400" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div key={group.title} className="rounded-2xl p-5 bg-white/[0.03] ring-1 ring-white/10">
              <h3 className="text-white font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Phishing Detection Dashboard',
      tags: ['AI', 'Security', 'Python'],
      desc: 'ML-powered classification of phishing URLs with explainable insights and live feeds.',
      link: '#',
    },
    {
      title: 'Cloud Honeypot Network',
      tags: ['Cloud', 'Networking', 'Threat Intel'],
      desc: 'Deployed distributed honeypots with automated IOC collection and alerting.',
      link: '#',
    },
    {
      title: 'OSINT Case Toolkit',
      tags: ['Investigation', 'Automation'],
      desc: 'Workflow toolkit to aggregate open-source intel for cybercrime investigations.',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <ExternalLink className="text-cyan-400" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-5 bg-gradient-to-b from-white/[0.06] to-white/[0.03] ring-1 ring-white/10 hover:ring-cyan-400/40 transition"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-400 mt-2 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-cyan-300">
                  Explore <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const certs = [
    { name: 'Certified Ethical Hacker (CEH) — 1st Place', issuer: 'EC-Council', year: '2024', badge: '1st Place' },
    { name: 'Cisco CCNA (in-progress/interest)', issuer: 'Cisco', year: '2025' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Google Cybersecurity Fundamentals', issuer: 'Google', year: '2024' },
  ]

  return (
    <section id="certs" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map(c => (
            <div key={c.name} className="rounded-2xl p-5 bg-white/[0.03] ring-1 ring-white/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    {c.name}
                    {c.badge && (
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 ring-1 ring-amber-300/60">🥇 {c.badge}</span>
                    )}
                  </h3>
                  <p className="text-slate-400 text-sm">{c.issuer}</p>
                </div>
                <span className="text-xs text-cyan-300 whitespace-nowrap">{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Let’s build something secure and smart</h2>
        <p className="mt-3 text-slate-400">Open to internships, security engineering roles, and research collaborations.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:pawarnirmal55@gmail.com" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-md font-medium hover:bg-slate-100">
            <Mail size={18}/> Email Me
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium border border-white/20 text-white hover:bg-white/10"><Github size={18}/> GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium border border-white/20 text-white hover:bg-white/10"><Linkedin size={18}/> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nirmal. All rights reserved.</p>
        <div className="flex items-center gap-3 text-slate-400 text-sm">
          <a href="#top" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    if ('scrollBehavior' in document.documentElement.style) return
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(14,165,233,0.15)_0%,transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
