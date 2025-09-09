const skills = {
  Languages: ["C++", "JavaScript", "Python", "HTML", "CSS"],
  "Frameworks & Tools": ["React", "Vite", "Tailwind CSS", "Proxmox", "Git"],
  "Operating Systems": ["Windows", "Linux (Ubuntu, Kali)", "macOS"],
  "Soft Skills": [
    "Troubleshooting",
    "Customer Support",
    "Adaptability",
    "Problem-Solving",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#8D99AE] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-6 shadow-[#2B2D42] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
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
