import React, {useRef, useState} from 'react';
import { View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

const API_KEY = 'AIzaSyDMMFJ_tZGf3H7NBgDt4cr7FZP0oj5oSBk';

const originalData = {
    "Date": [
      { "Location": "Udaipur", "Latitude": 24.566295, "Longitude": 73.753963 },
      { "Location": "Mount Abu Wildlife Sanctuary", "Latitude": 24.593638, "Longitude": 72.730707 },
      { "Location": "Dilwara Temples", "Latitude": 24.875093, "Longitude": 72.718486 },
      { "Location": "Sunset Point Mount Abu", "Latitude": 24.604414, "Longitude": 72.726693 },
      { "Location": "Lake Pichola", "Latitude": 24.576074, "Longitude": 73.678634 },
      { "Location": "Udaipur City Palace", "Latitude": 24.577867, "Longitude": 73.683871 }
    ]
  };
  
  // Extract the "Latitude" and "Longitude" values
  const extractedData = originalData["Date"].map(entry => ({
    Latitude: entry.Latitude,
    Longitude: entry.Longitude
  }));
  const firstEntry = extractedData[0];
  const lastEntry = extractedData[extractedData.length - 1];  


const MapDisplay = ({ date, locations, navigateToDay, currentIndex, numberOfDates }) => {
    // Calculate origin and destination based on the first and last locations
    const origin = {
      latitude: firstEntry.Latitude,
      longitude: firstEntry.Longitude,
    };
  
    const destination = {
      latitude: lastEntry.Latitude,
      longitude: lastEntry.Longitude,
    };
  
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
          style={{ flex: 1 }}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
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