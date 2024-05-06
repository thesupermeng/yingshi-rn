import { CLangKey } from "@constants";

export const lang = {
    // ============================== api ==============================
    [CLangKey.httpRequestCancelled]: 'HTTP 请求已取消',
    [CLangKey.httpConnectionTimeout]: 'HTTP 连接已超时',
    [CLangKey.httpRequestTimeout]: 'HTTP 请求已超时',
    [CLangKey.httpReceiveTimeout]: 'HTTP 接收已超时',
    [CLangKey.http400]: '请求错误',
    [CLangKey.http401]: '未经身份验证',
    [CLangKey.http403]: '禁止',
    [CLangKey.http404]: '未找到',
    [CLangKey.http405]: '方法不被允许使用',
    [CLangKey.http500]: '内部服务器错误',
    [CLangKey.http502]: '错误网关',
    [CLangKey.http503]: '暂停服务',
    [CLangKey.http505]: '不支持 HTTP 服务',
    [CLangKey.unknownError]: '未知错误',
    [CLangKey.noInternetAccess]: '没有互联网接入',
    [CLangKey.downloadFailed]: '下载失败',
    [CLangKey.downloadCompleted]: '下载完成',
    [CLangKey.serverResponseEmpty]: '服务器响应为空',
    [CLangKey.serverResponseErrorDataType]: '服务器响应错误数据类型',
    [CLangKey.apiEmptyResponse]: 'API 返回空',
    [CLangKey.apiErrorDataType]: 'API 返回错误数据类型',
    [CLangKey.loginExpiry]: '登录到期',

    // ============================== bottom tab ==============================
    [CLangKey.homeTab]: '首页',
    [CLangKey.watchanytimeTab]: '随心看',
    [CLangKey.vipCenterTab]: '会员中心',
    [CLangKey.playlistTab]: '播单',
    [CLangKey.moviesTab]: '电影',
    [CLangKey.tvShowsTab]: '电视台',
    [CLangKey.profileTab]: '我的',

    // ============================== common ==============================
    [CLangKey.myFavourite]: '我的收藏',
    [CLangKey.playHistory]: '播放历史',
    [CLangKey.myDownload]: '我的下载',
    [CLangKey.iWantFeedback]: '我要反馈',
    [CLangKey.setting]: '设置',
    [CLangKey.rateUs]: '评价我们',
    [CLangKey.aboutUs]: '关于我们',
    [CLangKey.video]: '视频',
    [CLangKey.playlist]: '播单',
    [CLangKey.favourite]: '收藏',

    // ============================== sentence ==============================
    [CLangKey.noXFavourite]: '暂无%x收藏',
    [CLangKey.noAnyMore]: '没有更多了',
}