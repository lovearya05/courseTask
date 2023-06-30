import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DPPComponent from "./DPPComponent";

const DPP = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View>
        <DPPComponent title="Planner" />
        <DPPComponent title="Session 01 | The living world & biological classification" />
      </View>
    </View>
  );
};

export default DPP;

const styles = StyleSheet.create({});
