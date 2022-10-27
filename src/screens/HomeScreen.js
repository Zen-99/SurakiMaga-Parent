// Import React and Component
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SelectDropdown from "react-native-select-dropdown";
import React, { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { Icon, SearchBar } from "react-native-elements";
import { Searchbar } from "react-native-paper";
import Header from "../context/Header";
import { colors, parameters } from "../globals/styles";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const [searchAvailable, setSearchAvailable] = useState(false);
  const isFocused = useIsFocused();
  const [adDetails, setAdDetails] = useState(null);
  useEffect(() => {
    apiClient
      .getToken()
      .then((data) => data)
      .then((value) => {
        if (value == "") {
          console.log(value);
          navigation.navigate("Login");
        } else {
          apiClient.setToken(value);
        }
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    async function getAdvertisements() {
      const { data, error } = await apiClient.getAdvertisements();
      if (data.result != undefined) {
        setAdDetails(data.result);
      }
    }
    getAdvertisements();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameView}>
        <Text style={styles.title}>Advertisements</Text>
      </View>
      {searchAvailable ? (
        <View style={styles.nameBox2}>
          <View style={styles.searchComponent}>
            <Searchbar placeholder="Search" style={styles.textInput} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.placesComponent}>
            <GooglePlacesAutocomplete
              placeholder="Where are your children studying at?"
              query={{
                key: "AIzaSyDrqTMpp62uuZvHpJDV8XHP4yZjeoCbR-4",
                language: "en",
              }}
            />
          </View>
          <View style={styles.typeComponent}>
            <Text style={styles.dropdowmtext}>Vehicle Category</Text>
            <View style={styles.dropdown}>
              <SelectDropdown data={countries} />
            </View>
          </View>
          <View style={styles.dropupBtnContainer}>
            <TouchableOpacity
              onPress={() => setSearchAvailable(!searchAvailable)}
            >
              <Image
                source={require("../../assets/images/arrowup.png")}
                style={styles.arrowup}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.nameBox2Drop}
          onPress={() => setSearchAvailable(!searchAvailable)}
        >
          <Text style={styles.nameBox2DropTxt}>Search</Text>
          <Image
            source={require("../../assets/images/searchicon.png")}
            style={styles.arrowup}
          />
        </TouchableOpacity>
      )}

      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        {adDetails != null
          ? adDetails.map((data) => {
              return (
                <View style={styles.contentBox} key={data.id}>
                  <View style={styles.leftSide}>
                    {data.frontimage ? (
                      <Image
                        source={{ uri: data.frontimage }}
                        style={styles.contentBoxImage}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/Picture1.png")}
                        style={styles.contentBoxImage}
                      />
                    )}
                  </View>
                  <View style={styles.rightSide}>
                    <View style={styles.rightUpper}>
                      <View style={styles.contentBoxTitle}>
                        <Text style={styles.contentBoxTitleText}>
                          {data.title}
                        </Text>
                      </View>
                      <View style={styles.ratings}>
                        <View style={styles.ratingsBox}>
                          <Text style={styles.ratingsText}>8.6</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rightLower}>
                      <View style={styles.rightLowerLeft}>
                        <Text style={styles.locationText}>
                          {data.startlocation}
                        </Text>
                        <Text style={styles.typeText}>{data.vehicletype}</Text>
                        <View style={styles.seatsBox}>
                          <Text style={styles.seatsBoxText}>
                            {data.seats} Seats
                          </Text>
                        </View>
                        <View style={styles.seatsAndViewMore}>
                          <TouchableOpacity
                            style={styles.ViewMoreBtn}
                            onPress={() =>
                              navigation.navigate("MoreDetails", {
                                details: data,
                              })
                            }
                          >
                            <Text style={styles.ViewMoreBtnTxt}>View more</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
  },
  scrollview: {
    display: "flex",
    marginBottom: 20,
  },
  nameBox2: {
    display: "flex",
    backgroundColor: colors.orange,
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 3,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 10,
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
  contentBox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.midBoxWhite,
    marginTop: 50,
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 4,
    alignItems: "center",
    marginTop: 20,
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
  searchComponent: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    width: (parameters.SCREEN_WIDTH * 3.5) / 6,
    height: 40,
    backgroundColor: "white",
  },
  button: {
    height: 40,
    width: (parameters.SCREEN_WIDTH * 1.5) / 6,
    backgroundColor: colors.midBoxWhite,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.orange,
    fontSize: 20,
    marginTop: -2,
  },
  placesComponent: {
    display: "flex",
    flexDirection: "row",
    height: "30%",
    width: "95%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typeComponent: {
    display: "flex",
    flexDirection: "row",
    height: "30%",
    width: "80%",
    alignItems: "center",
    // backgroundColor: "black",
  },
  dropdown: {
    display: "flex",
    // backgroundColor: "black",
    width: 50,
    height: 40,
  },
  dropdowmtext: {
    color: "white",
    fontWeight: "bold",
    marginRight: 12,
  },
  nameView: {
    marginTop: 120,
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
  dropupBtnContainer: {
    display: "flex",
    width: "90%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 30,
    // backgroundColor: "black",
  },
  arrowup: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  nameBox2Drop: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 100,
    backgroundColor: colors.orange,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  nameBox2DropTxt: {
    color: "white",
    fontSize: 20,
  },
  leftSide: {
    width: "40%",
    height: "100%",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    width: "60%",
    height: "100%",
    // backgroundColor: "cyan",
  },
  contentBoxImage: {
    width: "60%",
    height: "60%",
  },
  rightUpper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "40%",
  },
  rightLower: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "60%",
  },
  contentBoxTitle: {
    display: "flex",
    width: "70%",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  contentBoxTitleText: {
    fontSize: 18,
    fontWeight: "500",
  },
  ratings: {
    display: "flex",
    width: "30%",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  ratingsBox: {
    width: "70%",
    height: "60%",
    display: "flex",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingsText: {
    fontSize: 15,
    color: colors.orange,
  },
  rightLowerLeft: {
    display: "flex",
    // flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    // backgroundColor: "yellow",
  },
  seatsBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#03c04a",
  },
  seatsBoxText: {
    color: "white",
  },
  seatsAndViewMore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    paddingBottom: 5,
    width: "100%",
  },
  ViewMoreBtn: {
    width: 70,
    height: 40,
    backgroundColor: colors.orange,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
  },
  ViewMoreBtnTxt: {
    color: "white",
  },
});
