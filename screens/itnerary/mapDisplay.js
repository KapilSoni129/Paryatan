import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const API_KEY = "";
// console.log("API_KEY", API_KEY);

const MapDisplay = ({ date, locations }) => {
  // console.log("date: ", date);
  // console.log("locations: ", locations);
  // Calculate origin and destination based on the first and last locations

  const extractedData = locations.map((entry) => ({
    Latitude: entry.Latitude,
    Longitude: entry.Longitude,
    Name: entry.Name,
  }));

  // console.log(extractedData);

  const firstEntry = extractedData[0];

  const origin = {
    latitude: firstEntry.Latitude,
    longitude: firstEntry.Longitude,
  };

  const destination = {
    latitude: firstEntry.Latitude,
    longitude: firstEntry.Longitude,
  };

  // console.log("extractedData", extractedData);
  // console.log("first", firstEntry);
  // console.log("last", lastEntry);
  // console.log(origin.latitude, origin.longitude);

  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1, minHeight: 100 }}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {extractedData.map((extractedData) => (
          <Marker
            coordinate={{
              latitude: extractedData.Latitude,
              longitude: extractedData.Longitude,
            }}
            title={extractedData.Name}
          />
        ))}
        <MapViewDirections
          origin={origin}
          waypoints={extractedData.map((extractedData) => ({
            latitude: extractedData.Latitude,
            longitude: extractedData.Longitude,
          }))}
          destination={destination}
          apikey={API_KEY}
          strokeColor="#E8494A"
          strokeWidth={4}
          onReady={traceRouteOnReady}
        />
      </MapView>
    </View>
  );
};

export default MapDisplay;
