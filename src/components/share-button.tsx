"use client";

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  recipeId: string;
  recipeTitle: string;
}

export function ShareButton({ recipeId, recipeTitle }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/recipe/${recipeId}`;
    const shareData = {
      title: `看看这个食谱: ${recipeTitle}`,
      text: `我发现了一个很棒的食谱 "${recipeTitle}"，快来看看吧！`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('分享失败:', error);
        // 用户取消分享操作不会报错，所以这里主要处理实际的错误
      }
    } else {
      // 回退到复制链接
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: '链接已复制',
          description: '您可以将食谱链接粘贴给您的朋友。',
        });
      } catch (error) {
        console.error('复制失败:', error);
        toast({
          variant: 'destructive',
          title: '复制失败',
          description: '无法将链接复制到剪贴板。',
        });
      }
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleShare} aria-label="分享食谱">
      <Share2 className="h-5 w-5 text-muted-foreground" />
    </Button>
  );
}
