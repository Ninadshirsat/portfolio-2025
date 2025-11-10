import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";

import { useTheme } from "../../context/ThemeContext.jsx";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../utlis/data.js";
import { containerVariants, itemVariants } from "../../utlis/helper";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get In
            <span className="text-blue-500 font-medium"> Touch</span>
          </motion.h2>

          <motion.p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Ready to start your next project.? Let's discuss how we can bring
            your ideas to life
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
