
import { CLang, CLanguageType } from '@utility/langService';
import '../string.d.ts';

String.prototype.tr = function (props?: any): string {
    const str = String(this);
    return CLang.get(str, props);

}


export class CLangKey {
    // ============================== api ==============================
    static httpRequestCancelled = 'httpRequestCancelled';
    static httpConnectionTimeout = 'httpConnectionTimeout';
    static httpRequestTimeout = 'httpRequestTimeout';
    static httpReceiveTimeout = 'httpReceiveTimeout';
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = 'httpVersionNotSupported';
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    // static downloadFailed = 'downloadFailed';
    // static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = 'httpTimeoutUserMsg';

    // ============================== bottom tab ==============================
    static homeTab = 'homeTab';
    static watchanytimeTab = 'watchanytimeTab';
    static vipCenterTab = 'vipCenterTab';
    static playlistTab = 'playlistTab';
    static moviesTab = 'moviesTab';
    static tvShowsTab = 'tvShowsTab';
    static profileTab = 'profileTab';

    // ============================== common ==============================
    static myFavourite = 'myFavourite';
    static playHistory = 'playHistory';
    static myDownload = 'myDownload';
    static iWantFeedback = 'feedback';
    static setting = 'setting';
    static rateUs = 'rateUs';
    static aboutUs = 'aboutUs';
    static video = 'video';
    static playlist = 'playlist';
    static favourite = 'favourite';
    static confirm = 'confirm';
    static cancel = 'cancel';
    static edit = 'edit';
    static today = 'today';
    static earlier = 'earlier';
    static selectAll = 'selectAll';
    static unselectAll = 'unselectAll';
    static delete = 'delete';
    static download = 'download';
    static downloadedVideo = 'downloadedVideo';
    static total = 'total';
    static totally = 'totally';
    static downloading = 'downloading';
    static pause = 'pause';
    static paused = 'paused';
    static doned = 'doned';
    static downloadFailed = 'downloadFailed';
    static downloadMore = 'downloadMore';
    static problemFeedback = 'problemFeedback';
    static submit = 'submit';
    static downloadAll = 'downloadAll';
    static pauseAll = 'pauseAll';
    static clearCache = 'clearCache';
    static userAgreement = 'userAgreement';
    static privacyPolicy = 'privacyPolicy';
    static version = 'version';
    static copyrightNotice = 'copyrightNotice';
    static contactEmail = 'contactEmail';
    static clear = 'clear';
    static logout = 'logout';
    static checkUpdate = 'checkUpdate';
    static iSee = 'iSee';
    static currentVersion = 'currentVersion';
    static cancelAccount = 'cancelAccount';
    static doneFavourite = 'doneFavourite';
    static update = 'update';
    static share = 'share';
    static director = 'director';
    static actor = 'actor';
    static details = 'details';
    static playSource = 'playSource';
    static anthology = 'anthology';
    static episodes = 'episodes';
    static relatedX = 'relatedX';
    static suggestion = 'suggestion';
    static more = 'more';
    static writer = 'writer';
    static intro = 'intro';
    static sort = 'sort';
    static noNetwork = 'noNetwork';
    static tryAgain = 'tryAgain';
    static refresh = 'refresh';
    static searchHistory = 'searchHistory';
    static searchRecord = 'searchRecord';
    static watchVideo = 'watchVideo';
    static watchPlaylist = 'watchPlaylist';
    static speed = 'speed';
    static videoScale = 'videoScale';
    static selectEpisode = 'selectEpisode';
    static liveStation = 'liveStation';
    static movie = 'movie';
    static xSuggess = 'xSuggess';
    static liveStationSuggessTr = () => this.xSuggess.tr({ x: this.liveStation.tr() });
    static movieSuggessTr = () => this.xSuggess.tr({ x: this.movie.tr() });
    static trending = 'trending';
    static trendingRank = 'trendingRank';


    // ============================== sentence ==============================
    static noX = 'noX';
    static noXYTr = ({ x, y }: { x: string, y: string }) => this.noX.tr({
        x: `${x}${CLang.isEn() ? ' ' : ''}${y}`
    });
    static noXFavouriteTr = ({ x }: { x: string }) => this.noXYTr({
        x: CLang.isEn() ? this.favourite.tr() : x,
        y: CLang.isEn() ? x : this.favourite.tr(),
    });
    static noAnyMore = 'noAnyMore';
    static clearXInform = 'clearXInform';
    static confirmToClearX = 'confirmToClearX';
    static viewGreatVideos = 'viewGreatVideos';
    static xVideos = 'xVideos';
    static totalXMb = 'totalXMb';
    static describeYourProblemAndSuggess = 'describeYourProblemAndSuggess';
    static feedbackSuccessSent = 'feedbackSuccessSent';
    static noNetworkDetect = 'noNetworkDetect';
    static ifAppInfringeCopyright = 'ifAppInfringeCopyright';
    static clearAllCache = 'clearAllCache';
    static logoutConfirm = 'logoutConfirm';
    static currentlyAreLatestVersion = 'currentlyAreLatestVersion';
    static confirmCancelAccountX = 'confirmCancelAccountX';
    static accountWillRemoveIfConfirm = 'accountWillRemoveIfConfirm';
    static cancelAccountSuccessMsg = 'cancelAccountSuccessMsg';
    static downloadOnlyForVip = 'downloadOnlyForVip';
    static maximumOnlyDownloadXVideo = 'maximumOnlyDownloadXVideo';
    static alreadyDownloadCheckMyDownload = 'alreadyDownloadCheckMyDownload';
    static networkConnectFailTryAgain = 'networkConnectFailTryAgain';
    static noNetworkPleaseRefreshVideo = 'noNetworkPleaseRefreshVideo';
    static noRelatedVideoFoundForX = 'noRelatedVideoFoundForX';
}

