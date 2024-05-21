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
import { APP_NAME_CONST, APP_NAME_CONST2 } from "@utility/constants";
import { showLoginAction } from "@redux/actions/screenAction";
import { useAppDispatch, useSelector } from "@hooks/hooks";
import { screenModel } from "@type/screenType";
import { CLangKey } from "@constants";

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
        if (previousRouteName != '关于我们') {
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
        <TitleWithBackButtonHeader title={CLangKey.userAgreement.tr()} />
        <Text style={{ ...textVariants.header, textAlign: "center" }}>
          {APP_NAME_CONST}{CLangKey.userAgreement.tr()}
        </Text>
        <Text style={textVariants.body}>
          {`《${APP_NAME_CONST}${CLangKey.userAgreement.tr()}》\n` +
            `INTRODUCTION & ACCEPTANCE\n` +
            `Welcome to ${APP_NAME_CONST}! As a subscriber of ${APP_NAME_CONST}, these Terms of Use govern your use of our Services. Please take a moment to carefully read through these Terms.\n` +

            `We know it is tempting to skip these Terms of Service, but it is important to establish what you can expect from us as you use our Services, and what we expect from you. Each time you visit, browse, or use our Service, you accept this Agreement and the terms of this Agreement become valid and binding between the User (referred to as “User”, “you” or “your”) and ${APP_NAME_CONST}(“${APP_NAME_CONST}”, “we”, “us”, “our”).\n` +

            `OUR SERVICES\n` +
            `1.1. About Us:\n` +
            `${APP_NAME_CONST} not only provides a personalized video streaming service that allows you to discover movies, web-series, shows and various other content for free but also rewards its users for content consumption and engagement. Our services are accessible through web browsers, apps or internet connected mobile phones/TVs/computers and various compatible devices discussed in System Requirements below.\n` +
            `Our content and services are available only to our registered members by way of a sign-up process.\n` +

            `1.2. Access & Personalization:\n` +
            `We offer features to personalize your digital streaming experience by creating a profile to access our Service. For the purpose of registration, we would require certain information as prompted by the applicable registration form explained further under User Accounts & Memberships. Such personal information submitted is subject to the Privacy Policy of ${APP_NAME_CONST}.\n` +
            `You will have control of your account and the password so created. While you may share your account details with members of your household, please be aware that it would be your responsibility to maintain its confidentiality and to restrict access to such account.\n` +

            `1.3. System Requirements:\n` +
            `The use of our services and access to the content are subject to certain minimum requirements of hardware, software, and network resources.\n` +
            `To stream our content, you will need a device that meets the system and compatibility requirements. We may change the requirements for compatible devices from time to time and in some cases whether a device is (or remains) a compatible device may depend on software or systems provided or maintained by the device manufacturer or other third parties and hence, compatible devices may cease to be so in the future dependent on such factors.\n` +
            `The playback resolution, quality of the digital content, functionality, and features of our services that you receive on your device will be contingent on a variety of factors including the type of device used, the configuration of such device, the kind of content selected and the internet bandwidth available. Not all content offered will be available in all formats such as HD and this may be dependent upon the internet service and device. Given the fact that your bandwidth may increase or decrease over the course of your viewing, we make no guarantee as to the resolution or format of the content you receive while streaming.\n` +
            `Some of the services we offer might be available on other third-party platforms and devices which may again be dependent on software or systems provided or maintained by such platforms. You understand that we would not be able to take up any responsibility for such content or features as available in these third-party platforms or devices.\n` +

            `1.4. Modification of Content:\n` +
            `We update our content library regularly for a better streaming experience and reserve the right to modify, suspend, or discontinue the service or any part thereof, at any time without notice. Such modification may impact your ability to use certain part of our services or features and may change the availability of content. Additionally, for various reasons, such as restrictions under the law in force, or otherwise, certain content and functionality may be changed, suspended, or discontinued either temporarily or permanently with respect to any or all users.\n` +

            `1.5. Troubleshooting and Grievance Redressal Mechanism:\n` +
            `In the event you require any assistance or troubleshooting with your account, features or usage of our platform or our services, please write to us at Support@${APP_NAME_CONST}.com.\n` +
            `For resolving any issues concerning the content on our Platform wherein you find the content to be offensive or to be a reproduction of someone else’s work (copyrighted work).\n` +

            `USER ACCOUNT & MEMBERSHIP\n` +
            `Your use of our content is subject to the User Terms and Conditions contained herein.\n` +
            `2.1. Promotional Offers:\n` +
            `We sometimes offer eligible customers certain additional features or promotional memberships, free of cost or at discounted rates, either directly or through third party alliances. Such memberships as offered by third parties in conjunction with their own products and services, may have separate terms and conditions which will be communicated by the third party or disclosed at the time of registration. We are not responsible for the services provided by such third parties. We may use information such as device ID, method of payment or an account email address used with the existing or recent membership to determine offer eligibility. The eligibility requirements and other limitations and conditions will be disclosed when you sign-up for the offer or in other communications made available to you.\n` +

            `ADVERTISEMENTS\n` +
            `Our service allows you to access our content and existing features of the services on an adsupported basis. Advertising allows us to provide our services to you free of charge by letting third party advertisers serve ads on our platform. Parts of our website/ app and the content contained therein may contain advertising and/or links to third party sites.\n` +
            `Advertisers may receive information about your activity such as preferences, general locations, browser type from our platform to serve you interest based ads. While we show you ads on our platform, the advertisements may be based on information that would be collected from your use of other websites or apps outside the ${APP_NAME_CONST} ecosystem.\n` +
            `You understand that your device is assigned an ID to help advertisers show targeted ads to you. Your Advertiser ID helps advertisers anonymously track your activity and roll out curated ads on the ${APP_NAME_CONST} platform during your usage. The advertisements are shown basis the information collected from your device and on other factors such as your browser history, search terms and overall digital activity.\n` +
            `You understand that we only provide space for advertisers to promote their products or services on our platform and do not control or regulate such ads even though we endeavor to ensure that all ads served on our platform are as per the ASCI standards and other regulations. You acknowledge that we cannot be made liable for any content residing in any third-party advertisement or website. In the event that an advertisement is found offensive or inappropriate, we would not take any responsibility for the appropriateness of such ads.\n` +
            `You understand that our ad serving servers integrate with digital marketplaces where advertising space is bought and sold in real time auctions, and such platforms retarget consumers such as you, through sequence targeting in an effort to have control over their brand messaging and storytelling. We cannot be liable for either the ad servers or the sequence targeting in lieu of the fact that we have no role to play.\n` +

            `USER’S TERMS AND CONDITIONS\n` +
            `4.1. User/client Agreement\n` +
            `${APP_NAME_CONST} enters into a written clickwrap Agreement (“Agreement”) with each User and/or client which set outs all the duties and responsibilities of ${APP_NAME_CONST} when providing services related to the Platform. Furthermore, the Agreement includes the following attributes;\n` +
            `4.1.1.\n` +
            `Identity and details of client and/or User (extracted automatically when a client and/or user registers on the Platform and details of ${APP_NAME_CONST} including but not limited to legal name, registered address of ${APP_NAME_CONST};\n` +
            `4.1.2.\n` +
            `Description of ${APP_NAME_CONST} and its affiliates/subsidiaries (“Group”);\n` +
            `4.1.3.\n` +
            `Description of the services provided on the Platform;\n` +
            `4.1.4.\n` +
            `Communication method between ${APP_NAME_CONST} and Users/clients concerning the services;\n` +
            `4.1.5.\n` +
            `Any and all the fees charged by ${APP_NAME_CONST} (if any);\n` +
            `4.1.6.\n` +
            `Applicable laws to the Users/client;\n` +
            `4.1.7.\n` +
            `Identification to the third-party service provider, or any entity within ${APP_NAME_CONST}’s Group, utilised by ${APP_NAME_CONST} for the services provided under the Agreement in the form of description of the services performed by us;\n` +
            `4.1.8.\n` +
            `Identification and updates in the event of any services are no longer under the control of ${APP_NAME_CONST} during the provision of services offered with the details describing entities liable for the services at all times including but not limited to where such entities are located; and\n` +
            `4.1.9.\n` +
            `furnishing a clear statement that neither client/User assets and money benefit from any form of deposit protection;\n` +
            `4.1.10.\n` +
            `Specifications of platform services are, or will be, supported;\n` +

            `4.1.11.\n` +
            `Description on how ${APP_NAME_CONST} respond to a newly created service (eg. “airdrop”) or in the event of previous supported services is no longer supported (e.g. as a result of “fork”, or other change that would affect the service ability to support the services), which shall include, but not limited to obligations for ${APP_NAME_CONST} to;\n` +
            `a.\n` +
            `Assess the impact of such change as soon as possible upon becoming aware of the nature and impact of such change; and\n` +
            `b.\n` +
            `Communicate clearly with all the effected clients/users throughout the process\n` +
            `4.1.12.\n` +
            `Address risk of loss which may result from a failure of the services provided by ${APP_NAME_CONST}, including any custody services [if provided], and outline all measures in place to mitigate risk of loss where appropriate.\n` +
            `4.1.13.\n` +
            `Additionally, ${APP_NAME_CONST} provides information to its clients/Users related to the published policies and procedures (for the sake of clarity please look through the relevant policies including the Agreement, We believe in fair, transparent, accurate and not mislead our clients/Users. ${APP_NAME_CONST} ensures that the Agreement will be sufficiently clear regard to the nature of the services and the intended market for such services.\n` +

            `4.2. User responsibilities\n` +
            `For us to keep the Services safe and available for everyone to use, you must follow some rules. You agree to observe the terms and conditions below:\n` +
            `4.2.1. Limited License to the Content:\n` +
            `${APP_NAME_CONST} grants you a non-exclusive, non-transferable, non-sublicensable, limited license, during the applicable viewing period, to access and view our content for your personal and non-commercial use only and no other right/title/interest.\n` +
            `Usage Restrictions: You agree to use our Service, in accordance with all applicable laws, rules and restrictions for usage of Services and content and hereby acknowledge that you will not:\n` +
            `(a) transfer, copy or display the content, or exploit the same for public performances;\n` +
            `(b) sell, rent, lease, distribute, or broadcast any right to the content;\n` +
            `(c) decompile, disassemble, reverse engineer, de-activate or circumvent the content or the service in any manner whatsoever;\n` +
            `(d) remove any proprietary notices or labels on the content;\n` +
            `(e) attempt to disable, bypass, modify, defeat, or otherwise circumvent any digital rights management or other content protection system used as part of the Service.\n` +

            `4.2.2. Age requirements:\n` +
            `You must be at least 18 years of age or older to subscribe to our service. Minors may only use the service with the involvement, supervision, and approval of a parent or legal guardian.\n` +
            `4.2.3. Geo-Location:\n` +
            `Due to technical and other restrictions imposed by content providers, the Service is available only in certain locations and the manner in which we offer our content to you will vary over time and by location. You may view our content primarily in the geographic locations where we offer our services and have licensed such content. ${APP_NAME_CONST} will use technologies to verify your geographic location and you acknowledge that you will not use any technology technique to obscure or disguise your location.\n` +

            `4.3. Communications:\n` +
            `We will send you information relating to your account, (e.g., payment authorizations, invoices, changes in password or payment method, confirmation messages, notices) in electronic form only, for example via emails to your email address provided during registration. We may also send you promotions, push notifications and otherwise communicate with you for any other updates or modifications related to your account or our services.\n` +

            `MISCELLANEOUS AND ADDITIONAL TERMS\n` +
            `5.1. Change of Terms:\n` +
            `We reserve the right to make changes to these Terms at any time by posting the revised terms in connection with our service. Your continued use of our service will constitute your acceptance of such changes.\n` +

            `5.2. Disclaimers of Warranties and Limitations on Liability:\n` +
            `The ${APP_NAME_CONST} Services or any other features or functionalities associated with us, are provided as an "as is" and "as available" basis without warranty of any kind. ${APP_NAME_CONST} does not make any warranty that the Services or the Content will meet your requirements, or that it will be uninterrupted and free from errors. The Content types, genres or categories, descriptors, ratings, and advisories are provided for convenience and we do not guarantee their accuracy.\n` +

            `5.3. Governing Law:\n` +
            `These Terms of Use shall be governed by and construed in accordance with the laws of India without regard to any conflict of laws.\n` +
            `You understand that this Terms of Use is an electronic record in terms of the Information Technology Act, 2000 (as amended / re-enacted) and rules thereunder and is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics code) Rules, 2021, which mandates publishing of rules and regulations, privacy policy and terms of use for access or usage of ${APP_NAME_CONST}. This electronic record of Terms of Use is generated by a computer system and does not require any physical or digital signature.\n` +

            `5.4. Severability:\n` +
            `If any provision of these Terms is held unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of the remaining provisions.\n`
          }
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {},
});
