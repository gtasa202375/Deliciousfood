import { getRecipe } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Users, Soup } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FavoriteButton } from '@/components/favorite-button';
import { Separator } from '@/components/ui/separator';

type RecipePageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: RecipePageProps) {
  const recipe = getRecipe(params.id);

  if (!recipe) {
    return {
      title: '未找到食谱',
    };
  }

  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipe(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{recipe.title}</h1>
          <p className="text-lg text-muted-foreground">{recipe.description}</p>
        </div>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            data-ai-hint="recipe food plate"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">准备时间: {recipe.prepTime} 分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <Soup className="h-5 w-5 text-primary" />
              <span className="font-medium">烹饪时间: {recipe.cookTime} 分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">份量: {recipe.servings} 人份</span>
            </div>
          </div>
          <FavoriteButton recipeId={recipe.id} />
        </div>
        
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {recipe.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-headline mb-4">配料</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between border-b border-dashed pb-1">
                  <span>{ingredient.name}</span>
                  <span className="text-muted-foreground">{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-4">步骤</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="flex-1 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
