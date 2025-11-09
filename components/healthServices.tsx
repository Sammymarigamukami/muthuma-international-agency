"use client";

const services = [
  {
    name: "General Consultation",
    href: "/book-consultation",
  },
  {
    name: "Specialist Consultation",
    href: "/book-consultation",
  },
  {
    name: "Mental Health Services",
    href: "/book-consultation",
  },
  {
    name: "Nutrition Counseling",
    href: "/book-consultation",
  }
];

export default function HealthServices() {
  return (
    <section className="py-5 bg-gray-50 transition-all duration-500">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Health Services
          </h2>
          <h2 className="text-2xl font-semibold text-gray-700">
            How can we help you today?
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              className="bg-green-600 p-6 rounded-lg shadow hover:bg-green-700 transition hover:scale-105 flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium text-gray-900">{service.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
