import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import themesData from "@/data/themes.json";
import { ArrowLeft, CheckCircle2, Lightbulb, Calendar, Clock, Video } from "lucide-react";

interface Theme {
  id: string;
  category: string;
  categoryId: string;
  priority: string;
  target: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  nursingPerspective: string;
  schedule?: {
    date: string;
    time: string;
    format: string;
    onlineLink: string;
    capacity: number | null;
    status: string;
  };
}

interface ThemesData {
  categories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  themes: Theme[];
}

const categoryColors: Record<string, string> = {
  "understanding-relationship": "bg-primary/10 text-primary border-primary/20",
  "lifestyle-recovery": "bg-green-500/10 text-green-700 border-green-500/20",
  "social-preparation": "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "employment-support": "bg-purple-500/10 text-purple-700 border-purple-500/20",
};

export default function ThemeDetail() {
  const [, params] = useRoute("/theme/:id");
  const data = themesData as ThemesData;
  const theme = data.themes.find(t => t.id === params?.id);

  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">テーマが見つかりません</h1>
            <Link href="/">
              <Button>トップページへ戻る</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="container">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                テーマ一覧に戻る
              </Button>
            </Link>
          </div>
        </section>

        {/* Theme Header */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className={categoryColors[theme.categoryId] || ""}>
                  {theme.category}
                </Badge>
                <Badge variant="outline" className="bg-muted">
                  対象: {theme.target}
                </Badge>
                {theme.priority === "高" && (
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    注目のテーマ
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {theme.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {theme.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Theme Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    このテーマについて
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {theme.description}
                  </p>
                </CardContent>
              </Card>

              {/* Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    学べる内容
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {theme.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Nursing Perspective */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">訪問看護ならではの視点</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {theme.nursingPerspective}
                  </p>
                </CardContent>
              </Card>

              {/* Schedule & Participation */}
              {theme.schedule && (
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">開催情報・参加方法</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">開催日</p>
                            <p className="text-lg font-bold">
                              {new Date(theme.schedule.date).toLocaleDateString('ja-JP', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric', 
                                weekday: 'short' 
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">時間</p>
                            <p className="text-lg font-bold">{theme.schedule.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Video className="h-6 w-6 text-primary mt-1" />
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground mb-1">参加形式</p>
                            <p className="text-lg font-bold">{theme.schedule.format}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <Badge className="w-fit text-base px-4 py-2 bg-green-500/20 text-green-700 border-green-500/30">
                          {theme.schedule.status}
                        </Badge>
                        <a 
                          href={theme.schedule.onlineLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button size="lg" className="w-full gap-2">
                            <Video className="h-5 w-5" />
                            メタバース会場に参加する
                          </Button>
                        </a>
                        <p className="text-sm text-muted-foreground text-center">
                          ※ 開催時間になりましたら上記ボタンからご参加ください
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  このテーマにご興味をお持ちの方へ
                </h3>
                <p className="text-muted-foreground mb-6">
                  開催日程や参加方法について、お気軽にお問い合わせください
                </p>
                <Link href="/contact">
                  <Button size="lg">
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
