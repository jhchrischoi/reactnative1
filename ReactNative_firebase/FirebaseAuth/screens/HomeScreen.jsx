import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Button } from 'react-native'
import React, {useRef} from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
//map
import MapView, {Callout, Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../environments';
import Constants from 'expo-constants';
//Bottom tab bar
import TabBar from './TabBar';

const {width, height} = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation()
  const mapRef = useRef(null);
  const handleSignOut =()=>{
    auth
      .signOut()
      .then(()=>{
        navigation.replace("Login")
      })
      .catch(error=>alert(error.message))
  }
  const[pin, setPin] = React.useState({
          latitude: 37.78825,
          longitude: -122.4324,
  })
  const[region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
})

  return (
    <View style={styles.container}>
      
      <MapView
        ref={mapRef}
        style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        >
          <Marker coordinate={{latitude:region.latitude, longitude:region.longitude}} />
          <Marker
            coordinate = {pin}
            pinColor='white'
            draggable={true}
            onDragStart={(e)=>{
              console.log("Drag start", e.nativeEvent.coordinates)
            }}
            onDragEnd={(e)=>{
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
              })
            }}
          />
        </MapView>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
        styles = {{textInput: styles.textInputStyle,}}
        placeholder='Search'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          })
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components:"country:us",
          types:"establishment",
          radius:3000,
          location: `${region.latitude}, ${region.longitude}`
        }}
      />
      </View>
      {/* <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity
      onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
       */}
       <TabBar
        style={styles.navbar}
       />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
},
//   button: {
//     backgroundColor: '#0782F9',
//     width: '60%',
//     padding: 15,
//     borderRadius:10,
//     alignItems:'center',
//     marginTop:40,
// },
// buttonText: {
//     color:'white',
//     fontWeight:'700',
//     fontSize:16,
// },
map: {
  width: '100%',
  height: '70%',
  marginTop:20,
  zIndex:1,
},
searchContainer: {
  position:"absolute",
  width:"90%",
  backgroundColor:"white",
  shadowColor:"black",
  shadowOffset:{width:1, height:1},
  shadowOpacity:0.1,
  shadowRadius:5,
  elevation:4,
  padding:5,
  borderRadius:20,
  top: Constants.statusBarHeight,
  zIndex:2,
  
},
input: {
  borderColor:"#888",
  borderWidth:1,
},
textInputStyle: {
  borderWidth: 0,
  borderColor: 'transparent',
},
navbar:{
  position:'absolute',
  bottom:25,
  left:20,
  right:20,
  elevation:0,
  backgroundColor:'#ffffff',
  borderRadius:15,
  height:90,
}
})