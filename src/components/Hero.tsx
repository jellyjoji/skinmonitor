import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              AI-Powered Precision Monitoring
            </div>
            <h1 className="mb-6">
              AI-Based Artificial Skin Abnormal Reaction Monitoring System
            </h1>
            <p className="mb-8 text-gray-600">
              Revolutionize your artificial skin experiments with our hybrid two-step AI verification system. 
              Detect abnormalities instantly, minimize false positives, and maximize research efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('solution')}>
                <Play className="mr-2 h-4 w-4" /> How It Works
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-blue-600 mb-1">95%+</div>
                <div className="text-gray-600">Data Reliability</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">{"<10%"}</div>
                <div className="text-gray-600">False Positives</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">30-50%</div>
                <div className="text-gray-600">Safety Increase</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758685848543-5c8ba81bc822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNoJTIwbGFib3JhdG9yeSUyMGV4cGVyaW1lbnR8ZW58MXx8fHwxNzYxMzAzOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Biotech Laboratory Experiment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <div className="text-gray-600">Real-time Detection</div>
                  <div className="text-green-600">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
