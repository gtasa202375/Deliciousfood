import { Recipe, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const categories: Category[] = [
  { id: 'cat-1', name: '家常菜', slug: 'home-cooking', image: PlaceHolderImages.find(p => p.id === 'category-1')?.imageUrl!, description: '简单又美味的日常菜肴。' },
  { id: 'cat-2', name: '快手菜', slug: 'quick-meals', image: PlaceHolderImages.find(p => p.id === 'category-2')?.imageUrl!, description: '30分钟内即可完成的美味。' },
  { id: 'cat-3', name: '烘焙坊', slug: 'baking', image: PlaceHolderImages.find(p => p.id === 'category-3')?.imageUrl!, description: '香甜可口的面包与甜点。' },
  { id: 'cat-4', name: '暖心汤羹', slug: 'soups', image: PlaceHolderImages.find(p => p.id === 'category-4')?.imageUrl!, description: '滋补养身的美味汤品。' },
];

const recipes: Recipe[] = [
  {
    id: 'rec-1',
    title: '红烧肉',
    description: '一道经典的中国家常菜，肥而不腻，入口即化。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-1')?.imageUrl!,
    category: 'home-cooking',
    prepTime: 20,
    cookTime: 90,
    servings: 4,
    ingredients: [
      { name: '五花肉', quantity: '500克' },
      { name: '姜', quantity: '3片' },
      { name: '葱', quantity: '2根' },
      { name: '八角', quantity: '2个' },
      { name: '冰糖', quantity: '30克' },
      { name: '老抽', quantity: '1汤匙' },
      { name: '生抽', quantity: '2汤匙' },
      { name: '料酒', quantity: '2汤匙' },
    ],
    instructions: [
      '五花肉切块，冷水下锅，加入姜片和料酒，焯水后捞出洗净。',
      '锅中少许油，放入冰糖，小火炒出糖色。',
      '下五花肉翻炒至上色。',
      '加入葱、姜、八角，淋入生抽、老抽翻炒均匀。',
      '加入足量开水没过五花肉，大火烧开转小火炖煮1小时。',
      '大火收汁，至汤汁浓稠即可。'
    ],
    tags: ['猪肉', '炖菜'],
  },
  {
    id: 'rec-2',
    title: '番茄炒蛋',
    description: '简单快手的国民菜肴，酸甜可口，营养丰富。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-2')?.imageUrl!,
    category: 'quick-meals',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    ingredients: [
      { name: '番茄', quantity: '2个' },
      { name: '鸡蛋', quantity: '3个' },
      { name: '葱花', quantity: '适量' },
      { name: '盐', quantity: '半茶匙' },
      { name: '糖', quantity: '1茶匙' },
    ],
    instructions: [
      '番茄洗净去皮切块，鸡蛋打散。',
      '热锅热油，倒入蛋液炒熟盛出。',
      '锅中留底油，放入番茄块翻炒至软烂出汁。',
      '加入炒好的鸡蛋，调入盐和糖，翻炒均匀。',
      '撒上葱花即可出锅。'
    ],
    tags: ['鸡蛋', '素菜', '快手菜'],
  },
  {
    id: 'rec-3',
    title: '可乐鸡翅',
    description: '一道广受欢迎的菜肴，咸甜交织，深受孩子们的喜爱。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-3')?.imageUrl!,
    category: 'home-cooking',
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    ingredients: [
      { name: '鸡中翅', quantity: '10个' },
      { name: '可乐', quantity: '1罐' },
      { name: '姜', quantity: '2片' },
      { name: '料酒', quantity: '1汤匙' },
      { name: '生抽', quantity: '2汤匙' },
    ],
    instructions: [
      '鸡翅洗净，两面划几刀，便于入味。',
      '冷水下锅，加入姜片和料酒，焯水后捞出。',
      '锅中少许油，将鸡翅煎至两面金黄。',
      '倒入生抽翻炒均匀。',
      '倒入可乐，没过鸡翅，大火烧开转小火煮20分钟。',
      '大火收汁至汤汁浓稠即可。'
    ],
    tags: ['鸡肉', '快手菜'],
  },
  {
    id: 'rec-4',
    title: '戚风蛋糕',
    description: '口感轻盈、湿润柔软的蛋糕，是烘焙入门的经典之选。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-4')?.imageUrl!,
    category: 'baking',
    prepTime: 30,
    cookTime: 50,
    servings: 8,
    ingredients: [
      { name: '鸡蛋', quantity: '5个' },
      { name: '低筋面粉', quantity: '85克' },
      { name: '细砂糖（蛋黄用）', quantity: '20克' },
      { name: '细砂糖（蛋白用）', quantity: '60克' },
      { name: '牛奶', quantity: '50克' },
      { name: '玉米油', quantity: '40克' },
      { name: '柠檬汁', quantity: '几滴' },
    ],
    instructions: [
      '蛋黄蛋白分离。蛋黄中加入20克糖、牛奶、玉米油，搅打均匀。',
      '筛入低筋面粉，用“Z”字形手法搅匀成蛋黄糊。',
      '蛋白中滴入柠檬汁，分三次加入60克糖，打发至硬性发泡。',
      '取三分之一蛋白霜与蛋黄糊翻拌均匀。',
      '将混合好的面糊倒回剩余的蛋白霜中，继续翻拌均匀。',
      '倒入8寸模具，震出气泡。',
      '放入预热150度的烤箱，烘烤50分钟。',
      '出炉后倒扣冷却，然后脱模。'
    ],
    tags: ['甜点', '蛋糕', '烘焙'],
  },
  {
    id: 'rec-5',
    title: '麻婆豆腐',
    description: '川菜中的名品，麻辣鲜香，非常下饭。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-5')?.imageUrl!,
    category: 'home-cooking',
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    ingredients: [
        { name: '嫩豆腐', quantity: '1块' },
        { name: '牛肉末', quantity: '100克' },
        { name: '豆瓣酱', quantity: '2汤匙' },
        { name: '花椒粉', quantity: '1茶匙' },
        { name: '辣椒粉', quantity: '1茶匙' },
        { name: '蒜末', quantity: '适量' },
        { name: '姜末', quantity: '适量' },
        { name: '葱花', quantity: '适量' },
        { name: '水淀粉', quantity: '适量' },
    ],
    instructions: [
        '豆腐切小块，放入加盐的沸水中焯烫一下，捞出沥干。',
        '热锅冷油，下牛肉末炒散至变色。',
        '加入豆瓣酱、蒜末、姜末炒出红油。',
        '加入适量水（或高汤），烧沸。',
        '下豆腐块，轻轻推动，煮约3-5分钟。',
        '淋入水淀粉勾芡，分两到三次加入，让汤汁包裹住豆腐。',
        '起锅前撒上花椒粉和辣椒粉，最后撒上葱花即可。'
    ],
    tags: ['川菜', '豆腐', '辣'],
  },
  {
    id: 'rec-8',
    title: '云吞面',
    description: '一道经典的广式小吃，汤鲜味美，云吞爽滑。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-8')?.imageUrl!,
    category: 'soups',
    prepTime: 25,
    cookTime: 10,
    servings: 2,
    ingredients: [
        { name: '鲜虾云吞', quantity: '12个' },
        { name: '碱水面', quantity: '200克' },
        { name: '猪骨高汤', quantity: '500毫升' },
        { name: '大地鱼粉', quantity: '1茶匙' },
        { name: '韭黄', quantity: '几根，切段' },
        { name: '生抽', quantity: '1汤匙' },
        { name: '白胡椒粉', quantity: '少许' },
        { name: '麻油', quantity: '几滴' },
    ],
    instructions: [
        '准备汤底：将猪骨高汤烧开，加入大地鱼粉、生抽、白胡椒粉调味。',
        '另起一锅水，烧开后下面条煮熟，捞出放入碗中。',
        '用煮面的水将云吞煮至浮起，捞出放在面条上。',
        '将热汤底倒入碗中，撒上韭黄段，淋上几滴麻油即可。'
    ],
    tags: ['广式', '面食', '汤'],
  },
  {
    id: 'rec-10',
    title: '苹果派',
    description: '经典的家庭甜点，充满了黄油和肉桂的温暖香气。',
    image: PlaceHolderImages.find(p => p.id === 'recipe-10')?.imageUrl!,
    category: 'baking',
    prepTime: 40,
    cookTime: 50,
    servings: 8,
    ingredients: [
      { name: '派皮', quantity: '2张（9寸）' },
      { name: '苹果', quantity: '6-7个' },
      { name: '黄油', quantity: '2汤匙' },
      { name: '红糖', quantity: '1/4杯' },
      { name: '肉桂粉', quantity: '1茶匙' },
      { name: '柠檬汁', quantity: '1汤匙' },
      { name: '玉米淀粉', quantity: '2汤匙' },
    ],
    instructions: [
      '苹果去皮去核，切成薄片。',
      '将苹果片与红糖、肉桂粉、柠檬汁、玉米淀粉混合均匀。',
      '在平底锅中融化黄油，倒入苹果混合物，中火煮至苹果变软，约10分钟。冷却备用。',
      '将一张派皮铺在派盘上。',
      '倒入冷却的苹果馅料。',
      '盖上另一张派皮，捏紧边缘，表面用刀划几个口。',
      '在预热至200°C的烤箱中烘烤45-50分钟，或直到派皮金黄酥脆。',
      '食用前稍微冷却。'
    ],
    tags: ['甜点', '烘焙', '水果'],
  }
];

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getRecipes(categorySlug?: string): Recipe[] {
  if (categorySlug) {
    return recipes.filter(r => r.category === categorySlug);
  }
  return recipes;
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find(r => r.id === id);
}

export function searchRecipes(query: string): Recipe[] {
  const lowercasedQuery = query.toLowerCase();
  return recipes.filter(recipe => {
    const inTitle = recipe.title.toLowerCase().includes(lowercasedQuery);
    const inDescription = recipe.description.toLowerCase().includes(lowercasedQuery);
    const inIngredients = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowercasedQuery));
    return inTitle || inDescription || inIngredients;
  });
}
