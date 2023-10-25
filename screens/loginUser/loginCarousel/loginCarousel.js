import React, { useState, useRef } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, Text } from 'react-native'
import Carouseltem, { ITEM_WIDTH, SLIDER_WIDTH } from './carouseltem'
import loginCarouselData from './loginCarouselData'

function LoginCarousel() {

  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
      layout="default"
      data={loginCarouselData}
      ref={isCarousel}
      renderItem={Carouseltem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      inactiveSlideShift={0}
      onSnapToItem={(index) => setIndex(index)}
      useScrollView={true}
    />
    <Pagination
        containerStyle={{
          marginBottom: 200
        }}
        dotsLength={loginCarouselData.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#EB6161'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default LoginCarousel
