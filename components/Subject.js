import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import List from "./ListComponent/List";

const Subject = ({ route }) => {
  const subjectTitle = route.params["subjecTitle"].split(" ")[0];

  const urlName = "Chapter";
  return (
    <View>
      <Header headerName={`${subjectTitle}`} searchIcon={true} icon={false} />
      <View style={{ marginTop: 10 }}>
        <List
          subjectTitle="Mechanics | 10 Chapters, 121 Videos"
          lectureCount="121"
          urlName={urlName}
          chapter={10}
          description="Projectile Motion | Circular Motion | Friction | Newton's law of Motion|..."
        />
        <List
          subjectTitle="Optics | 3 Chapters, 83 Videos"
          lectureCount="83"
          urlName={urlName}
          chapter={3}
          description="Projectile Motion | Circular Motion | Friction | Newton's law of Motion|..."
        />
        <List
          lectureCount="83"
          urlName={urlName}
          chapter={3}
          subjectTitle="Chemistry (Physical & Inorganic)"
          description="405 free lectures by Alok kumar Sir(Ex ISRO Scientist)"
        />
      </View>
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({});
