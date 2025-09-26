import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-linear-to-b from-[#FFB81C] to-[#003DA5] min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-6 text-center ">
        <h2 className="text-6xl font-bold mb-6 text-outline">Get in Touch</h2>
        <p className="text-gray-700 mb-8 text-2xl">
          Feel free to reach out for collaborations, questions, or opportunities!
        </p>
        <div className="space-y-4 text-xl" >
          <div className="flex items-center justify-center space-x-2">
             {/*
            <MdEmail />
            <a
              href="mailto:Christian.Alexander.Dev@gmail.com"
              className="text-[#FFB81C]"
            >
              christian.alexander.dev@gmail.com
            </a>
          </div>
          */}
          <div className="flex items-center justify-center space-x-2">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/dev-christian-alexander/"
              target="_blank"
              className="text-[#FFB81C]"
            >
              linkedin.com/in/dev-christian-alexander
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaGithub />
            <a
              href="https://github.com/WulfCoDev"
              target="_blank"
              className="text-[#FFB81C]"
            >
              github.com/WulfCoDev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
