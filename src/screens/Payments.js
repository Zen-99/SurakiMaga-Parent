import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors, parameters } from "../globals/styles";
import Header from "../context/Header";
const Payments = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameView}>
        <Text style={styles.title}>Payments</Text>
      </View>
      <View style={styles.upperBox}>
        <Text style={styles.upperBoxTitle}>Total Amount</Text>
        <Text style={styles.upperBoxAmount}>Rs. 3500.00</Text>
        <TouchableOpacity style={styles.upperBoxButton}>
          <Text style={styles.upperBoxButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentList}>
        <Text style={styles.historyTitle}>Payment History</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <View style={styles.date}>
              <Text style={styles.dateText}>24/10/2022</Text>
            </View>
            <View style={styles.amount}>
              <Text style={styles.dateText}>Rs. 1500.00</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.date}>
              <Text style={styles.dateText}>24/10/2022</Text>
            </View>
            <View style={styles.amount}>
              <Text style={styles.dateText}>Rs. 1500.00</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.date}>
              <Text style={styles.dateText}>24/10/2022</Text>
            </View>
            <View style={styles.amount}>
              <Text style={styles.dateText}>Rs. 1500.00</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Payments;

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
  upperBox: {
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: parameters.SCREEN_WIDTH / 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
    zIndex: 1000,
    backgroundColor: colors.midBoxWhite,
    borderRadius: 15,
    display: "flex",
  },
  upperBoxTitle: {
    fontSize: 30,
    fontWeight: "500",
  },
  upperBoxAmount: {
    fontSize: 25,
    // opacity: "70%",
  },
  upperBoxButton: {
    height: 50,
    width: parameters.SCREEN_WIDTH / 2,
    backgroundColor: colors.orange,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upperBoxButtonText: {
    justifyContent: "center",
    color: colors.white,
    fontSize: 22,
  },
  row: {
    elevation: 10,
    zIndex: 1000,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.midBoxWhite,
    borderRadius: 10,
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: 70,
    justifyContent: "space-around",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  paymentList: {
    position: "absolute",
    bottom: 0,
    marginTop: 30,
    height: parameters.SCREEN_HEIGHT / 2.8,
  },
  historyTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  date: {
    width: "40%",
  },
  dateText: {
    fontSize: 20,
  },
  amount: {
    width: "40%",
  },
});
