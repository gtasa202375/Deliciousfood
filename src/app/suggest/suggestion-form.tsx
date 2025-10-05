"use client";

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { recipeSuggestionFromIngredients, RecipeSuggestionFromIngredientsOutput } from '@/ai/flows/recipe-suggestion-from-ingredients';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type FormState = {
  data: RecipeSuggestionFromIngredientsOutput | null;
  error: string | null;
};

const initialState: FormState = {
  data: null,
  error: null,
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
    return { data: null, error: '请输入至少一种食材。' };
  }

  try {
    const result = await recipeSuggestionFromIngredients({ ingredients });
    return { data: result, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: '抱歉，推荐服务暂时不可用，请稍后再试。' };
  }
}

function SubmitButton() {
  // `useFormStatus` is not available yet in the installed Next.js version
  // A simple loading state can be managed with `useActionState`
  // For a better UX, a more complex state management would be needed.
  // For now, we will rely on the form state change to show results.
  return <Button type="submit" className="w-full">获取食谱推荐</Button>;
}

export function SuggestionForm() {
  const [state, formAction] = useActionState(getRecipeSuggestion, initialState);

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <Textarea
          name="ingredients"
          placeholder="例如：鸡蛋, 番茄, 葱..."
          rows={4}
          required
          className="text-base"
        />
        <SubmitButton />
      </form>

      {state.error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>出错了</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{state.data.recipeName}</CardTitle>
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
