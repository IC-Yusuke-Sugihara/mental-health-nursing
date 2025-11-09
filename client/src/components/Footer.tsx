import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="h-5 w-5" fill="currentColor" />
            <span className="text-sm">精神科訪問看護 学びのテーマ</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            こころの健康を支える、地域に根ざした訪問看護
          </p>
        </div>
      </div>
    </footer>
  );
}
