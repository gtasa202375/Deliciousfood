export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type Ingredient = {
  name:string;
  quantity: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string; // slug of category
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  tags?: string[];
};
