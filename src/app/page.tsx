import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories, getRecipes } from '@/lib/data';
import { RecipeCard } from '@/components/recipe-card';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const categories = getCategories().slice(0, 4);
  const featuredRecipes = getRecipes().slice(0, 3);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="relative container mx-auto px-4 flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground drop-shadow-md">
              探索数千种美味食谱
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-medium">
              从家常菜到米其林星级美食，开启您的烹饪之旅。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/browse">
                  浏览食谱 <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/suggest">AI 智能推荐</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">热门食谱</h2>
          <p className="text-muted-foreground max-w-xl">
            发现我们社区最受欢迎的食谱，为您的下一餐寻找灵感。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">按类别浏览</h2>
          <p className="text-muted-foreground max-w-xl">
            根据您的喜好，轻松找到不同类型的美味佳肴。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/browse/${category.slug}`}>
              <Card className="group overflow-hidden relative h-64 hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold font-headline text-white drop-shadow-lg">
                    {category.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/browse">查看所有分类</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
