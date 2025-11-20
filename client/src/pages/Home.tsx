import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeCard from "@/components/ThemeCard";
import { Button } from "@/components/ui/button";
import themesData from "@/data/themes.json";
import { Heart, Users, Briefcase, Clock } from "lucide-react";

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

interface Category {
  id: string;
  name: string;
  description: string;
}

interface ThemesData {
  categories: Category[];
  themes: Theme[];
}

// カテゴリーごとのアイコンマッピング
const categoryIcons: Record<string, typeof Heart> = {
  "understanding-relationship": Heart,
  "lifestyle-recovery": Clock,
  "social-preparation": Users,
  "employment-support": Briefcase,
};

export default function Home() {
  const data = themesData as ThemesData;
  
  const categories = useMemo(() => {
    return data.categories.map(cat => ({
      ...cat,
      icon: categoryIcons[cat.id] || Heart
    }));
  }, []);

  const themesByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      themes: data.themes.filter(theme => theme.categoryId === category.id)
    }));
  }, [categories]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                こころの健康を、<br className="md:hidden" />みんなで学ぶ
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                精神科訪問看護の専門家が、一般の方々に向けて<br className="hidden md:block" />
                メンタルヘルスに関する様々なテーマをお話しします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base" onClick={() => {
                  document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  テーマを探す
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => {
                  window.location.href = '/about';
                }}>
                  訪問看護について
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">現場の経験から</h3>
                <p className="text-sm text-muted-foreground">
                  訪問看護の現場で培われた実践的な知識と経験をお伝えします
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">誰でも参加できる</h3>
                <p className="text-sm text-muted-foreground">
                  専門知識がなくても理解できる、分かりやすい内容です
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">実践的な学び</h3>
                <p className="text-sm text-muted-foreground">
                  日常生活ですぐに活かせる具体的な方法をご紹介します
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section id="themes" className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">学びのテーマ</h2>
              <p className="text-muted-foreground">
                あなたの関心に合わせて、様々なテーマからお選びいただけます
              </p>
            </div>

            {themesByCategory.map((category) => (
              category.themes.length > 0 && (
                <div key={category.id} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.themes.map((theme) => (
                      <ThemeCard
                        key={theme.id}
                        id={theme.id}
                        title={theme.title}
                        subtitle={theme.subtitle}
                        description={theme.description}
                        priority={theme.priority}
                        target={theme.target}
                        categoryId={theme.categoryId}
                        schedule={theme.schedule}
                      />
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ご質問やご相談はお気軽に
              </h2>
              <p className="text-muted-foreground mb-8">
                テーマの内容や参加方法について、<br className="md:hidden" />お気軽にお問い合わせください
              </p>
              <Button size="lg" variant="outline" onClick={() => {
                window.location.href = '/contact';
              }}>
                お問い合わせ
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
