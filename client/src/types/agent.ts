export interface Agent {
  id: number;
  name: string;
  strategy: string;
  profitLoss: number;
  status: 'Active' | 'Inactive';
  config?: {
    riskLevel: number;
    frequencyLevel: number;
    positionLevel: number;
    personality: string | null;
  };
}

export type AgentTemplate = {
  id: string;
  name: string;
  description: string;
};

export type PersonalityTemplate = {
  id: string;
  name: string;
  description: string;
  prompt: string;
};
