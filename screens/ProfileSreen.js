import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

function ProfileScreen({ navigation }) {

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }]
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.userProfile}>
                <Image
                    source={require('../assets/user.png')} // Replace with the path to your image
                    style={styles.profileImage}
                    resizeMode="cover"
                />
                <Text style={styles.label}>Israel Kollie</Text>
            </View>

            <View style={styles.profileOption}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate("ProfileDetails")}
                >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={styles.optionLabel}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate("Settings")}
                >
                    <AntDesign name="setting" size={24} color="black" />
                    <Text style={styles.optionLabel}>Settings</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.option}
                    onPress={handleLogout}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={styles.optionLabel}>Logout</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    userProfile: {
        // backgroundColor: '#094FAF',
        alignItems: "center",
        // justifyContent: 'center',
        paddingTop: 30,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '45%'
    },
    label: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileOption: {
        // paddingTop: 50,
        paddingHorizontal: 30,
        gap: 20
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 15,
        gap: 15
    },

    inputContainer: {
        marginBottom: 25,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#eee', // Input border color
        borderBottomWidth: 2,
    },
});

export default ProfileScreen;
