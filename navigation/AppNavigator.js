import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AntDesign, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Import your existing screen components here
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileSreen';
import WorkoutDetailsScreen from '../screens/WorkOutDetailsScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import SettingScreen from '../screens/SettingScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="SignIn" headerMode="none">
                <AuthStack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="MainTabs"
                    component={MainTabs}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 100,
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => <AntDesign name="home" size={35} color="#ccc" />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => <AntDesign name="user" size={35} color="#ccc" />,
                    headerShown: false,
                    animation: 'none',
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="HomeStack"
            component={HomeScreen}
            options={{
                title: 'Home Screen',
                animation: 'none',
                headerShown: false,
            }}
        />
        <HomeStack.Screen
            name='Workouts'
            component={WorkoutDetailsScreen}
            options={({ route }) => ({
                title: route.params?.title || 'Details',
                animation: 'none',
                headerBackTitleVisible: false,
                // headerShown: false,
            })}
        />

    </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                animation: 'none',
                headerStyle: {
                    // backgroundColor: '#eee',
                },
            }}
        />
        <ProfileStack.Screen
            name="ProfileDetails"
            component={ProfileDetailsScreen}
            options={{
                animation: 'none',
                title: "User Info",
                headerBackTitleVisible: false,
                headerStyle: {
                    // backgroundColor: '#eee',

                },
            }}
        />
        <ProfileStack.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                animation: 'none',
                headerBackTitleVisible: false,
                headerStyle: {
                    // backgroundColor: '#eee',
                },
            }}
        />
    </ProfileStack.Navigator>
);

export default AppNavigator;
