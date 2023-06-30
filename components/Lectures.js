import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import Video from "./Video";

const Lectures = () => {
  const [showPendingVideos, setShowPendingVideos] = useState(false);

  const handleToggleSwitch = () => {
    setShowPendingVideos(!showPendingVideos);
  };
  return (
    <View style={{ backgroundColor: "#FFF", marginTop: 10 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Show Only Pending Videos
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showPendingVideos ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleSwitch}
          value={showPendingVideos}
        />
      </View>
      <Video image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4_aeafoXsym7c1cWItN6yh3QCh2i8PxBgg&usqp=CAU" />
      <Video image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKwsrt2ZSD3icd6lEdgurM90jSIO2lb3_7w&usqp=CAU" />
    </View>
  );
};

export default Lectures;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#EEE",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
