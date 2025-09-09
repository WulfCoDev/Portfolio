export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#EDF2F4] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out for collaboration, opportunities, or just to
          say hi!
        </p>
        <div className="space-y-4">
          <p>
            Email:{" "}
            <a
              href="mailto:Christian.Alexander.Dev@gmail.com"
              className="text-blue-600"
            >
              Christian.Alexander.Dev@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dev-christian-alexander/"
              target="_blank"
              className="text-blue-600"
            >
              linkedin.com/in/dev-christian-alexander
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/WulfCoDev"
              target="_blank"
              className="text-blue-600"
            >
              github.com/WulfCoDev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
