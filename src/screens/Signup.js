import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState, useEffect, createRef } from "react";
//import Loader from './Components/Loader';
import apiClient from "../Services/apiClient";
import { TextInput } from "react-native-paper";
import { colors, parameters } from "../globals/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup({ route, navigation }) {
  const [formError, setFormError] = useState(null);
  const handleOnSubmit = () => {};
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#4c69a5" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.topic}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />
        <Text style={styles.text2}>Let's</Text>
        <Text style={styles.text2}>get started!</Text>
        <Text style={styles.text1}>Sign up</Text>
      </View>

      <View style={styles.scrollview}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label={"First Name"}
          theme={{
            colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
          }}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Phone"
          theme={{
            colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
          }}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          theme={{
            colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
          }}
          left={<TextInput.Icon name="lock" />}
          right={<TextInput.Icon name="eye" />}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Confirm Password"
          secureTextEntry={true}
          theme={{
            colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
          }}
          left={<TextInput.Icon name="lock" />}
          right={<TextInput.Icon name="eye" />}
        />

        <View style={styles.noticeMsg}>
          <Text style={styles.noticeMsgText}>{formError}</Text>
        </View>
        <View style={styles.buttonSet}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.textLink}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Already have an account?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Terms & conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    display: "flex",
    backgroundColor: colors.white,
    // paddingBottom:30,
    // justifyContent:'center',
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
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
    height: (parameters.SCREEN_HEIGHT * 4) / 20,
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
    width: parameters.SCREEN_WIDTH / 4,
    backgroundColor: colors.orange,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  confirmbtnText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
  },
  homeLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    height: parameters.SCREEN_HEIGHT / 20,
    width: parameters.SCREEN_WIDTH,
    backgroundColor: colors.white,
  },
  homeText: {
    fontSize: 15,
  },
  topic: {
    marginTop: parameters.SCREEN_HEIGHT / 250,
    width: parameters.SCREEN_WIDTH,
    height: (parameters.SCREEN_HEIGHT * 2) / 6,
    borderRadius: 20,
    alignSelf: "center",
    //paddingBottom: 10,
    paddingLeft: parameters.SCREEN_WIDTH / 15,
    alignSelf: "flex-start",
  },
  body: {
    display: "flex",
    alignSelf: "flex-start",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    marginTop: parameters.SCREEN_HEIGHT / 100,
    height: (parameters.SCREEN_HEIGHT * 0.8) / 5,
    paddingLeft: parameters.SCREEN_WIDTH / 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // justifyContent:"center",

    // borderBottomRightRadius:80,
  },
  textInput: {
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: 50,
    marginBottom: 10,
    backgroundColor: "white",
  },
  scrollview: {
    backgroundColor: colors.white,
    padding: 30,
    paddingBottom: 50,
  },
  text1: {
    color: colors.black,
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    paddingBottom: 10,
  },

  text2: {
    color: colors.black,
    fontFamily: "sans-serif-medium",
    fontSize: 22,
    marginBottom: 5,
  },
  text3: {
    color: colors.black,
    fontFamily: "sans-serif-medium",
    fontSize: 15,
    marginBottom: 2,
  },
  button: {
    height: 50,
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: (parameters.SCREEN_WIDTH * 2) / 8,
    height: (parameters.SCREEN_HEIGHT * 1) / 8,
    marginBottom: (parameters.SCREEN_WIDTH * 1) / 10,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT / 20,
    backgroundColor: colors.grey,
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
  },
  textLink: {
    marginTop: 15,
    opacity: 0.4,
  },
  buttonSet: {
    display: "flex",
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    paddingLeft: parameters.SCREEN_WIDTH / 20,
    // paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    //backgroundColor: "pink"
  },
  noticeMsg: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    alignItems: "center",
  },
  noticeMsgText: {
    color: "red",
    fontSize: 15,
  },
  textLink: {
    marginTop: 15,
    opacity: 0.4,
    alignSelf: "center",
  },
});
