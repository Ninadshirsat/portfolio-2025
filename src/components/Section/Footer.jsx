import { useRef } from "react";
import {
  delay,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUp, Code2, Heart, Mail } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemVariants } from "../../utlis/helper";
import { SOCIAL_LINKS } from "../../utlis/data.js";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  //   const socialLinks = [
  //     {
  //       name: "Github",
  //       icon: FiGithub,
  //       url: "https://github.com/Ninadshirsat",
  //       color: "hover:text-gray-400",
  //     },
  //     {
  //       name: "LinkedIn",
  //       icon: FiLinkedin,
  //       url: "https://github.com/Ninadshirsat",
  //       color: "hover:text-sky-400",
  //     },
  //     {
  //       name: "Twitter",
  //       icon: FiTwitter,
  //       url: "https://github.com/Ninadshirsat",
  //       color: "hover:text-blue-400",
  //     },
  //     {
  //       name: "Email",
  //       icon: Mail,
  //       url: "mailto:ninadshirsat12@gmail.com",
  //       color: "hover:text-green-400",
  //     },
  //   ];

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Animated Gradient Line Component
  const AnimatedGradientLine = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <motion.div
          className={`h-px bg-gradient-to-r ${
            isDarkMode
              ? "from-transparent via-blue-500 to-transparent"
              : "from-transparent via-blue-600 to-transparent"
          }`}
          initial={{ width: "0%", opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className={` absolute top-0 h-px w-32 bg-gradient-to-r ${
            isDarkMode
              ? "from-blue-400 via-purple-500 to-blue-400"
              : "from-blue-500 via-purple-600 to-blue-500"
          } blur-sm`}
          animate={{ x: ["-50px", "calc(100vw + 50%)"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              ease: "linear",
              delay: 1,
            },
          }}
        />
      </div>
    );
  };

  return (
    <footer
      ref={footerRef}
      className={` relative overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Animated Wave/Gradient Line */}
      <AnimatedGradientLine />

      {/* Background Elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-3 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-3 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-6"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex items-center space-x-2 text-2xl font-medium"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-blue-500"
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Ninad Shirsat</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-sm max-w-md mx-auto ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Crafting digital experiences with passion, and touch of magic.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/50"
                      : "bg-gray-100/80 hover:bg-gray-200/50"
                  } ${social.color} backdrop-blur-sm`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4"
            >
              <div
                className={`h-px w-16 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <div
                className={`h-px w-16 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            </motion.div>

            {/* Copyright */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {new Date().getFullYear()} Ninad Shirsat. All rights reserved
              </p>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-600" : "text-gray-500"
                }`}
              >
                Built with React and framer-motion & Designed with care
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={() => scrollToSection("home")}
                className={`inline-flex items-center space-x-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white border-gray-700"
                    : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900 border-gray-300"
                } backdrop-blur-sm border`}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow: isDarkMode
                    ? "0 10px 25px rgba(59, 130, 246, 0.15)"
                    : "0 10px 25px rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
                <span>Back To Top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
