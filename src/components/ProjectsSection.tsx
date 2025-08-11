import { useState } from "react";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/5b873240-e804-4e92-bbe7-e4085fd54467.png",
      title: "Residential Roof Replacement",
      location: "Midland, TX"
    },
    {
      id: 2,
      image: "/lovable-uploads/20e15359-2823-4915-9bb9-072d4a573428.png",
      title: "Quality Shingle Installation",
      location: "Odessa, TX"
    },
    {
      id: 3,
      image: "/lovable-uploads/2bf2fb87-9b64-430f-9dba-449a1a25544e.png",
      title: "Professional Roofing Craftsmanship",
      location: "Midland, TX"
    }
  ];

  const totalSlides = Math.ceil(projects.length / 3);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#169AFF] font-semibold mb-4 text-sm tracking-wide uppercase">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Explore Recent Projects
          </h2>
        </div>

        {/* Projects Grid - 4 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-1 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#169AFF] transition-all duration-300 rounded-full"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;