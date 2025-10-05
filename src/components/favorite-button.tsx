"use client";

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FavoriteButtonProps {
  recipeId: string;
}

export function FavoriteButton({ recipeId }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation if inside a card
    toggleFavorite(recipeId);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Heart className="h-5 w-5" />
      </Button>
    );
  }

  const favorite = isFavorite(recipeId);

  return (
    <Button variant="ghost" size="icon" onClick={handleFavoriteClick} aria-label={favorite ? '从收藏夹中移除' : '添加到收藏夹'}>
      <Heart
        className={cn(
          'h-5 w-5 transition-colors',
          favorite ? 'text-red-500 fill-red-500' : 'text-muted-foreground'
        )}
      />
    </Button>
  );
}
