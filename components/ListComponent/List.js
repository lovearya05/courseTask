import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Tag from "./Tag";
import { useNavigation } from "@react-navigation/native";
const List = ({
  urlName,
  lectureCount,
  chapter,
  subjectTitle,
  description,
}) => {
  const navigation = useNavigation();

  const goPage = () => {
    navigation.navigate(`${urlName}`, { subjecTitle: subjectTitle });
  };

  return (
    <TouchableOpacity
      onPress={goPage}
      style={{ backgroundColor: "#FFF", marginBottom: 5, padding: 10 }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/000/439/792/original/vector-folder-icon.jpg",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            {subjectTitle}
            {/* {chapter ? `${chapter} Chapters,` : ""}{" "}
            {lectureCount ? `${lectureCount} Videos` : ""} */}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 60,
            marginTop: -28,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {description ? (
                <Text style={{ fontSize: 18, color: "#AAA", width: "95%" }}>
                  {description.split(" ").slice(0, 12).join(" ")}
                  {description.split(" ").length > 12 ? " ..." : ""}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: 8,
              }}
            >
              {chapter ? (
                <Tag
                  title={`${chapter} Chapters`}
                  backColor="#d6eef1"
                  textColor="#8696FE"
                />
              ) : null}
              {lectureCount ? (
                <Tag
                  title={`${lectureCount} Videos`}
                  backColor="#e8e2f6"
                  textColor="#654E92"
                />
              ) : null}
              <Tag
                title="45 Live videos"
                backColor="#d4e3f6"
                textColor="#009FBD"
              />
            </View>
          </View>
          <View>
            <AntDesign
              name="right"
              size={20}
              style={{
                marginLeft: 0,
              }}
              color="black"
            />
          </View>
        </View>
      </View>
      <View></View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({});
