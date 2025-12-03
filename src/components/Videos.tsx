import { Card } from "@/components/ui/card";
import { Play, Users, Package } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: "about-team",
      icon: Users,
      title: "Meet Our Team",
      description: "Get to know the passionate developers and AI experts behind PixelCheck. Learn about our mission to combat misinformation.",
      videoUrl: "https://www.youtube.com/embed/29eclEERjlE", 
      placeholder: false
    },
    {
      id: "about-product",
      icon: Package,
      title: "About PixelCheck",
      description: "Discover how PixelCheck works and why it's the most reliable solution for detecting AI-generated images.",
      videoUrl: "https://www.youtube.com/embed/8NNYcHtn4Mo",
      placeholder: false
    }
  ];

  return (
    <section id="videos" className="py-24 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learn More About Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our videos to learn about the team behind PixelCheck and how our technology works
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => {
              const Icon = video.icon;
              return (
                <Card 
                  key={video.id} 
                  className="overflow-hidden border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50">
                    {video.videoUrl && !video.placeholder ? (
                      <iframe
                        src={video.videoUrl}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      /* Placeholder when no video URL is set */
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <div className="p-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Play className="w-12 h-12 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">Video coming soon</span>
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{video.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
