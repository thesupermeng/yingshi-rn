import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, ViewStyle } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../Sports/global/colors";

type CProps = {
  supportedOrientations?: ("portrait" | "landscape")[];
  isLoading?: boolean;
  onClose: CallableFunction;
  width?: string | number;
  isLeft?: boolean;
  contentTemplate?: number;
};

export default function VipGuideModal({
  onClose,
  width,
  isLeft = false,
  contentTemplate = 1,
}: CProps) {
  const closeModal = () => {
    onClose(false);
  };

  const navigator = useNavigation();

  return (
    <View style={{ paddingHorizontal: 10 }}>
      {isLeft ? (
        <View style={{ alignSelf: "flex-start", paddingLeft: 30 }}>
          <Image source={require(`@static/images/vip_guide_arrow.png`)}></Image>
        </View>
      ) : (
        <View style={{ alignSelf: "flex-end", paddingRight: 30 }}>
          <Image source={require(`@static/images/vip_guide_arrow.png`)}></Image>
        </View>
      )}
      <View
        style={{
          width: width ?? "70%",
          alignSelf: "flex-end",
          justifyContent: isLeft ? "flex-end" : "flex-start",
        }}
      >
        <View style={[styles.buyContainer]}>
          {contentTemplate == 1 && (
            <>
              <Text style={[styles.normalText]}>
                {`购买`}
                <Text style={[styles.goldText]}>VIP</Text>
                <Text
                  style={[styles.normalText]}
                >{`  去除广告\n高清视频`}</Text>
                <Text style={[styles.goldText]}>{`纯净观看`}</Text>
              </Text>
            </>
          )}

          {contentTemplate == 2 && (
            <>
              <Text style={[styles.normalText]}>
                {`购买`}
                <Text style={[styles.goldText]}>VIP</Text>

                <Text style={[styles.goldText]}>{`\n离线下载`}</Text>
                <Text style={[styles.normalText]}>{`高清视频`}</Text>
              </Text>
            </>
          )}

          {contentTemplate == 3 && (
            <>
              <Text style={[styles.normalText]}>
                {`购买`}
                <Text style={[styles.goldText]}>VIP</Text>
                <Text
                  style={[styles.normalText]}
                >{`免费看NBA/五大联赛\n`}</Text>
                <Text style={[styles.normalText]}>{`实时`}</Text>
                <Text style={[styles.goldText]}>{`高清直播`}</Text>
              </Text>
            </>
          )}

          <View
            style={{ paddingHorizontal: 10, width: "100%", paddingTop: 10 }}
          >
            <TouchableOpacity
              onPress={() => {
                navigator.navigate("付费VIP");
                closeModal();
              }}
            >
              <LinearGradient
                colors={["#D1AC7D", "#B1885F"]}
                locations={[0.0, 0.99]}
                style={{
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: "900",
                    letterSpacing: 1,
                    color: "black",
                  }}
                >
                  立即购买
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 12 }} />
        <View>
          <View style={{ alignSelf: "center" }}>
            <Text style={[styles.confirmText]} onPress={() => closeModal()}>
              我知道了
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buyContainer: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 12,
  },
  normalText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  goldText: {
    fontSize: 18,
    color: "#BB9266",
    textAlign: "center",
  },
  confirmText: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#9C9C9C",
    color: "#9C9C9C",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});
