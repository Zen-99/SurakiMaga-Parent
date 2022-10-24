import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import apiClient from "../Services/apiClient";
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import { colors, parameters } from "../globals/styles";

const Header = () => {
  const isFocused = useIsFocused();
  const [isProPicClicked, setIsProPicClicked] = useState(false);
  const [fetchData, setFetchData] = useState({
    image: "",
  });
  // useEffect(() => {
  //   async function getKind() {
  //     const { data, error } = await apiClient.loadDetails();
  //     console.log(data);

  //     setFetchData({
  //       image: data.result.image,
  //     });
  //   }

  //   getKind();
  // }, [isFocused]);
  return (
    <View style={styles.header}>
      <View style={styles.leftSideOfHeader}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.rightSideOfHeader}>
        <TouchableOpacity style={styles.icon2}>
          <Icon
            type="material-community"
            name="bell"
            color={colors.grey}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsProPicClicked(!isProPicClicked)}>
          {fetchData.image ? (
            <Image
              source={{ uri: fetchData.image }}
              style={styles.profilePicSmall}
            />
          ) : (
            <Image
              source={require("../../assets/images/profilePic.jpg")}
              style={styles.profilePicSmall}
            />
          )}
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        style={styles.alert}
        visible={isProPicClicked}
        onRequestClose={() => {
          setIsProPicClicked(!isProPicClicked);
        }}
      >
        <TouchableOpacity onPress={() => setIsProPicClicked(!isProPicClicked)}>
          <Image
            source={require("../../assets/images/cancel.png")}
            style={styles.cross}
          />
        </TouchableOpacity>
        <View style={styles.parentBox}>
          <View style={styles.ParentBoxLeft}>
            <View style={styles.parentNameContainer}>
              <Text style={styles.parentName}>Dilshi Navodya</Text>
            </View>
            <View style={styles.editProfileContainer}>
              <Text style={styles.parentTxt}>Parent</Text>
              <TouchableOpacity style={styles.editProfileBtn}>
                <Text style={styles.editProfileBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.parentBoxRight}>
            {fetchData.image ? (
              <Image
                source={{ uri: fetchData.image }}
                style={styles.profilePicParent}
              />
            ) : (
              <Image
                source={require("../../assets/images/profilePic.jpg")}
                style={styles.profilePicParent}
              />
            )}
          </View>
        </View>
        <View style={styles.ChildTopic}>
          <Text style={styles.ChildTopicText}>Children</Text>
        </View>
        <TouchableOpacity style={styles.childBox}>
          <View style={styles.childBoxLeft}>
            <View style={styles.childNameContainer}>
              <Text style={styles.childName}>Dilshi Navodya</Text>
            </View>
          </View>
          <View style={styles.childBoxRight}>
            {fetchData.image ? (
              <Image
                source={{ uri: fetchData.image }}
                style={styles.profilePicChild}
              />
            ) : (
              <Image
                source={require("../../assets/images/profilePic.jpg")}
                style={styles.profilePicChild}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.childBox}>
          <View style={styles.childBoxLeft}>
            <View style={styles.childNameContainer}>
              <Text style={styles.childName}>Roshan Senevirathne</Text>
            </View>
          </View>
          <View style={styles.childBoxRight}>
            {fetchData.image ? (
              <Image
                source={{ uri: fetchData.image }}
                style={styles.profilePicChild}
              />
            ) : (
              <Image
                source={require("../../assets/images/profilePic.jpg")}
                style={styles.profilePicChild}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.childBox}>
          <View style={styles.childBoxLeft}>
            <View style={styles.childNameContainer}>
              <Text style={styles.childName}>Faalil Bary</Text>
            </View>
          </View>
          <View style={styles.childBoxRight}>
            {fetchData.image ? (
              <Image
                source={{ uri: fetchData.image }}
                style={styles.profilePicChild}
              />
            ) : (
              <Image
                source={require("../../assets/images/profilePic.jpg")}
                style={styles.profilePicChild}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addStudent}>
          <Image
            source={require("../../assets/images/add-student.png")}
            style={styles.addStudentIcon}
          />
          <Text style={styles.addStudentText}>Add Children</Text>
        </TouchableOpacity>
        <View style={styles.hr}></View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
  hr: {
    marginTop: 10,
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 9) / 10,
    borderBottomWidth: 2,
  },
  profilePicParent: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profilePicChild: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  logo: {
    marginLeft: 20,
    width: (parameters.SCREEN_WIDTH * 1) / 8,
    height: (parameters.SCREEN_HEIGHT * 0.5) / 8,
  },
  cross: {
    marginLeft: 20,
    marginTop: 20,
    width: 30,
    height: 30,
  },
  parentChildBox: {
    position: "absolute",
    display: "flex",
    top: 30,
    alignSelf: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 1000,
    backgroundColor: colors.midBoxWhite,
    borderRadius: 15,
    width: (parameters.SCREEN_WIDTH * 9) / 10,
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
  parentBox: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: parameters.SCREEN_HEIGHT / 4,
    borderBottomWidth: 1,
  },
  ChildTopic: {
    marginTop: 20,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: 40,
  },
  ChildTopicText: {
    fontSize: 25,
    fontWeight: "500",
  },
  childBox: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: 90,

    // borderBottomWidth: 1,
  },
  ParentBoxLeft: {
    display: "flex",
    width: "60%",
    height: "100%",
    // backgroundColor: "yellow",
  },
  childBoxLeft: {
    display: "flex",
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
  childBoxRight: {
    display: "flex",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  parentBoxRight: {
    display: "flex",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    // backgroundColor: "blue",
  },
  editProfileBtn: {
    height: 40,
    width: (parameters.SCREEN_WIDTH * 1.5) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  editProfileBtnText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 18,
    marginTop: -2,
  },
  editProfileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "white",
  },
  parentTxt: {
    fontSize: 20,
  },
  parentNameContainer: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  parentName: {
    fontSize: 25,
    fontWeight: "500",
  },
  childName: {
    fontSize: 20,
    fontWeight: "400",
  },
  addStudent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    height: 40,
  },
  addStudentIcon: {
    width: 50,
    height: 50,
  },
  addStudentText: {
    fontSize: 18,
  },
});
