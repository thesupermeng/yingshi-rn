import { wwSharemodal, wwIconfeedback, wwWeiboInactive } from "./ww_dycreator_result"

export const streamerPinMsgFromJson = (json: any): wwWeiboInactive => {
    return {
        noticeId: json?.notice_id,
        botName: json?.bot_name,
        botMessage: json?.bot_message,
        sportsType: json?.sports_type,
        noticeSort: json?.notice_sort,
        createdAt: json?.created_at !== undefined ? new Date(json?.created_at * 1000) : undefined,
    }
}

export const liveChatRoomFromJson = (json: any): wwIconfeedback => {
    json = json?.data;

    return {
        roomId: json?.room_id,
        messages: {
            userId: json?.messages?.user_id,
            userName: json?.messages?.user_name,
            role: json?.messages?.role,
            message: json?.messages?.message,
            visibility: json?.messages?.visibility,
            createAt: json?.messages?.timestamp,
        },
    }
}

export const chatBotMessageFromJson = (json: any): wwSharemodal => {
    return {
        userId: json?.user_id,
        userName: json?.user_name,
        role: json?.role,
        message: json?.message,
        visibility: json?.visibility,
        createAt: json?.timestamp,
    }
}
