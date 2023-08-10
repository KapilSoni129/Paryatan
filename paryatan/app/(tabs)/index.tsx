import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Dimensions, Image, Platform } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Where do you want to go?(Only cities) "
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button Clicked')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEF7F7', // skin color
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    shadowColor: '#EB6161',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },

  logo: {    
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#EB6161',
    borderRadius: Math.round(width) / 2,
    paddingVertical: 15,
    paddingHorizontal: 150,
    alignItems: 'center',
    shadowColor: '#EB6161',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
