import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: '美食佳肴 (Měishí jiāyáo)',
  description: '一个用户友好且功能丰富的食谱发现与管理应用程序。',
  keywords: ['食谱', '做饭', '美食', '菜谱', 'AI', 'recipe', 'cooking', 'food'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen bg-background text-foreground")}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="py-8 text-center text-muted-foreground">
            <p>美食佳肴 &copy; 2025</p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
