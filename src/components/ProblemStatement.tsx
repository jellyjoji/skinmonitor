import { Card, CardContent } from "./ui/card";
import { AlertCircle, Clock, TrendingDown } from "lucide-react";

export function ProblemStatement() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Delayed Abnormal Detection",
      description: "Minor issues often go unnoticed until they become critical, compromising experiment integrity and safety.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: Clock,
      title: "High Manual Workload",
      description: "Recording and reporting data manually is time-consuming, reducing research efficiency and increasing human error.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: TrendingDown,
      title: "Limited Data Utilization",
      description: "Trends and patterns are difficult to track without proper visualization and analysis tools.",
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">The Challenge in Artificial Skin Research</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artificial skin experiments are essential in cosmetics, pharmaceuticals, and biotech. 
            However, current methods face critical challenges that impact research quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 ${problem.bg} rounded-full flex items-center justify-center mb-4`}>
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
