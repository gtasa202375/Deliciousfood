import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FavoriteButton } from './favorite-button';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/recipe/${recipe.id}`} className="block">
        <div className="relative h-56 w-full">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="recipe food"
          />
        </div>
      </Link>
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-xl leading-snug">
          <Link href={`/recipe/${recipe.id}`} className="hover:text-primary transition-colors">
            {recipe.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-2 text-sm">{recipe.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime + recipe.cookTime} 分钟</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} 人份</span>
          </div>
        </div>
        <FavoriteButton recipeId={recipe.id} />
      </CardFooter>
    </Card>
  );
}
