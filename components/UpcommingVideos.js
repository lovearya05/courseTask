import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import vide0Thumb1 from "../Images/videoThumb1.png";
import vide0Thumb2 from "../Images/videoThumb2.png";

const UpcommingVideos = () => {
  return (
    <View>
      <TouchableOpacity style={{ flexDirection: "row", marginTop: 12 }}>
        <View>
          <Image source={vide0Thumb1} />
          <View
            style={{
              height: 5,
              width: 119,
              backgroundColor: "red",
              marginLeft: 1.5,
              marginTop: -6,
            }}
          ></View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ opacity: 0.5 }}>83:25 MIN</Text>
          <Text style={{ fontSize: 15 }}>NEET PYQs 10 YEAR |</Text>
          <Text style={{ fontSize: 14 }}>Abhays Batch Live</Text>
          <Text style={{ fontSize: 14 }}>Launch</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", marginTop: 12 }}>
        <View>
          <Image source={vide0Thumb2} />
          <View
            style={{
              height: 5,
              width: 50,
              backgroundColor: "red",
              marginLeft: 1.5,
            }}
          ></View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ opacity: 0.5 }}>83:25 MIN</Text>
          <Text style={{ fontSize: 15 }}>NEET PYQs 10 YEAR |</Text>
          <Text style={{ fontSize: 14 }}>Abhays Batch Live</Text>
          <Text style={{ fontSize: 14 }}>Launch</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpcommingVideos;

const styles = StyleSheet.create({});
