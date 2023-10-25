import React from 'react'
import { ImageBackground, Image, Text, StyleSheet, View , TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import LoginCarousel from './loginCarousel/loginCarousel';

function LoginUser({navigation}) {
    const backgroundImage = require('../../assets/BG.png');
    const logoSource = require('../../assets/ic_launcher.png');
    const googleLogoSource = require('../../assets/white-google-logo.png')

    //TODO : Implement Google Signin
    const handleLogin = () => {
        
    }

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Image style={styles.logo} source={logoSource} />
      <View>
        <LoginCarousel/>
      </View>
      
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.buttonHalf} onPress={() => handleLogin()}>
                <Image
                    style={styles.googleIcon}
                    source={googleLogoSource}
                />
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login or Sign Up
                    </Text>
                </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('City Input')}
          > 
          <Text style={styles.buttonTexter}>Continue As Guest</Text>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  )
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
    position: 'absolute',
    top: 100
  },
  googleIcon: {
    height: 25,
    width: 25
  },
  footerButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 100,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,    
    borderColor: '#E8494A',
    shadowColor: '#EB6161',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,

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
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 100,
    marginVertical: 5,
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

export default LoginUser