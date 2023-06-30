import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const DPPComponent = ({ title }) => {
  return (
    <TouchableOpacity
      style={{ padding: 10, marginBottom: 2, backgroundColor: "#FFF" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 60,
            borderColor: "#EEE",
            padding: 5,
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDfCeFtyxsVIwi7nIXf5XW4lY7LX5a3ZiCQ&usqp=CAU",
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "75%",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                fontWeight: "600",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                color: "#AAA",
              }}
            >
              Planner of Abhyas Course
            </Text>
          </View>
          <View>
            <Ionicons
              name="eye"
              size={20}
              style={{
                marginLeft: 0,
              }}
              color="#AAA"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DPPComponent;

const styles = StyleSheet.create({});
