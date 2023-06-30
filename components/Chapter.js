import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import List from "./ListComponent/List";

const Chapter = ({route}) => {
  const subjectTitle = route.params['subjecTitle'].split(" ")[0]

  const urlName = "VideoList";
  return (
    <View>
      <Header headerName={subjectTitle} icon={false} />
      <View style={{ marginTop: 10 }}>
        <List
          subjectTitle="Mechanics| 10 Chapters, 121 Videos"
          lectureCount="121"
          urlName={urlName}
        />
        <List
          subjectTitle="Optics | 3 Chapters, 83 Videos"
          lectureCount="83"
          urlName={urlName}
        />
        <List
          lectureCount="83"
          urlName={urlName}
          subjectTitle="Chemstry (Physical & Inorganic)"
        />
      </View>
    </View>
  );
};

export default Chapter;

const styles = StyleSheet.create({});
