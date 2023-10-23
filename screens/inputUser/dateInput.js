import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Font from 'expo-font';

async function loadCustomFonts() {
  await Font.loadAsync({
    Lexend: require('../../assets/Lexend-Bold.ttf'),
  });
}

export default function DateInput({ navigation }) {
  const backgroundImage = require('../../assets/BG.png');
  const logoSource = require('../../assets/ic_launcher.png');

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setSelectedStartDate(date);
    } else {
      setSelectedEndDate(date);
    }
  };

  useEffect(() => {
    loadCustomFonts();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Image style={styles.logo} source={logoSource} />
      <View style={styles.inputContainer}>
        <Image style={styles.searchIcon} source={require('../../assets/Date_fill.png')} />
        <Text style={styles.label}>Start Date</Text>
        <Text style={styles.dateText}>
          {selectedStartDate ? new Date(selectedStartDate).toLocaleDateString() : 'mm/dd/yyyy'}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.searchIcon} source={require('../../assets/Date_fill.png')} />
        <Text style={styles.label}>End Date</Text>
        <Text style={styles.dateText}>
          {selectedEndDate ? new Date(selectedEndDate).toLocaleDateString() : 'mm/dd/yyyy'}
        </Text>
      </View>
      <CalendarPicker
        allowRangeSelection
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        onDateChange={handleDateChange} 
        width={320}
        height={320}
        nextTitle=">>"
        previousTitle="<<"
        selectedDayColor="#E8494A"
        selectedDayTextColor="white"
      />
      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Location Input')}
        >
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/Back.png')}
          />
          <Text style={styles.buttonTexter}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHalf} onPress={() => navigation.navigate('Budget Input')}>
            <Image
                style={styles.searchIcon}
                source={require('../../assets/check_ring_round.png')}
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
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lexend',
  },
  logo: {
    borderRadius: 50,
    width: 77,
    height: 77,
    marginBottom: 35,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    marginVertical: 14,
    padding: 16,
    borderRadius: 32,
    borderColor: '#fff',
    backgroundColor: '#fdfdfd',
    shadowColor: 'rgba(32, 32, 32, 0.06)',
    shadowOffset: { width: 0, height: 4.92118 },
    shadowRadius: 24.60591,
    shadowOpacity: 1,
    elevation: 1,
  },
  label: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '500',
  },
  dateText: {
    marginLeft: 100,
    fontSize: 14,
    fontWeight: '500',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  footerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#E8494A',
    marginRight: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
  },
  buttonHalf: {    
    display: 'flex',
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#E8494A',
    borderRadius: 32,
    borderWidth: 2,    
    borderColor: '#E8494A',
    shadowColor: '#EB6161',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  buttonTexter: {
    color: 'black',
    fontSize: 18,
    marginLeft: 5,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
});
