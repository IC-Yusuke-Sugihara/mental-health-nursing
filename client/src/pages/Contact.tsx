import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("お問い合わせを受け付けました。後ほどご連絡いたします。");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                お問い合わせ
              </h1>
              <p className="text-lg text-muted-foreground">
                テーマの内容や参加方法について、お気軽にお問い合わせください
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>お問い合わせフォーム</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">お名前 *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="山田 太郎"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">メールアドレス *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="example@email.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">件名 *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="テーマについての質問"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">お問い合わせ内容 *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="お問い合わせ内容をご記入ください"
                          rows={6}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        送信する
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>お問い合わせ先</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">メール</p>
                          <p className="text-sm text-muted-foreground">
                            info@example.com
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">電話</p>
                          <p className="text-sm text-muted-foreground">
                            03-XXXX-XXXX
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            受付時間: 平日 9:00-17:00
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">所在地</p>
                          <p className="text-sm text-muted-foreground">
                            〒XXX-XXXX<br />
                            東京都○○区○○ X-X-X
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary">よくあるご質問</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="font-medium text-sm mb-1">Q. 参加費用はかかりますか?</p>
                        <p className="text-sm text-muted-foreground">
                          A. 全てのテーマは無料でご参加いただけます。
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1">Q. オンラインでの参加は可能ですか?</p>
                        <p className="text-sm text-muted-foreground">
                          A. はい、全てのテーマはメタバース（VketCloud）で開催しています。
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1">Q. 専門知識がなくても参加できますか?</p>
                        <p className="text-sm text-muted-foreground">
                          A. はい、どなたでもご参加いただけます。分かりやすく解説します。
                        </p>
                      </div>
                    </CardContent>
                  </Card>
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
