import { CLangKey } from "@constants";

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
    // [CLangKey.downloadFailed]: 'Download Failed',
    // [CLangKey.downloadCompleted]: 'Download Completed',
    [CLangKey.serverResponseEmpty]: 'Server response empty',
    [CLangKey.serverResponseErrorDataType]: 'Server response error data type',
    [CLangKey.apiEmptyResponse]: 'Api return empty',
    [CLangKey.apiErrorDataType]: 'Api return error data type',
    [CLangKey.loginExpiry]: 'Login Expiry',

    // ============================== bottom tab ==============================
    [CLangKey.homeTab]: 'Home',
    [CLangKey.watchanytimeTab]: 'Shorts',
    [CLangKey.vipCenterTab]: 'Vip Center',
    [CLangKey.playlistTab]: 'Playlist',
    [CLangKey.moviesTab]: 'Movies',
    [CLangKey.tvShowsTab]: 'TV Shows',
    [CLangKey.profileTab]: 'Profile',

    // ============================== common ==============================
    [CLangKey.myFavourite]: 'Favourite',
    [CLangKey.playHistory]: 'History',
    [CLangKey.myDownload]: 'Download',
    [CLangKey.iWantFeedback]: 'Feedback',
    [CLangKey.setting]: 'Settings',
    [CLangKey.rateUs]: 'Rate Us',
    [CLangKey.aboutUs]: 'About Us',
    [CLangKey.video]: 'Video',
    [CLangKey.playlist]: 'Playlist',
    [CLangKey.favourite]: 'Favourite',
    [CLangKey.confirm]: 'Confirm',
    [CLangKey.cancel]: 'Cancel',
    [CLangKey.edit]: 'Edit',
    [CLangKey.today]: 'Today',
    [CLangKey.earlier]: 'Earlier',
    [CLangKey.selectAll]: 'Select All',
    [CLangKey.unselectAll]: 'Unselect All',
    [CLangKey.delete]: 'Delete',
    [CLangKey.download]: 'Download',
    [CLangKey.downloadedVideo]: 'Downloaded Video',
    [CLangKey.total]: 'Total',
    [CLangKey.totally]: 'Totally',
    [CLangKey.downloading]: 'Downloading',
    [CLangKey.pause]: 'Pause',
    [CLangKey.paused]: 'Paused',
    [CLangKey.doned]: 'Doned',
    [CLangKey.downloadFailed]: 'Download Failed',
    [CLangKey.downloadMore]: 'Download More',
    [CLangKey.problemFeedback]: 'Problem Feedback',
    [CLangKey.submit]: 'Submit',
    [CLangKey.downloadAll]: 'Download all',
    [CLangKey.pauseAll]: 'Pause all',
    [CLangKey.clearCache]: 'Clear Cache',
    [CLangKey.userAgreement]: 'User Agreement',
    [CLangKey.privacyPolicy]: 'Privacy Policy',
    [CLangKey.version]: 'Version',
    [CLangKey.copyrightNotice]: 'Copyright Notice',
    [CLangKey.contactEmail]: 'Contact Email',
    [CLangKey.clear]: 'Clear',
    [CLangKey.logout]: 'Logout',
    [CLangKey.checkUpdate]: 'Check For Update',
    [CLangKey.iSee]: 'I see',
    [CLangKey.currentVersion]: 'Current Version',
    [CLangKey.cancelAccount]: 'Cancel Account',
    [CLangKey.doneFavourite]: 'Favourite',
    [CLangKey.update]: 'Update',
    [CLangKey.share]: 'Share',
    [CLangKey.director]: 'Director',
    [CLangKey.actor]: 'Actor',
    [CLangKey.details]: 'Details',
    [CLangKey.playSource]: 'Source',
    [CLangKey.anthology]: 'Episodes',
    [CLangKey.episodes]: '',
    [CLangKey.relatedX]: 'Related %x',
    [CLangKey.suggestion]: 'Suggestion',
    [CLangKey.more]: 'More',
    [CLangKey.writer]: 'Writer',
    [CLangKey.intro]: 'Intro',
    [CLangKey.sort]: 'Sort',
    [CLangKey.noNetwork]: 'No Network Connection',
    [CLangKey.tryAgain]: 'Try Again',
    [CLangKey.refresh]: 'Refresh',
    [CLangKey.searchHistory]: 'Recent Search',
    [CLangKey.searchRecord]: 'Search Record',
    [CLangKey.about]: 'About',
    [CLangKey.watchVideo]: 'Play',
    [CLangKey.watchPlaylist]: 'Play',

    // ============================== sentence ==============================
    [CLangKey.noX]: 'No %x',
    [CLangKey.noAnyMore]: 'No any more',
    [CLangKey.clearXInform]: 'Clear %x',
    [CLangKey.confirmToClearX]: 'Are you sure want to delete &these %x?',
    [CLangKey.viewGreatVideos]: 'View great videos',
    [CLangKey.xVideos]: '%x videos',
    [CLangKey.totalXMb]: 'Total %x MB',
    [CLangKey.describeYourProblemAndSuggess]: 'Describe your experience here...',
    [CLangKey.feedbackSuccessSent]: 'Feedback Sent',
    [CLangKey.noNetworkDetect]: 'No network, please try again later',
    [CLangKey.ifAppInfringeCopyright]: 'If the content provided by this APP infringes your copyright, please send an email stating that we will delete the content immediately to protect the rights of the copyright owner.',
    [CLangKey.clearAllCache]: 'Clear all cache',
    [CLangKey.logoutConfirm]: 'Are you sure you want to logout?',
    [CLangKey.currentlyAreLatestVersion]: 'Currently are the latest version',
    [CLangKey.confirmCancelAccountX]: 'Confirm cancel account “%x”',
    [CLangKey.accountWillRemoveIfConfirm]: 'If you confirm, account data will be permanently deleted',
    [CLangKey.cancelAccountSuccessMsg]: 'We will process your request within 3 working days. Please check your email. During this period, you can continue login',
    [CLangKey.downloadOnlyForVip]: 'Download only for vip user',
    [CLangKey.maximumOnlyDownloadXVideo]: 'Only %x videos can be downloaded at the same time, please continue later',
    [CLangKey.alreadyDownloadCheckMyDownload]: 'Already in download queue, please check in download screen',
    [CLangKey.networkConnectFailTryAgain]: 'Please check your internet connection and try again',
    [CLangKey.noNetworkPleaseRefreshVideo]: 'No network or disconnected, please refresh the video',
    [CLangKey.noRelatedVideoFoundForX]: 'Sorry, no related videos found for "%x"',
}