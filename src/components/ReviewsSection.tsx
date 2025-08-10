import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Jackson R",
      initials: "JR",
      timeAgo: "5 Days Ago",
      rating: 5,
      text: "I couldn't be happier with the roof repair service I received! The team was prompt, professional, and thorough. My roof looks amazing, and I feel confident it will withstand the unpredictable West Texas weather. Highly recommended!"
    },
    {
      name: "Maria T.", 
      initials: "MT",
      timeAgo: "7 Days Ago",
      rating: 5,
      text: "From the first call to project completion, their customer service was top-notch. They walked me through the entire process and answered all my questions. It's rare to find such courteous and knowledgeable roofing experts."
    },
    {
      name: "Chris L.",
      initials: "CL", 
      timeAgo: "10 Days Ago",
      rating: 5,
      text: "These folks take pride in their work! The quality of materials and attention to detail were impressive. My new roof looks fantastic and was completed on time without any issues. Great experience!"
    },
    {
      name: "Bethany M",
      initials: "BM",
      timeAgo: "3 Days Ago", 
      rating: 5,
      text: "In a world where it's hard to find good contractors, this company stands out. They provided a fair estimate, kept us updated throughout the project, and delivered excellent results. I wouldn't hesitate to call them again."
    }
  ];

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
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg border-border hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Reviews Grid */}
          <div className="mx-8 md:mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-foreground">
                          {review.initials}
                        </span>
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
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;