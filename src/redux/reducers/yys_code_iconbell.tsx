import { yysIconstar } from '@models';

type yysAnytimeTeam = {
  type: string;
  payload: any;
}

export type yysIconplaySuggestion = {
  user: yysIconstar | null,
}

const initialState: yysIconplaySuggestion = {
  user: null,
}

export function userReducer(state = initialState, action: yysAnytimeTeam): yysIconplaySuggestion {
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
      const newUserDetails = yysIconstar.fromJson({
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
