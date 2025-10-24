import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Camera, Beaker, Bell, BarChart3, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Two-Step Hybrid AI Verification System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our innovative approach combines image-based and chemical-based AI analysis for precise abnormality detection with minimized false positives.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <Card className="bg-white">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <p>Artificial Skin Sample</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-white text-blue-600">Step 1</Badge>
                <p>Image Analysis</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>

            <Card className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-white text-cyan-600">Step 2</Badge>
                <p>Chemical Analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <Badge className="mb-3 bg-blue-600">Step 1</Badge>
                  <h3 className="mb-3">Image-Based AI Analysis</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Capture artificial skin surface in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Detect color changes and surface pattern abnormalities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Automatically trigger Step 2 upon detecting minor abnormalities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-cyan-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <Badge className="mb-3 bg-cyan-600">Step 2</Badge>
                  <h3 className="mb-3">Chemical-Based AI Analysis</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Measure pH, absorption, and decomposition metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Confirm abnormalities based on Step 1 alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Minimize false positives and improve detection accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Automation Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-3">Instant Alert System</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Multi-channel alerts: email, app, lab monitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Priority settings based on abnormality levels (0-3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Immediate notification to researchers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-3">Automated Reports & Visualization</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Automatic experimental record updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Data visualization with trends and pattern charts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Minimal researcher intervention required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
