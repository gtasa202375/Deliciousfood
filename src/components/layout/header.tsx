"use client";

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChefHat, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { FormEvent, useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/browse', label: '浏览食谱' },
  { href: '/favorites', label: '我的收藏' },
  { href: '/suggest', label: 'AI 推荐' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">美食佳肴</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                      <ChefHat className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline text-lg">美食佳肴</span>
                    </Link>
                  </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      )}
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}

function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q') as string;
    if (query) {
      router.push(`/search?q=${query}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xs">
      <Input
        type="search"
        name="q"
        placeholder="搜索食谱或配料..."
        className="pr-10"
        defaultValue={defaultQuery}
      />
      <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
        <Search className="h-4 w-4" />
        <span className="sr-only">搜索</span>
      </Button>
    </form>
  );
}
