export interface MoneyType {
  id: number;
  name: string;
  shortName: string;
}

export interface MoneyCategory {
  id: number;
  name: string;
  description?: any;
  distance: boolean;
  moneyType: MoneyType;
}

export interface MoneyDetails {
  id: number;
  title: string;
  description: string;
  amountItem?: any;
}

export interface Money {
  id: number;
  amountTotal: number;
  createdAt: CreatedAt;
  moneyCategory: MoneyCategory;
  moneyDetails?: MoneyDetails;
}

export interface CreatedAt {
  timestamp: any;
}
