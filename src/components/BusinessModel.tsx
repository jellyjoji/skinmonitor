import { Card, CardContent } from "./ui/card";
import { Building2, Package, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

export function BusinessModel() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Business Model</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible B2B solutions tailored to your organization's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mb-3">Target Clients</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Cosmetics companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Topical products manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Pharmaceutical companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Biotech research labs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="mb-3">Pricing Models</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Subscription-based pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Usage-based billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Enterprise licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Custom solutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="mb-3">Integration Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Full hybrid system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Modular components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>API integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Custom workflows</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <Badge className="bg-white text-blue-600 mb-4">Modular & Integrated</Badge>
              <h3 className="text-white mb-3">Flexible Implementation</h3>
              <p className="text-blue-100">
                Choose the modules that fit your needs, or deploy the complete hybrid two-step system for maximum efficiency and reliability
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="mb-2">Image Analysis Module</p>
                <p className="text-sm text-blue-100">Visual abnormality detection</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="mb-2">Chemical Analysis Module</p>
                <p className="text-sm text-blue-100">Precision chemical verification</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="mb-2">Alert System</p>
                <p className="text-sm text-blue-100">Multi-channel notifications</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="mb-2">Data Visualization</p>
                <p className="text-sm text-blue-100">Automated reports & insights</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
