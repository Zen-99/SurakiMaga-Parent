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

import { Icon } from "react-native-elements";
import { colors, parameters } from "../globals/styles";
import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [formError, setFormError] = useState(null);
  const [mobileNo, setMobileNo] = useState({
    mobile: "",
    otp: "",
    otpError: "",
  });
  const [editNameState, setEditNameState] = useState(false);
  const [editContactState, setEditContactState] = useState(false);
  const [pickedImage, setPickedImage] = useState("");
  const [contactError, setContactError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [msgVisible, setMsgVisible] = useState(false);
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const openPopUp = () => {
    setModalVisible(true);
  };
  const [fetchData, setFetchData] = useState({
    image: "",
  });
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#4c69a5" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <View style={styles.nameView}>
          <Text style={styles.title}>Edit Profile</Text>
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
              label="Contact No"
              value={mobileNo.mobile}
              editable={editContactState}
              onChangeText={(text) =>
                setMobileNo({ ...mobileNo, mobile: text })
              }
              theme={{
                colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
              }}
              left={<TextInput.Icon name="account" />}
            />
            {editContactState ? (
              <View style={styles.contactEdit}>
                <TouchableOpacity onPress={changeMobileNo}>
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
              label="Email"
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
        </View>
        <Text style={styles.passwordTitle}>Change Password</Text>
        <View style={styles.changePasswordContainer}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Enter current password"
            value={form.confirmPassword}
            secureTextEntry
            theme={{
              colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
            }}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <View style={styles.changePasswordContainer}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Enter New Password"
            value={form.confirmPassword}
            secureTextEntry
            theme={{
              colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
            }}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <View style={styles.changePasswordContainer}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Confirm New Password"
            value={form.confirmPassword}
            secureTextEntry
            theme={{
              colors: { primary: "#FF8C01", underlineColor: "#FF8C01" },
            }}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProfile;

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
    height: parameters.SCREEN_HEIGHT / 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.font,
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  profilePicBig: {
    width: 180,
    height: 180,
    borderRadius: 100,
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

  editIcon: {
    width: 20,
    height: 20,
    tintColor: colors.orange,
  },
  IncorrectIcon: {
    width: 30,
    height: 30,
  },
  correctButton: {
    width: 35,
    height: 35,
  },
  enableEditIcon: {
    width: 25,
    height: 25,
    tintColor: colors.orange,
  },
  picAndEdit: {
    display: "flex",
    height: parameters.SCREEN_HEIGHT / 5,
    width: (parameters.SCREEN_WIDTH * 1.8) / 4,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 50,
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
  passwordTitle: {
    color: colors.font,
    fontSize: 25,
    fontFamily: "sans-serif-medium",
    marginTop: 100,
    marginBottom: 20,
  },
  contactEdit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 50,
  },
  changePasswordContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    height: 50,
    width: (parameters.SCREEN_WIDTH * 3) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
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
    display: "flex",
    borderRadius: 5,
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 3.2) / 4,
    height: (parameters.SCREEN_HEIGHT * 4) / 12,
    backgroundColor: colors.midBoxWhite,
    // shadowColor: '#171717',
    // shadowOffset: {width: -3, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  alert3: {
    flex: 1,
    backgroundColor: "#00000090",
    alignItems: "center",
    justifyContent: "center",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT,

    // backgroundColor:'red',
  },
  alertbox3: {
    display: "flex",
    borderRadius: 5,
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 3.2) / 4,
    height: (parameters.SCREEN_HEIGHT * 4) / 10,
    backgroundColor: colors.midBoxWhite,
    // shadowColor: '#171717',
    // shadowOffset: {width: -3, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  alertHeader: {
    display: "flex",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  alertBody: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    height: "60%",
    paddingBottom: 10,
    // backgroundColor: "yellow",
  },
  alertBody3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "55%",
    paddingBottom: 10,
    // backgroundColor: "yellow",
  },
  alertTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  alertbodyTxt: {
    fontSize: 18,
  },
  confirmbtn: {
    height: 40,
    width: "80%",
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
  confirmbtnText3: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.orange,
    fontSize: 20,
    marginTop: -2,
  },
  noticeMsg: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    height: 30,
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeContactMsg: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    height: 30,
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeOtpMsg: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    height: 20,
    width: (parameters.SCREEN_WIDTH * 5) / 6,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeMsgText: {
    color: "red",
    fontSize: 15,
  },
  alert2: {
    flex: 1,
    backgroundColor: "#00000090",
    alignItems: "center",
    justifyContent: "center",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT,

    // backgroundColor:'red',
  },
  alertbox2: {
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
  alertTitle2: {
    fontSize: 20,
  },
  confirmbtn2: {
    height: 40,
    width: parameters.SCREEN_WIDTH / 4,
    backgroundColor: colors.orange,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  confirmbtnText2: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 20,
    marginTop: -2,
  },
});
