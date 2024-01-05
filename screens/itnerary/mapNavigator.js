import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapDisplay from "./mapDisplay";

const MapsNavigator = ({ route, navigation }) => {
  // console.log(route.params.tripPlanData.DayPlans[0]);

  // const parameter = route.params.tripPlanData;
  // const parameter = `{"2023-11-08": [{"Location": "IIT Mandi", "Latitude": 31.747999, "Longitude": 76.540000},{"Location": "Rewalsar Lake", "Latitude": 32.091800, "Longitude": 76.830830},{"Location": "Gopalpur Zoo", "Latitude": 31.698862, "Longitude": 77.000041},{"Location": "Khucli Village", "Latitude": 31.527022, "Longitude": 76.916220 }], "2023-11-09": [{"Location": "Tarna Temple", "Latitude": 31.602500, "Longitude": 76.724999},{"Location": "Pandoh Dam", "Latitude": 31.455159, "Longitude": 76.606319},{"Location": "Kamlah Nallah","Latitude": 32.071300, "Longitude": 76.841899},{"Location": "Sandhan Valley","Latitude": 31.517310, "Longitude": 76.459701},{"Location":"IIT Mandi","Latitude": 31.747999, "Longitude": 76.540000}], "2023-11-10": [{"Location": "Sewa Gram Heritage Village", "Latitude": 31.706390, "Longitude": 77.034141},{"Location":"Ghatotand Hot Spring", "Latitude": 31.823760, "Longitude": 76.808601},{"Location": "Karsog Valley", "Latitude": 31.360930, "Longitude": 77.274590},{"Location": "IIT Mandi","Latitude": 31.747999, "Longitude": 76.540000}]}`;
  const parameters = route.params.tripPlanData.DayPlans;
  // console.log("parameter: ", parameters);
  const numberOfDates = parameters.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToDay = (offset) => {
    const newIndex = currentIndex + offset;
    if (newIndex >= 0 && newIndex < numberOfDates) {
      setCurrentIndex(newIndex);
    }
    // console.log(currentIndex);
  };

  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "100%", marginTop: 50 }}>
        <Text
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingVertical: 10,
            fontSize: 30,
            backgroundColor: "#E8494A",
            borderBottomEndRadius: 10,
            color: "white",
          }}
        >
          {parameters[currentIndex].Day}
        </Text>
        <MapDisplay
          date={parameters[currentIndex].Day}
          locations={parameters[currentIndex].Places}
        />
      </View>
      <View style={styles.footerButtons}>
        {currentIndex != 0 && (
          <TouchableOpacity
            style={styles.buttonHalf}
            onPress={() => navigateToDay(-1)}
            disabled={currentIndex === 0}
          >
            <Text style={styles.buttonTexter}>Previous Day</Text>
          </TouchableOpacity>
        )}
        {currentIndex != numberOfDates - 1 && (
          <TouchableOpacity
            style={styles.buttonHalf}
            onPress={() => navigateToDay(1)}
            disabled={currentIndex === numberOfDates - 1}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonTexter}>Next Day</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "5%",
    width: "100%",
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
    marginRight: 25,
  },
  buttonTexter: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 7,
  },
});

export default MapsNavigator;
