import LogoCarousel from "./LogoCarousel";
import CarCarousel from "./CarCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-t from-[#FFB81C] to-[#003DA5] min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#edf2f4]">About Me</h2>
        <p className="text-[#EDF2F4] leading-relaxed text-3xl md:text-xl sm:text-sm">
          I’m an IT and software enthusiast with a background in Computer
          Science and Physics. I hold the CompTIA triad (A+, Network+,
          Security+) and enjoy building projects that combine problem-solving
          with creativity. Outside of tech, I’m passionate about gaming, movies,
          and motorsports. Currently, I’m working towards Associates of Science
          degrees in Computer Science and Physics with a transfer goal to UC
          Riverside in 2027 to obtain my Bachelors then Masters degree.
          Furthermore, I am seeking entry-level IT or software engineering
          roles.
        </p>
        <LogoCarousel />
        <CarCarousel />
      </div>
    </section>
  );
}
