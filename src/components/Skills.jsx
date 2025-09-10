const skills = {
  Languages: ["C++", "JavaScript", "Python", "HTML", "CSS"],
  "Frameworks & Tools": ["React", "Vite", "Wasp", "Tailwind CSS", "Proxmox", "Git"],
  "Operating Systems": ["Windows", "Linux (Ubuntu, Kali)", "macOS"],
  "Technical Support" : [
    "Hardware Troubleshooting",
    "Software Installation & Configuration",
    "Network Setup & Maintenance",
    "Virus Removal & System Optimization",
    "System Imaging & Deployment",
  ],
  "Systems & Networking": [
    "Network Configuration",
    "Firewall Management",
    "Virtualization",
    "System Monitoring & Maintenance",
    "Active Directory",
    "DHCP",
    "DNS",
    "VPN",
    "TCP/IP",
    "Subnetting",
    "Routing & Switching",
  ],
  "Soft Skills": [
    "Troubleshooting",
    "Customer Support",
    "Adaptability",
    "Problem-Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Attention to Detail",
    "Critical Thinking",
    "Conflict Resolution",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#ffb81c] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#003da5]">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-6 shadow-[#003da5] shadow-lg hover:shadow-xl transition duration-300 border-2 border-[#003da5] delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
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
