/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Download, MonitorSmartphone, PenTool, LayoutTemplate, FileJson } from 'lucide-react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-cyan selection:text-white pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tight">Portfolio</div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#resume" className="hover:text-black transition-colors">Resume</a>
          </div>
          <a href="mailto:okerekeemmanuel4000@gmail.com" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm inline-block">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-block bg-brand-cyan-light text-brand-cyan px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Available for hire
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              Hi, I'm <span className="text-brand-cyan">Emmanuel</span><br />
              Basil.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              A Web Developer and Digital Product Designer with over 2 years of experience building responsive, high-performance web experiences and WordPress platforms.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
                View Projects
              </button>
              <button className="bg-gray-100 text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors">
                My Story
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="aspect-[4/5] md:aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply rounded-3xl"></div>
            </div>
            
            {/* Overlapping Quote Box */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs z-10 hidden sm:block delay-100">
              <p className="font-display font-medium text-gray-500 italic text-sm md:text-base leading-relaxed">
                "Combining technical expertise and content-focused problem solving to deliver engaging web experiences."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-surface-dim px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4 text-gray-900">Technical Proficiency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Leveraging modern stacks to deliver seamless, scalable, and stunning digital products from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">HTML & CSS</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Semantic architecture, responsive design & accessibility standards.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Figma & UX</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Digital product design, visual assets, and high-fidelity mockups.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
                <FileJson className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">WordPress</h3>
              <p className="text-gray-500 text-sm leading-relaxed">End-to-end theme customization, plugins, and content management.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-800">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">JS / React</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Interactive frontend development and scalable web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display font-bold text-4xl mb-4 text-gray-900">Versatile Project Work</h2>
              <p className="text-gray-600 max-w-xl text-lg">
                A curated selection of recent work spanning e-commerce stores, responsive landing pages, and business platforms.
              </p>
            </div>
            <a href="#" className="flex items-center text-gray-900 font-semibold hover:text-brand-cyan transition-colors group">
              Explore Full Gallery <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Project */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="overflow-hidden rounded-2xl relative bg-gray-100 mb-6 aspect-[4/3] lg:aspect-[16/10]">
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full z-10">
                  Case Study
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Analytics Platform" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Web Design • Content Management</div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3 text-gray-900 group-hover:text-brand-cyan transition-colors">E-Commerce & Business Platforms</h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  Fully functional online stores and brand-focused professional websites featuring comprehensive navigation, optimized product pages, and dynamic content.
                </p>
              </div>
            </div>

            {/* Side Projects Stack */}
            <div className="flex flex-col gap-10">
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl relative bg-gray-100 mb-5 aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800" 
                    alt="Mobile App" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-gray-900 group-hover:text-brand-cyan transition-colors">Marketing Landing Pages</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Designed and built high-converting, responsive landing pages tailored for targeted promotions and lead generation.
                  </p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl relative bg-gray-100 mb-5 aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" 
                    alt="Framework Portal" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-gray-900 group-hover:text-brand-cyan transition-colors">Blogs & Content Platforms</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Structured, SEO-friendly reading platforms focused on clean typography, accessibility, and high content engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 bg-surface-dim">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 lg:pr-8">
            <h2 className="font-display font-bold text-4xl mb-6 text-gray-900">Resume</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Creative Web Design enthusiast with hands-on experience in Digital Product Design, WordPress platforms, and optimized front-end development.
            </p>
            <button className="flex items-center justify-center gap-2 w-max px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition-colors bg-transparent">
              <Download className="w-4 h-4" />
              Download Full PDF
            </button>
          </div>

          <div className="lg:col-span-8 lg:pl-10">
            <div className="relative border-l border-gray-200">
              
              <div className="relative pl-8 pb-14">
                <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-black ring-4 ring-surface-dim"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="font-display font-bold text-xl text-gray-900">Web Developer</h3>
                  <span className="text-gray-400 text-sm font-medium shrink-0">Jan 2023 - Present</span>
                </div>
                <div className="text-brand-cyan font-medium mb-4">Freelance, Remote</div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Built responsive interface assets and digital products using HTML, CSS, and Figma. Supported the end-to-end web design process on platforms like WordPress and Webflow, maintaining high-performance standards for SEO and accessibility.
                </p>
              </div>

              <div className="relative pl-8 pb-14">
                <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-gray-300 ring-4 ring-surface-dim"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="font-display font-bold text-xl text-gray-900">B.Eng Mechanical Engineering</h3>
                  <span className="text-gray-400 text-sm font-medium shrink-0">Present</span>
                </div>
                <div className="text-brand-cyan font-medium mb-4">Olabisi Onabanjo University</div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Translating systematic engineering methodologies into digital problem-solving, with a focus on logical architecture, project management, and seamless engineering handoffs.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-gray-300 ring-4 ring-surface-dim"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="font-display font-bold text-xl text-gray-900">Professional Capabilities</h3>
                  <span className="text-gray-400 text-sm font-medium shrink-0">Certified 2023</span>
                </div>
                <div className="text-brand-cyan font-medium mb-4">Technical Proficiencies</div>
                <p className="text-gray-600 leading-relaxed">
                  Certified in WordPress Website Development, HTML & CSS, and JavaScript Fundamentals. Proficient in Digital Product Design, Motion Graphics, and applying accessibility web standards.
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-black text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to build something iconic?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            I'm currently accepting new projects and consulting opportunities. Let's discuss how we can elevate your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:okerekeemmanuel4000@gmail.com" className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors block text-center">
              Send an Email
            </a>
            <a href="tel:+2348123689153" className="w-full sm:w-auto bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-full font-medium hover:border-white transition-colors block text-center">
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-surface-dim">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200">
          <div className="text-2xl font-display font-bold tracking-tight">Emmanuel Basil</div>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="mailto:okerekeemmanuel4000@gmail.com" className="hover:text-black transition-colors">okerekeemmanuel4000@gmail.com</a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="tel:+2348123689153" className="hover:text-black transition-colors">+234 812 368 9153</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 text-center md:text-left lg:flex justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Emmanuel Basil Okereke. All rights reserved.</div>
          <div className="mt-2 lg:mt-0">Ogun State, Nigeria</div>
        </div>
      </footer>

    </div>
  );
}
