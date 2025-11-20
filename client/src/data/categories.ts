// カテゴリー定義 - 引きこもり支援プログラム

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  order: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'understanding-relationship',
    name: '理解と関係づくり',
    description: '引きこもりの背景を理解し、信頼関係を築く段階',
    color: 'understanding-relationship',
    order: 1
  },
  {
    id: 'lifestyle-recovery',
    name: '生活の立て直し',
    description: '生活リズムを整え、健康的な日常を取り戻す段階',
    color: 'lifestyle-recovery',
    order: 2
  },
  {
    id: 'social-preparation',
    name: '社会参加への準備',
    description: '段階的に外出し、社会性を回復していく段階',
    color: 'social-preparation',
    order: 3
  },
  {
    id: 'employment-support',
    name: '就労支援',
    description: '就労準備から職場定着まで、自立を支える段階',
    color: 'employment-support',
    order: 4
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return CATEGORIES.find(category => category.id === id);
};

export const getCategoryColor = (categoryId: string): string => {
  const category = getCategoryById(categoryId);
  return category?.color || 'gray';
};
