import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import PrivacyBackButtonHeader from "../../components/header/privacyBackButtonHeader";

import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { APP_NAME_CONST } from "@utility/constants";

export default ({ navigation }: RootStackScreenProps<"隐私政策">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    // <ScreenContainer scrollView={true}>
    <ScreenContainer>
      <View style={{ gap: spacing.m }}>
        {/* <TitleWithBackButtonHeader title='隐私政策' /> */}
        <PrivacyBackButtonHeader title="隐私政策" />
        <ScrollView>
          <Text
            style={{
              ...textVariants.header,
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            {APP_NAME_CONST}隐私协议
          </Text>
          <Text style={textVariants.body}>
            {`《${APP_NAME_CONST}隐私协议》目录\n` +
              `一、引言\n` +
              `二、名词解释\n` +
              `三、我们如何收集和使用您的个人信息\n` +
              `四、我们如何共享、转让、公开披露您的个人信息\n` +
              `五、关于使用Cookie和同类技术\n` +
              `六、我们对您个人信息的存储与保护\n` +
              `七、您管理个人信息的权利\n` +
              `八、我们对未成年人的保护\n` +
              `九、我们对去世用户的个人信息保护\n` +
              `十、联系我们\n` +
              `十一、本政策如何更新\n` +
              `十二、争议解决\n\n` +
              `一、引言\n\n` +
              `1. 本《${APP_NAME_CONST}隐私协议》（以下称“本隐私协议”）适用于${APP_NAME_CONST}的全部产品和服务，包括iOS端应用程序、安卓端应用程序、网页端等全部终端客户端。\n` +
              `2. 请您在使用${APP_NAME_CONST}各项产品和/或服务前，仔细阅读并充分理解本隐私协议的全部内容。一旦您使用或继续使用${APP_NAME_CONST}的产品/服务，即表示您同意我们按照本隐私协议使用和处理您的相关信息。\n` +
              `3. 我们可能会不时依据法律法规或业务调整对本隐私协议进行修订。当本隐私协议发生变更后，我们会在版本更新后通过在显著位置提示或推送通知、消息等形式向您展示变更后的内容。\n` +
              `4. 您需理解，只有在您确认并同意变更后的《${APP_NAME_CONST}隐私协议》，我们才会依据变更后的隐私协议收集、使用、处理和存储您的个人信息；您有权拒绝同意变更后的隐私协议，但请您知悉，一旦您拒绝同意变更后的隐私协议，可能导致您不能或不能继续完整使用${APP_NAME_CONST}的相关服务和功能，或者无法达到我们拟达到的服务效果。\n\n` +
              `二、名词解释\n\n` +
              `除非另有约定，本隐私协议中使用到的名词，通常仅具有以下定义：\n` +
              `1. 个人信息：是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。本隐私协议中涉及的个人信息包括自然人的基本资料（包括个人姓名、生日、性别、住址、个人电话号码、电子邮箱地址）、个人身份信息（包括身份证件号码）、个人生物识别信息（包括指纹、面部特征）、网络身份标识信息（包括系统账号、IP地址、个人数字证书等）、个人财产信息（包括银行账号、口令、交易和消费记录、虚拟货币、虚拟交易、兑换码等虚拟财产信息）、通讯录信息、个人上网记录（包括网站浏览记录、软件使用记录、使用中的软件列表）、个人常用设备信息（包括硬件序列号、硬件型号、设备MAC地址、操作系统类型、软件列表、唯一设备识别码）、个人位置信息（包括大概地理位置、精准定位信息）。我们实际具体收集的个人信息种类以下文描述为准。\n` +
              `2. 个人敏感信息（出自于GB/T 35273-2020《信息安全技术 个人信息安全规范》）：是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。本隐私协议中涉及的个人敏感信息包括您的个人财产信息、个人身份信息、个人生物识别信息、网络身份标识信息、通讯录信息、精准定位信息、收货地址。我们实际具体收集的个人敏感信息种类以下文描述为准。\n` +
              `3. 设备：是指可用于访问我们的产品和/或服务的装置，例如台式计算机、笔记本电脑、平板电脑或智能手机。\n` +
              `4. 唯一设备识别码（专属ID或UUID）：是指由设备制造商编入到设备中的一串字符，可用于以独有方式标识相应设备（如IMEI/android ID/IDFA/OpenUDID/GUID/SIM卡IMSI信息等）。唯一设备识别码有多种用途，其中可在不能使用Cookie（例如在移动应用程序中）时用以提供广告。\n` +
              `5. IP地址：每台上网的设备都会指定一个编号，称为互联网协议(IP)地址。这些编号通常都是根据地理区域指定的。IP 地址通常可用于识别设备连接至互联网时所在的位置。\n` +
              `6. SSL：SSL（Secure Socket Layer）又称为安全套接层，是在传输通信协议（TCP/IP）上实现的一种安全协议。SSL支持各种类型的网络，同时提供三种基本的安全服务，均通过使用公开密钥和对称密钥技术以达到信息保密的效果。\n` +
              `7. Cookie：Cookie是包含字符串的小文件，在您登入和使用网站或其他网络内容时发送、存放在您的计算机、移动设备或其他装置内（通常经过加密）。Cookie同类技术是可用于与Cookie类似用途的其他技术，例如：Web Beacon、Proxy、嵌入式脚本等。\n` +
              `8. 账号：当您注册账号并向我们提供一些个人信息，您就可以更好的使用我们的服务。当您访问${APP_NAME_CONST}时，系统会利用这些账号信息对您进行身份验证，以防止未经授权的人员访问您的账号。\n` +
              `9. 匿名化：是指通过对个人信息的技术处理，使得个人信息主体无法被识别或者关联，且处理后的信息不能被复原的过程。\n` +
              `10. 去标识化：是指通过对个人信息的技术处理，使其在不借助额外信息的情况下，无法识别或关联个人信息主体的过程。\n` +
              `11. 服务器日志：通常情况下，我们的服务器会自动记录您在访问网站时所发出的网页请求。这些“服务器日志”通常包括您的网络请求、互联网协议地址、浏览器类型、浏览器语言、请求的日期和时间及可以唯一识别您的浏览器的一个或多个Cookie。\n\n` +
              `三、我们如何收集和使用您的个人信息\n\n` +
              `1. ${APP_NAME_CONST}依据法律法规以及遵循正当、合法、必要的原则而收集和使用您在使用服务过程中主动提供或由于产品和/或服务需要而产生的个人信息。如果我们欲将您的个人信息用于本隐私协议未载明的其它用途，或基于特定目的将收集而来的信息用于其他目的，我们会及时以合理的方式向您告知，并在使用前再次征得您的同意。\n` +
              `2. 我们收集和使用的您的个人信息类型包括两种：第一种：我们产品与/或服务的核心业务功能所必需的信息：此类信息为产品与/或服务正常运行的必备信息，您须授权我们收集。如您拒绝提供，您将无法正常使用我们的产品与/或服务；第二种：附加业务功能可能需要收集的信息：此信息为非核心业务功能所需的信息，您可以选择是否授权我们收集。如您拒绝提供，将导致附加业务功能无法实现或无法达到我们拟达到的效果，但不影响您对核心业务功能的正常使用。\n` +
              `3. 我们需要特别提醒您的是：由于我们的产品和服务较多，为您提供的内容也不同，因此核心业务功能（包括其收集的您的个人信息类型）也会因产品/服务的内容不同而有所区别，具体以产品/服务实际提供为准。除此之外，您理解并同意，我们希望提供给您的产品和服务是完善的，所以我们会不断改进我们的产品和服务，包括技术，这意味着我们可能会经常推出新的业务功能，可能需要收集新的个人信息或变更个人信息使用目的或方式。如果某一需要收集您的个人信息的功能或产品/服务未能在本隐私协议中予以说明的，我们会通过更新本政策、页面提示、弹窗、网站公告等方式另行向您说明该信息收集的目的、内容、使用方式和范围，并为您提供自主选择同意的方式，且在征得您明示同意后收集。在此过程中，如果您对相关事宜有任何疑惑的，可以通过本隐私协议第十一条提供的方式联系我们，我们会尽快为您作出解答。\n` +
              `4. 通常情况下，我们会在以下场景中收集和使用您的个人信息：\n` +
              `4.1 账号注册\n` +
              `（1）您注册并登录${APP_NAME_CONST}账号时，需要按照我们的指引完成一系列注册程序，在此过程中，您需要向我们提供以下信息：账号昵称、手机号码（个人敏感信息，用于接受验证码匹配个人身份）。您只有提供真实准确的上述信息，才能成功注册${APP_NAME_CONST}账号并使用产品和/或服务的核心功能。如果您选择不提供上述为实现${APP_NAME_CONST}核心产品功能的必备信息，或将导致我们无法为您提供该核心产品功能。\n` +
              `（2）同时，您需理解，手机号码和验证码匹配结果属于您的个人敏感信息，我们收集该类信息是基于法律法规的相关要求，如您拒绝提供可能导致您无法注册账号并使用相关产品功能，请您谨慎考虑后再选择是否提供。\n` +
              `4.2 搜索\n` +
              `当您在我们的产品中使用搜索功能时，我们需要收集您的一些信息，其中包括如下个人信息：您的设备信息、您的日志信息，包括您搜索的字或词、您的浏览记录和时间、您搜索的时间以及次数。我们收集这些信息是为了向您快速匹配您所需要的内容以及您可能感兴趣的内容，同时亦为了改进我们的产品和服务。\n` +
              `4.3 视频展示和播放\n` +
              `（1）我们的产品和/或服务为您提供视频展示和播放服务，在此过程中，我们需要收集（包括后台状态下收集）您的一些信息，包括如下个人信息：设备型号、设备名称、唯一设备识别码、浏览器类型和设置、语言设置、操作系统和应用程序版本、登录IP地址、接入网络的方式、网络质量数据、移动网络信息、产品版本号、网络日志信息（如操作日志、服务日志）。同时为了收集上述基本的个人设备信息，我们将会申请访问您的设备信息的权限，我们收集这些信息是为了向您提供视频展示和播放服务，如您拒绝提供上述权限将可能导致您无法使用我们的相关产品与服务。请您理解，单独的设备信息、日志信息等是无法识别特定自然人身份的信息。如果我们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，我们会将该类个人信息做匿名化、去标识化处理。\n` +
              `（2）当您使用安卓设备登录我们的产品并使用视频展示和播放时，您可以随时通过使用我们的产品与/或服务的相关功能设置页面开启/取消移动网络信息权限。${APP_NAME_CONST}客户端的移动网络信息访问权限设置路径为：“设置—隐私设置-允许${APP_NAME_CONST}查看电话信息”。您开启该权限即视为您授权我们可以访问、获取、收集、使用您的该等个人信息；但当您取消该授权后，我们将不再收集该信息，也无法再为您提供上述与之对应的服务；但除非您依照法律的规定删除了您的个人信息，否则您的取消行为不会影响我们基于您之前的授权进行的您个人信息的处理、存储。当您更新APP版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。\n` +
              `（3）请您理解，您只有提供上述信息才能使用${APP_NAME_CONST}产品和/或服务的核心功能，如果您选择不提供上述为实现${APP_NAME_CONST}核心产品功能的必备信息，或将导致我们无法为您提供该核心产品功能。\n` +
              `4.4 客户服务\n` +
              `当您向${APP_NAME_CONST}发起投诉、申诉或进行咨询时，为了您的账号与系统安全，我们可能需要您先行提供账号信息，并与您之前的个人信息相匹配以验证您的用户身份。同时，为了方便与您联系或帮助您解决问题，我们可能还需要您提供以下个人敏感信息：姓名、手机号码、电子邮件及其他联系方式、所在城市/地区信息。在您需要重置青少年模式的密码时，我们还需要您上传您的手持身份证照片信息进行人工的申诉。 另外，我们还会收集您与我们的沟通信息（包括文字/图片/音视频/通话记录形式）、与您的需求相关联的其他必要信息。我们收集这些信息是为了调查事实与帮助您解决问题，如您拒绝提供上述信息，我们可能无法向您及时反馈投诉、申诉或咨询结果。\n` +
              `4.5 上传、下载视频或图片\n` +
              `当您使用移动设备登录我们的产品并使用视频投稿、视频缓存、截屏、动态壁纸、主题模板等功能进行视频或图片的上传、下载操作时，我们需要获取您设备的存储权限，并收集您主动提供的视频、图片信息。如您拒绝提供该权限和内容，仅会使您无法使用该功能，但并不影响您正常使用产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使用我们的产品与/或服务的相关功能设置页面开启/取消该权限。${APP_NAME_CONST}客户端的存储权限设置路径为：“设置—隐私设置—允许${APP_NAME_CONST}使用文件存储和访问功能”。您开启该权限即视为您授权我们可以访问、获取、收集、使用您的该等个人信息；但当您取消该授权后，我们将不再收集该信息，也无法再为您提供上述与之对应的服务；但除非您依照法律的规定删除了您的个人信息，否则您的取消行为不会影响我们基于您之前的授权进行的您个人信息的处理、存储。当您更新APP版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。\n` +
              `4.6 视频拍摄\n` +
              `（1）当您使用设备相机拍摄视频时，我们将访问您的设备相机相关权限，并收集您提供的基于拍摄视频后向我们上传的视频信息。如您拒绝提供该权限和内容的，仅会使您无法使用该功能，但并不影响您正常使用产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使用我们的产品与/或服务的相关功能设置页面开启/取消该权限。${APP_NAME_CONST}客户端的相机权限设置路径为：“设置—隐私设置—允许${APP_NAME_CONST}使用相机功能”。\n` +
              `（2）当您使用设备相机拍摄视频时，我们还将访问您的设备录音（麦克风）相关权限，我们需要收集您的语音信息、语音交互信息（个人信息）。如您拒绝提供该权限和内容的，仅会使您无法使用该功能，但并不影响您正常使用产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使用我们的产品与/或服务的相关功能设置页面开启/取消该权限。${APP_NAME_CONST}客户端的麦克风权限设置路径为：“设置—隐私设置—允许${APP_NAME_CONST}使用麦克风功能”。当您更新APP版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。您开启该权限即视为您授权我们可以访问、获取、收集、使用您的该等个人信息；当您取消该授权后，我们将不再收集该信息，也无法再为您提供上述与之对应的服务；但除非您依照法律的规定删除了您的个人信息，否则您的取消行为不会影响我们基于您之前的授权进行的您个人信息的处理、存储。\n` +
              `4.7 微博分享和投稿发布\n` +
              `当您使用iOS设备登录我们的产品并在使用微博分享和投稿发布功能时，我们将访问您的位置权限，并收集您提供的基于使用微博分享和投稿发布后向我们上传的位置信息。同时，您也可以随时通过您的设备系统开启/取消该权限。iOS端${APP_NAME_CONST} APP的位置权限可以通过系统关闭，路径为：“设置->${APP_NAME_CONST}->位置”。您开启该权限即视为您授权我们可以访问、获取、收集、使用您的该等个人信息；当您取消该授权后，我们将不再收集该信息，也无法再为您提供上述与之对应的服务；但除非您依照法律的规定删除了您的个人信息，否则您的取消行为不会影响我们基于您之前的授权进行的对您个人信息的处理、存储。当您更新APP版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。\n` +
              `4.8 定向推荐、维护/改进我们的产品与/或服务之必需\n` +
              `（1）我们会基于收集的信息，对您的偏好、习惯等作特征分析和用户画像，以便为您提供更适合的定制化服务，例如向您展现或推荐相关程度更高（而非普遍推送）的搜索结果、视频内容、信息流或者广告/推广信息结果。为此，我们需要收集（包括在后台状态下收集）您的信息，包括您的设备信息（硬件型号、设备MAC地址、IMEI、IDFA、IMSI、必要的软件列表）、浏览器型号、日志信息、浏览记录、点赞/分享/评论/互动的对象、搜索的字词、年龄、性别。同时，为保障您接收信息的自主性，当您对我们推送的个性化内容不感兴趣或希望减少某些信息推荐时，您可以在${APP_NAME_CONST}客户端内通过长按视频并选择“不感兴趣”，进行精准屏蔽。当您更新APP版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。\n` +
              `（2）此外，我们可能会收集您使用我们的产品与/或服务时的搜索记录、浏览记录、收藏记录、观看时长、设备信息、点赞/分享/评论/互动的对象、您的偏向网络行为、兴趣偏好等信息形成用户画像用于帮助使我们更加了解您如何接入和使用我们的产品与/或服务、维护和改进我们的产品与/或服务或对您作出其他方面的回应。\n` +
              `4.9 从第三方间接收集的您的个人信息\n` +
              `（1）您理解并知悉，您向外部第三方提供的个人信息，或外部第三方收集的您的个人信息，我们无法获取，更不会使用非常规方式（如：恶意干预对方系列APP数据）擅自以软件程序获得您的个人信息。我们可能因业务发展的需要而确实需要从第三方间接收集（如共享等）您的个人信息的，且由我们直接或共同为您提供产品或服务的，我们（或第三方）在收集前会向您明示共享的您个人信息的来源、类型、使用目的、方式和所用于的业务功能、授权同意范围（如果使用方式和范围超出您在第三方原授权范围的，我们会再次征得您的授权同意）。我们的某些产品或服务由第三方业务合作伙伴提供或共同提供时，为了必要且合理的开展业务，我们可能会从部分业务合作伙伴处间接收集的您的部分信息、其他方使用我们的产品与/或服务时所提供有关您的信息。\n` +
              `（2）我们的专业安全团队对个人信息将进行安全加固（包括敏感信息报备、敏感信息加密存储、访问权限控制等）。我们会使用不低于我们对自身用户个人信息同等的保护手段与措施对间接获取的个人信息进行保护。\n` +
              `4.10 出于其他合理且必要的目的\n` +
              `（1）如前文所述，如果某一需要收集您的个人信息的功能或产品/服务未能在本隐私协议中予以说明的，或者我们超出了与收集您的个人信息时所声称的目的及具有直接或合理关联范围的，我们将在收集和使用您的个人信息前，通过更新本隐私协议、页面提示、弹窗、站内信、网站公告或其他便于您获知的方式另行向您说明，并为您提供自主选择同意的方式，且在征得您明示同意后收集和使用。\n` +
              `（2）您理解并同意，在以下情况下，我们无需取得您的授权同意即可收集和使用您的个人信息：\n` +
              `a) 与国家安全、国防安全有关的；\n` +
              `b) 与公共安全、公共卫生、重大公共利益有关的；\n` +
              `c) 与犯罪侦查、起诉、审判和判决执行等直接相关的；\n` +
              `d) 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；\n` +
              `e) 所收集的信息是您自行向社会公开的或者是从合法公开的渠道（如合法的新闻报道、政府信息公开等渠道）中收集到的；\n` +
              `f) 根据与您签订和履行相关协议或其他书面文件所必需的；\n` +
              `g) 用于维护我们的产品与/或服务的安全稳定运行所必需的，例如发现、处置产品与/或服务的故障；\n` +
              `h) 有权机关的要求、法律法规等规定的其他情形。\n\n` +
              `四、我们如何共享、转让、公开披露您的个人信息\n\n` +
              `1. 共享\n` +
              `我们重视对您的个人信息的保护，您的个人信息是我们为您提供产品与/或服务的重要依据和组成部分，对于您的个人信息，我们仅在本隐私协议所述目的和范围内或根据法律法规的要求收集和使用，并严格保密。通常情况下，我们不会与任何公司、组织和个人共享您的个人信息，但以下情况除外：\n` +
              `1.1 事先已获得您的明确授权或同意；\n` +
              `1.2 根据适用的法律法规、法律程序、政府的强制命令或司法裁定而需共享您的个人信息；\n` +
              `1.3 在法律要求或允许的范围内，为了保护用户或社会公众的利益、财产或安全免遭损害而有必要提供您的个人信息给第三方；\n` +
              `1.4 您的个人信息可能会在我们的关联公司之间共享。我们只会共享必要的个人信息，且这种共享亦受本隐私协议声明目的的约束。关联公司如要改变个人信息的处理目的，将再次征求您的授权同意；\n` +
              `1.5 为了向您提供更完善、优质的产品和服务，我们的某些服务将由授权合作伙伴提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。同时，我们会与合作伙伴签署严格的保密协定，要求他们按照我们的说明、本隐私协议以及其他任何相关的保密和安全措施来处理您的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途。如果您拒绝我们的合作伙伴在提供服务时收集为提供服务所必须的个人信息，将可能导致您无法在我们的平台中使用该第三方服务。通常我们的合作伙伴有如下几类（现在及未来）：\n` +
              `（1）为我们的产品与/或服务提供功能支持的服务提供商：例如提供短视频录制、剪辑、美颜功能的第三方服务商，我们共享信息的目的仅为实现我们产品与/或服务的功能；\n` +
              `（2）第三方SDK类服务商：我们的产品中可能会包含第三方SDK或其他类似的应用程序，如您在我们平台上使用这类由第三方提供的服务时，您同意将由其直接收集和处理您的信息（如以嵌入代码、插件等形式）。\n` +
              `前述服务商收集和处理信息等行为遵守其自身的隐私条款，而不适用于本政策。为了最大程度保障您的信息安全，我们建议您在使用任何第三方SDK类服务前先行查看其隐私条款。为保障您的合法权益，如您发现这等SDK或其他类似的应用程序存在风险时，建议您立即终止相关操作并及时与我们取得联系。\n` +
              `（3）委托我们进行信息推广和广告投放的合作伙伴：您确认我们有权与委托我们进行信息推广和广告投放的合作伙伴共享我们使用您的相关信息集合形成的间接用户画像、去标识化或匿名化处理后的分析/统计类信息（例如「位于上海的二十代男性，喜欢音乐」）以及去标识化的用户设备识别码，以帮助其进行广告或决策建议、提高广告有效触达率、进一步了解用户需求。我们承诺：未经您的同意，我们不会与其共享可以识别您身份的个人信息。\n` +
              `2. 转让 除非获取您的明确同意，我们不会将您的个人信息转让给任何公司、组织或个人。如果发生合并、收购或破产清算，将可能涉及到个人信息转让，此种情况下我们会要求新的持有您个人信息的公司、组织继续受本隐私协议的约束。如果本隐私协议中约定的个人信息的收集、处理方式发生任何改变，该公司、组织将重新向您征求授权同意。\n` +
              `3. 公开披露\n` +
              `3.1 公开披露是指向社会或不特定人群发布信息的行为。除了因需要对违规账号、欺诈行为等进行处罚公告、公布中奖/获胜者等名单时脱敏展示相关信息等必要事宜而进行的必要披露外，我们不会对您的个人信息进行公开披露，如具备合理事由确需公开披露的，我们会在公开披露前向您告知公开披露的信息的目的、类型（如涉及您的个人敏感信息的，我们还会向您告知涉及的敏感信息的内容），并在征得您的授权同意后再公开披露，但法律法规另有规定的或本政策另有约定的除外。\n` +
              `3.2 对于公开披露的您的个人信息，我们会在收到公开披露申请后第一时间且审慎审查其正当性、合理性、合法性，并在公开披露时和公开披露后采取最严格个人信息安全保护措施和手段对其进行保护。 4. 共享、转让、公开披露您的个人信息的例外\n` +
              `请您知悉，根据法律法规的规定，在下述情况下，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：\n` +
              `4.1 与国家安全、国防安全直接相关的；\n` +
              `4.2 与公共安全、公共卫生、重大公共利益直接相关的；\n` +
              `4.3 与犯罪侦查、起诉、审判和判决执行等直接相关的；或根据法律法规的要求、行政机关或公检法等有权机关的要求的；\n` +
              `4.4 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；\n` +
              `4.5 个人信息是您自行向社会公开的或者是从合法公开的渠道（如合法的新闻报道、政府信息公开等渠道）中收集到的；\n` +
              `4.6 根据与您签订和履行相关协议或其他书面文件所必需的；\n` +
              `4.7 法律法规等规定的其他情形。\n\n` +
              `五、关于使用Cookie和同类技术\n\n` +
              `1. 在您使用我们的产品与/或服务时，我们可能会使用Cookie和同类技术收集您的一些个人信息，包括：您访问网站的习惯、您的浏览信息、您的登录信息，Cookie和同类技术收集该类信息是为了您使用我们的产品与/或服务的必要、简化您重复操作的步骤（如注册、登录）、便于您查看使用历史（如视频观看历史）、向您提供更切合您个人需要的服务内容和您可能更感兴趣的内容、保护您的信息和账号安全性、提升我们的产品和服务等。\n` +
              `2. 如果您拒绝我们使用Cookie及同类技术收集和使用您的相关信息，您可在浏览器具备该功能的前提下，通过您的浏览器的设置以管理、（部分/全部）拒绝Cookie与/或同类技术；或删除已经储存在您的计算机、移动设备或其他装置内的Cookie与/或同类技术，从而实现我们无法全部或部分追踪您的个人信息。您如需详细了解如何更改浏览器设置，请具体查看您使用的浏览器的相关设置页面。您理解并知悉：我们的某些产品/服务只能通过使用Cookie或同类技术才可得到实现，如您拒绝使用或删除的，您可能将无法正常使用我们的相关产品与/或服务或无法通过我们的产品与/或服务获得最佳的服务体验，同时也可能会对您的信息保护和账号安全性造成一定的影响。\n\n` +
              `六、我们对您个人信息的存储与保护\n\n` +
              `1. 信息存储\n` +
              `1.1 存储地点：我们依照法律法规的规定，仅会将收集到的有关您的个人信息存储于中华人民共和国境内。目前我们暂时不存在跨境存储您的个人信息或向境外提供个人信息的场景。如果确有必要进行数据的跨境传输，我们会单独向您明确告知（包括数据出境的目的、接收方、使用方式与范围、使用内容、安全保障措施、安全风险等），并征得您的授权同意，我们会确保数据接收方有充足的数据保护能力来保护您的个人信息。\n` +
              `1.2 存储期限：我们在为您提供满足产品和服务目的所必需且最短的期间内保留您的个人信息，例如：当您使用我们的注册及会员功能时，我们需要收集您的手机号码，且在您提供后并在您使用该功能期间，我们需要持续保存您的手机号码，以向您正常提供该功能、保障您的账号和系统安全。此外，我们或对您的相关信息保存至相关法律所规定的必要期限。\n` +
              `1.3 在超出上述存储期限后，我们会对您的个人信息进行删除或匿名化处理。\n` +
              `2. 信息保护\n` +
              `2.1 您的个人信息安全对于我们至关重要。我们将严格遵守相关法律法规，采取业内认可的合理可行的措施，保护您的个人信息。防止信息遭到未经授权的访问、披露、使用、修改，避免信息损坏或丢失。\n` +
              `2.2 我们使用符合业界标准的安全防护措施保护您提供的个人信息，防止数据遭到未经授权的访问、公开披露、使用、修改，防止数据发生损坏或丢失。我们会采取一切合理可行的措施，保护您的个人信息。例如使用SSL对数据进行加密保护；我们已建立访问控制机制，确保只有授权人员才可以访问个人信息；我们不时的举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。\n` +
              `2.3 为防止安全事故的发生，我们成立了专门的数据安全部门并制定了妥善的预警机制和应急预案。一旦发生个人信息安全事件，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议和对您的补救措施，并立即启动应急预案，力求将损失最小化。我们将及时将事件相关情况以电话、推送通知等方式告知您。\n\n` +
              `七、您管理个人信息的权利\n\n` +
              `我们理解您对个人信息的关注，并尽全力确保您对于自己个人信息访问、更正、删除以及撤回授权的权利，以使您拥有充分的能力保障您的隐私和安全。您的权利包括：\n` +
              `1. 您有权访问您的个人信息\n` +
              `您可以按照我们提供的产品和服务的相关说明（或设置），对您已提供给我们的相关个人信息进行查阅。包括：\n` +
              `1.1 账号信息：您可以通过相关产品页面随时登陆您的个人中心，以访问您账号中的个人资料信息，包括：头像、昵称、UID、二维码名片、性别、出生年月、个人签名等；\n` +
              `1.2 使用信息：您可以通过相关产品页面随时查阅您的使用信息，包括：投稿内容、关注、评论、点赞、收藏记录等；\n` +
              `1.3 其他信息：如您在访问过程中遇到操作问题需获取其他前述无法获知的个人信息内容，您可通过本隐私协议提供的方式联系我们。\n` +
              `2. 您有权更正/修改您的个人信息\n` +
              `当您发现您提供给我们的个人信息存在登记错误、不完整或有更新的，您可在我们的产品和/或服务中更正/修改您的个人信息。\n` +
              `2.1 对于您的部分个人信息，我们在产品的相关功能页面为您提供了操作设置，您可以直接进行更正/修改，例如：“头像/昵称/性别/出生年月/个人签名”在${APP_NAME_CONST}iOS客户端中的更正/修改路径为：点击头像-编辑资料。\n` +
              `2.2 对于您在行使上述权利过程中遇到的困难，或者其他可能目前无法向您提供在线自行更正/修改服务的，经过对您身份的验证，且更正/修改不影响信息的客观性和准确性的情况下，您有权对错误或不完整的信息作出更正或修改，或在特定情况下，尤其是数据错误时，通过我们公布的反馈与报错等措施将您的更正/修改申请提交给我们，要求我们更正或修改您的数据，但法律法规另有规定的除外。但出于安全性和身份识别的考虑，您可能无法修改注册时提交的某些初始注册信息。\n` +
              `3. 您有权删除您的个人信息\n` +
              `3. 1对于您的部分个人信息，您也可以自行通过我们提供的相关产品和服务的功能页面，主动删除您提供信息。例如：您可以自主删除您发布的视频，一旦您删除后，我们即会对此类信息进行删除或匿名化处理，除非法律法规另有规定。\n` +
              `3. 2当发生以下情况时，您可以直接要求我们删除您的个人信息，但已做匿名化处理或法律法规另有规定的除外：\n` +
              `（1）当我们处理个人信息的行为违反法律法规时；\n` +
              `（2）当我们收集、使用您的个人信息，却未征得您的同意时；\n` +
              `（3）当我们处理个人信息的行为违反了与您的约定时；\n` +
              `（4）当您注销了${APP_NAME_CONST}账号时；\n` +
              `（5）当我们终止服务及运营时。\n` +
              `4. 您有权撤回您对个人信息的授权\n` +
              `如前文所述，我们提供的产品和服务的部分功能需要获得您使用设备的相关权限（包括：相机、麦克风、存储等，具体以本隐私协议第四条为准）。您可以在授权后随时撤回（或停止）对该权限的继续授权。当您更新App版本后，未经您的明确同意，我们不会更改您之前设置的权限状态。例如您可以通过移动设备中的“设置-隐私-照片”来关闭您对手机相册的授权。您也可以通过注销账号的方式，永久撤回我们继续收集您个人信息的全部授权。您需理解，当您撤回授权后，我们无法继续为您提供撤回授权所对应的特定功能和/或服务。但您撤回授权的决定，不会影响此前基于您的授权而开展的个人信息处理。\n\n` +
              `八、我们对未成年人的保护\n\n` +
              `1. 未成年人使用我们的产品与/或服务前应取得其监护人的同意。如您为未成年人，在使用我们的产品与/或服务前，应在监护人监护、指导下共同阅读本隐私协议且应在监护人明确同意和指导下使用我们的产品与/或服务、提交个人信息。我们根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律法规允许、监护人明确同意或保护您的权益所必要的情况下收集、使用或公开披露未成年人的个人信息。\n` +
              `2. 若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，您可以通过本隐私协议第十一条“联系我们”中公示的联系方式与我们沟通解决。如果我们发现在未事先获得可证实的监护人同意的情况下收集了未成年人的个人信息，则会尽快删除相关数据。\n\n` +
              `九、我们对去世用户的个人信息保护\n\n` +
              `1. ${APP_NAME_CONST}将从2021年11月1日起，根据《个人信息保护法》的相关规定升级死者个人信息保护制度。${APP_NAME_CONST}用户（仅限自然人）去世后，其近亲属为了自身的合法、正当利益，可以通过本隐私协议第十一条“联系我们”中公示的联系方式，对去世用户的相关个人信息行使查阅、复制、更正、删除等权利，但是去世用户生前另有安排的除外。\n` +
              `2. 您理解并确认，为了充分保护去世用户的个人信息权益，申请行使本条权利的去世用户近亲属需要根据${APP_NAME_CONST}的指定流程或客服提示，提交去世用户的身份证明文件、死亡证明文件、申请人的身份证明文件、申请人与去世用户的亲属关系证明文件，并提供申请行使的权利种类、目的。更多关于去世用户的个人信息保护流程、条件等事项请详见《帮助中心》。\n\n` +
              `十、联系我们\n\n` +
              `1. 如您对本《${APP_NAME_CONST}隐私协议》的内容或使用我们的服务时遇到的与隐私保护相关的事宜有任何疑问或进行咨询或投诉时，您均可以通过如下任一方式与我们取得联系：\n` +
              `1.1 您可在我们的产品功能页面的“设置”中找到“问题与反馈”在线提交反馈意见；\n` +
              `1.2 您可以向我们开通的contactus@yingshi.tv客服邮箱发送邮件与我们联系；\n` +
              `2. 我们会在收到您的意见及建议后，并在验证您的用户身份后的15个工作日内向您回复。此外，您理解并知悉，在与个人信息有关的如下情形下，我们将无法回复您的请求：\n` +
              `2.1 与国家安全、国防安全有关的；\n` +
              `2.2 与公共安全、公共卫生、重大公共利益有关的；\n` +
              `2.3 与犯罪侦查、起诉和审判等有关的；\n` +
              `2.4 有充分证据表明您存在主观恶意或滥用权利的；\n` +
              `2.5 响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；\n` +
              `2.6 涉及商业秘密的；\n` +
              `2.7 法律法规等规定的其他情形。\n\n` +
              `十一、本政策如何更新\n\n` +
              `1. 为了给您提供更好的服务，我们会根据产品的更新情况及法律法规的相关要求更新本隐私协议的条款，该等更新构成本隐私协议的一部分。未经您明确同意，我们不会削减您按照本政策所应享有的权利。我们将在更新后的本隐私协议生效前通过在显著位置提示或向您发送推送消息或以其他方式通知您，如该等更新造成您在本隐私协议下权利的实质减少或重大变更，我们会再次征求您的明示同意。\n` +
              `2. 重大变更包括但不限于：\n` +
              `2.1 我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；\n` +
              `2.2 我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；\n` +
              `2.3 个人信息共享、转让或公开披露的主要对象发生变化；\n` +
              `2.4 您参与个人信息处理方面的权利及其行使方式发生重大变化；\n` +
              `2.5 我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化；\n` +
              `2.6 个人信息安全影响评估报告表明存在高风险时。\n\n` +
              `十二、争议解决\n\n` +
              `1. 如果您认为我们处理个人信息的行为损害了您的合法权益，您也可以选择向有关政府部门进行反映。\n` +
              `2. 本隐私协议的标题仅为方便及阅读而设，并不影响正文其中任何规定的含义或解释。`}
          </Text>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {},
});
