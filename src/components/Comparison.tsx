import { Card, CardContent } from "./ui/card";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function Comparison() {
  const comparisonData = [
    {
      feature: "Detection Method",
      existing: "Single sensor or standalone image/chemical analysis",
      ours: "Hybrid two-step (Image → Chemical)",
      advantage: true
    },
    {
      feature: "Accuracy / False Positives",
      existing: "Low to moderate",
      ours: "Minimized false positives (<10%), improved detection accuracy",
      advantage: true
    },
    {
      feature: "Experimental Automation",
      existing: "Limited",
      ours: "Automatic records + report generation + visualization",
      advantage: true
    },
    {
      feature: "Researcher Intervention",
      existing: "High",
      ours: "Minimized → efficiency ↑",
      advantage: true
    },
    {
      feature: "Data Utilization",
      existing: "Individual collection",
      ours: "Integrated data management, AI-based visualization",
      advantage: true
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose SkinMonitor AI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our two-step hybrid AI verification system delivers superior performance across all key metrics
          </p>
        </div>

        {/* Desktop Table */}
        <Card className="hidden md:block max-w-5xl mx-auto">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Feature</TableHead>
                  <TableHead className="w-1/3">Existing Solutions</TableHead>
                  <TableHead className="w-1/3">AI-Based Two-Step System</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.feature}</TableCell>
                    <TableCell className="text-gray-600">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{row.existing}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{row.ours}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="mb-4">{row.feature}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Existing Solutions</div>
                    <div className="flex items-start gap-2 text-gray-600">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{row.existing}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Our Solution</div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{row.ours}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-center mb-8">Key Differentiation Points</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p><span className="font-medium">Two-step hybrid AI verification</span> → precise abnormal detection</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p><span className="font-medium">Automation + visualization</span> → enhanced efficiency and decision-making</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p><span className="font-medium">Customizable B2B solution</span> → select modules based on your needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p><span className="font-medium">AI-centric technology</span> → patent potential and competitive advantage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
