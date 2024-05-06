import { CLangKey } from "@utility/langService";

export const lang = {
    // ============================== api ==============================
    [CLangKey.httpRequestCancelled]: 'HTTP Request Cancelled',
    [CLangKey.httpConnectionTimeout]: 'HTTP Connection Timeout',
    [CLangKey.httpRequestTimeout]: 'HTTP Request Timeout',
    [CLangKey.httpReceiveTimeout]: 'HTTP Receive Timeout',
    [CLangKey.http400]: 'Bad Request',
    [CLangKey.http401]: 'Unauthenticated',
    [CLangKey.http403]: 'Forbidden',
    [CLangKey.http404]: 'Not Found',
    [CLangKey.http405]: 'Method Not Allowed',
    [CLangKey.http500]: 'Internal Server Error',
    [CLangKey.http502]: 'Bad Gateway',
    [CLangKey.http503]: 'Service Unavailable Error',
    [CLangKey.http505]: 'HTTP Service Not Supported',
    [CLangKey.unknownError]: 'Unknown Error',
    [CLangKey.noInternetAccess]: 'No Internet Access',
    [CLangKey.downloadFailed]: 'Download Failed',
    [CLangKey.downloadCompleted]: 'Download Completed',
    [CLangKey.serverResponseEmpty]: 'Server response empty',
    [CLangKey.serverResponseErrorDataType]: 'Server response error data type',
    [CLangKey.apiEmptyResponse]: 'Api return empty',
    [CLangKey.apiErrorDataType]: 'Api return error data type',
    [CLangKey.loginExpiry]: 'Login Expiry',

    // ============================== bottom tab ==============================
    [CLangKey.homeTab]: 'Home',
    [CLangKey.watchanytimeTab]: 'Shorts',
    [CLangKey.moviesTab]: 'Movies',
    [CLangKey.tvShowsTab]: 'TV Shows',
    [CLangKey.profileTab]: 'Profile',

    // ============================== common ==============================
    [CLangKey.myFavourite]: 'Favourite',
    [CLangKey.playHistory]: 'History',
    [CLangKey.myDownload]: 'Download',
    [CLangKey.feedback]: 'Feedback',
    [CLangKey.setting]: 'Settings',
}