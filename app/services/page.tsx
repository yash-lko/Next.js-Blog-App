// app/services/page.tsx
import { FC } from "react";
import { Settings, Code, Monitor, Phone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites built using modern frameworks.",
    icon: <Code className="w-10 h-10  text-[#8433fb]"/>,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-focused designs that make products easy to use.",
    icon: <Monitor className="w-10 h-10  text-[#8433fb]" />,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps for Android & iOS.",
    icon: <Phone className="w-10 h-10  text-[#8433fb]"/>,
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous monitoring, updates, and performance optimization.",
    icon: <Settings className="w-10 h-10  text-[#8433fb]"/>,
  },
];

const page: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-gray-600 mt-3">
          We provide modern digital solutions to grow your business.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl transition hover:shadow-xl hover:-translate-y-1"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
