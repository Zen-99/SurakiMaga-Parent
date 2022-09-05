import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect, createRef } from 'react';
//import Loader from './Components/Loader';
import apiClient from '../Services/apiClient';
import { TextInput } from 'react-native-paper';
import { colors, parameters } from '../globals/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Signup({ route, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [phone, setPhone] = useState('');
    const [showEmailError, setShowEmailError] = useState('');
    const [showPasswordError, setShowPasswordError] = useState('');
    const [showCpasswordError, setShowCpasswordError] = useState('');
    const [showFirstnameError, setShowFirstnameError] = useState('');
    const [showPhoneError, setShowPhoneError] = useState('');

    const emailInputRef = createRef();
    const passwordInputRef = createRef();
    const cpasswordInputRef = createRef();
    const firstnameInputRef = createRef();
    const zipInputRef = createRef();
    const phoneInputRef = createRef();
    const scrollViewRef = createRef();


    /*const constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cpassword: '',
            firstname: '',
            zip: '',
            phone: '',
            showEmailError: "",
            showPasswordError: "",
            showCpasswordError: "",
            showFirstnameError: "",
            showZipError: "",
            showPhoneError: "",
            loading: false,
        }
    }*/
   

    /*const inputs = () => {
        return [
            this.emailInputRef,
            this.passwordInputRef,
            this.cpasswordInputRef,
            this.firstnameInputRef,
            this.zipInputRef,
            this.phoneInputRef,
        ];
    };

    const editNextInput = () => {
        console.log("editNextInput")
        const activeIndex = this.getActiveInputIndex();
        if (activeIndex === -1) {
            return;
        }

        const nextIndex = activeIndex + 1;
        if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
            this.setFocus(this.inputs()[nextIndex], true);
        } else {
            this.finishEditing();
        }
    }

    const onInputFocus = () => {
        this.setState({
            activeIndex: this.getActiveInputIndex(),
        });
    }

    const onChangeInputHandler = (name, value) => {
        this.setState({
            [name]: value,
        });
    }

    const getActiveInputIndex = () => {
        const activeIndex = this.inputs().findIndex((input) => {
            if (input.current == null) {
                return false;
            }
            console.log("input: ", input);
            return input.current.isFocused();
        });
        console.log("activeIndex: ", activeIndex);
        return activeIndex;
    }

    const finishEditing = () => {
        const activeIndex = this.getActiveInputIndex();
        if (activeIndex === -1) {
            return;
        }
        this.setFocus(this.inputs()[activeIndex], false);
    }

    const setFocus(textInputRef, shouldFocus) {
        if (shouldFocus) {
            setTimeout(() => {
                textInputRef.current.focus();
            }, 100);
        } else {
            textInputRef.current.blur();
        }
    }*/


    const [errors, setErrors] = useState({})
    const [formError, setFormError] = useState(null);
   /*
        const [form, setForm] = useState({
         id: route.params.id,
          fullName: route.params.fullName,
          userName: "",
          password: "",

        })
   */
    const [modalVisible, setModalVisible] = useState(false);
    const handleOnSubmit = async () => {
       // setErrors((e) => ({ ...e, form: null }))
        this.setState({ loading: true })
        let errorFlag = false;

        // input validation
        if (!firstname) {
            alert('Please fill Name');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!phone) {
            alert('Please fill Phone number');
            return;
        }

        if (this.state.password.length == 0) {
            errorFlag = true;
            this.setState({ showPasswordError: "Password is required feild" });
        } else if (this.state.password.length < 8 || this.state.password.length > 20) {
            errorFlag = true;
            this.setState({ showPasswordError: "Password should be min 8 char and max 20 char" });
        } else if (this.state.password !== this.state.cpassword) {
            errorFlag = true;
            this.setState({ showPasswordError: "Passwoad and confirm password should be same." });
        }

        if (this.state.cpassword.length == 0) {
            errorFlag = true;
            this.setState({ showCpasswordError: "Confirm Password is required feild" });
        } else if (this.state.cpassword.length < 8 || this.state.cpassword.length > 20) {
            errorFlag = true;
            this.setState({ showCpasswordError: "Password should be min 8 char and max 20 char" });
        } 

        if (errorFlag) {
            console.log("errorFlag");

            /** Call Your API */
        } else {
           // this.setState({ loading: false });
            navigation.navigate("Verification");
        }
       // navigation.navigate("Verification");
    }
    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: '#4c69a5' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
            <View style={styles.homeLink}>
                <Text style={styles.homeText}>Home</Text>
            </View>
            <View style={styles.topic}>
                {/* <Image source={require('../../assets/images/logo.jpg')} style={styles.logo} />*/}
                <Text style={styles.text2}>Let's</Text>
                <Text style={styles.text2}>get started!</Text>
                <Text style={styles.text1}>Sign up</Text>
            </View>

            <ScrollView style={styles.scrollview}>
                <Text style={styles.text3}>First Name</Text>
                <TextInput style={styles.textInput}
                    mode='outlined'
                    label={"First Name"}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        firstnameInputRef.current && firstnameInputRef.current.focus()}
                    onChangeText={(firstname) => setFirstname(firstname)}
                    ref={firstnameInputRef}
                    theme={{ colors: { primary: '#FF8C01', underlineColor: '#FF8C01', } }}
                    left={<TextInput.Icon name="account" />}
                />

                <Text style={styles.text3}>Email</Text>
                <TextInput style={styles.textInput}
                    mode='outlined'
                    label="Email"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        emailInputRef.current && emailInputRef.current.focus()}
                    onChangeText={(email) => setEmail(email)}
                    ref={emailInputRef}
                    theme={{ colors: { primary: '#FF8C01', underlineColor: '#FF8C01', } }}
                    left={<TextInput.Icon name="account" />}
                />

                <Text style={styles.text3}>Phone </Text>
                <TextInput style={styles.textInput}
                    mode='outlined'
                    label="Phone"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        phoneInputRef.current && phoneInputRef.current.focus()}
                    onChangeText={(phone) => setPhone(phone)}
                    ref={phoneInputRef}
                    theme={{ colors: { primary: '#FF8C01', underlineColor: '#FF8C01', } }}
                    left={<TextInput.Icon name="account" />}
                />

                <Text style={styles.text3}>Password</Text>
                <TextInput style={styles.textInput}
                    mode='outlined'
                    label="Password"
                    secureTextEntry={true}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        passwordInputRef.current && passwordInputRef.current.focus()}
                    onChangeText={(password) => setPassword(password)}
                    ref={passwordInputRef}
                    theme={{ colors: { primary: '#FF8C01', underlineColor: '#FF8C01', } }}
                    left={<TextInput.Icon name="lock" />}
                    right={<TextInput.Icon name="eye" />}
                />

                <Text style={styles.text3}>Confirm Password</Text>
                <TextInput style={styles.textInput}
                    mode='outlined'
                    label="Confirm Password"
                    secureTextEntry={true}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        cpasswordInputRef.current && cpasswordInputRef.current.focus()}
                    onChangeText={(cpassword) => setCpassword(cpassword)}
                    ref={cpasswordInputRef}
                    theme={{ colors: { primary: '#FF8C01', underlineColor: '#FF8C01', } }}
                    left={<TextInput.Icon name="lock" />}
                    right={<TextInput.Icon name="eye" />}
                />


                <View style={styles.noticeMsg}>
                    <Text style={styles.noticeMsgText}>{formError}</Text>
                </View>
                <View style={styles.buttonSet}>
                    <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity><Text style={styles.footerText}>Terms & conditions</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.footerText}>Contact us</Text></TouchableOpacity>
            </View>
           
        </KeyboardAwareScrollView>
    )
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
        alignItems: 'center'
    },
    alert: {
        flex: 1,
        backgroundColor: '#00000090',
        alignItems: 'center',
        justifyContent: 'center',
        width: parameters.SCREEN_WIDTH,
        height: parameters.SCREEN_HEIGHT,

        // backgroundColor:'red',

    },
    alertbox: {
        paddingTop: 5,
        display: 'flex',
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: parameters.SCREEN_WIDTH * 3 / 4,
        height: parameters.SCREEN_HEIGHT * 4 / 20,
        backgroundColor: colors.midBoxWhite,
        // shadowColor: '#171717',
        // shadowOffset: {width: -3, height: 4},
        // shadowOpacity: 1,
        // shadowRadius: 3,
    },
    alertTitle: {
        fontSize: 20
    },
    confirmbtn: {
        height: 40,
        width: parameters.SCREEN_WIDTH / 4,
        backgroundColor: colors.orange,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    confirmbtnText: {
        alignSelf: "center",
        justifyContent: "center",
        color: colors.white,
        fontSize: 20,
        marginTop: -2
    },
    homeLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        height: parameters.SCREEN_HEIGHT / 20,
        width: parameters.SCREEN_WIDTH,
        backgroundColor: colors.white
    },
    homeText: {
        fontSize: 15,
    },
    topic: {
        backgroundColor: colors.orange,
        paddingTop: parameters.SCREEN_HEIGHT / 35,
       // marginTop: parameters.SCREEN_HEIGHT / 250,
        width: parameters.SCREEN_WIDTH  ,
        height: parameters.SCREEN_HEIGHT * 2 / 8,
        borderRadius: 20,
        alignSelf: "center",
        //paddingBottom: 10,
        paddingLeft: parameters.SCREEN_WIDTH / 15,
        alignSelf: 'flex-start',
    },
    body: {
        display: 'flex',
        alignSelf: 'flex-start',
        width: parameters.SCREEN_WIDTH * 5 / 6,
        marginTop: parameters.SCREEN_HEIGHT / 100,
        height: parameters.SCREEN_HEIGHT * 0.8 / 5,
        paddingLeft: parameters.SCREEN_WIDTH / 20,
        alignItems: "flex-start",
        justifyContent: "flex-start"
        // justifyContent:"center",

        // borderBottomRightRadius:80,
    },
    textInput: {
        width: parameters.SCREEN_WIDTH * 5 / 6,
        height: 40,
        marginBottom: 10,
        backgroundColor: 'white',

    },
    scrollview: {
        backgroundColor: colors.white,
        padding: 30,
        paddingBottom: 50
    },
    text1: {
        color: colors.black,
        fontSize: 50,
        fontFamily: "sans-serif-medium",
        fontWeight: 'bold',
        paddingBottom: 10
    },

    text2: {
        color: colors.black,
        fontFamily: "sans-serif-medium",
        fontSize: 22,
        marginBottom: 5
    },
    text3: {
        color: colors.black,
        fontFamily: "sans-serif-medium",
        fontSize: 15,
        marginBottom: 2
    },
    button: {
        height: 50,
        width: parameters.SCREEN_WIDTH * 4 / 6,
        backgroundColor: colors.orange,
        borderRadius: 20,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20

    },
    logo: {
        width: parameters.SCREEN_WIDTH * 2 / 8,
        height: parameters.SCREEN_HEIGHT * 1 / 8,
        marginBottom: parameters.SCREEN_WIDTH * 1 / 10
    },
    buttonText: {
        alignSelf: "center",
        justifyContent: "center",
        color: colors.white,
        fontSize: 20,
        marginTop: -2

    },
    footer: {
        display: "flex",
        flexDirection: 'row',
        width: parameters.SCREEN_WIDTH,
        height: parameters.SCREEN_HEIGHT / 20,
        backgroundColor: colors.grey,
        // alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between'
    },
    footerText: {
        marginTop: 20,
        fontSize: 16,
        color: 'white'
    },
    textLink: {
        marginTop: 15,
        opacity: 0.4
    },
    buttonSet: {
        display: 'flex',
        alignSelf: 'center',
        width: parameters.SCREEN_WIDTH * 5 / 6,
        paddingLeft: parameters.SCREEN_WIDTH / 20,
       // paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: "pink"
    },
    noticeMsg: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        width: parameters.SCREEN_WIDTH * 5 / 6,
        alignItems: 'center',
    },
    noticeMsgText: {
        color: 'red',
        fontSize: 15,

    }

})