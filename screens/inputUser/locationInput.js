import React, { useEffect, useState, useRef } from "react";
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

export default function LocationInput({ navigation }) {
  const backgroundImage = require("../../assets/BG.png");
  const logoSource = require("../../assets/ic_launcher.png");
  const [loading, setLoading] = useState(false);

  const YOUR_API_KEY = "";

  const { formData, dispatch } = useFormData();

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
          placeholder="Do you have a start location?*"
          value={formData.location.name}
          onChangeText={(name) =>
            dispatch({ type: "UPDATE_START_LOCATION", payload: name })
          }
        />
      </View>
      {loading && <Text>Loading...</Text>}
      {/* <Text style={styles.greytext}>
        *If you are unsure you can skip to next
      </Text> */}
      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate("City Input")}
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
          onPress={async () => {
            // getCoordinates(formData.location.name, formData.location.city);
            setLoading(true);
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formData.location.name},${formData.location.city}&key=${YOUR_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const { lat, lng } = data.results[0].geometry.location;
            // console.log(lat, lng);
            dispatch({ type: "UPDATE_Latitude", payload: lat });
            dispatch({ type: "UPDATE_Longitude", payload: lng });
            navigation.navigate("Date Input");
            setLoading(false);
          }}
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

  greytext: {
    color: "#B9B9B9",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    position: "absolute",
    bottom: 150,
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
