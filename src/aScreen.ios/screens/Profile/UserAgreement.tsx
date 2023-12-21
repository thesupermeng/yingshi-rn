import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";

import { useTheme } from "@react-navigation/native";
import { APP_NAME_CONST } from "@utility/constants";
import { showLoginAction } from "@redux/actions/screenAction";
import { useAppDispatch, useSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";

export default ({ navigation }: RootStackScreenProps<"用户协议">) => {
  const { textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const screenReducer = useSelector<screenModel>('screenReducer');

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (screenReducer.navigateToProfile === true) {
      // Check if the previous route was "RegistrationPage" and the destination is "ProfileScreen"
        // If yes, trigger your custom action
        const navState = navigation.getState();
        const currentRouteName = navState.routes[navState.index].name;
        const previousRouteName = navState.routes[navState.index - 1]?.name;
        if( previousRouteName !='关于我们')
        {
          dispatch(showLoginAction());
        }
      } else {
        return
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScreenContainer scrollView={true}>
      <View style={{ gap: spacing.m }}>
        <TitleWithBackButtonHeader title="用户协议" />
        <Text style={{ ...textVariants.header, textAlign: "center" }}>
          {APP_NAME_CONST}用户协议
        </Text>
        <Text style={textVariants.body}>
          {`《${APP_NAME_CONST}用户服务协议》\n` +
            `一、协议的定义及服务说明\n` +
            `二、您的${APP_NAME_CONST}账号\n` +
            `三、服务使用规则\n` +
            `四、您的行为规范\n` +
            `五、内容的上传与分享\n` +
            `六、您的个人信息保护\n` +
            `七、知识产权\n` +
            `八、广告、第三方链接\n` +
            `九、责任限制\n` +
            `十、服务的变更和中断/终止\n` +
            `十一、通知和联系方式\n` +
            `十二、关于本协议\n\n` +
            `一、协议的定义及服务说明\n\n` +
            `1. 本协议适用于${APP_NAME_CONST}的所有产品及/或服务。\n` +
            `2. ${APP_NAME_CONST}的平台，包括但不限于：${APP_NAME_CONST}或其他任何由我们直接所有或运营的任何网页平台及软硬件客户端平台，适用终端包括但不限于PC、平板、手机、电视、机顶盒、可穿戴设备等。\n` +
            `3. 本协议所称“用户”，包括注册用户及未注册用户。凡未注册我们的产品及/或服务的用户，自开始使用我们的产品及/或服务时即成为我们的“非注册用户”，在使用过程中须遵循本协议中除注册用户专属约定以外的其他所有条款。需要特别提醒您的是：由于我们的产品及/或服务较多，为您提供的产品及/或服务内容也有所不同，本协议为统一适用的一般性用户服务条款。针对我们的某些特定产品及/或服务，我们还将制定特定用户服务协议，以便更具体地向您阐明该等产品及/或服务的服务内容、服务规则等内容，您应在充分阅读并同意特定用户服务协议的全部内容后再使用该特定产品/服务。如您在我们平台上使用第三方提供的产品及/或服务时，除遵守本协议约定外，还应遵守第三方的服务条款。\n\n` +
            `二、您的${APP_NAME_CONST}账号\n\n` +
            `1. 您可以创建一个${APP_NAME_CONST}账号来使用我们平台的某些功能和服务。\n` +
            `2. 为保证您能顺利使用我们的产品及/或服务，您知悉并同意，您在使用${APP_NAME_CONST}账号时（包括通过第三方账号授权登录）应遵守以下规则：\n` +
            `2.1 您在注册${APP_NAME_CONST}账号时（包括您通过第三方账号授权登录），应根据页面提示向我们提供完整、真实、准确、最新的必要注册信息，不得使用他人邮箱、手机号码或以其他冒用他人身份的方式进行账号注册。在提交注册信息后，如果上述信息发生变化，您应及时更改。且，您提交的名称、头像和简介等注册信息中不得出现违法和不良信息；\n` +
            `2.2 除通过第三方账号授权登录外，您仅可通过我们的官方渠道注册成为我们的注册用户。您不得通过包括但不限于购买、租用、借用、分享、利用或破坏我们的注册系统及/或其他未经我们许可的方式获得${APP_NAME_CONST}账号；\n` +
            `2.3 您享有${APP_NAME_CONST}账号的有限使用权，您的${APP_NAME_CONST}账号仅可为个人出于非商业目的进行使用，不得以转让、出租、出借、售卖、分享或其他任何方式交由他人使用（但法律另有规定或双方另有明确约定的除外）。\n` +
            `3. 您的账号管理及安全\n` +
            `3.1 您需对您享有使用权的${APP_NAME_CONST}账号下所从事的所有行为及/或通过该账号所从事的所有行为承担责任。因此，您应自行负责并妥善、正确地保管、使用、维护您的${APP_NAME_CONST}账号和密码，并对您的账号和密码采取必要和有效的保密措施。非因我们法定过错导致的任何遗失、泄露、被篡改、被盗以及其他因保管、使用、维护不当而造成的损失，您应自行承担；\n` +
            `3.2 如果您发现有人未经您的授权使用了您的账号，或您的账号存在其他异常情况导致无法正常登录使用，您需要按照我们官方公布的账号找回流程进行账号找回。在找回过程中，我们可能会要求您提供相应信息及/或证明资料，请确保您所提供的内容真实有效，否则将可能无法通过我们的验证而导致找回失败；\n` +
            `3.3 为保护账号安全，防止账号被盗等情况发生，我们可能会不时或定期采用一种或多种方式对注册用户进行用户身份验证（如短信验证、邮件验证等），如用户未成功通过验证，我们有合理理由怀疑该账号出现被盗等不安全情况，并可能视情节严重情况而单方决定是否中止或终止向该账号继续提供我们的产品及/或服务及/或采取进一步措施。您同意，我们采取前述措施是为了保护用户账号安全，我们无需因此承担任何责任。\n` +
            `4. 若您有以下行为，我们有权暂时中止或永久终止您对账号的使用或收回您的${APP_NAME_CONST}账号，中断或终止向您继续提供我们的产品及/或服务，且无需承担任何责任：\n` +
            `4.1 根据您的主动申请；\n` +
            `4.2 您违反本协议的内容的；\n` +
            `4.3 根据我们必须遵守的法律法规、监管政策；\n` +
            `4.4 我们有理由认为您的使用行为对我们及/或他人的合法权益造成（或可能造成）侵害的；\n` +
            `4.5 您的账号连续180天未进行使用的。\n\n` +
            `三、服务使用规则\n\n` +
            `1. 服务使用的基本原则\n` +
            `1.1 您在使用我们的产品及/或服务的过程中，应遵守相关法律法规及其他规范性文件；应遵守公共秩序，尊重社会公德，不得危害网络安全，不得利用网络从事危害国家安全、荣誉和利益，煽动颠覆国家政权、推翻社会主义制度，煽动分裂国家、破坏国家统一，宣扬恐怖主义、极端主义，宣扬民族仇恨、民族歧视，传播暴力、淫秽色情信息，编造、传播虚假信息扰乱经济秩序和社会秩序，以及侵害他人名誉、隐私、知识产权和其他合法权益等活动。在任何情况下，我们一旦合理地认为您存在或可能存在上述行为的，可以在任何时候，不经事先通知中止或终止向您提供我们的产品及/或服务。\n` +
            `1.2 我们的产品及/或服务，均仅限于您在我们平台或我们明确授权的其他平台上进行使用，任何以破解、转译、转录等非法或未经我们明确允许的手段将我们的产品及/或服务与我们平台或其他我们授权的平台相分离的行为，均不属于本协议中约定的${APP_NAME_CONST}的产品及/或服务。我们保留追究侵权行为人的法律责任及索赔的权利。\n` +
            `1.3 除法律另有规定或双方另有约定外，我们授予您对我们的产品及/或服务一项个人的、非独家的、不可转让的、非商业用途的、可撤销的、有期限的使用许可。即：您仅可出于个人、非商业的目的使用我们的产品及/或服务。\n` +
            `2. 您知悉并同意，受限于宽带和网络连接问题，我们在提供产品及/或服务的过程中可能会出现需较长时间缓冲或卡顿或其他类似的情况，此类情况并非我们的过错，我们无需就此类情况向用户承担责任。且为了减少甚至避免上述情况的出现，从而进一步提升用户的服务体验，您确认我们可采取一系列技术手段对产品及/或服务进行优化，包括改进CDN节点分布调度、使用专有HCDN对等网络等提升视频分发质量的技术措施等。\n` +
            `3. 您知悉并同意，我们提供的产品及/或服务需接入互联网方可使用，因此您需自行承担使用产品及/或服务过程中所产生的上行和下行的网络通信及流量费用，上述费用将由网络运营商收取。您亦可通过产品或终端的相关设置页面对网络使用信息进行相关设置。\n` +
            `4. 您可以向我们提出咨询和获得我们的产品及/或服务的合理技术支持，我们的此项义务不应超过${APP_NAME_CONST}的合理承受限度。\n` +
            `5. 虚拟资产的使用规则\n` +
            `5.1 包括但不限于积分、点播券、福利券等您通过免费或付费方式获得的，在遵守一定使用规则前提下，在我们平台进行使用的前述产品及/或服务，均属于虚拟资产；\n` +
            `5.2 虚拟资产不可兑换现金或进行转让、买卖、置换、抵押等，我们对于您所消耗虚拟资产不提供操作修改、退还；对于虚拟资产兑换的实体商品，除因${APP_NAME_CONST}过错导致的商品责任，我们不予负责；\n` +
            `5.3 虚拟资产的定价、获得途径、方式、数量、使用方法、有效期限等所有内容以我们平台公布、实际展示或我们的说明为准；\n` +
            `5.4 因我们的自身发展、运营情况而自行决定停止我们的虚拟资产产品及/或服务或者我们丧失运营资格的情况下，以现金方式直接取得的虚拟资产，可以依照我们的相关规则，实现等价退款；但通过推广、营销活动等而非由现金方式直接获得的虚拟资产，不予退还或补偿。\n\n` +
            `四、您的行为规范\n\n` +
            `1. 您应在遵守本协议、法律法规及其他规范性文件的前提下访问和使用我们的产品及/或服务。您同意，您不会进行或利用我们的产品及/或服务进行下列活动（也不为他人进行下列活动提供便利和支持）：\n` +
            `1.1 以任何方式危害未成年人及/或其他人；\n` +
            `1.2 从事侵犯我们或他人合法权益的活动或违法犯罪活动，包括为上述活动提供帮助；\n` +
            `1.3 未经我们及他人（如涉及）事先明确书面许可，自行或委托他人以任何方式（包括但不限于机器人软件、蜘蛛软件、爬虫软件等任何自动程序、脚本、软件）获取平台的服务、内容、数据（包括但不限于业务数据和用户的个人信息）；\n` +
            `1.4 规避、移除、更改、阻碍、破坏或以其他方式扰乱我们用于保护我们的产品及/或服务的安全措施；\n` +
            `1.5 未经我们明确授权，采用收费或免费的方式，在任何公开场合全部或部分展示我们的产品及/或内容（但如您的上述行为不构成侵权的除外）；\n` +
            `1.6 通过不正当手段或以违反诚实信用原则的方式（如利用规则漏洞、利用系统漏洞、滥用会员身份、黑色产业、投机等违背我们提供产品及/或服务的初衷的方式）获取、使用我们的产品或服务；\n` +
            `1.7 伪造标题或以其他方式操控识别资料，使人误认为该内容为我们所传送；\n` +
            `1.8 将软件病毒、政治宣传、商业招揽（如：广告函件、促销资料）、连锁信、大宗邮件或其他形式的“垃圾邮件”、侵犯任何人专利、商标、著作权、商业秘密或其他专属权利之内容及/或无权传送之内容（如：内部资料、机密资料）进行上载、发布、发送电子邮件或以其他方式传送；\n` +
            `1.9 利用恶意软件、网络漏洞或其他非法方式破坏我们的正常运营；窃取、盗用他人的账号及账号下财产等；\n` +
            `1.10 其他未经我们明示授权许可或违反本协议、法律法规或监管政策、侵犯我们及/或他人合法权益的行为。\n` +
            `2. 您利用我们的产品及/或服务制作、上传、复制、传送、传播的内容的行为不得违反法律法规及其他规范性文件，不得侵犯我们及/或他人的合法权益，且不得包含包括但不限于以下内容：\n` +
            `2.1 任何反对宪法所确定的基本原则、危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一、破坏民族团结、损害国家荣誉和利益、煽动民族仇恨、民族歧视、破坏民族团结、破坏国家宗教政策、宣扬邪教和封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪、侮辱或者诽谤他人的内容或其他令人反感的包括但不限于资讯、资料、文字、软件、音乐、照片、图形、信息或其他资料；\n` +
            `2.2 广告信息，包括但不限于广告信息的标题、简介，但我们另行书面许可的除外；\n` +
            `2.3 任何侵犯我们或他人合法权益、违反法律法规及其他规范性文件（包括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》等）及本协议的内容。\n` +
            `3. 您对您利用我们的产品及/或服务制作、上传、发布、传播的符号、文字、图片、音频、视频等内容的行为，独立完整地承担法律责任，包括如造成我们的损失的，应向我们承担赔偿责任。同时：\n` +
            `3.1 我们有权视情节严重程度对您的账号做出封禁账号，扣除、清零部分或全部虚拟资产，暂时停止、永久禁止您和相关第三方（如有）利用我们的产品及/或服务制作、上传、发布、传播的符号、文字、图片、音频、视频等内容或终止向您提供我们的产品及/或服务的处理；\n` +
            `3.2 我们的后台记录有可能作为您违反法律法规、违约、侵权的证据。\n\n` +
            `五、内容的上传与分享\n\n` +
            `1. 您充分了解并同意，我们提供的用户上传、分享、传播信息平台仅用于用户上传、分享、传送及获取信息，该平台或通过该平台所传送的任何内容并不反应我们的观点或政策，我们对此不承担任何责任。同时，您应对该平台的其他用户提供的内容自行加以判断，并承担因使用该内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险，我们对此不承担任何法律责任。\n` +
            `2. 您知悉并同意，除非法律法规另有规定，否则我们对您上传、发布、分享的内容无储存义务，您应自行备份；如相关法律法规要求，我们将监控您在平台上传的内容。您亦知悉并同意，除非法律法规另有规定，我们对该等内容不承担保密责任，无论您提供的以上内容是否为公众所知。\n` +
            `3. 您在我们平台上传、发布或传输图片、文字、音频、视频等内容即视为您是前述内容的著作权人或合法授权人。除双方另有约定外，您在使用平台时将前述内容公开发布、传播、分享的行为代表了您有权且同意在全世界范围内、永久性的、不可撤销的、免费的授予我们可对该等内容行使除专属于著作权人的人身权利以外的全部著作权权利（包括但不限于复制、发行、出租、展览、表演、放映、传播、摄制、改编、翻译、汇编您的内容，与上述权利相关的商业开发、宣传和推广等服务的权利，含转授权及维权权利）。\n\n` +
            `六、您的个人信息保护\n\n` +
            `1. 我们深知个人信息对您的重要性，因此我们非常重视保护您的隐私和个人信息，亦将您的个人信息以高度审慎的义务对待和处理。在您使用我们的产品及/或服务的过程中，我们将采用相关技术措施及其他安全措施来保护您的个人信息。\n` +
            `2. 我们非常注重未成年人的保护\n` +
            `2.1 若您为未成年人，应在监护人监护、指导下阅读本协议，并且使用我们的产品及/或服务已经得到监护人的同意；\n` +
            `2.2 监护人应指导子女上网应该注意的安全问题，防患于未然。若监护人同意未成年人使用我们的产品及/或服务，必须以监护人名义申请消费（如涉及），并对未成年人使用我们的产品及/或服务进行正确引导、监督。未成年人使用我们的产品及/或服务，以及行使和履行本协议项下的权利和义务即视为已获得了监护人的认可；\n` +
            `2.3 我们提醒未成年人在使用我们的产品与服务时，要善于网上学习，认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活。\n` +
            `3. 更多关于个人信息处理和保护规则、用户对个人信息的控制权等内容，请您访问我们平台查阅产品隐私政策的全文（例如：手机端${APP_NAME_CONST} APP的查询路径为：我的-设置-隐私，点击“隐私政策”）。\n\n` +
            `七、知识产权\n\n` +
            `1. 我们在本产品和服务中提供的所有内容（包括但不限于软件、软件名称与商业标识、产品界面、文字、图片、音频、视频等）的知识产权全部归我们所有或享有相关授权权利；未经我们事先书面明确同意，您不得以任何形式对前述内容进行使用或创造相关衍生作品，但如您是作品的权利人、您已获得相关权利人授权或${APP_NAME_CONST}与您另有约定的除外。\n` +
            `2. 关于我们的产品及/或服务中的软件（及其技术）\n` +
            `2.1 您在使用我们的产品及/或服务的过程中可能需要下载我们的软件，对于该软件，我们仅授予您可撤销的、有限的、不可转让及非排他性的许可。您仅可为非商业的访问/使用服务的目的而下载、使用软件。\n` +
            `2.2 为了改善用户体验、保证产品和服务的安全性及一致性，我们可能会对软件进行更新。我们建议您将软件更新到最新版本。\n` +
            `2.3 您不得复制、修改、发布、出售或出租我们的产品及/或服务或所含软件的任何部分，也不得进行反向工程、反编译、反汇编或其他类似行为试图提取该软件的源代码。\n` +
            `3. 我们所有和享有的知识产权，不因您的任何使用行为而发生权利转移。\n\n` +
            `八、广告、第三方链接\n\n` +
            `1. 您知悉并同意，我们在提供我们的产品及/或服务的过程中，在符合法律法规的前提下，保留以各种方式投放商业性广告（包括广告链接）或其他任何类型的商业信息的权利（包括但不限于在我们平台的任何位置上投放广告，在您上传、传播的内容中投放广告）。\n` +
            `2. 在符合法律法规的前提下，我们有权自主决定广告投放的形式、时长、位置、内容而不受任何第三方的干预。\n` +
            `3. 我们的产品与/或服务可能会提供与其他互联网网站或资源进行链接。我们会依照法律规定对广告商履行相关义务，但您知悉并同意，这些广告商和广告内容非由我们控制，您对广告信息应审慎判断其真实性、可靠性。您通过我们的产品与/或服务与广告商或广告主进行任何形式的行为或产生任何形式的纠纷，由您自行负责与解决，除法律法规规定由广告发布者承担的责任外，我们不承担任何额外责任，但根据需要会依法提供必要的协助。\n\n` +
            `九、责任限制\n\n` +
            `1. 本协议中的任何内容均不影响您作为用户始终有权享有的不能以协议约定方式同意改变或放弃的任何法定权利。本协议及本协议中包含的所有免责和责任限制条款仅适用于法律法规允许的最大限度内。 2. 您知悉并同意，除本协议另有约定或法律法规另有规定外，我们的产品及/或服务乃按“现状”提供，我们不对提供的产品及/或服务（含技术和信息）作出任何明示或暗示的承诺或保证，包括但不限于质量、稳定、正确、及时、完整、连贯、安全，但我们承诺将不断提升产品及/或服务质量及服务水平，为用户提供更加优质的产品及/或服务。 3. 除法律法规另有规定外，不论是否预见，我们仅对我们提供的产品及/或服务承担法律允许的最大范围的责任，我们亦不对任何第三方的诽谤、犯罪或其他非法行为承担责任，亦不赔偿因此造成的您的损失，但因我们对您遭受的损失负有法定过错的除外。 4. 您同意（根据我们的选择），如因您的下述行为导致我们或使用我们产品及/或服务的第三方遭受诉讼或其他纠纷的，您同意为我们及/或上述第三方提供抗辩，并赔偿我们及/或上述第三方遭受的损失： 4.1 您违反本协议的任何条款； 4.2 您侵犯、涉嫌侵犯或盗用任何知识产权的行为； 4.3 有任何人声称您的行为损害第三方权益，您应当尽力与我们合作，对相关索赔进行抗辩。我们保留自费进行独自抗辩和控制由您索赔引起的任何事宜的权利。\n\n` +
            `十、服务的变更和中断/终止\n\n` +
            `1. 在法律法规允许的最大限度内，我们有权根据我们的业务发展情况，暂时或永久地变更或终止我们的产品及/或服务（或任何一部分），该等变更或终止对您和任何第三人不承担违约责任，因该等变更或终止导致您合法权益遭受损失的，在您提出申请后，我们将根据确认的实际损失情况给予您适当的补偿。\n` +
            `2. 除前述1条所述的情形外，在发生如下情况时，我们有权中断或终止向您提供产品及/或服务：\n` +
            `2.1 您主动提出要求的；\n` +
            `2.2 您存在或我们经独立判断后认为您存在任何违反国家法律法规或监管政策、违反本协议或有损害我们的声誉、权益的行为的；\n` +
            `2.3 根据法律法规、监管政策的规定或有权机关的要求；\n` +
            `2.4 为维护账号与系统安全等紧急情况之需要；\n` +
            `2.5 不可抗力（不可抗力是指不能预见、不能避免且不能克服的客观情况，鉴于互联网之特殊性质，本协议所称不可抗力亦包括黑客攻击、电信部门技术调整导致之重大影响、因政府管制而造成之暂时关闭、病毒侵袭等影响互联网正常运行之情形）；\n` +
            `2.6 其他无法抗拒的情况。\n` +
            `3. 发生前述2条所述之终止的情况时，您与我们均认可如下处理方式：\n` +
            `3.1 您的账号下已经产生但未使用的权益自动清除且不折现；\n` +
            `3.2 如您在我们平台内有正在进行中的交易，我们届时将视情况进行合理处理；\n` +
            `3.3 除法律法规另有规定或我们另有说明外，我们已收取的相关费用不予退还；\n` +
            `3.4 如因您违反本协议导致终止，我们有权视情况要求您承担相应的违约责任；\n` +
            `3.5 除法律法规另有规定或我们另有说明外，我们无需向您和第三人承担任何责任。\n\n` +
            `十一、通知和联系方式\n\n` +
            `1. 本协议项下我们对于用户所有的通知均可通过网页公告、站内信、电子邮件、手机短信或常规的信件传送等方式进行，该等通知于发送之日视为已送达您。 2. 如您对本协议或使用我们的产品与/或服务相关的事宜有任何问题（包括问题咨询、投诉等），我们专门为您提供了多种反馈通道，希望为您提供满意的解决方案： a) 在线客服/其他在线意见反馈通道：您可与我们平台上产品功能页面的在线客服联系或者在线提交意见反馈； b) 人工客服通道：您可以拨打我们的客服电话与我们联系； c) 专设的邮件通道：我们专门设立了客服邮箱，您可以通过该邮箱与我们联系； d) 其他方式：我们提供的其他反馈通道。\n\n` +
            `十二、关于本协议\n\n` +
            `1. 我们可能会随时更新本《${APP_NAME_CONST}用户服务协议》的内容，该等更新构成本《${APP_NAME_CONST}用户服务协议》的一部分。我们将在本协议生效前通过发布页面通知、弹窗、站内信或以其他方式通知您，在您继续使用我们的产品及/或服务前，请仔细阅读本协议的更新版本。若您不同意变更后的内容，您可以选择停止使用我们的产品/或服务，若您继续使用我们的产品及/或服务，即表示您充分阅读、理解并同意接受经修订的《${APP_NAME_CONST}用户服务协议》的约束。更新后的协议于协议首页约定生效之日起生效。\n` +
            `2. 本协议的解释及争议解决均应适用中华人民共和国大陆地区法律。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。\n` +
            `3. 本协议的标题仅为方便阅读而设，不影响本协议任何条款的含义或解释。\n` +
            `4. 在任何情况下，本协议中包含的任何一个或多个条款被认为无效、非法或不可执行，不影响其余条款的有效性、合法性和可执行性。\n`}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {},
});
