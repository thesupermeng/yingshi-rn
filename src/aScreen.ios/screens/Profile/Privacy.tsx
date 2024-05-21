import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import PrivacyBackButtonHeader from "../../components/header/privacyBackButtonHeader";

import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { APP_NAME_CONST, APP_NAME_CONST2 } from "@utility/constants";
import { CLangKey } from "@constants";

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
        {/* <TitleWithBackButtonHeader title={CLangKey.privacyPolicy.tr()} /> */}
        <PrivacyBackButtonHeader title={CLangKey.privacyPolicy.tr()} />
        <ScrollView>
          <Text
            style={{
              ...textVariants.header,
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            {APP_NAME_CONST}{CLangKey.privacyPolicy.tr()}
          </Text>
          <Text style={textVariants.body}>
            {`《${APP_NAME_CONST} ${CLangKey.privacyPolicy.tr()}》\n` +
              `Table of Content\n` +
              `1. INTRODUCTION\n` +
              `2. CONSENT\n` +
              `3. COLLECTION OF INFORMATION\n` +
              `4. HOW IS THE INFORMATION USED\n` +
              `5. INFORMATION SHARING AND DISCLOSURE\n` +
              `6. YOUR CHOICES\n` +
              `7. ACCESSING, CORRECTING AND UPDATING INFORMATION\n` +
              `8. DATA SECURITY AND RETENTION OF DATA\n` +
              `9. WITHDRAWAL OF CONSENT\n` +
              `10. CHANGES TO THIS POLICY\n` +
              `11. GRIEVANCE REDRESSAL\n` +
              `12. COOKIES AND INTERNET ADVERTISING\n` +

              `You must be at least 18 years of age or older to subscribe to our service. Minors may only use the service with the involvement, supervision, and approval of a parent or legal guardian.\n` +

              `INTRODUCTION\n` +
              `${APP_NAME_CONST} takes your privacy very seriously and we know that you care how information about you is used and shared, and we appreciate your trust and that we will do so carefully and sensibly. Our Platform has always been mindful of your privacy and thereby this policy will come handy for you to understand what information we collect, store, use, disclose and transfer. This Privacy Policy explains our practices, including your choices, regarding the collection, use, and disclosure of certain information, including your personal information in connection with our service. By using our Services, you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Policy, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes set out in this policy.\n` +

              `CONSENT\n` +
              `Your consent is a legal/statutory requirement under Rule 5(1) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 made under the Information Technology Act, 2000. As per the said rule, It is mandatory for ${APP_NAME_CONST} to obtain consent in writing through letter or fax or email from the data provider of the sensitive personal data or information regarding purpose of usage, before collection of such information.\n` +

              `COLLECTION OF INFORMATION\n` +
              `We receive and store information about you such as:\n` +
              `i. Information you provide to us: We collect information you provide to us which includes:\n` +
              `your name, username, profile pictures, digital profile, photograph, email address, address or postal code, payment method(s), and telephone number. We collect this information in a number of ways, including when you enter it while creating an account to use our services, interact with our customer service, or participate in surveys or marketing promotions, or information about your actions in connection with the account that you engage with on social media accounts, without any compensation to you;\n` +
              `information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.\n` +
              `ii. Information we collect automatically: We collect information about you and your use of our service, your interactions with us and our advertising, as well as information regarding your network, network devices, and your computer or other compatible devices you might use to access our service (such as gaming systems, smart TVs, mobile devices, set top boxes, and other streaming media devices). This information includes:\n` +
              `your activity on our service, such as title selections, shows you have watched, and search queries;\n` +
              `your interactions with third party links, our emails and texts, and with our messages through push and online messaging channels;\n` +
              `details of your interactions with our customer service, such as the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call recordings;\n` +
              `device IDs or other unique identifiers, including for your network devices, and compatible devices on your Wi-Fi network;\n` +
              `resettable device identifiers (also known as advertising identifiers), such as those on mobile devices, tablets, and streaming media devices that include such identifiers (see the "Cookies and Internet Advertising" section below for more information);\n` +
              `device and software characteristics (such as type and configuration), connection information including type (Wi-Fi, cellular), statistics on page views, referring source (for example, referral URLs), IP address (which may tell us your general location), browser and standard web server log information;\n` +
              `information collected via the use of cookies, web beacons and other technologies, including ad data (such as information on the availability and delivery of ads, the site URL, as well as the date and time). (See our "Cookies and Internet Advertising" section for more details.)\n` +
              `iii. Information from partners: We collect information from other companies with whom you have a relationship (“Partners”). These Partners might include (depending on what services you use): your TV or internet service provider, or other streaming media device providers who make our service available on their device; mobile phone carriers or other companies who provide services to you and collect payment for our services for distribution to us or provide pre-paid promotions for our service; and voice assistant platform providers who enable interaction with our service through voice commands. The information Partners provide us varies depending on the nature of the Partner services, and may include:\n` +
              `search queries and commands applicable to ${APP_NAME_CONST} that you make through Partner devices or voice assistant platforms;\n` +
              `service activation information such as your email address or other contact information;\n` +
              `IP addresses, device IDs or other unique identifiers, as well as associated pre-paid promotion, billing and user interface information, that support user authentication, the service registration experience, Partner payment processing, and the presentation of ${APP_NAME_CONST} content to you through portions of the Partner user interface.\n` +
              `iv. Information from other sources: We also obtain information from other sources. We protect this information according to the practices described in this Privacy Policy, plus any additional restrictions imposed by the source of the data. These sources vary over time, but could include:\n` +
              `service providers that help us determine a location based on your IP address in order to customize our service and for other uses consistent with this Privacy Policy;\n` +
              `security service providers who provide us with information to secure our systems, prevent fraud and help us protect the security of your accounts;\n` +
              `payment service providers who provide us with payment or balance information, or updates to that information, based on their relationship with you;\n` +
              `online and offline data providers, from which we obtain aggregated demographic, interest based and online advertising related data;\n` +
              `publicly available sources such as publicly available posts on social media platforms and information available through public databases associating IP addresses with internet service providers (ISPs).\n` +
              `v. Third Party Links.\n` +
              `This Platform may contain links to other websites. If you click on such third-party links, you will be directed to another website and ${APP_NAME_CONST} shall not be responsible for the privacy practices or policies of such thirdparty websites.\n` +
              `We will only collect data provided to us from you. We have no control over and assume no responsibility for the policies of any third-party sites. We recommend that you familiarize yourself with the privacy policies of such websites to determine how they handle any information they separately collect from you. This Policy does not address, and we are not responsible for, the privacy practices of websites operated by third parties, whether they are linked to or otherwise accessible from an Application, the Services, or the Site. The inclusion of a link or accessibility of third-party websites does not imply endorsement of such third party.\n` +

              `HOW IS THE INFORMATION USED\n` +
              `We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include:\n` +
              `To determine your general geographic location, provide you with customized and personalized viewing recommendations for content we think will be of interest to you;\n` +
              `To provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of our Services.\n` +
              `To recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with our Services.\n` +
              `In certain cases, we collect and use your personal information to comply with laws. For instance, we collect your information for identity verification and other purposes.\n` +
              `To communicate with you in relation to our Services via different channels (e.g., by phone, e- mail, chat).\n` +
              `Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads.\n` +
              `Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our users. We may also use scoring methods to assess and manage credit risks.\n` +

              `INFORMATION SHARING AND DISCLOSURE\n` +
              `We disclose your information for certain purposes and to third parties, as described below:\n` +
              `We share your information among ${APP_NAME_CONST} and affiliates as needed for: providing you with access to our services; providing customer support; making decisions about service improvements; content development; and for other purposes described in the Use of Information section of this Privacy Statement.\n` +
              `We use other companies, agents or contractors ("Service Providers") to perform services on our behalf or to assist us with the provision of services to you. For example, we engage Service Providers to provide marketing, advertising, communications, security, infrastructure and IT services, to customize, personalize and optimize our service, to provide customer service, to analyze and enhance data (including data about users' interactions with our service), and to process and administer consumer surveys. In the course of providing such services, these Service Providers may have access to your personal or other information. We do not authorize them to use or disclose your personal information except in connection with providing their services (which includes maintaining and improving their services).\n` +
              `As described above, you may have a relationship with one or more of our Partners, in which case we may share certain information with them in order to coordinate with them on providing our services to members and providing information about the availability of our service.\n` +
              `We may offer joint promotions or programs that, in order for your participation, will require us to share your information with third parties. In fulfilling these types of promotions, we may share your name and other information in connection with fulfilling the incentive. Please note that these third parties are responsible for their own privacy practices.\n` +
              `We may disclose and otherwise use your personal and other information where we reasonably believe such disclosure is needed to (a) satisfy any applicable law, regulation, legal process, or governmental request, (b) enforce applicable terms of use, including investigation of potential violations thereof, (c) detect, prevent, or otherwise address illegal or suspected illegal activities (including payment fraud), security or technical issues, or (d) protect against harm to the rights, property or safety of ${APP_NAME_CONST}, its users or the public, as required or permitted by law. If you use any applications covered by intellectual property rights that we have and make available on ${APP_NAME_CONST}, we retain all the right to any and all such creatives or products created on ${APP_NAME_CONST} and we may use such creatives/ products for any marketing,promotional or any other reasonable activities without making any of your personal information available to the public.\n` +
              `In connection with any reorganization, restructuring, merger or sale, or other transfer of assets, we will transfer information, including personal information, provided that the receiving party agrees to respect your personal information in a manner that is consistent with our Privacy Policy.\n` +
              `Whenever in the course of sharing information we transfer personal information to other countries we will ensure that the information is transferred in accordance with this Privacy Policy and as permitted by the applicable laws on data protection.\n` +
              `You may also choose to disclose your information in the following ways:\n` +
              `certain portions of our service may contain a tool which gives you the option to share information by email, text message and social or other sharing applications, using the clients and applications on your smart device;\n` +
              `social plugins and similar technologies allow you to share information. Social plugins and social applications are operated by the social networks themselves and are subject to their terms of use and privacy policies.\n` +
              `If you choose to register to use the Platform using your social network account details (e.g., Facebook, Twitter, Instagram, Google), you will provide us or allow your social network to provide us with your username and public profile. We will likewise share certain information with the relevant social network such as your app ID, access token and the referring URL.\n` +
              `We may also share your information with other members, subsidiaries, or affiliates of our company (platform).\n` +

              `YOUR CHOICES\n` +
              `Email and Text Messages. If you no longer want to receive certain communications from us via email or text message, simply access the settings option of our website and uncheck those items to unsubscribe. Alternatively, click the "unsubscribe" link in the email or reply STOP (or as otherwise instructed) to the text message. Please note that you cannot unsubscribe from service-related correspondence from us, such as messages relating to your account transactions.\n` +
              `Push Notifications. You can choose to receive mobile push notifications from us. On some device operating systems, you will be automatically enrolled in the notifications. If you subsequently decide you no longer wish to receive these notifications, you can use your mobile device's settings functionality to turn them off. We also offer push notifications on certain web browsers. If you agree to receive those notifications and subsequently decide you no longer wish to receive these notifications, you can use your browser’s settings to turn them off.\n` +
              `Interest-Based Ads. Interest-based ads are online ads that are tailored to your likely interests based on your use of various apps and websites across the Internet. If you are using a browser, then cookies and web beacons can be used to collect information to help determine your likely interests. If you are using a mobile device, tablet, or streaming media device that includes a resettable device identifier, then that identifier can be used to help determine your likely interests. For your choices about interest-based ads, please see the "Cookies and Internet Advertising".\n` +
              `Matched Identifier Communications. Some third-party sites and apps allow us to reach our users with online promotions about our titles and services by sending a privacy protective identifier to the third party. A privacy protective identifier means we convert the original information (such as an email address or phone number) into a value to keep the original information from being revealed. The third party compares the privacy protective identifier to identifiers in its database and there will be a match only if you have used the same identifier (such as an email address) with us and the third party. If there is a match, we can then choose whether or not to send a given promotional communication to you on that third-party site or app and can optimize and better measure the effectiveness of online advertising. You can opt out of such communications from the settings of our website.\n` +

              `ACCESSING, CORRECTING AND UPDATING INFORMATION\n` +
              `You shall have the choice to correct any erroneous or out-of-date information concerning oneself. You can access the information you provide, correct it, and update it.\n` +

              `DATA SECURITY AND RETENTION OF DATA\n` +
              `We deeply care about your privacy, security, and confidentiality of your information. We are committed to protect your personally identifiable information from unauthorized disclosure and to prevent possible security breaches. We have implemented appropriate encryption and other security protocols to protect the personal information and have established electronic and administrative safeguards in order to secure the information collected from you and to prevent unauthorised access to the same. However, please be aware that no security measures that we take to protect your information are absolutely guaranteed to avoid unauthorized access or use of your information.\n` +
              `We retain User information only as long as it would be necessary, subject to the laws applicable. You understand that it may not be possible to completely remove and delete all your information from our database even if you choose to opt out of our services.\n` +

              `WITHDRAWAL OF CONSENT\n` +
              `You have the option of ‘opting out’ from providing data or information under this policy, and to withdraw your consent at any time.\n` +

              `CHANGES TO THIS POLICY\n` +
              `You understand that this Privacy Policy is an electronic record in terms of the Information Technology Act, 2000 (as amended / re-enacted) and rules thereunder and is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics code) Rules, 2021, which mandates publishing of rules and regulations, privacy policy andterms of use for access or usage of ${APP_NAME_CONST}. This electronic record of Privacy Policy is generated by a computer system and does not require any physical or digital signature.\n` +
              `We will update this Privacy Policy from time to time in response to changing legal, regulatory or operational requirements. We will provide notice of any such changes (including when they will take effect) in accordance with law. We will never materially change our policies and practices to make them less protective of your information collected in the past without consent of the affected users. Your continued use of our service after any such updates take effect will constitute acknowledgement and (as applicable) acceptance of those changes. If you do not wish to acknowledge or accept any updates to this policy, you may cancel your use of our service.\n` +

              `COOKIES AND INTERNET ADVERTISING\n` +
              `We and our Service Providers use cookies and other technologies (such as web beacons), as well as resettable device identifiers, for various reasons. We want you to be informed about our use of these technologies, so this section explains the types of technologies we use, what they do, and your choices regarding their use.\n` +

              `Cookies and similar technologies, web beacons, and resettable device identifiers\n` +
              `Cookies are small data files that are commonly stored on your device when you browse and use websites and online services. We use other technologies such as browser storage and plugins (e.g., HTML5, IndexedDB, and WebSQL). Like cookies, these other technologies may store small amounts of data on your device. Web beacons (also known as clear gifs or pixel tags) often work in conjunction with cookies. In many cases, declining cookies will impair the effectiveness of web beacons associated with those cookies.\n` +
              `If you use our app on a mobile device, tablet, or streaming media device, we may collect a resettable device identifier from your device. Resettable device identifiers (also known as advertising identifiers) are similar to cookies and are found on many mobile devices and tablets (for example, the "Identifier for Advertisers" (or IDFA) on Apple iOS devices and the "Google Advertising ID" on Android devices), and certain streaming media devices. Like cookies, resettable device identifiers are used to make online advertising more relevant and for analytics and optimization purposes. We use these types of technologies for various reasons, like making it easy to access our services by remembering you when you return; to provide, analyze, understand and enhance the use of our services; to enforce our terms, prevent fraud; to improve site performance, monitor visitor traffic and actions on our site; and to deliver and tailor our marketing or advertising, and to understand interactions with our emails, marketing, and online ads on third party sites.\n` +

              `By using the Site, you consent to our cookies, which are basically files that web servers place on your Device. The use of cookies on the Site allows you to enjoy more seamless visits to the Site and more accurately measures your behavior on it.\n` +
              `There are two types of cookies that we may use: session and persistent.\n` +
              `Session cookies exist only during an online session and are removed from your Device when you close the browser software.\n` +
              `Persistent cookies remain on your Device after the browser has been closed. While the cookies used on the Site do not identify you personally, they recognize your browser, unless you choose to identify yourself voluntarily.\n` +
              `You may choose to identify yourself for any one of the following reasons: by asking the browser to remember your username and password, or by requesting more information on any content or service available on the Site. You may prevent the installation of cookies through your browser settings; in which case not all functionalities of the Site may be available to you depending on the browser settings. You may also configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set. We request you to check your browser and/or contact the administrators to learn how to change your cookie preferences.\n` +

              `Third Party Cookies:\n` +
              `${APP_NAME_CONST}, being associated with third parties as mentioned above, is bound by the following cookies policy of such third parties:\n` +
              `Google Analytics (Functional Cookies): Our website uses Google Analytics, a web analysis service of Google, Inc. (“Google”). Learn more from their Terms of Service and Privacy Policy. Opt-out: Download the browser plugin “Google Analytics Opt-out Browser Add-on”.\n` +
              `Google Tag Manager (Functional Cookies): Our website uses Google Tag Manager, a website tag management service of Google, Inc. (“Google”). Learn more from their Terms of Service and Privacy Policy.\n` +

              `We may also use Web Beacons in combination with cookies to understand how you interact with Site. Web Beacons are typically transparent graphic images that are placed on the Site or in an email and allows the Site to measure your actions in opening the page that contains the Web Beacon. We may also use other asynchronous methods and / or technology in combination with / without other tracking technologies to understand a User’s interaction with Site and content residing therein. This Site may use a web analytics service provider who may use an Analytics Tool. Analytics Tools use cookies, text files, SDKs, APIs that are stored on your Device and allow an analysis of your use of the Site. The information generated by the cookie about your use of the Site, including the IP address, may be transferred to and stored on a server of analytics service provider, which may not be located within India and who may use such information, to analyze your use of the Site, to create reports about the web site activities and to provide further services associated with the use of the Site. Furthermore, it may transfer such information to third parties, to the extent legally required or if such third parties process the data on behalf of the service provider. By using the Site, you consent to such transfer of Personal Information including storage on servers not located within India.\n`}
          </Text>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {},
});
