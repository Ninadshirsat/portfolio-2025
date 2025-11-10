import { useTheme } from "../../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ArrowDown, Mail } from "lucide-react";
import { itemVariants, containerVariants } from "../../utlis/helper.js";

import PROFILE_IMG from "../../assets/images/profile-img.png";
const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section*/}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen relative px-6 pt-6 lg:pt-16"
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 mt-20">
          {/* Mobile Layout - Centered */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center relative z-10"
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl`}
                  >
                    <img
                      src={PROFILE_IMG}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20 "
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4 `}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughful user experience
              </motion.p>

              {/* Content - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/Ninadshirsat" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/ninad-shirsat-177656201/",
                  },
                  {
                    icon: Mail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ninadshirsat12@gmail.com&su=Hello%20Ninad&body=I%20want%20to%20connect%20with%20you",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank" //open in a new tab
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech Stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
              >
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  React
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  Node.js
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  TypeScript
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  MongoDB
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Desktop layout - Split */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-left relative z-10"
          >
            <motion.div
              variants={textVariants}
              className={`text-sm tracking-widest uppercase ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              } mb-6`}
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl xl:text-7xl font-light mb-6 leading-[1.1]"
            >
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Building digital
              </span>
              <br />
              <span className="text-blue-500 font-medium">experiences</span>
              <br />
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                that matter
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-10 max-w-xl font-light leading-relaxed`}
            >
              I craft beautiful, functional web applications with modern
              technologies and thoughful user experience
            </motion.p>

            {/* CTA Buttons - Desktop */}
            <motion.div variants={itemVariants} className="flex gap-6 mb-8">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("work")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("work")}
                className={` border ${
                  isDarkMode
                    ? "border-gray-700 hover:border-gray-600 text-gray-300"
                    : "border-gray-300 hover:border-gray-400 text-gray-700"
                } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Social Links - Desktop */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-6 mb-12"
            >
              {[
                { icon: FiGithub, href: "https://github.com/Ninadshirsat" },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/ninad-shirsat-177656201/",
                },
                {
                  icon: Mail,
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=ninadshirsat12@gmail.com&su=Hello%20Ninad&body=I%20want%20to%20connect%20with%20you",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank" //open in a new tab
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`p-3 rounded-full transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="flex justify-center lg:justify-end pr-20"
          >
            <div className="relative">
              {/* Tech Stack - Desktop */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-8 uppercase text-sm tracking-widest absolute -top-16 -left-28"
              >
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  React
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  Node.js
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  TypeScript
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  .
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  MongoDB
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={` w-80 h-96 rounded-[32px] overflow-hidden border-[1.5px] ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } shadow-lg shadow-blue-100/30`}
              >
                <img
                  src={PROFILE_IMG}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-3xl border border-blue-500/20 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-100/20 rounded-[32px] blur-xl pointer-events-none"></div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-8 rounded-3xl border border-purple-500/10 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
