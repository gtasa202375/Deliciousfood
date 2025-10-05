import { getCategory, getRecipes } from '@/lib/data';
import { RecipeCard } from '@/components/recipe-card';
import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: '未找到分类',
    };
  }

  return {
    title: `${category.name}食谱`,
    description: `探索 ${category.name}分类下的所有美味食谱。`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) {
    notFound();
  }

  const recipes = getRecipes(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{category.name}</h1>
        <p className="text-lg text-muted-foreground mt-2">{category.description}</p>
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">该分类下暂无食谱。</p>
        </div>
      )}
    </div>
  );
}
