import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import { useIsFocused } from "@react-navigation/native";
import MapView, { Callout, Marker } from "react-native-maps";
import { colors, parameters, mapStyle } from "../globals/styles";
import apiClient from "../Services/apiClient";
import React, { useEffect, useState, useLayoutEffect } from "react";
import * as Location from "expo-location";

const Map = () => {
  const isFocused = useIsFocused();
  const [position, setPosition] = useState({
    accuracy: 11.454999923706055,
    altitude: -89.19999694824219,
    altitudeAccuracy: 1.509387731552124,
    heading: 270.5041198730469,
    latitude: 6.93371,
    longitude: 79.85548,
    speed: 0.0023679917212575674,
  });

  const origin = {
    latitude: 6.902333307966652,
    longitude: 79.8611743548024,
  };
  const destination = {
    latitude: 6.909044420770567,
    longitude: 79.87515656700285,
  };
  const studentLocation = [];
  const temp = {
    latitude: 6.905597,
    longitude: 79.873388,
  };
  studentLocation.push(temp);

  const GOOGLE_MAPS_APIKEY = "AIzaSyDrqTMpp62uuZvHpJDV8XHP4yZjeoCbR-4";

  useEffect(() => {
    apiClient
      .getToken()
      .then((data) => data)
      .then((value) => {
        if (value == "") {
          navigation.navigate("Login");
        } else {
          apiClient.setToken(value);
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <View style={styles.firstRow}>
          <Text style={styles.firstRowFont}>2.7 KM Left</Text>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.left}>
            <Text style={styles.secondRowFont}>Total Distance</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.secondRowFont}>2.7 KM</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.left}>
            <Text style={styles.secondRowFont}>Current Speed</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.secondRowFont}>0Kmph</Text>
          </View>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.902333307966652,
          longitude: 79.8611743548024,
          latitudeDelta: 0.007,
          longitudeDelta: 0.008,
        }}
        showsUserLocation={true}
        // customMapStyle={mapStyle}
        followsUserLocation={true}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          optimizeWaypoints={true}
          waypoints={studentLocation}
        />
        <Marker
          coordinate={{
            latitude: 6.902333307966652,
            longitude: 79.8611743548024,
          }}
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: "cover" }}
            source={require("../../assets/images/schoolvanmap.png")}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 6.905597,
            longitude: 79.873388,
          }}
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: "cover" }}
            source={require("../../assets/images/studentmap.png")}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 6.909044420770567,
            longitude: 79.87515656700285,
          }}
          pinColor="green"
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: "cover" }}
            source={require("../../assets/images/schoolicon.png")}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  upperBox: {
    position: "absolute",
    display: "flex",
    top: 30,
    alignSelf: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 1000,
    backgroundColor: colors.midBoxWhite,
    borderRadius: 15,
    width: (parameters.SCREEN_WIDTH * 7) / 8,
    height: (parameters.SCREEN_HEIGHT * 1) / 5,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  firstRow: {
    display: "flex",
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  secondRow: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    height: "15%",
  },
  left: {
    display: "flex",
    width: "70%",
    height: "100%",

    justifyContent: "center",
  },
  right: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
  },
  firstRowFont: {
    color: colors.orange,
    fontWeight: "bold",
    fontSize: 45,
  },
  secondRowFont: {
    color: colors.font,
    fontSize: 20,
  },
  alert: {
    flex: 1,
    backgroundColor: "#00000090",
    alignItems: "center",
    justifyContent: "center",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT,

    // backgroundColor:'red',
  },
  alertbox: {
    paddingTop: 5,
    display: "flex",
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 4) / 5,
    height: (parameters.SCREEN_HEIGHT * 5) / 20,
    backgroundColor: colors.midBoxWhite,
    // shadowColor: '#171717',
    // shadowOffset: {width: -3, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  alertName: {
    fontSize: 20,
  },
  alertSchool: {
    fontSize: 15,
  },
  confirmbtn: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: parameters.SCREEN_WIDTH / 4,
    backgroundColor: colors.orange,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  confirmbtnText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: -2,
  },
  imageName: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "80%",
    alignItems: "center",
  },
  image: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
  },
  name: {
    width: "60%",
    height: "50%",
    justifyContent: "space-around",
  },
  picture: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  buttonSet: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "98%",
  },
});
