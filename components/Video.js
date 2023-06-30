import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Video = ({ image }) => {
  const navigation = useNavigation();

  const goPage = () => {
    alert("hloe");
    // navigation.navigate(`Youtube`);
  };
  return (
    <TouchableOpacity
      onPress={goPage}
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        borderBottomColor: "#EEE",
        borderBottomWidth: 0.8,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "35%" }}>
          <Image
            style={{ width: "100%", height: 80 }}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={{ width: "60%", height: 90, marginLeft: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, width: "95%", fontWeight: "600" }}>
              NEET PYR's 10 YEAR | Abhayas Batch Live Launch
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#AAA", fontSize: 16 }}>
            World's of plants, insects & animal, kingdom/species
          </Text>
        </View>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ width: "38%" }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, color: "#AAA", width: "35%" }}>
            83.25 MIN
          </Text>
          <View
            style={{
              backgroundColor: "#FFDAA9",
              borderTopLeftRadius: 20,
              padding: 6,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="eye" size={14} color="#FFB84C" />
            <Text
              style={{
                fontSize: 13,
                color: "grey",
                fontWeight: "600",
                marginLeft: 5,
              }}
            >
              9K WATCHED
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Video;

const styles = StyleSheet.create({});
