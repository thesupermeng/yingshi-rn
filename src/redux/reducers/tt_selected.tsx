import { ttFast } from '@models/tt_stations_right';

type ttLogin = {
  type: string;
  payload: any;
}

export type ttGoal = {
  user: ttFast | null,
}

const initialState: ttGoal = {
  user: null,
}

export function userReducer(state = initialState, action: ttLogin): ttGoal {
  switch (action.type) {
    case 'remove_user_auth':
      return {
        ...state,
        user: null,
      };
    case 'add_user_auth':
      return {
        ...state,
        user: action.payload ?? null,
      };
    case 'update_user_auth':
      const newUserDetails = ttFast.fromJson({
        user: action.payload.user,
      });

      newUserDetails.userToken = state.user?.userToken ?? '';
      newUserDetails.userPhoneNumber = action.payload.user.user_phone !== 0
        ? `${action.payload.user.country?.country_phonecode ?? ''}${action.payload.user.user_phone}`
        : '';


      return {
        ...state,
        user: newUserDetails,
      };

    case 'update_user_username': {
      let user = state.user;

      if (user !== null) user.userName = action.payload;

      return {
        ...state,
        user: user,
      };
    }
    case 'update_user_referral': {
      let user = state.user;

      if (user !== null) user.userReferrerName = action.payload;

      return {
        ...state,
        user: user,
      };
    }
    default:
      return state;
  }
}
