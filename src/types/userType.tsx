export interface userModel {
  userToken: string;
  userId: string;
  userName: string;
  userReferralCode: string;
  userEmail: string;
  userPhoneNumber: number;
  userMemberExpired: string;
  userReferrerName: string;
  userEndDaysCount: number;
  userTotalInvite: number;
  userAccumulateRewardDay: number;
  userAllowUpdateReferral: boolean;
  userInvitedUserList: any;
  userUpline: any;
  userCurrentTimestamp: string;
  userAccumulateVipRewardDay: number;
  userPaidVipList: any;
}
