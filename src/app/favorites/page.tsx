"use client";

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { getRecipe } from '@/lib/data';
import type { Recipe } from '@/lib/types';
import { RecipeCard } from '@/components/recipe-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const recipes = favorites
      .map(id => getRecipe(id))
      .filter((recipe): recipe is Recipe => recipe !== undefined);
    setFavoriteRecipes(recipes);
  }, [favorites]);

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">我的收藏</h1>
          <p className="text-lg text-muted-foreground mt-2">正在加载您收藏的美味食谱...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">我的收藏</h1>
        <p className="text-lg text-muted-foreground mt-2">您已收藏的美味食谱。</p>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 flex flex-col items-center gap-4">
          <Heart className="h-16 w-16 text-muted-foreground/50" />
          <h2 className="text-2xl font-semibold">您的收藏夹是空的</h2>
          <p className="text-muted-foreground max-w-md">
            去浏览一些美味的食谱，然后点击心形图标将它们保存到这里吧！
          </p>
          <Button asChild className="mt-4">
            <Link href="/browse">开始浏览</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
