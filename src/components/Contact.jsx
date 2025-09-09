export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out for collaboration, opportunities, or just to
          say hi!
        </p>
        <div className="space-y-4">
          <p>
            Email:{" "}
            <a href="mailto:youremail@example.com" className="text-blue-600">
              youremail@example.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="text-blue-600"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="text-blue-600"
            >
              github.com/yourgithub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
