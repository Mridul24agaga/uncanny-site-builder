import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Louie 510",
      profilePic: "/lovable-uploads/736dcf78-ee19-4a87-8ff4-e898a256bc19.png",
      timeAgo: "11 hours ago",
      rating: 5,
      text: "Great work, good communication, and overall a great team!"
    },
    {
      name: "David Hernandez", 
      profilePic: "/lovable-uploads/eea2af0b-a141-4e5e-9226-a2b75c47548f.png",
      timeAgo: "11 hours ago",
      rating: 5,
      text: "Extremely experienced and knowledgeable roofing company, highly recommended!"
    },
    {
      name: "Ivan Alvarado",
      profilePic: "/lovable-uploads/9429e377-0e4e-4448-a027-cd5bbf0c38af.png",
      timeAgo: "13 hours ago",
      rating: 5,
      text: "I love my new roof, Martin Compos and his team did a beautiful job. You can see the difference in my new roof, thank you so much to Happy Home Roof. I would recommend them 100% 🙏"
    },
    {
      name: "Juan Cabrera",
      profilePic: "/lovable-uploads/dd707ca4-ce08-4267-9042-30298c8e1667.png",
      timeAgo: "14 hours ago", 
      rating: 5,
      text: "They are reliable and efficient. Recommend them 100%"
    },
    {
      name: "Alicia Dendura",
      profilePic: "/lovable-uploads/9de20225-a3d4-4530-b184-93e82ea0f7b1.png",
      timeAgo: "14 hours ago",
      rating: 5,
      text: "Great service and detailed work! 100% recommended!!!"
    },
    {
      name: "Ivonne Nava",
      profilePic: "/lovable-uploads/341d79ee-8691-4acc-af3a-6bec6a276f42.png",
      timeAgo: "14 hours ago",
      rating: 5,
      text: "Highly recommend! Great customer service and love that it's a family business! Reach out to them for your needs."
    },
    {
      name: "Suzzett Rodriguez",
      profilePic: "/lovable-uploads/220bf27d-a4c0-47f4-9313-e11b32f78998.png",
      timeAgo: "14 hours ago",
      rating: 5,
      text: "Diego did a great job on our roof replacement. They had great communication and took care of the entire insurance process."
    },
    {
      name: "Javier",
      profilePic: "/lovable-uploads/bfff6401-79a3-457d-8a27-c02a5770e745.png",
      timeAgo: "14 hours ago",
      rating: 5,
      text: "Highly recommend - Martin and his crew took care of my roofing. On time, no price surprises and amazing customer service"
    },
    {
      name: "Saúl Fierro",
      profilePic: "/lovable-uploads/81729a25-9c7c-42c2-b076-e0719d0f7886.png",
      timeAgo: "14 hours ago",
      rating: 5,
      text: "They're a great group to work with, extremely informative and answered all my questions"
    }
  ];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / itemsPerSlide.desktop));
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / itemsPerSlide.desktop));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / itemsPerSlide.desktop)) % Math.ceil(reviews.length / itemsPerSlide.desktop));
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Check Out Our Reviews
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg border-border hover:bg-muted"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg border-border hover:bg-muted"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Reviews Carousel */}
          <div className="mx-8 md:mx-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide.desktop) }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews
                      .slice(slideIndex * itemsPerSlide.desktop, (slideIndex + 1) * itemsPerSlide.desktop)
                      .map((review, index) => (
                        <div 
                          key={slideIndex * itemsPerSlide.desktop + index}
                          className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img 
                                  src={review.profilePic} 
                                  alt={review.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground">{review.name}</h3>
                                <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                              </div>
                            </div>
                            <div className="w-6 h-6">
                              <svg viewBox="0 0 24 24" className="w-full h-full">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                            </div>
                          </div>
                          
                          <StarRating rating={review.rating} />
                          
                          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide.desktop) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;