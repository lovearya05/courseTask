import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tag = ({ title, textColor, backColor }) => {
  return (
    <Text
      style={{
        backgroundColor: `${backColor}`,
        padding: 5,
        fontSize: 13,
        marginTop: 5,
        marginRight: 5,
        color: `${textColor}`,
        borderRadius: 60,
        fontWeight: "800",
      }}
    >
      {title}
    </Text>
  );
};

export default Tag;

const styles = StyleSheet.create({});
