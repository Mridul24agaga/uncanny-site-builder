import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg"; 
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      image: project1,
      title: "Residential Roof Replacement",
      location: "Midland, TX"
    },
    {
      id: 2,
      image: project2,
      title: "Elegant Home Roofing",
      location: "Odessa, TX"
    },
    {
      id: 3,
      image: project3,
      title: "Modern Brick Home Roof",
      location: "Big Spring, TX"
    },
    {
      id: 4,
      image: project4,
      title: "Traditional Wood Home",
      location: "Midland, TX"
    }
  ];

  const totalSlides = Math.ceil(projects.length / 4);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">
            OUR WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Explore Recent Projects
          </h2>
        </div>

        {/* Projects Grid - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;