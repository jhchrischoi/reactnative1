import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.mapRef = null; // Reference to the MapView component
  }

  handleZoomIn = () => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = this.mapRef.__lastRegion;
    const newLatitudeDelta = latitudeDelta * 0.5; // Zoom in by reducing latitudeDelta
    const newLongitudeDelta = longitudeDelta * 0.5; // Zoom in by reducing longitudeDelta
    const newRegion = {
      latitude,
      longitude,
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    };
    this.mapRef.animateToRegion(newRegion, 500); // 500ms animation duration
  };

  handleZoomOut = () => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = this.mapRef.__lastRegion;
    const newLatitudeDelta = latitudeDelta * 2; // Zoom out by doubling latitudeDelta
    const newLongitudeDelta = longitudeDelta * 2; // Zoom out by doubling longitudeDelta
    const newRegion = {
      latitude,
      longitude,
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    };
    this.mapRef.animateToRegion(newRegion, 500); // 500ms animation duration
  };

  render() {
    return (
      <View>
        <MapView
          ref={(ref) => (this.mapRef = ref)}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: '100%', height: '100%' }}
        />

        <Button title="Zoom In" onPress={this.handleZoomIn} />
        <Button title="Zoom Out" onPress={this.handleZoomOut} />
      </View>
    );
  }
}

export default MapScreen;
