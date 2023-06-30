import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import Lectures from "./Lectures";
import DPP from "./DPP";
import SheetContent from "./SheetContent";
import ClassNotes from "./ClassNotes";

const VideoList = () => {
  const [selectedButton, setSelectedButton] = useState("Lectures");

  const handlePress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View>
      <Header headerName="Living organization" icon={false} />
      <View
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[
            styles.designButton,
            selectedButton === "Lectures" ? styles.selectedButton : null,
          ]}
          onPress={() => handlePress("Lectures")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "Lectures" ? styles.selectedButtonText : null,
            ]}
          >
            Lectures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.designButton,
            selectedButton === "DPP's" ? styles.selectedButton : null,
          ]}
          onPress={() => handlePress("DPP's")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "DPP's" ? styles.selectedButtonText : null,
            ]}
          >
            DPP's
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.designButton,
            selectedButton === "Sheets" ? styles.selectedButton : null,
          ]}
          onPress={() => handlePress("Sheets")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "Sheets" ? styles.selectedButtonText : null,
            ]}
          >
            Sheets
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.designButton,
            selectedButton === "Class notes" ? styles.selectedButton : null,
          ]}
          onPress={() => handlePress("Class notes")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "Class notes"
                ? styles.selectedButtonText
                : null,
            ]}
          >
            Class notes
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {selectedButton === "Lectures" ? <Lectures /> : null}
        {selectedButton === "Sheets" ? <SheetContent /> : null}
        {selectedButton === "Class notes" ? <ClassNotes /> : null}
        {selectedButton === "DPP's" ? <DPP /> : null}
      </View>
    </View>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  selectedButtonText: {
    color: "white",
    fontSize: 16,
  },
  designButton: {
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  selectedButton: {
    backgroundColor: "#537FE7",
  },
});
