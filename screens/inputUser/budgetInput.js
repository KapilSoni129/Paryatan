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
  VirtualizedList,
} from "react-native";
import * as Font from "expo-font";

import { useFormData } from "../../utils/formData";

async function loadCustomFonts() {
  await Font.loadAsync({
    Lexend: require("../../assets/Lexend-Bold.ttf"),
  });
}

export default function BudgetInput({ navigation }) {
  const backgroundImage = require("../../assets/BG.png");
  const logoSource = require("../../assets/ic_launcher.png");

  const { formData, dispatch } = useFormData();
  // console.log(formData);

  useEffect(() => {
    loadCustomFonts();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Image style={styles.logo} source={logoSource} />
      <View style={styles.inputContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/Wallet_fill.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="What's your budget?"
          value={formData.budget}
          onChangeText={(budget) =>
            dispatch({ type: "UPDATE_BUDGET", payload: budget })
          }
        />
        <Image
          style={styles.ruppeeIcon}
          source={require("../../assets/ruppee.png")}
        />
      </View>
      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate("Date Input")}
        >
          <Image
            style={styles.searchIcon}
            source={require("../../assets/Back.png")}
          />
          <View style={styles.buttonContiner}>
            <Text style={styles.buttonTexter}>Go back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonHalf}
          onPress={() => navigation.navigate("Interest Input")}
        >
          <Image
            style={styles.searchIcon}
            source={require("../../assets/check_ring_round.png")}
          />
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
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

  footerButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },

  ruppeeIcon: {
    width: 33.495,
    height: 29.476,
  },

  buttonBack: {
    display: "flex",
    flexDirection: "row",
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#E8494A",
    marginRight: 20,
  },

  buttonTexter: {
    color: "black",
    fontSize: 18,
    marginLeft: 5,
  },

  buttonHalf: {
    display: "flex",
    flexDirection: "row",
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#E8494A",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#E8494A",
    shadowColor: "#EB6161",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 7,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
