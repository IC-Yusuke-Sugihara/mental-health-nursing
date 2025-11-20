import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface ThemeCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priority: string;
  target: string;
  categoryId: string;
  schedule?: {
    date: string;
    time: string;
    format: string;
    status: string;
  };
}

const categoryColors: Record<string, string> = {
  "understanding-relationship": "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "lifestyle-recovery": "bg-green-500/10 text-green-700 border-green-500/20",
  "social-preparation": "bg-blue-500/10 text-blue-700 border-blue-500/20",
  "employment-support": "bg-purple-500/10 text-purple-700 border-purple-500/20",
};

// ステータスごとの色設定
const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "受付中":
      return "bg-green-500 text-white border-green-600";
    case "終了":
      return "bg-black text-white border-gray-800";
    default:
      return "bg-gray-500 text-white border-gray-600";
  }
};

export default function ThemeCard({ id, title, subtitle, description, priority, target, categoryId, schedule }: ThemeCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' });
  };

  return (
    <Link href={`/theme/${id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group border-2">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="outline" className={categoryColors[categoryId] || ""}>
              {target}
            </Badge>
            {priority === "高" && (
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                注目
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-sm font-medium">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>
          
          {schedule && (
            <div className="space-y-2 mb-4 pb-4 border-b">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{formatDate(schedule.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>{schedule.time} ({schedule.format})</span>
              </div>
              
              {/* ステータスバッジ - 色分け適用 */}
              <Badge className={getStatusBadgeClass(schedule.status)}>
                {schedule.status}
              </Badge>
            </div>
          )}
          
          <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
            詳しく見る
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
