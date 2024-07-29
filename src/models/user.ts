export class User {
    userToken: string;
    userId: string;
    userName: string;
    userReferralCode: string;
    userEmail: string;
    userPhoneNumber: string;
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
    userCountryId: string;
    userAhaWithDrawalPin: number;

    public constructor(data: {
        userToken: string,
        userId: string;
        userName: string;
        userReferralCode: string;
        userEmail: string;
        userPhoneNumber: string;
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
        userCountryId: string;
        userAhaWithDrawalPin: number;
    }) {
        this.userToken = data.userToken;
        this.userId = data.userId;
        this.userName = data.userName;
        this.userReferralCode = data.userReferralCode;
        this.userEmail = data.userEmail;
        this.userPhoneNumber = data.userPhoneNumber;
        this.userMemberExpired = data.userMemberExpired;
        this.userReferrerName = data.userReferrerName;
        this.userEndDaysCount = data.userEndDaysCount;
        this.userTotalInvite = data.userTotalInvite;
        this.userAccumulateRewardDay = data.userAccumulateRewardDay;
        this.userAllowUpdateReferral = data.userAllowUpdateReferral;
        this.userInvitedUserList = data.userInvitedUserList;
        this.userUpline = data.userUpline;
        this.userCurrentTimestamp = data.userCurrentTimestamp;
        this.userAccumulateVipRewardDay = data.userAccumulateVipRewardDay;
        this.userPaidVipList = data.userPaidVipList;
        this.userCountryId = data.userCountryId;
        this.userAhaWithDrawalPin = data.userAhaWithDrawalPin;
    }

    public static fromJson = (json: any): User => {
        return new User({
            userToken: json.access_token ?? '',
            userId: json.user?.user_id ?? '',
            userName: json.user?.user_name ?? '',
            userReferralCode: json.user?.user_referral_code ?? '',
            userEmail: json.user?.user_email ?? '',
            userPhoneNumber: json.user?.user_phone !== undefined && json.user?.user_phone !== 0 ? `${json.user?.user_phone}` : '',
            userMemberExpired: json.user?.vip_end_time ?? '',
            userReferrerName: json.user?.referrer_name ?? '',
            userEndDaysCount: json.user?.user_vip_time_duration_days ?? 0,
            userTotalInvite: json.user?.total_invited_user ?? 0,
            userAccumulateRewardDay: json.user?.accumulated_vip_reward_days ?? 0,
            userAllowUpdateReferral: json.user?.eligible_update_referrer ?? false,
            userCurrentTimestamp: json.user?.current_timestamp ?? '',
            userInvitedUserList: json.user?.invited_users ?? [],
            userUpline: json.user?.upline_user ?? {},
            userAccumulateVipRewardDay: json.user?.accumulated_paid_vip_reward_days ?? 0,
            userPaidVipList: json.user?.paid_vip_response ?? {},
            userCountryId: `{json.user?.country_id ?? 0}`,
            userAhaWithDrawalPin: json.user?.aha_withdrawal_pin ?? 0,
        });
    }

    public isGuest = (): boolean => {
        return this.userEmail === '' && this.userPhoneNumber === '';
    }

    public isLogin = (): boolean => {
        return this.userEmail !== '' || this.userPhoneNumber !== '';
    }

    public isVip = (): boolean => {
        return this.userCurrentTimestamp < this.userMemberExpired;
    }

    public static isGuest = (user?: User | null): boolean => {
        if (user === null || user === undefined) return true;

        return user.userEmail === '' && user.userPhoneNumber === '';
    }

    public static isLogin = (user?: User | null): boolean => {
        if (user === null || user === undefined) return false;

        return user.userEmail !== '' || user.userPhoneNumber !== '';
    }

    public static isVip = (user?: User | null): boolean => {
        if (user === null || user === undefined) return false;

        return user.userCurrentTimestamp < user.userMemberExpired;
    }
}