"use client";

import { useActionState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { recipeSuggestionFromIngredients, RecipeSuggestionFromIngredientsOutput } from '@/ai/flows/recipe-suggestion-from-ingredients';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

type FormState = {
  data: RecipeSuggestionFromIngredientsOutput | null;
  error: string | null;
  pending: boolean;
};

const initialState: FormState = {
  data: null,
  error: null,
  pending: false,
};

async function getRecipeSuggestion(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const ingredients = (formData.get('ingredients') as string)
    .split(/[,，\n]/)
    .map(i => i.trim())
    .filter(i => i.length > 0);

  if (ingredients.length === 0) {
    return { data: null, error: '请输入至少一种食材。', pending: false };
  }

  try {
    const result = await recipeSuggestionFromIngredients({ ingredients });
    return { data: result, error: null, pending: false };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: '抱歉，推荐服务暂时不可用，请稍后再试。', pending: false };
  }
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          正在生成...
        </>
      ) : (
        '获取食谱推荐'
      )}
    </Button>
  );
}

export function SuggestionForm() {
  const [state, formAction, isPending] = useActionState(getRecipeSuggestion, initialState);

  const handleDownload = () => {
    if (state.data?.imageUrl) {
      const link = document.createElement('a');
      link.href = state.data.imageUrl;
      link.download = `${state.data.recipeName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <div>
      <form action={formAction} className="space-y-4">
        <Textarea
          name="ingredients"
          placeholder="例如：鸡蛋, 番茄, 葱..."
          rows={4}
          required
          className="text-base"
          disabled={isPending}
        />
        <SubmitButton pending={isPending} />
      </form>

      {isPending && (
         <div className="text-center mt-8 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">AI 正在为您精心创作，请稍候...</p>
         </div>
      )}


      {state.error && !isPending && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>出错了</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && !isPending && (
        <Card className="mt-8 overflow-hidden">
          {state.data.imageUrl && (
            <div className="relative aspect-video w-full">
              <Image
                src={state.data.imageUrl}
                alt={state.data.recipeName}
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardHeader className="flex flex-row items-start justify-between">
            <CardTitle className="font-headline text-2xl">{state.data.recipeName}</CardTitle>
            {state.data.imageUrl && (
              <Button variant="outline" size="icon" onClick={handleDownload} aria-label="下载图片">
                <Download className="h-5 w-5" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">所需配料:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {state.data.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">制作步骤:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                {state.data.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
