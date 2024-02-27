import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = function ({ navigation }) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleSignIn = () => {
        navigation.navigate("MainTabs")
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                SafeAreaView showsVerticalScrollIndicator={false}
                style={{ ...styles.container, paddingHorizontal: 35, }} // paddingTop: 130,
            >
                <Text style={styles.signInText}>Sign In</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={data.email}
                        onChangeText={(val) => setData({ ...data, email: val })}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={data.password}
                        onChangeText={(val) => setData({ ...data, password: val })}
                    />

                    <TouchableOpacity style={styles.addButton}
                        onPress={handleSignIn}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#011736',
        marginBottom: 20,
        alignSelf: "center"

    },
    form: {
        justifyContent: "space-between",
        alignContent: "center"
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#011736', // Input border color
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 10,
        color: '#eee'
    },

    option: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    optionText: {
        color: '#fff',
    },

    addButton: {
        backgroundColor: '#011736',
        padding: 13,  // All sides are 10
        marginTop: 30,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 5
    },
    buttonText: {
        color: '#eee',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default SignInScreen;

