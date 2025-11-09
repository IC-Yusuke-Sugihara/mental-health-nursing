import { Link } from "wouter";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
              <Heart className="h-6 w-6" fill="currentColor" />
              <span className="font-bold text-lg">精神科訪問看護 学びのテーマ</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                テーマ一覧
              </span>
            </Link>
            <Link href="/about">
              <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                訪問看護について
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                お問い合わせ
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
