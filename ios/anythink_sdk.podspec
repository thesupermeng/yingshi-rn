#
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html.
# Run `pod lib lint anythink_sdk.podspec` to validate before publishing.
#

Pod::Spec.new do |s|
  s.name                = 'anythink_sdk'
  s.version             = '0.0.1'
  s.summary             = 'A new Flutter project.'
  s.description         = 'A new Flutter project.'
  s.homepage            = 'http://example.com'
  s.license             = { :file => '../LICENSE' }
  s.author              = { 'Your Company' => 'email@example.com' }
  s.source              = { :path => '.' }
  s.source_files = 'Classes/**/*'
  s.public_header_files = 'Classes/**/*.h'
  s.dependency 'Flutter'
  s.platform = :ios, '10.0'
  s.static_framework = true
  
  #************************* Manual import ******************************#
  # s.frameworks = 'SystemConfiguration', 'CoreGraphics','Foundation','UIKit','AVFoundation','AdSupport','AudioToolbox','CoreMedia','StoreKit','SystemConfiguration','WebKit','AppTrackingTransparency','CoreMotion','CoreTelephony','MessageUI','SafariServices','WebKit','CoreMotion','JavaScriptCore','CoreLocation','MediaPlayer','DeviceCheck'
  # s.pod_target_xcconfig =   {'OTHER_LDFLAGS' => ['-lObjC']}
  # s.libraries = 'c++', 'z', 'sqlite3', 'xml2', 'resolv', 'bz2.1.0','bz2','xml2','resolv.9','iconv','c++abi'
  # s.vendored_frameworks = 'libs/**/*.framework'
  # s.resource = 'libs/**/*.bundle'
  # s.vendored_library = 'libs/**/*.a'
  # s.source_files  = "ThirdPartySDK/**/*.{h,m}"

  #*************************************************************#

  #************************ CocoaPod **********************************#
  
  s.dependency 'lottie-ios', '2.5.3'

  s.dependency 'Masonry'
  s.dependency 'AnyThinkiOS','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkMaioAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkStartAppAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkBaiduAdapter','6.1.71'
  # #Baidu--4.80 SDK,podfile文件顶部增加 source 'https://github.com/CocoaPods/Specs.git'
  s.dependency 'AnyThinkiOS/AnyThinkNendAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkKuaiShouAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkSigmobAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkVungleAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkUnityAdsAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkIronSourceAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkTapjoyAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkTTAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkBigoAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkAdColonyAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkPubNativeAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkPangleAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkKidozAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkFacebookAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkAdmobAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkInmobiAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkApplovinAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkMintegralAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkGDTAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkChartboostAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkMyTargetAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkYandexAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkFyberAdapter','6.1.71'
  s.dependency 'AnyThinkiOS/AnyThinkOguryAdapter','6.1.71'


  # s.dependency 'AnyThinkiOS/AnyThinkAdmobAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkTTAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkPangleAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkFacebookAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkGDTAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkMintegralAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkApplovinAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkTapjoyAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkChartboostAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkUnityAdsAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkVungleAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkInmobiAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkIronSourceAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkMaioAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkNendAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkSigmobAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkStartAppAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkKidozAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkFyberAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkMyTargetAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkKuaiShouAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkBaiduAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkOguryAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkMopubAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkAdColonyAdapter','6.1.71'
  # s.dependency 'AnyThinkiOS/AnyThinkKlevinAdapter','6.1.71'

#*************************************************************#

  # Flutter.framework does not contain a i386 slice.
  s.pod_target_xcconfig = { 'VALID_ARCHS' => 'x86_64 armv7 armv7s arm64' }

#  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES', 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'i386' }
  
end
