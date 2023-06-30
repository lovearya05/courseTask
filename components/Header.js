import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerName, icon, searchIcon, name }) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (!name) {
      navigation.goBack();
    }
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFF",
          borderTopColor: "#EEE",
          borderBottomColor: "#EEE",
          borderBottomWidth: 0.7,
          borderTopWidth: 0.7,
          padding: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={goBack}>
            <AntDesign
              name="left"
              size={20}
              style={{
                marginLeft: 0,
              }}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "500" }}>
            {headerName.length > 11
              ? `${headerName.slice(0, 11)}...`
              : headerName}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          {searchIcon ? (
            <Feather name="search" size={20} color="black" />
          ) : null}
          {icon ? (
            <Entypo
              name="dots-three-vertical"
              style={{ marginLeft: 25 }}
              size={18}
              color="black"
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
