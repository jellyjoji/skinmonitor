import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Settings } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "30-50% increase in experimental safety through immediate abnormal detection",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "25-35% improvement in research efficiency through automation and visualization",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "20-40% reduction in costs for repeated experiments and management",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Database,
      title: "Data Reliability",
      description: ">95% data reliability with AI-based precision analysis",
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      icon: CheckCircle2,
      title: "Minimal False Positives",
      description: "<10% false positive rate through two-step verification",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: Settings,
      title: "Modular Integration",
      description: "Customizable modules based on your company's specific needs",
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Key Features & Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered system delivers measurable improvements across all aspects of artificial skin research
          </p>
        </div>

        <Tabs defaultValue="features" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="features">Core Features</TabsTrigger>
            <TabsTrigger value="benefits">Business Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <div className="grid md:grid-cols-3 gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-14 h-14 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
              {features.slice(3, 6).map((feature, index) => (
                <Card key={index + 3} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-14 h-14 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="mb-4">For Researchers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Real-time monitoring without constant supervision</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Automated documentation and report generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Visual insights for better decision-making</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Reduced workload and human error</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="mb-4">For Organizations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Significant cost savings on repeated experiments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Improved research output and quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Competitive advantage through AI technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Scalable solution for multiple labs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
