// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Zap,
//   Shield,
//   Brain,
//   Infinity,
//   Code2,
//   BookOpen,
//   Cpu,
//   Globe,
//   Lock,
//   Rocket,
//   Database
// } from 'lucide-react';

// const FeatureSection = () => {
//   const features = [
//     {
//       icon: Brain,
//       title: "Logical Foundation",
//       sanskrit: "तर्कसंस्थानम्",
//       description:
//         "Built on 5000+ years of systematic thinking and grammatical precision with unmatched logical structure.",
//       gradient: "from-blue-500 to-cyan-500",
//       borderGradient: "from-blue-500/20 to-cyan-500/20"
//     },
//     {
//       icon: Zap,
//       title: "Lightning Fast",
//       sanskrit: "द्रुतगतिः",
//       description:
//         "Zero-overhead abstractions with compile-time optimizations delivering native performance speeds.",
//       gradient: "from-yellow-500 to-orange-500",
//       borderGradient: "from-yellow-500/20 to-orange-500/20"
//     },
//     {
//       icon: Shield,
//       title: "Type Safety",
//       sanskrit: "सुरक्षिततापः",
//       description:
//         "Advanced static typing system prevents runtime errors with comprehensive compile-time verification.",
//       gradient: "from-green-500 to-emerald-500",
//       borderGradient: "from-green-500/20 to-emerald-500/20"
//     },
//     {
//       icon: Infinity,
//       title: "Infinite Scalability",
//       sanskrit: "अनन्तविस्तारः",
//       description:
//         "Seamless scaling from microservices to distributed systems without architectural complexity.",
//       gradient: "from-purple-500 to-violet-500",
//       borderGradient: "from-purple-500/20 to-violet-500/20"
//     },
//     {
//       icon: Code2,
//       title: "Sanskrit Syntax",
//       sanskrit: "संस्कृतवाक्यरचना",
//       description:
//         "Natural language programming with mathematical precision, readable code that speaks logic.",
//       gradient: "from-cyan-500 to-blue-500",
//       borderGradient: "from-cyan-500/20 to-blue-500/20"
//     },
//     {
//       icon: Globe,
//       title: "Universal Compatibility",
//       sanskrit: "सार्वत्रिकसंगतिः",
//       description:
//         "Cross-platform compilation to native binaries, WebAssembly, embedded systems, and cloud platforms.",
//       gradient: "from-teal-500 to-cyan-500",
//       borderGradient: "from-teal-500/20 to-cyan-500/20"
//     }
//   ];

//   const stats = [
//     { icon: Rocket, value: "0ms", label: "Cold Start", desc: "Instant compilation & execution" },
//     { icon: Lock, value: "100%", label: "Memory Safe", desc: "Zero buffer overflows guaranteed" },
//     { icon: Database, value: "50+", label: "Platforms", desc: "Universal deployment targets" },
//     { icon: Cpu, value: "∞", label: "Expressions", desc: "Unlimited computational complexity" }
//   ];

//   return (
//     <section id="features" className="py-20 px-4 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/10 to-transparent"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
//             <BookOpen className="w-4 h-4 mr-2" />
//             Why Sanskrit?
//           </div>

//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
//               विशेषताः
//             </span>
//             <br />
//             <span className="text-white text-3xl md:text-4xl font-light">
//               Engineered for Excellence
//             </span>
//           </h2>

//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Sanskrit's systematic grammar makes it the perfect foundation for a programming language. 
//             Every construct is logical, unambiguous, and mathematically precise.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group"
//             >
//               <div className="bg-[#0A0E10]/80 border border-gray-700/50 hover:border-gray-600/80 rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
//                 <div className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>

//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <div className="w-full h-full bg-[#0B0F11] rounded-xl flex items-center justify-center">
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-blue-400 mb-4 font-medium relative">
//                   {feature.sanskrit}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400/50 group-hover:w-full transition-all duration-300"></span>
//                 </p>
//                 <p className="text-gray-400 leading-relaxed text-sm">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-4 gap-8"
//         >
//           {stats.map((stat, index) => (
//             <motion.div 
//               key={index} 
//               className="text-center group"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="bg-[#0A0E10]/60 border border-gray-700/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-500/50">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <stat.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-white font-medium mb-1">{stat.label}</div>
//                 <div className="text-sm text-gray-400">{stat.desc}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;





import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Brain,
  Infinity,
  Code2,
  BookOpen,
  Cpu,
  Globe,
  Lock,
  Rocket,
  Database
} from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Logical Foundation",
      sanskrit: "तर्कसंस्थानम्",
      description:
        "Built on 5000+ years of systematic thinking and grammatical precision with unmatched logical structure.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      sanskrit: "द्रुतगतिः",
      description:
        "Zero-overhead abstractions with compile-time optimizations delivering native performance speeds.",
      gradient: "from-yellow-500 to-orange-500",
      borderGradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Shield,
      title: "Type Safety",
      sanskrit: "सुरक्षिततापः",
      description:
        "Advanced static typing system prevents runtime errors with comprehensive compile-time verification.",
      gradient: "from-green-500 to-emerald-500",
      borderGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Infinity,
      title: "Infinite Scalability",
      sanskrit: "अनन्तविस्तारः",
      description:
        "Seamless scaling from microservices to distributed systems without architectural complexity.",
      gradient: "from-purple-500 to-violet-500",
      borderGradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Code2,
      title: "Sanskrit Syntax",
      sanskrit: "संस्कृतवाक्यरचना",
      description:
        "Natural language programming with mathematical precision, readable code that speaks logic.",
      gradient: "from-cyan-500 to-blue-500",
      borderGradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      sanskrit: "सार्वत्रिकसंगतिः",
      description:
        "Cross-platform compilation to native binaries, WebAssembly, embedded systems, and cloud platforms.",
      gradient: "from-teal-500 to-cyan-500",
      borderGradient: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const stats = [
    { icon: Rocket, value: "0ms", label: "Cold Start", desc: "Because Sanskrit doesn’t believe in foreplay." },
    { icon: Lock, value: "100%", label: "Memory Safe", desc: "No leaks. Not even emotional ones." },
    { icon: Database, value: "50+", label: "Platforms", desc: "Runs anywhere, even in your nightmares." },
    { icon: Cpu, value: "∞", label: "Expressions", desc: "Because why limit what you barely understand?" }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Why Sanskrit?
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              विशेषताः
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl font-light">
              Engineered for Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sanskrit's systematic grammar makes it the perfect foundation for a programming language. 
            Every construct is logical, unambiguous, and mathematically precise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-[#0A0E10]/80 border border-gray-700/50 hover:border-gray-600/80 rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="w-full h-full bg-[#0B0F11] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-400 mb-4 font-medium relative">
                  {feature.sanskrit}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400/50 group-hover:w-full transition-all duration-300"></span>
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#0A0E10]/60 border border-gray-700/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-500/50">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeatureSection;
