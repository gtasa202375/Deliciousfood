"use client";

import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';

const FAVORITES_KEY = 'favoriteRecipes';

export const useFavorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('无法从 localStorage 读取收藏夹', error);
    }
  }, []);

  const updateLocalStorage = (newFavorites: string[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('无法将收藏夹保存到 localStorage', error);
    }
  };

  const addFavorite = useCallback((recipeId: string) => {
    const newFavorites = [...favorites, recipeId];
    updateLocalStorage(newFavorites);
    toast({
      title: '添加成功',
      description: '食谱已添加到您的收藏夹。',
    });
  }, [favorites, toast]);

  const removeFavorite = useCallback((recipeId: string) => {
    const newFavorites = favorites.filter((id) => id !== recipeId);
    updateLocalStorage(newFavorites);
    toast({
      title: '移除成功',
      description: '食谱已从您的收藏夹中移除。',
    });
  }, [favorites, toast]);

  const isFavorite = useCallback((recipeId: string) => {
    return favorites.includes(recipeId);
  }, [favorites]);

  const toggleFavorite = useCallback((recipeId: string) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  }, [isFavorite, addFavorite, removeFavorite]);

  return { favorites, toggleFavorite, isFavorite, addFavorite, removeFavorite };
};
