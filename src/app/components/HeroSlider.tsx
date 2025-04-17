'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Journey from './Journey';

const slides = [
  {
    title: (
      <>
        We Create <span className="text-[#0066FF]">Value</span> Through
        <br />
        Innovative and Reliable
        <br />
        Tech Solutions
      </>
    ),
    description: 'Trusted by top platforms like edX, KAYAK, and Careem for our transformative solutions and exceptional results.',
    image: '/images/hero1.jpg',
    badges: ['AI & ML', 'Cloud Native', 'Digital Transformation'],
    stats: [
      { label: 'Projects Delivered', value: '500+' },
      { label: 'Client Satisfaction', value: '99%' },
      { label: 'Team Experts', value: '150+' }
    ]
  },
  {
    title: (
      <>
        Empowering Business
        <br />
        Through <span className="text-[#0066FF]">Digital</span>
        <br />
        Transformation
      </>
    ),
    description: 'Helping businesses evolve with cutting-edge technology solutions and innovative strategies.',
    image: '/images/hero2.jpg',
    badges: ['Innovation', 'Technology', 'Excellence'],
    stats: [
      { label: 'Global Clients', value: '200+' },
      { label: 'Countries Served', value: '25+' },
      { label: 'Industries', value: '12+' }
    ]
  }
];

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

interface TitleElement {
  props: TitleProps;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = containerRef.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => containerRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const StatCard = ({ stat, index }: { stat: { label: string; value: string }; index: number }) => {
    const x = useTransform(mouseXSpring, [0, 1000], [0, 15 * (index - 1)]);
    const y = useTransform(mouseYSpring, [0, 1000], [0, 15 * (index - 1)]);

    return (
      <motion.div
        style={{ x, y }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <div className='bg-white px-10 py-10'>
        <div ref={containerRef} className="relative min-h-30 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg mt-15">
          {/* Animated background patterns */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)',
                  'radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0"
            />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-60 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-500/20 to-transparent opacity-60 blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pt-20 pb-5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[3rem] leading-[1.2] font-bold text-white"
                  >
                    {slides[currentSlide].title.props.children.map((child: React.ReactNode, index: number) => {
                      if (typeof child === 'object' && child !== null && 'props' in child) {
                        const element = child as TitleElement;
                        if (element.props.className === "text-[#0066FF]") {
                          return <span key={index} className="text-indigo-400">{element.props.children}</span>;
                        }
                      }
                      return child;
                    })}
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-lg text-slate-300 max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </AnimatePresence>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {slides[currentSlide].badges.map((badge, index) => (
                      <motion.span
                        key={badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                        className="px-4 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium cursor-pointer border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {slides[currentSlide].stats.map((stat, index) => (
                      <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
                      >
                        <span className="flex items-center gap-2">
                          Let&apos;s Talk
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.button>
                    </Link>
                    <div className="flex items-center gap-2">
                      {slides.map((_, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-12 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-indigo-500' : 'bg-slate-700'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-lg overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt="Hero image"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg transform transition-transform duration-700"
                      priority={currentSlide === 0}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-indigo-500/10"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Interactive floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 15,
                    backgroundColor: "rgba(96, 165, 250, 0.2)",
                    boxShadow: "0 25px 30px -12px rgba(0, 102, 255, 0.3)"
                  }}
                  className="absolute -top-8 right-8 w-24 h-24 rounded-2xl cursor-pointer backdrop-blur-sm transform -rotate-6 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.1))",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 15px 25px -12px rgba(0, 102, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.1))",
                        "linear-gradient(225deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.1))",
                        "linear-gradient(315deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.1))"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent)"
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: "rgba(96, 165, 250, 0.2)",
                    boxShadow: "0 25px 30px -12px rgba(0, 102, 255, 0.3)"
                  }}
                  className="absolute -bottom-4 left-8 w-20 h-20 rounded-full cursor-pointer backdrop-blur-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(147, 197, 253, 0.2), rgba(96, 165, 250, 0.1))",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 15px 25px -12px rgba(0, 102, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(147, 197, 253, 0.3), rgba(96, 165, 250, 0.1))",
                        "linear-gradient(225deg, rgba(147, 197, 253, 0.3), rgba(96, 165, 250, 0.1))",
                        "linear-gradient(315deg, rgba(147, 197, 253, 0.3), rgba(96, 165, 250, 0.1))"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent)"
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>

                {/* Additional floating elements */}
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(96, 165, 250, 0.2)"
                  }}
                  className="absolute -top-4 left-1/4 w-12 h-12 rounded-lg cursor-pointer backdrop-blur-sm overflow-hidden transform rotate-12"
                  style={{
                    background: "linear-gradient(135deg, rgba(191, 219, 254, 0.2), rgba(147, 197, 253, 0.1))",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 10px 20px -8px rgba(0, 102, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(191, 219, 254, 0.3), rgba(147, 197, 253, 0.1))",
                        "linear-gradient(225deg, rgba(191, 219, 254, 0.3), rgba(147, 197, 253, 0.1))"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    x: [0, -8, 0],
                    y: [0, 8, 0],
                    rotate: [0, -8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(96, 165, 250, 0.2)"
                  }}
                  className="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full cursor-pointer backdrop-blur-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(191, 219, 254, 0.2), rgba(147, 197, 253, 0.1))",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 12px 22px -10px rgba(0, 102, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(191, 219, 254, 0.3), rgba(147, 197, 253, 0.1))",
                        "linear-gradient(225deg, rgba(191, 219, 254, 0.3), rgba(147, 197, 253, 0.1))"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Journey />
    </>
  );
};

export default HeroSlider; 