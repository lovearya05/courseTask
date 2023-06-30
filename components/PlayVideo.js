import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import vidImage from "../Images/video.png";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UpcommingVideos from "./UpcommingVideos";
import Header from "./Header";

const PlayVideo = () => {
  const [currentTime, setCurrentTime] = useState(30);

  return (
    <View style={{ flex: 1 }}>
      <Header headerName="" searchIcon={false} icon={false} />

      {/* navbar  */}

      {/* video  */}
      <View style={styles.container}>
        {/* Video Player */}
        <View style={styles.videoContainer}>
          <Image source={vidImage} style={styles.videoThumbnail} />

          {/* important and setting  */}

          <View
            style={{
              position: "absolute",
              top: -105,
              width: "100%",
              paddingLeft: 15,
              paddingRight: 15,
              justifyContent: "space-between",
              // width: 420,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: 10,
                borderRadius: 22,
              }}
            >
              🔥 Important
            </Text>
            <TouchableOpacity>
              <AntDesign name="setting" size={25} color="white" />
            </TouchableOpacity>
          </View>

          {/* backward icon  */}

          <View style={styles.playPauseButton}>
            <TouchableOpacity
              style={{
                width: "33%",
                transform: [{ rotateY: "180deg" }],
              }}
            >
              <Fontisto
                name="spinner-rotate-forward"
                size={24}
                color="white"
                style={styles.playPauseIcon}
              />
            </TouchableOpacity>
            {/* Play/Pause Button */}
            <TouchableOpacity
              style={{
                width: "33%",
                marginLeft: 40,
              }}
            >
              <FontAwesome
                name="pause"
                size={24}
                color="white"
                style={styles.playPauseIcon}
              />
            </TouchableOpacity>

            {/* forward button  */}
            <TouchableOpacity
              style={{
                width: "33%",
              }}
            >
              <Fontisto
                name="spinner-rotate-forward"
                size={24}
                color="white"
                style={styles.playPauseIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Current Time */}
          <Text style={styles.currentTimeText}>{"0:51"}</Text>
          <Text
            style={{
              position: "absolute",
              bottom: -62,
              right: 19,
              color: "#fff",
              fontSize: 14,
            }}
          >
            {"1:47:00"}
          </Text>
        </View>

        {/* Other Controls */}

        <View style={styles.controlsContainer}>
          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[styles.progressBarFill, { width: `${currentTime}%` }]}
            />
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: "red",
                borderRadius: 100,
                top: -8,
                left: 100,
              }}
            ></View>
          </View>

          {/* Fullscreen Button */}
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 38,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/* play button  */}
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                marginLeft: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="ios-play" size={24} color="white" />
            </TouchableOpacity>

            {/* sound button  */}
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                marginLeft: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="sound" size={24} color="white" />
            </TouchableOpacity>

            {/* time  */}

            <Text style={{ alignSelf: "center", color: "#fff", marginLeft: 8 }}>
              0:51/1:47:00
            </Text>
          </View>

          <View>
            {/* fullscreen icon  */}
            <TouchableOpacity style={styles.fullscreenButton}>
              <Octicons
                name="screen-full"
                size={24}
                color="white"
                style={styles.fullscreenIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* video description  */}
      <View style={{ marginTop: 4 }}>
        <Text style={{ fontSize: 20, padding: 18 }}>
          #1-GOC || Organic Compound || Berzelius Hypothesis || Wholer's
          Synthesis || Organic Chemistry | NEET
        </Text>

        {/* 3 buttons  */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            width: "100%",
            // justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity style={{ ...styles.threeButton }}>
            <AntDesign name="calendar" size={22} color="rgba(1,1,1, 0.6)" />
            <Text
              style={{ marginLeft: 2, fontSize: 14, color: "rgba(1,1,1, 0.6)" }}
            >
              Save Notes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.threeButton, marginLeft: 10 }}>
            <Fontisto name="commenting" size={22} color="rgba(1,1,1, 0.6)" />
            <Text
              style={{ marginLeft: 2, fontSize: 14, color: "rgba(1,1,1, 0.6)" }}
            >
              Comments(456)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.threeButton, marginLeft: 10 }}>
            <MaterialCommunityIcons
              name="share-outline"
              size={24}
              color="rgba(1,1,1, 0.6)"
            />
            <Text
              style={{ marginLeft: 2, fontSize: 14, color: "rgba(1,1,1, 0.6)" }}
            >
              Share
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>

      {/* upcoming video  */}

      <View style={{ flex: 1, marginTop: 25, marginLeft: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Upcoming Videos</Text>

        <UpcommingVideos />
      </View>

      {/* previous and next button  */}

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          flex: 1,
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          height: 50,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "50%",
            padding: 12,
          }}
        >
          <Ionicons name="ios-caret-back" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 8 }}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "50%",
            borderLeftWidth: 0.5,
            borderLeftColor: "rgba(1, 1, 1, 0.5)",
            padding: 12,
          }}
        >
          {/* <Ionicons name="ios-caret-back" size={24} color="black" />
           */}
          <Text style={{ fontSize: 18 }}>Next</Text>
          <Ionicons
            name="ios-caret-forward-outline"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 125,
    backgroundColor: "#000",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoThumbnail: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  playPauseButton: {
    position: "absolute",
    top: "50%",
    width: "50%",
    flexDirection: "row",
    // left: "50%",
    // width: 80,
    // height: 80,
    // marginTop: -24,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  playPauseIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  currentTimeText: {
    position: "absolute",
    bottom: -62,
    left: 18,
    color: "#fff",
    fontSize: 14,
  },
  controlsContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    bottom: -50,
  },
  progressBar: {
    flex: 1,
    width: "100%",
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "red",
  },
  fullscreenButton: {
    width: 40,
    height: 40,
    marginRight: 7,
    justifyContent: "center",
    alignItems: "center",
    // right:0
  },
  fullscreenIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#fff",
    // bottom: -22,
    // right:-410
  },
  threeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    // width: "30%",
  },
});
