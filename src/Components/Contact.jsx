import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  return (
    <motion.div
      className="contact-section bg-bg_color p-12 h-[100vh] flex justify-center"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-custom-orange mb-8">Contact me</h2>
        <div className="contact-section bg-bg_color p-12">
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
              <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg" rows="5"></textarea>
              <button type="submit" className="text-button_Text bg-button_color font-bold py-3 px-6 rounded-lg w-full">Send</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
