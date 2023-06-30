import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Tag from "./Tag";
const List = ({ lectureCount, chapter, subjectTitle, description }) => {
  return (
    <TouchableOpacity
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
                  backColor="#AEE2FF"
                  textColor="#8696FE"
                />
              ) : null}
              {lectureCount ? (
                <Tag
                  title={`${lectureCount} Videos`}
                  backColor="#C4B0FF"
                  textColor="#654E92"
                />
              ) : null}
              <Tag
                title="45 Live videos"
                backColor="#97DEFF"
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
