'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting recipes based on a list of ingredients provided by the user.
 *
 * - recipeSuggestionFromIngredients - An async function that takes a list of ingredients and returns a recipe suggestion.
 * - RecipeSuggestionFromIngredientsInput - The input type for the recipeSuggestionFromIngredients function.
 * - RecipeSuggestionFromIngredientsOutput - The output type for the recipeSuggestionFromIngredients function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeSuggestionFromIngredientsInputSchema = z.object({
  ingredients: z.array(z.string()).describe('A list of ingredients the user has available.'),
});
export type RecipeSuggestionFromIngredientsInput = z.infer<typeof RecipeSuggestionFromIngredientsInputSchema>;

const RecipeSuggestionFromIngredientsOutputSchema = z.object({
  recipeName: z.string().describe('The name of the suggested recipe.'),
  ingredients: z.array(z.string()).describe('The ingredients required for the recipe, with quantities.'),
  instructions: z.array(z.string()).describe('Step-by-step instructions for preparing the recipe.'),
});
export type RecipeSuggestionFromIngredientsOutput = z.infer<typeof RecipeSuggestionFromIngredientsOutputSchema>;

export async function recipeSuggestionFromIngredients(input: RecipeSuggestionFromIngredientsInput): Promise<RecipeSuggestionFromIngredientsOutput> {
  return recipeSuggestionFromIngredientsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeSuggestionFromIngredientsPrompt',
  input: {schema: RecipeSuggestionFromIngredientsInputSchema},
  output: {schema: RecipeSuggestionFromIngredientsOutputSchema},
  prompt: `You are a recipe suggestion AI. A user will provide you with a list of ingredients they have on hand, and you will suggest a recipe that can be made with those ingredients. Return the recipe name, a detailed list of ingredients including quantities, and step-by-step instructions. Respond in Chinese.

Ingredients: {{ingredients}}
`,
});

const recipeSuggestionFromIngredientsFlow = ai.defineFlow(
  {
    name: 'recipeSuggestionFromIngredientsFlow',
    inputSchema: RecipeSuggestionFromIngredientsInputSchema,
    outputSchema: RecipeSuggestionFromIngredientsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
