export interface membershipModel {
  productId: string;
  productSKU: string;
  title: string;
  price: string;
  localizedPrice: string;
  description: string;
  subscriptionDays: number;
  zfOptions: zfModel[];
}

export interface zfModel {
  payment_type_code: string;
  payment_type_name: string;
  payment_type_icon: string;
}

export interface vipHistoryResponseType {
  displayText: string;
  createdDate: string;
  vipDays: number;
  status: number;
}