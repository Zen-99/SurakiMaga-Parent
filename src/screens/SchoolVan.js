import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import apiClient from "../Services/apiClient";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../globals/styles";
import React, { useState, useEffect } from "react";
import Slideshow from "react-native-image-slider-show";
import Header from "../context/Header";

const SchoolVan = ({ navigation }) => {
  let imageBucket = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [information, setInformation] = useState({
    owner: "",
    Driver: "",
    vehicleno: "",
    DriverImage: "",
    frontImage: "",
    image: "",
  });
  const [username, setUsername] = useState("Faalil");
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
  useEffect(() => {
    async function getVehicleDetails() {
      const { data, error } = await apiClient.getVehicleDetails({
        studentid: username,
      });
      if (data.result != undefined) {
        setInformation({
          owner: data.result.ownername,
          vehicleno: data.result.vehicleno,
          Driver: data.result.drivername,
          frontImage: data.result.frontimage,
          image: data.result.backimage,
        });
        console.log(data);
      }
    }
    getVehicleDetails();
  }, []);
  let frontImage = {
    url: information.frontImage,
  };

  let backImage = {
    url: information.image,
  };
  imageBucket.push(frontImage);
  imageBucket.push(backImage);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        style={styles.alert}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.alert}>
          <View style={styles.alertbox}>
            <View style={styles.alertUpper}>
              <Text style={styles.alertTitle}>Are you sure do you</Text>
              <Text style={styles.alertTitle}>want to leave?</Text>
            </View>
            <View style={styles.alertLower}>
              <TouchableOpacity
                style={styles.confirmbtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.confirmbtnText}>Yeah, I'm sure</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmbtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.confirmbtnText}>I have to think</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Header />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nameView}>
          <Text style={styles.title}>School Van</Text>
        </View>
        <Slideshow
          containerStyle={styles.slideshow}
          overlay={true}
          dataSource={imageBucket}
        />
        <View style={styles.nameBox2}>
          <View style={styles.informationTopic}>
            <Text style={styles.informationTopicText}>Information</Text>
          </View>
          <View style={styles.informationBody}>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Vehicle No</Text>
              <Text style={styles.informationDetailText}>
                {information.vehicleno}
              </Text>
            </View>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Owner</Text>
              <Text style={styles.informationDetailText}>
                {information.owner}
              </Text>
            </View>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Driver</Text>
              <Text style={styles.informationDetailText}>
                {information.Driver}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            Comlpaints & Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Payments")}
          >
            Payments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text
            style={styles.button2Text}
            onPress={() => setModalVisible(!modalVisible)}
          >
            Leave This school van
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SchoolVan;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 30,
    elevation: 10,
    zIndex: 1000,
    marginTop: parameters.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.midBoxWhite,
    height: parameters.headerHeight,

    borderRadius: 10,
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 9) / 10,
    justifyContent: "space-between",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,

    // height:parameters.SCREEN_HEIGHT/7,
  },
  leftSideOfHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //   paddingLeft:parameters.SCREEN_WIDTH/20
  },
  rightSideOfHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: parameters.SCREEN_WIDTH / 20,
  },
  icon2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 100,
  },
  profilePicSmall: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  logo: {
    marginLeft: 20,
    width: (parameters.SCREEN_WIDTH * 1) / 8,
    height: (parameters.SCREEN_HEIGHT * 0.5) / 8,
  },
  scrollview: {
    display: "flex",
    marginBottom: 20,
  },
  slideshow: {
    alignSelf: "center",
    width: parameters.SCREEN_WIDTH,
    height: (parameters.SCREEN_HEIGHT * 1) / 4,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  nameView: {
    marginTop: parameters.SCREEN_HEIGHT / 6,
    display: "flex",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT / 8,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.font,
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  nameBox2: {
    display: "flex",
    backgroundColor: colors.midBoxWhite,
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 4,
    marginBottom: "7%",
    alignItems: "center",
    marginTop: "7%",
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  informationTopic: {
    display: "flex",
    borderRadius: 10,
    width: "85%",
    height: "30%",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  informationTopicText: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: 20,
  },
  informationDetailText: {
    color: colors.grey,
    fontSize: 18,
  },
  informationDetailText2: {
    color: colors.grey2,
    fontSize: 18,
  },
  informationBody: {
    display: "flex",
    borderRadius: 10,
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  informationDetail: {
    display: "flex",
    width: "85%",
    paddingBottom: 5,
    padddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  informationDetail2: {
    display: "flex",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: (parameters.SCREEN_WIDTH * 3.5) / 6,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 100,
  },
  button2Text: {
    color: colors.orange,
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  textInput: {
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    height: 50,
    marginBottom: 10,
    backgroundColor: "white",
  },
  emergencyBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  button: {
    height: 50,
    width: (parameters.SCREEN_WIDTH * 3.5) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 22,
    marginTop: -2,
  },
  nameBox4: {
    display: "flex",
    backgroundColor: colors.midBoxWhite,
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 3,
    alignItems: "center",
    marginTop: "7%",
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
    width: (parameters.SCREEN_WIDTH * 3) / 4,
    height: (parameters.SCREEN_HEIGHT * 4) / 14,
    backgroundColor: colors.midBoxWhite,
    // shadowColor: '#171717',
    // shadowOffset: {width: -3, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  alertTitle: {
    fontSize: 20,
  },
  confirmbtn: {
    height: 40,
    width: parameters.SCREEN_WIDTH / 2.7,
    backgroundColor: colors.orange,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
  confirmbtnText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
  },
  alertUpper: {
    display: "flex",
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  alertLower: {
    display: "flex",
    width: "100%",
    height: "55%",
    justifyContent: "space-around",
  },
});
