import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { TrendingUp, DollarSign, Target, Award } from "lucide-react";

export function Impact() {
  const impactData = [
    { metric: "Safety", improvement: 40 },
    { metric: "Cost Reduction", improvement: 30 },
    { metric: "Efficiency", improvement: 30 },
    { metric: "Reliability", improvement: 95 }
  ];

  const timelineData = [
    { month: "Month 1", accuracy: 75, efficiency: 60 },
    { month: "Month 2", accuracy: 82, efficiency: 70 },
    { month: "Month 3", accuracy: 88, efficiency: 80 },
    { month: "Month 4", accuracy: 92, efficiency: 88 },
    { month: "Month 5", accuracy: 95, efficiency: 92 },
    { month: "Month 6", accuracy: 96, efficiency: 95 }
  ];

  const keyMetrics = [
    {
      icon: TrendingUp,
      value: "30-50%",
      label: "Safety Increase",
      description: "Immediate abnormal detection",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: DollarSign,
      value: "20-40%",
      label: "Cost Reduction",
      description: "Reduced repeated experiments",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Target,
      value: "25-35%",
      label: "Efficiency Boost",
      description: "Through data visualization",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Award,
      value: ">95%",
      label: "Data Reliability",
      description: "AI-driven accuracy",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Measurable Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quantifiable improvements across all key performance indicators
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`w-14 h-14 ${metric.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-7 h-7 ${metric.color}`} />
                </div>
                <div className={`text-3xl mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="mb-1">{metric.label}</div>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Performance Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="improvement" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6-Month Performance Trajectory</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} name="Accuracy %" />
                  <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} name="Efficiency %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Investor Benefits */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2">
            <CardContent className="pt-6">
              <h3 className="text-center mb-8">Investor Perspective</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="mb-1">AI-driven technology with patent potential</p>
                    <p className="text-sm text-gray-600">Unique two-step verification approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="mb-1">Long-term R&D cost reduction</p>
                    <p className="text-sm text-gray-600">20-40% operational cost savings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="mb-1">Competitive market advantage</p>
                    <p className="text-sm text-gray-600">First-mover in hybrid AI monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="mb-1">Scalable B2B revenue model</p>
                    <p className="text-sm text-gray-600">Subscription and usage-based pricing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
