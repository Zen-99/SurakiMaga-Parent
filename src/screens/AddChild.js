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
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../globals/styles";
import React, { useState, useEffect } from "react";

const AddChild = () => {
  const [editNameState, setEditNameState] = useState(false);
  const [editContactState, setEditContactState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchData, setFetchData] = useState({
    image: "",
  });
  const openPopUp = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#4c69a5" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <View style={styles.nameView}>
          <Text style={styles.title}>Add Child</Text>
        </View>
        <View style={styles.picAndEdit}>
          {fetchData.image ? (
            <Image
              source={{ uri: fetchData.image }}
              style={styles.profilePicBig}
            />
          ) : (
            <Image
              source={require("../../assets/images/profilePic.jpg")}
              style={styles.profilePicBig}
            />
          )}
          <TouchableOpacity style={styles.editprofileBtn} onPress={openPopUp}>
            <Image
              source={require("../../assets/images/editicon.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <View style={styles.editTxtandBtn}>
            <TextInput
              style={styles.textInput2}
              mode="outlined"
              label="Full Name"
              editable={editNameState}
              onChangeText={(text) =>
                setMobileNo({ ...mobileNo, mobile: text })
              }
              theme={{
                colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
              }}
              left={<TextInput.Icon name="account" />}
            />
            {editNameState ? (
              <View style={styles.NameEdit}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/correct.jpg")}
                    style={styles.correctButton}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/incorrect.png")}
                    style={styles.IncorrectIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.contactEdit}>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/editicon.png")}
                    style={styles.enableEditIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.editTxtandBtn}>
            <TextInput
              style={styles.textInput2}
              mode="outlined"
              label="Age"
              editable={editNameState}
              onChangeText={(text) =>
                setMobileNo({ ...mobileNo, mobile: text })
              }
              theme={{
                colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
              }}
              left={<TextInput.Icon name="account" />}
            />
            {editNameState ? (
              <View style={styles.NameEdit}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/correct.jpg")}
                    style={styles.correctButton}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/incorrect.png")}
                    style={styles.IncorrectIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.contactEdit}>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/editicon.png")}
                    style={styles.enableEditIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.editTxtandBtn}>
            <TextInput
              style={styles.textInput2}
              mode="outlined"
              label="School"
              editable={editNameState}
              onChangeText={(text) =>
                setMobileNo({ ...mobileNo, mobile: text })
              }
              theme={{
                colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
              }}
              left={<TextInput.Icon name="account" />}
            />
            {editNameState ? (
              <View style={styles.NameEdit}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/correct.jpg")}
                    style={styles.correctButton}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/incorrect.png")}
                    style={styles.IncorrectIcon}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.contactEdit}>
                <TouchableOpacity
                  onPress={() => setEditContactState(!editContactState)}
                >
                  <Image
                    source={require("../../assets/images/editicon.png")}
                    style={styles.enableEditIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.dropLocations}>
            <Text style={styles.confirmTxtBold}>Add pick up location</Text>
            <MapView style={styles.map} />
          </View>
        </View>
        <View style={styles.buttonSet}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.button2Text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddChild;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
  },
  nameView: {
    marginTop: 15,
    display: "flex",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.font,
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: colors.orange,
  },
  profilePicBig: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  enableEditIcon: {
    width: 25,
    height: 25,
    tintColor: colors.orange,
  },
  confirmTxtBold: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  editprofileBtn: {
    alignSelf: "flex-end",
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.orange,
    width: 35,
    height: 35,
    backgroundColor: colors.midBoxWhite,
    borderRadius: 20,
  },
  contactEdit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 50,
  },
  picAndEdit: {
    display: "flex",
    height: parameters.SCREEN_HEIGHT / 5,
    width: (parameters.SCREEN_WIDTH * 1.8) / 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 150,
  },
  editContainer: {
    marginTop: 45,
    display: "flex",
    justifyContent: "center",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    height: 40,
  },
  textInput2: {
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
  textInput: {
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
  editTxtandBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    justifyContent: "space-between",
  },
  editTitle: {
    fontSize: 18,
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
    width: (parameters.SCREEN_WIDTH * 2.4) / 6,
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
    width: (parameters.SCREEN_WIDTH * 2.4) / 6,
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
    position: "absolute",
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    bottom: 40,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
    justifyContent: "space-between",
  },
});
