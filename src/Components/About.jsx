import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const control = useAnimation();
  const { ref, inView } = useInView();

  // Scroll to top if specified in location state
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);

  // Animate component visibility based on inView status
  useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [control, inView]);

  // Handle scroll event to navigate to contact page
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const aboutHeight = document.documentElement.scrollHeight;

          if (scrollPosition >= aboutHeight) {
            navigate('/contact');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  // Animation variants
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  return (
    <motion.div
      className="about-section bg-bg_color h-screen flex justify-center"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="text-center max-w-4xl mx-auto mt-20">
        <h2 className="text-4xl font-bold text-custom-orange mb-6 md:mb-8">About Me</h2>
        <p className="text-lg text-button_color text-justify leading-relaxed m-7">
          I am Bishal Giri, a graduate of the 2076 batch of the BSc. in Computer Science and Information Technology program at Tribhuvan University, Nepal. Beyond my academic pursuits, I am deeply engaged in web design and software development with my inclination toward machine learning, dedicating my time to enhancing these skills.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
