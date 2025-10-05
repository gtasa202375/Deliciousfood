import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: '浏览食谱分类',
  description: '按分类探索各种美味食谱。',
};

export default function BrowsePage() {
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">食谱分类</h1>
        <p className="text-lg text-muted-foreground mt-2">选择一个分类开始您的美食探索之旅。</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link href={`/browse/${category.slug}`} key={category.id} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  data-ai-hint="food category"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
