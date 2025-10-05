import { SuggestionForm } from './suggestion-form';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI 智能推荐',
  description: '输入您拥有的食材，让 AI 为您推荐一道美味佳肴。',
};

export default function SuggestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Sparkles className="mx-auto h-12 w-12 text-accent mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline">AI 智能推荐</h1>
          <p className="text-lg text-muted-foreground mt-2">
            不知道吃什么？输入您拥有的食材（用逗号或换行分隔），让 AI 为您创造惊喜！
          </p>
        </div>

        <SuggestionForm />
      </div>
    </div>
  );
}
