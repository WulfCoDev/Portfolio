const skills = {
  Languages: ["C++", "JavaScript", "Python"],
  "Frameworks & Tools": ["React", "Vite", "Tailwind CSS", "Proxmox", "Git"],
  Certifications: [
    "CompTIA ITF+",
    "CompTIA A+",
    "CompTIA Security+",
    "Network+ (in progress)",
  ],
  "Soft Skills": [
    "Troubleshooting",
    "Customer Support",
    "Adaptability",
    "Problem-Solving",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white shadow rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
