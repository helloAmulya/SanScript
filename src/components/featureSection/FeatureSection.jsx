// import React from "react";
// import { motion } from "framer-motion";
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
//   Database,
// } from "lucide-react";

// const FeatureSection = () => {
// const features = [
//   {
//     icon: Brain,
//     title: "Logical Foundation",
//     sanskrit: "तर्कसंस्थानम्",
//     description:
//       "५,००० वर्षों की तर्कशुद्ध परंपरा और व्याकरणीय अनुशासन पर आधारित, अद्वितीय तर्क संरचना से युक्त।",
//     gradient: "from-blue-500 to-cyan-500",
//     borderGradient: "from-blue-500/20 to-cyan-500/20",
//     underlineColor: "bg-cyan-400/50",
//   },
//   {
//     icon: Zap,
//     title: "Lightning Fast",
//     sanskrit: "द्रुतगतिः",
//     description:
//       "शून्य-अवरोध युक्त अमूर्तताएँ और संकलन-काल अनुकूलन द्वारा विद्युत-गति तुल्य निष्पादन।",
//     gradient: "from-yellow-500 to-orange-500",
//     borderGradient: "from-yellow-500/20 to-orange-500/20",
//     underlineColor: "bg-orange-400/50",
//   },
//   {
//     icon: Shield,
//     title: "Type Safety",
//     sanskrit: "सुरक्षिततापः",
//     description:
//       "उन्नत स्थैतिक टाइप प्रणाली, संकलन के समय ही त्रुटियों का परिहार करती है।",
//     gradient: "from-green-500 to-emerald-500",
//     borderGradient: "from-green-500/20 to-emerald-500/20",
//     underlineColor: "bg-emerald-400/50",
//   },
//   {
//     icon: Infinity,
//     title: "Infinite Scalability",
//     sanskrit: "अनन्तविस्तारः",
//     description:
//       "सरल रचना के साथ, सूक्ष्मसेवा से लेकर वितरित प्रणालियों तक सहज विस्तार की क्षमता।",
//     gradient: "from-purple-500 to-violet-500",
//     borderGradient: "from-purple-500/20 to-violet-500/20",
//     underlineColor: "bg-violet-400/50",
//   },
//   {
//     icon: Code2,
//     title: "Sanskrit Syntax",
//     sanskrit: "संस्कृतवाक्यरचना",
//     description:
//       "गणनात्मक शुद्धता के साथ प्राकृतिक भाषा में कोड — जो स्वयं तर्क का रूप है।",
//     gradient: "from-cyan-500 to-blue-500",
//     borderGradient: "from-cyan-500/20 to-blue-500/20",
//     underlineColor: "bg-blue-400/50",
//   },
//   {
//     icon: Globe,
//     title: "Universal Compatibility",
//     sanskrit: "सार्वत्रिकसंगतिः",
//     description:
//       "देशी बाइनरी, वेब असेम्बली, एम्बेडेड सिस्टम्स, तथा क्लाउड हेतु सर्वसंगत संकलन।",
//     gradient: "from-teal-500 to-cyan-500",
//     borderGradient: "from-teal-500/20 to-cyan-500/20",
//     underlineColor: "bg-teal-400/50",
//   },
// ];

//   return (
//     <section id="features" className="py-20 px-4 relative" >
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
//           </h2>

//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Sanskrit's systematic grammar makes it the perfect foundation for a
//             programming language. Every construct is logical, unambiguous, and
//             mathematically precise.
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
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
//                 ></div>

//                 <div
//                   className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                 >
//                   <div className="w-full h-full bg-[#0B0F11] rounded-xl flex items-center justify-center">
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-blue-400 mb-4 font-medium relative">
//                   {feature.sanskrit}
//                   <span
//                     className={`absolute bottom-0 left-0 w-0 h-0.5 ${feature.underlineColor} group-hover:w-full transition-all duration-300`}
//                   ></span>
//                 </p>
//                 <p className="text-gray-400 leading-relaxed text-sm">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Brain,
  Infinity,
  Code2,
  BookOpen,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Logical Foundation",
    sanskrit: "तर्कसंस्थानम्",
    description:
      "५,००० वर्षों की तर्कशुद्ध परंपरा और व्याकरणीय अनुशासन पर आधारित, अद्वितीय तर्क संरचना से युक्त।",
    gradient: "from-blue-500 to-cyan-500",
    borderGradient: "from-blue-500/20 to-cyan-500/20",
    underlineColor: "bg-cyan-400/50",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    sanskrit: "द्रुतगतिः",
    description:
      "शून्य-अवरोध युक्त अमूर्तताएँ और संकलन-काल अनुकूलन द्वारा विद्युत-गति तुल्य निष्पादन।",
    gradient: "from-yellow-500 to-orange-500",
    borderGradient: "from-yellow-500/20 to-orange-500/20",
    underlineColor: "bg-orange-400/50",
  },
  {
    icon: Shield,
    title: "Type Safety",
    sanskrit: "सुरक्षिततापः",
    description:
      "उन्नत स्थैतिक टाइप प्रणाली, संकलन के समय ही त्रुटियों का परिहार करती है।",
    gradient: "from-green-500 to-emerald-500",
    borderGradient: "from-green-500/20 to-emerald-500/20",
    underlineColor: "bg-emerald-400/50",
  },
  {
    icon: Infinity,
    title: "Infinite Scalability",
    sanskrit: "अनन्तविस्तारः",
    description:
      "सरल रचना के साथ, सूक्ष्मसेवा से लेकर वितरित प्रणालियों तक सहज विस्तार की क्षमता।",
    gradient: "from-purple-500 to-violet-500",
    borderGradient: "from-purple-500/20 to-violet-500/20",
    underlineColor: "bg-violet-400/50",
  },
  {
    icon: Code2,
    title: "Sanskrit Syntax",
    sanskrit: "संस्कृतवाक्यरचना",
    description:
      "गणनात्मक शुद्धता के साथ प्राकृतिक भाषा में कोड — जो स्वयं तर्क का रूप है।",
    gradient: "from-cyan-500 to-blue-500",
    borderGradient: "from-cyan-500/20 to-blue-500/20",
    underlineColor: "bg-blue-400/50",
  },
  {
    icon: Globe,
    title: "Universal Compatibility",
    sanskrit: "सार्वत्रिकसंगतिः",
    description:
      "देशी बाइनरी, वेब असेम्बली, एम्बेडेड सिस्टम्स, तथा क्लाउड हेतु सर्वसंगत संकलन।",
    gradient: "from-teal-500 to-cyan-500",
    borderGradient: "from-teal-500/20 to-cyan-500/20",
    underlineColor: "bg-teal-400/50",
  },
];

const FeatureSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="features"
      className="py-20 px-4 bg-[#101418] border-t border-gray-700/30 relative"
    >
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
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sanskrit's systematic grammar makes it the perfect foundation for a
            programming language. Every construct is logical, unambiguous, and
            mathematically precise.
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
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                ></div>

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="w-full h-full bg-[#0B0F11] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-400 mb-4 font-medium relative">
                  {feature.sanskrit}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${feature.underlineColor} group-hover:w-full transition-all duration-300`}
                  ></span>
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeatureSection;
