export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'GPT-4 Turbo',
    description: 'OpenAI GPT-4 Turbo - Fast and powerful for complex tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'DeepSeek',
    description: 'Fireworks DeepSeek - Advanced reasoning capabilities',
  },
  {
    id: 'chat-model-grok',
    name: 'Grok-2',
    description: 'xAI Grok-2 - Fast and efficient for general chat',
  },
  {
    id: 'chat-model-claude',
    name: 'Claude 3',
    description: 'Anthropic Claude 3 - Balanced performance and efficiency',
  },
];
