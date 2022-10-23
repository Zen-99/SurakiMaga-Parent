import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { colors, parameters } from "../globals/styles";
import DatePicker from "@react-native-community/datetimepicker";
import Header from "../context/Header";
import MapView from "react-native-maps";
import React, { useState, useEffect } from "react";
import CheckBox from "@react-native-community/checkbox";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
const Inform = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [checkedMorning, setCheckedMorning] = useState(false);
  const [checkedEvening, setCheckedEvening] = useState(false);
  const [text, setText] = useState(
    new Date().getDate() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear()
  );

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    let dateTxt =
      tempDate.getDate() +
      "/" +
      tempDate.getMonth() +
      "/" +
      tempDate.getFullYear();
    setText(dateTxt);
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nameView}>
          <Text style={styles.title}>Inform Absence</Text>
        </View>
        <View style={styles.dateAndTitle}>
          <Text style={styles.dateTitle}>Date</Text>
          <Text style={styles.dateText}>{text}</Text>
          <TouchableOpacity style={styles.showCalendar}>
            <Text style={styles.showCalendarText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.morningAndEvening}>
          <Text style={styles.confirmTxtBold}>Morning</Text>
          <View style={styles.conformationContainer}>
            <Text style={styles.confirmTxt}>Confirm Absence</Text>
            <TouchableOpacity style={styles.showCalendar}>
              <Text style={styles.showCalendarText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.morningAndEvening}>
          <Text style={styles.confirmTxtBold}>Evening</Text>
          <View style={styles.conformationContainer}>
            <Text style={styles.confirmTxt}>Confirm Absence</Text>
            <TouchableOpacity style={styles.showCalendar}>
              <Text style={styles.showCalendarText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dropLocations}>
          <Text style={styles.confirmTxtBold}>Additional drop locations</Text>
          <MapView style={styles.map} />
        </View>
        <View style={styles.buttonSet}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.button2Text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inform;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
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
  dateAndTitle: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    marginBottom: 50,
  },
  dateTitle: {
    fontSize: 18,
  },
  dateText: {
    fontSize: 22,
  },
  showCalendar: {
    height: 40,
    width: (parameters.SCREEN_WIDTH * 1.2) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  showCalendarText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 18,
    marginTop: -2,
  },
  morningAndEvening: {
    display: "flex",
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: parameters.SCREEN_HEIGHT / 7,
    // backgroundColor: "yellow",
    marginBottom: 15,
    marginTop: 15,
  },
  conformationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "blue",
  },
  confirmTxtBold: {
    fontSize: 25,
    fontWeight: "500",
  },
  confirmTxt: {
    fontSize: 20,
  },

  map: {
    marginTop: 20,
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: parameters.SCREEN_HEIGHT / 7,
    borderRadius: 5,
  },
  dropLocations: {
    display: "flex",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    alignSelf: "center",
  },
  button: {
    height: 50,
    width: (parameters.SCREEN_WIDTH * 2.5) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 22,
    marginTop: -2,
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: (parameters.SCREEN_WIDTH * 2.5) / 6,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button2Text: {
    color: colors.orange,
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  buttonSet: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
    justifyContent: "space-evenly",
    marginBottom: 100,
  },
});
