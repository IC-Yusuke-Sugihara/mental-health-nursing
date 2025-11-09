import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";

interface AboutContent {
  hero_title: string;
  hero_subtitle: string;
  what_is_title: string;
  what_is_p1: string;
  what_is_p2: string;
  feature_1_title: string;
  feature_1_description: string;
  feature_2_title: string;
  feature_2_description: string;
  feature_3_title: string;
  feature_3_description: string;
  feature_4_title: string;
  feature_4_description: string;
  services_title: string;
  service_1_title: string;
  service_1_description: string;
  service_2_title: string;
  service_2_description: string;
  service_3_title: string;
  service_3_description: string;
  service_4_title: string;
  service_4_description: string;
  service_5_title: string;
  service_5_description: string;
  service_6_title: string;
  service_6_description: string;
  cta_title: string;
  cta_description: string;
}

export default function About() {
  const content = aboutData as AboutContent;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {content.hero_title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {content.hero_subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">{content.what_is_title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {content.what_is_p1}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {content.what_is_p2}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      {content.feature_1_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {content.feature_1_description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      {content.feature_2_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {content.feature_2_description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {content.feature_3_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {content.feature_3_description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      {content.feature_4_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {content.feature_4_description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Services */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">{content.services_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_1_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_1_description}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_2_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_2_description}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_3_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_3_description}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_4_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_4_description}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_5_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_5_description}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">{content.service_6_title}</span>
                        <p className="text-sm text-muted-foreground">{content.service_6_description}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  {content.cta_title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {content.cta_description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg">
                      お問い合わせ
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button size="lg" variant="outline">
                      テーマ一覧を見る
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
