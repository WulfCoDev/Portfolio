export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[url(/hero-bg3.jpg)] bg-cover bg-no-repeat text-[#EDF2F4]"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I’m Christian Alexander</h1>
      <p className="text-lg md:text-xl text-[#EDF2F4] mb-6">
        IT Specialist & Aspiring Software Engineer | CompTIA Triad Certified
      </p>
      <div className="space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-[#ffb81c] text-white rounded-lg shadow "
        >
          View Projects
        </a>
        <a
          href="/Christian_Alexander_IT_Resume.pdf"
          download={true}
          className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-50 hover:text-[#003DA5] drop-shadow-2xl drop-shadow-[#003DA5]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
