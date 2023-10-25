import React from 'react'

import { View, Image, Text, Dimensions, StyleSheet } from 'react-native'


export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

function Carouseltem({item , index}) {

    let imageSrc;

    // TODO: Update different asset addresses accordingly
    switch (index) {
    case 0:
        imageSrc = require('../../../assets/ic_launcher.png')
        break
    case 1:
        imageSrc = require('../../../assets/ic_launcher.png')
        break
    case 2:
        imageSrc = require('../../../assets/ic_launcher.png')
        break
    case 3:
        imageSrc = require('../../../assets/ic_launcher.png')
        break
    case 4:
        imageSrc = require('../../../assets/ic_launcher.png')
        break
    default:
        imageSrc = require('../../../assets/ic_launcher.png')
    }

  return (
    <View
        key={index}
        style={styles.imageAndTextView}    
    >
        <Image 
            source={imageSrc}
            style={styles.images}
        />
        <Text
            style={styles.greytext}>
            
            {item.text}    
            
        </Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    imageAndTextView: {
        marginTop: 200,
        alignItems: 'center',
      },
      greytext: {
        color: '#000',      
        fontSize: 16,          
        fontStyle: 'normal',   
        fontWeight: '500',
        textAlign: 'center',
      },
      images: {
        height: 300,
        width: 300,
        marginVertical: 30
      }
})

export default Carouseltem
