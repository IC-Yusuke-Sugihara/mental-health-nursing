import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                精神科訪問看護について
              </h1>
              <p className="text-lg text-muted-foreground">
                こころの健康を支える、地域に根ざした専門的なケア
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
                  <CardTitle className="text-2xl">精神科訪問看護とは</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    精神科訪問看護は、精神疾患を抱える方々が住み慣れた地域や自宅で安心して生活できるよう、専門的な知識と技術を持った看護師が定期的に訪問し、支援を行うサービスです。
                  </p>
                  <p className="text-foreground leading-relaxed">
                    医療機関での治療だけでなく、日常生活の中での困りごとや悩みに寄り添い、その方らしい生活を送れるようサポートします。服薬管理、症状の観察、生活リズムの調整、社会資源の活用など、幅広い支援を提供しています。
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      在宅での支援
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      ご自宅や生活の場に訪問し、実際の生活環境の中で必要な支援を提供します。病院では見えにくい日常の課題にも対応できます。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      専門的なケア
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      精神科看護の専門知識を持った看護師が、症状の観察、服薬管理、危機介入など、専門的なケアを提供します。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      家族支援
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      ご本人だけでなく、ご家族の相談にも応じます。介護負担の軽減や、適切な関わり方についてもアドバイスします。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      継続的な関わり
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      定期的な訪問により、長期的な視点で回復をサポートします。信頼関係を築きながら、その方のペースに合わせた支援を行います。
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Services */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">主な支援内容</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">症状の観察と健康管理</span>
                        <p className="text-sm text-muted-foreground">心身の状態を定期的に確認し、変化に早期に気づき対応します</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">服薬支援</span>
                        <p className="text-sm text-muted-foreground">正しい服薬ができるようサポートし、副作用の確認も行います</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">生活リズムの調整</span>
                        <p className="text-sm text-muted-foreground">睡眠、食事、活動のリズムを整え、安定した生活を支援します</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">社会資源の活用支援</span>
                        <p className="text-sm text-muted-foreground">利用できる制度やサービスの情報提供と活用をサポートします</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">危機介入</span>
                        <p className="text-sm text-muted-foreground">症状の悪化や緊急時に迅速に対応し、入院を予防します</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <div>
                        <span className="font-medium">社会参加の支援</span>
                        <p className="text-sm text-muted-foreground">就労、復学、地域活動など、社会とのつながりを支援します</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  もっと詳しく知りたい方へ
                </h3>
                <p className="text-muted-foreground mb-6">
                  精神科訪問看護のご利用や、学びのテーマについて<br className="hidden md:block" />
                  お気軽にお問い合わせください
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
