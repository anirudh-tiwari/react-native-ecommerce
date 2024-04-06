import { View, Text, TouchableOpacity, Image } from 'react-native'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, height:50, backgroundColor: 'white' }}>
        <TouchableOpacity style={{width: '20%', alignItems: 'center', justifyContent:'center' }}>
            <Image source={require('../../assets/home.png')} style={{width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '20%', alignItems: 'center', justifyContent:'center' }}>
            <Image source={require('../../assets/search.png')} style={{width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '20%', alignItems: 'center', justifyContent:'center' }}>
            <Image source={require('../../assets/cart.png')} style={{width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '20%', alignItems: 'center', justifyContent:'center' }}>
            <Image source={require('../../assets/heart.png')} style={{width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '20%', alignItems: 'center', justifyContent:'center' }}>
            <Image source={require('../../assets/user.png')} style={{width: 24, height: 24 }} />
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Home