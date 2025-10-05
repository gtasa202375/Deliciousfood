import { searchRecipes } from '@/lib/data';
import { RecipeCard } from '@/components/recipe-card';
import { Search } from 'lucide-react';

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const query = searchParams.q;
  if (query) {
    return {
      title: `搜索 "${query}"`,
      description: `关于 "${query}" 的食谱搜索结果。`,
    };
  }
  return {
    title: '搜索食谱',
    description: '搜索您喜爱的食谱或配料。',
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const recipes = query ? searchRecipes(query) : [];

  return (
    <div className="container mx-auto px-4 py-8 min-h-[60vh]">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">
          {query ? `搜索结果: "${query}"` : '搜索食谱'}
        </h1>
      </div>

      {query && recipes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      
      {query && recipes.length === 0 && (
        <div className="text-center py-16 flex flex-col items-center gap-4">
          <Search className="h-16 w-16 text-muted-foreground/50" />
          <h2 className="text-2xl font-semibold">未找到结果</h2>
          <p className="text-muted-foreground max-w-md">
            抱歉，我们没有找到与 "{query}" 相关的食谱。请尝试其他关键词。
          </p>
        </div>
      )}

      {!query && (
         <div className="text-center py-16 flex flex-col items-center gap-4">
         <Search className="h-16 w-16 text-muted-foreground/50" />
         <h2 className="text-2xl font-semibold">搜索美味食谱</h2>
         <p className="text-muted-foreground max-w-md">
           在页面顶部的搜索框中输入食谱名称或配料，开始您的美食探索之旅。
         </p>
       </div>
      )}
    </div>
  );
}
