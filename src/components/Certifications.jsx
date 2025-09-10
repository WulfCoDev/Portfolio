const certifications = [
  
  { name: "CompTIA A+", year: 2025, code: "XB3P2R956EEE1S5G", verify: "http://verify.comptia.org/", logo: "/aplus-logo.png" },
  { name: "CompTIA Network+", year: 2025, code: "PHR7C2MSW1V4Y8T2", verify: "http://verify.comptia.org/", logo: "/networkplus-logo.png" },
  { name: "CompTIA Security+", year: 2024, code: "PCBRZDPZPFEQ1X3V", verify: "http://verify.comptia.org/", logo: "/securityplus-logo.png" },
  { name: "CompTIA ITF+", year: 2025, code: "0D59446STJRQQTW9", verify: "http://verify.comptia.org/", logo: "/it-fundamentals-logo.jpg" },
  { name: "CompTIA Secure Infrastructure Specialist", year: 2025, logo: "/csis-logo.jpg" },
  { name: "CompTIA IT Operations Specialist", year: 2025, logo: "/cios-logo.jpg" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 min-h-screen bg-[#003DA5]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#FFB81C]">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6 gap-y-32">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white shadow-lg shadow-[#ffb81c] rounded-2xl p-6 hover:shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <img
          src={cert.logo}
          alt={`${cert.name} logo`}
          className="min-h-fit mb-4 object-contain mx-auto"
        />
              <p className="text-secondary">Year: {cert.year}</p>
              
              {cert.code && (
                <p className="text-secondary">Code: {cert.code}</p>
              )}
              {cert.verify && (
                <p className="text-secondary hover:cursor-pointer">Verify at: <a>{cert.verify}</a></p>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
