import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import apiClient from "../Services/apiClient";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../globals/styles";
import React, { useState, useEffect } from "react";
import Slideshow from "react-native-image-slider-show";
import { Rating, AirbnbRating } from "react-native-ratings";

const MoreDetails = ({ route }) => {
  let imageBucket = [];
  let frontImage = {
    url: route.params.details.frontimage,
  };

  let backImage = {
    url: route.params.details.backimage,
  };
  imageBucket.push(frontImage);
  imageBucket.push(backImage);

  return (
    <View style={styles.container}>
      <Slideshow
        containerStyle={styles.slideshow}
        overlay={true}
        dataSource={imageBucket}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>
          {route.params.details.title}
        </Text>
        <Text style={styles.locationContainerText}>
          {route.params.details.startlocation}
        </Text>
      </View>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.seatsText}>
            {route.params.details.seats} seats available
          </Text>
          <View style={styles.monthlyCharge}>
            <Text style={styles.MonthlyChargeText}>Charge per km</Text>
            <Text style={styles.MonthlyChargeValue}>
              Rs. {route.params.details.charge}
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {route.params.details.description}
            </Text>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.rateText}>Rate this van</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              style={styles.ratings}
            />
          </View>
        </View>
        <View style={styles.reviewsComplaints}>
          <TouchableOpacity style={styles.complaints}>
            <Text style={styles.complaintsTxt}>Complaints</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reviews}>
            <Text style={styles.reviewsText}>Reviews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewsComplaintsBody}>
          <Text style={styles.reviewsComplaintsBodyText}>(Not Available)</Text>
          <Text style={styles.reviewsComplaintsBodyName}></Text>
        </View>
        <View style={styles.reviewsComplaintsBody}>
          <Text style={styles.reviewsComplaintsBodyText}>(Not Available)</Text>
          <Text style={styles.reviewsComplaintsBodyName}></Text>
        </View>
      </ScrollView>
      <View style={styles.callRequestShare}>
        <TouchableOpacity style={styles.call}>
          <Image
            source={require("../../assets/images/callicon.png")}
            style={styles.callicon}
          />
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.request}>
          <Image
            source={require("../../assets/images/requesticon.png")}
            style={styles.callicon}
          />
          <Text style={styles.callText}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.share}>
          <Image
            source={require("../../assets/images/shareicon.png")}
            style={styles.callicon}
          />
          <Text style={styles.callText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    width: parameters.SCREEN_WIDTH,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
  },
  scrollview: {
    display: "flex",
    justifyContent: "center",
  },
  slideshow: {
    alignSelf: "center",
    width: parameters.SCREEN_WIDTH,
    height: (parameters.SCREEN_HEIGHT * 1) / 4,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  titleContainer: {
    display: "flex",
    width: "90%",
    alignSelf: "center",
    // backgroundColor: "yellow",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
  },
  titleContainerText: {
    marginTop: 15,
    fontSize: 35,
    fontWeight: "500",
  },
  locationContainerText: {
    marginTop: 15,
    fontSize: 15,
    marginBottom: 10,
  },
  detailsContainer: {
    display: "flex",
    width: (parameters.SCREEN_WIDTH * 5.5) / 6,
    // backgroundColor: "yellow",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
  },
  seatsText: {
    fontSize: 20,
    marginTop: 20,
  },
  monthlyCharge: {
    display: "flex",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  MonthlyChargeText: {
    fontSize: 18,
  },
  MonthlyChargeValue: {
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  descriptionText: {
    fontSize: 18,
  },
  rateContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  rateText: {
    fontSize: 15,
  },
  reviewsComplaints: {
    width: "90%",
    display: "flex",
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  reviews: {
    width: 150,
    // backgroundColor: "yellow",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewsText: {
    fontSize: 20,
  },
  complaintsTxt: {
    fontSize: 20,
  },
  complaints: {
    width: 150,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollview: {
    display: "flex",
    marginBottom: 20,
  },
  reviewsComplaintsBody: {
    marginTop: 5,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    backgroundColor: colors.midBoxWhite,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  reviewsComplaintsBodyText: {
    marginBottom: 10,
    marginTop: 10,
  },
  reviewsComplaintsBodyName: {
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
  },
  callRequestShare: {
    position: "absolute",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: 5,
    elevation: 0,
    // backgroundColor: colors.midBoxWhite,
    width: "100%",
    borderRadius: 15,
    height: 70,
  },
  call: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.orange,
  },
  request: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.orange,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.orange,
  },
  callText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  callicon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "white",
  },
});
