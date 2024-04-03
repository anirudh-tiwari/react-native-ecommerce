import { View, Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{ flex:1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/anirudhLogo.png')} style={{width: 250, height: 250}} />
    </View>
  )
}

export default Splash