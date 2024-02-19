import { yysEyeopen, yysTemplate, yysLibjsijniprofilerMail } from "./yys_ajax"

export const streamerPinMsgFromJson = (json: any): yysLibjsijniprofilerMail => {
    return {
        noticeId: json?.notice_id,
        botName: json?.bot_name,
        botMessage: json?.bot_message,
        sportsType: json?.sports_type,
        noticeSort: json?.notice_sort,
        createdAt: json?.created_at !== undefined ? new Date(json?.created_at * 1000) : undefined,
    }
}

export const liveChatRoomFromJson = (json: any): yysTemplate => {
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

export const chatBotMessageFromJson = (json: any): yysEyeopen => {
    return {
        userId: json?.user_id,
        userName: json?.user_name,
        role: json?.role,
        message: json?.message,
        visibility: json?.visibility,
        createAt: json?.timestamp,
    }
}
