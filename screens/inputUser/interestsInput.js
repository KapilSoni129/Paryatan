import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, VirtualizedList } from 'react-native';
import * as Font from 'expo-font';

import { useFormData } from '../../utils/formData';
import axios from 'axios';
const realmAppId = 'application-0-itzvg';
const partitionKey = 'city';

async function loadCustomFonts() {
    await Font.loadAsync({
      Lexend: require('../../assets/Lexend-Bold.ttf'),
    });
    }

  export default function InterestInput({ navigation }) {
    const backgroundImage = require('../../assets/BG.png');
    const logoSource = require('../../assets/ic_launcher.png');

    const [loading, setLoading] = useState(false);

    const buildUpdatedData = (formData, localInterests) => {
    const selectedInterestLabels = interestsList
        .filter((interest) => localInterests.includes(interest.id))
        .map((interest) => interest.label);
    
        return { ...formData, interests: selectedInterestLabels };
    };

    const { formData, dispatch } = useFormData();
  
    const [localInterests, setLocalInterests] = useState(formData.interests || []);

        const handleCreate = async (data) => {
            setLoading(true);
            const interestsString = localInterests.join(', ');
            // console.log(formData);
            const updatedFormData = { ...formData, interests: interestsString };
            // console.log(updatedFormData);
        
            try {
            const response = await axios.post('http:192.168.45.179:8000/generate_trip_plan/v2', updatedFormData);
            console.log(response.data);

            navigation.navigate('Maps view',{ tripPlanData: response.data })
                
            setLoading(false);
            } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled:', error.message);
            } else {
                console.error('Error sending data:', error);
            }
            setLoading(false);
            }
        };    
  
    const interestsList = [
      { id: 1, label: 'Historical and Cultural' },
      { id: 2, label: 'Nature and Adventure' },
      { id: 3, label: 'Wellness and Relaxation' },
      { id: 4, label: 'Culinary Exploration' },
      { id: 5, label: 'Adventure Sports' },
      { id: 6, label: 'Shopping and Local Markets' },
      { id: 7, label: 'Photography and Scenic Exploration' },
      { id: 8, label: 'Entertainment and Nightlife' },
      { id: 9, label: 'Educational Travel' },
      { id: 10, label: 'Religious and Spiritual Exploration' },
    ];
  
    const toggleInterest = (interestLabel) => {
      if (localInterests.includes(interestLabel)) {
        setLocalInterests(localInterests.filter((label) => label !== interestLabel));
      } else {
        setLocalInterests([...localInterests, interestLabel]);
      }
  
      // Update the interests in form data context
      dispatch({ type: 'UPDATE_INTERESTS', payload: localInterests });
    };
  
    useEffect(() => {
      loadCustomFonts();
    }, []);
  
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Image style={styles.logo} source={logoSource} />
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 22, fontWeight: 500, marginBottom: 15 }}>Select your Interests</Text>
          {interestsList.map((interest) => (
            <TouchableOpacity
              key={interest.label}
              onPress={() => toggleInterest(interest.label)}
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: 'black',
                  marginRight: 10,
                  backgroundColor: localInterests.includes(interest.label) ? '#E8494A' : 'transparent',
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: 500 }}>{interest.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Budget Input')}>
            <Image style={styles.searchIcon} source={require('../../assets/Back.png')} />
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonTexter}>Go back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHalf} onPress={handleCreate}>
            <Image style={styles.searchLogo} source={require('../../assets/Group128.png')} />
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Create</Text>
            </View>
          </TouchableOpacity>
        </View>
        {loading && <Text>Loading...</Text>}    
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
    display: 'flex',
    flexDirection: 'coloumn',
    justifyContent: 'center',
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

  input: {
    display: 'flex',
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    width: 20,
    height: 20,
  },

  footerButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },

  ruppeeIcon:{
    width: 33.495,
    height: 29.476,
  },
  
  buttonBack: {    
    display: 'flex',
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

  buttonTexter: {
    color: 'black',
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

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  searchLogo:{
    width: 16.928,
    height: 26,
  }
});
