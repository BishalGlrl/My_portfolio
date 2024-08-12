import React, { useEffect } from 'react';
import '../Style/Home.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const homeHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= homeHeight) {
        navigate('/about');
      }
    }; 

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate]);
  
  useEffect(() => {
    const texts = ["Software Developer", "Freelancer", "Learner"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      const typedTextElement = document.querySelector('.typed-text');
      if (!typedTextElement) return;  // Exit if the element is not found

      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      typedTextElement.textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Delay before next text
      } else {
        setTimeout(type, 200);
      }
    }

    type();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section h-[100vh] bg-bg_color">
        {/* photo and other */}
        <div className='flex flex-col md:flex-row items-center justify-center bg-bg_color p-12 hero-content'>
          <div className="box mr-7 m-3 md:mb-1">
            <div className="content">
              <img src="./Image.jpg" alt="Bishal Giri" /> 
              <h2><span>Bishal Giri</span></h2>
            </div>
          </div>
          <div className="hero-text ml-9 text-center md:text-left mr-7">
            <h1 className="text-5xl text-custom-orange"><br />Hello, I'm Bishal Giri</h1> <br />
            <p className="text-lg font-semibold text-button_color">
              I am <span className="typed-text"></span><span className="cursor">|</span>
            </p>

            {/* button and Social media link section */}
            <a href="./resume.pdf" target='_blank' rel="noopener noreferrer">
              <button className='text-button_Text bg-button_color font-bold py-3 px-6 rounded-lg mt-7 hover:bg-blue-500'>Resume</button>
            </a>
            {/* Social media link */}
            <div className="flex justify-center md:justify-start space-x-6 mt-12">
              <a href="https://www.facebook.com/bishal.giri.967422/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-orange"><FaFacebook size={30} /></a>
              <a href="https://www.instagram.com/bishalgiri66/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-orange"><FaInstagram size={30} /></a>
              <a href="https://www.linkedin.com/in/bishal-giri-201844220/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-orange"><FaLinkedin size={30} /></a>
              <a href="https://github.com/BishalGlrl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-custom-orange"><FaGithub size={30} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
