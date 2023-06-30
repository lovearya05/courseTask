import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import Header from "./Header";
import List from "./ListComponent/List";

const Home = ({ navigation }) => {
  const [isClicked, setIsClicked] = useState(true);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };
  return (
    <View>
      <Header icon={true} />
      <View
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[!isClicked ? styles.designButton : null, { marginLeft: 10 }]}
          onPress={handlePress}
        >
          <Text
            style={[
              isClicked ? styles.buttonText : styles.selectButtonText,
              { fontSize: 16, fontWeight: "400" },
            ]}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[isClicked ? styles.designButton : null, { marginLeft: 10 }]}
          onPress={handlePress}
        >
          <Text
            style={[
              !isClicked ? styles.buttonText : styles.selectButtonText,
              { fontSize: 16, fontWeight: "400" },
            ]}
          >
            Content (10)
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#EEE", padding: 5 }}></View>
      {isClicked ? (
        <View>
          <List
            subjectTitle="Chemistry Organic"
            lectureCount="316"
            description="316 free lectures by neeraj Saini Sir(Msc. Chemistry)"
          />
          <List
            lectureCount="405"
            subjectTitle="Chemistry (Physical & Inorganic)"
            description="405 free lectures by Alok kumar Sir(Ex. ISRO Scientist)"
          />
          <List
            subjectTitle="Physics"
            lectureCount="435"
            description="435 free lectures by Amit Bijarnia Sir(IIT Delhi)"
          />
          <List
            subjectTitle="Chemistry Organic"
            lectureCount="1300+"
            description="free lectures by Mohit  Sir(IIT Delhi)"
          />
        </View>
      ) : (
        <Text>About</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  selectButtonText: {
    color: "white",
    fontSize: 16,
  },
  designButton: {
    backgroundColor: "#537FE7",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Home;
