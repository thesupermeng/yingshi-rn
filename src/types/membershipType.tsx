export interface membershipModel {
  productId: string;
  productSKU: string;
  title: string;
  price: string;
  localizedPrice: string;
  description: string;
  subscriptionDays: string;
}

export interface vipHistoryResponseType {
  displayText: string;
  createdDate: string;
  vipDays: number;
  status: number;
}