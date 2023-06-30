import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import vidImage from '../Images/video.png'
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UpcommingVideos from './UpcommingVideos';


const PlayVideo = () => {

  const [currentTime, setCurrentTime] = useState(30);



  return (
    <View>

      {/* navbar  */}
      <View style={{ backgroundColor: 'white', height: 80, justifyContent: 'center', flexDirection: "column-reverse" }} >
        <AntDesign name="left" size={24} color="black" style={{ marginTop: 15, marginLeft: 15 }} />
      </View>

      {/* video  */}
      <View style={styles.container}>


        {/* Video Player */}
        <View style={styles.videoContainer}>
          <Image
            source={vidImage}
            style={styles.videoThumbnail}

          />

          {/* important and setting  */}

          <View style={{ position: 'absolute', top: -105, justifyContent: 'space-between', width: 420, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 22 }}>🔥 Important</Text>
            <AntDesign name="setting" size={28} color="white" />
          </View>


          {/* backward icon  */}

          <TouchableOpacity style={{ ...styles.playPauseButton, left: 110, transform: [{ rotateY: '180deg' }] }}>
            <Fontisto name="spinner-rotate-forward" size={24} color="white"
              style={styles.playPauseIcon}
            />
          </TouchableOpacity>
          {/* Play/Pause Button */}
          <TouchableOpacity style={{ ...styles.playPauseButton, marginLeft: -40 }}>
            <FontAwesome name="pause" size={24} color="white"
              style={styles.playPauseIcon}
            />
          </TouchableOpacity>

          {/* forward button  */}
          <TouchableOpacity style={{ ...styles.playPauseButton, left: 250, }}>
            <Fontisto name="spinner-rotate-forward" size={24} color="white"
              style={styles.playPauseIcon}
            />
          </TouchableOpacity>


          {/* Current Time */}
          <Text style={styles.currentTimeText}>{"0:51"}</Text>
          <Text style={{
            position: 'absolute',
            bottom: -62,
            right: 19,
            color: '#fff',
            fontSize: 14,
          }}>{"1:47:00"}</Text>

        </View>



        {/* Other Controls */}

        <View style={styles.controlsContainer}>


          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View
              style={[styles.progressBarFill, { width: `${currentTime}%` }]}
            />
            <View style={{
              height: 12, width: 12, backgroundColor: 'red', borderRadius: 100, top: -8, left: 120

            }} ></View>
          </View>


          {/* Fullscreen Button */}


        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 38,
          // backgroundColor:'green'
        }}>



          {/* play button  */}
          <TouchableOpacity style={{
            width: 40,
            height: 40,
            marginLeft: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Ionicons name="ios-play" size={24} color="white" />
          </TouchableOpacity>

          {/* sound button  */}
          <TouchableOpacity style={{
            width: 40,
            height: 40,
            marginLeft: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <AntDesign name="sound" size={24} color="white" />
          </TouchableOpacity>

          {/* time  */}

          <Text style={{ alignSelf: 'center', color: '#fff', marginLeft: 8, }}>
            0:51/1:47:00
          </Text>


          {/* fullscreen icon  */}
          <TouchableOpacity style={styles.fullscreenButton}>
            <Octicons name="screen-full" size={24} color="white"
              style={styles.fullscreenIcon}
            />
          </TouchableOpacity>

        </View>
      </View>


      {/* video description  */}
      <View style={{ marginTop: 4}}>

        <Text style={{ fontSize: 20, padding: 18 }}>
          #1-GOC || Organic Compound || Berzelius Hypothesis || Wholer's Synthesis || Organic Chemistry | NEET
        </Text>

        {/* 3 buttons  */}
        <View style={{ flexDirection: "row",justifyContent:"flex-start" }}>

          <View style={{...styles.threeButton, marginLeft: 22}}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={{marginLeft:10}}>Save Notes</Text>
          </View>

          <View style={{...styles.threeButton, marginLeft: 10}}>
            <Fontisto name="commenting" size={24} color="black" />
            <Text style={{marginLeft:10}}>Comments(456)</Text>
          </View>

          <View  style={{...styles.threeButton, marginLeft: 10}}>
            <MaterialCommunityIcons name="share-outline" size={24} color="black" />
            <Text style={{marginLeft:10}}>Share</Text>
          </View>
        </View>
      </View>


      {/* upcoming video  */}

      <View style={{ marginTop:25, marginLeft:20 }}>
        <Text style={{fontSize:20, marginBottom:10}}>
          Upcoming Videos
        </Text>

        <UpcommingVideos/>
      </View>

      {/* previous and next button  */}




    </View>
  )
}

export default PlayVideo

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 115,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoThumbnail: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 80,
    height: 80,
    marginTop: -24,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  playPauseIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  currentTimeText: {
    position: 'absolute',
    bottom: -62,
    left: 18,
    color: '#fff',
    fontSize: 14,
  },
  controlsContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    bottom: -50
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'red',
  },
  fullscreenButton: {
    width: 40,
    height: 40,
    // marginLeft: 8,
    right: -228,
    justifyContent: 'center',
    alignItems: 'center',
    // right:0
  },
  fullscreenIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff',
    // bottom: -22,
    // right:-410
  },
  threeButton: { 
    flexDirection: 'row', alignItems: 'center', borderColor: 'rgba(0, 0, 0, 0.3)', borderWidth: 1, borderRadius: 25, padding:10}
});
