const certifications = [
  { name: "CompTIA ITF+", year: 2025 },
  { name: "CompTIA A+", year: 2025 },
  { name: "CompTIA Security+", year: 2024 },
  { name: "CompTIA Network+", year: 2025 }, // in progress
  { name: "CompTIA Secure Infrastructure Specialist", year: 2025 },
  { name: "CompTIA IT Operations Specialist", year: 2025 },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-primary">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white shadow shadow-[#2B2D42] rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-secondary">Year: {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
