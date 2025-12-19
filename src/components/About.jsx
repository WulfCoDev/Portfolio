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
        <p className="text-[#EDF2F4] leading-relaxed text-3xl md:text-2xl sm:text-sm">
          I’m an IT and software enthusiast with a background in Computer
          Science and Physics. I hold the CompTIA triad (A+, Network+,
          Security+) and enjoy building projects that combine problem-solving
          with creativity. Outside of tech, I’m passionate about gaming, movies,
          and motorsports. Currently, I’m working towards an Associates of Science
          degree in Computer Science with a transfer goal of Fall 2026 to WGU to obtain my Bachelors in Network and Cloud Engineering.
        </p>
        <LogoCarousel />
        <CarCarousel />
      </div>
    </section>
  );
}
