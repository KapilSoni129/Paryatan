import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";

import { useFormData } from "../../utils/formData";

async function loadCustomFonts() {
  await Font.loadAsync({
    Lexend: require("../../assets/Lexend-Bold.ttf"),
  });
}

export default function CityInput({ navigation }) {
  const backgroundImage = require("../../assets/BG.png");
  const logoSource = require("../../assets/ic_launcher.png");

  const { formData, dispatch } = useFormData();
  // console.log(formData);

  const handleNext = () => {
    navigation.navigate("Location Input");
  };

  useEffect(() => {
    loadCustomFonts();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Image style={styles.logo} source={logoSource} />
      <View style={styles.inputContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/Search_alt.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Where do you want to go? (only cities)"
          value={formData.location.city}
          onChangeText={(city) =>
            dispatch({ type: "UPDATE_CITY", payload: city })
          }
        />
      </View>
      <TouchableOpacity style={styles.buttonContain} onPress={handleNext}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/check_ring_round.png")}
        />
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Lexend",
  },

  logo: {
    borderRadius: 50,
    width: 77,
    height: 77,
    marginBottom: 35,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    marginVertical: 14,
    padding: 16,
    borderRadius: 32,
    borderColor: "#fff",
    backgroundColor: "#fdfdfd",
    shadowColor: "rgba(32, 32, 32, 0.06)",
    shadowOffset: { width: 0, height: 4.92118 },
    shadowRadius: 24.60591,
    shadowOpacity: 1,
    elevation: 1,
  },

  input: {
    display: "flex",
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  searchIcon: {
    width: 20,
    height: 20,
  },

  buttonContain: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#E8494A",
    borderRadius: 32,
    shadowColor: "#EB6161",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
