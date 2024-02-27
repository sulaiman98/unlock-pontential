import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    StatusBar,
    Pressable
} from "react-native";
import { AntDesign, Foundation } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

// Component Import
import Workouts from "../components/Workouts";
import CircularProgress from "../components/CircularProgress";
import DurrationAndDiffultyLevel from "../components/DurrationAndDiffultyLevel";


function HomeScreen({ navigation }) {
    const handleWorkOutDetails = () => {
        console.log('press')
        navigation.navigate("Workouts", { title: 'DOW' })
    };

    return (

        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.smallText}>Welcome back</Text>
                        <Text style={styles.headerText} >Israel Kollie</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <Image
                            source={require('../assets/user.png')} // Replace with the path to your image
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.dashboard}>
                        <View style={styles.dashboardInfo}>
                            <View style={{ rowGap: 10 }}>
                                <Text style={styles.bigText}>Flexibility</Text>
                                <DurrationAndDiffultyLevel />
                            </View>

                            <CircularProgress />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                        // onPress={}
                        >
                            <Text style={styles.buttonText}>Continue workout</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.bigText}>Today's workouts</Text>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Workouts", { title: 'Stamina' })}
                        >
                            <Workouts Workouts
                                image={require('../assets/workout-1.png')}
                                title='Stamina'
                            >
                                <DurrationAndDiffultyLevel />
                            </Workouts>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Workouts", { title: 'Strength' })}
                        >
                            < Workouts
                                image={require('../assets/workout-2.png')}
                                title='Strength'
                            >
                                <DurrationAndDiffultyLevel />
                            </Workouts>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Workouts", { title: 'DOW' })}
                        >
                            < Workouts
                                image={require('../assets/workout-3.png')}
                                title='DOW'
                            >
                                <DurrationAndDiffultyLevel />
                            </Workouts>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Workouts", { title: 'Flexibility' })}
                        >
                            < Workouts
                                image={require('../assets/workout-5.png')}
                                title='Flexibility'

                            >
                                <DurrationAndDiffultyLevel />
                            </Workouts>
                        </TouchableOpacity>

                        {/* <Pressable
                            style={({ pressed }) => [
                                pressed && styles.buttonPressed
                            ]}
                            onPress={() => navigation.navigate("Workouts", { title: 'Stamina' })}
                        >
                            < Workouts
                                image={require('../assets/workout-2.png')}
                                title='Strength'
                            >
                                <DurrationAndDiffultyLevel />
                            </Workouts>
                        </Pressable> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
        // paddingTop: StatusBar.currentHeight,
    },
    contentContainer: {
        // paddingVertical: 50
        paddingBottom: 20
    },
    header: {
        gap: 5,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    headerText: {
        fontSize: 23,
        fontWeight: "500",
        paddingTop: 5,
        // width: '80%'
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    dashboard: {
        backgroundColor: '#eee',
        // height: 150,
        borderRadius: 10,
        padding: 15,
        marginBottom: 35,
        marginTop: 15
    },
    dashboardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    buttonPressed: {
        backgroundColor: '#eee',
    },

    // User Profile Style
    imageBox: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    // Button Style
    button: {
        backgroundColor: '#011736',
        padding: 13,  // All sides are 10
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 15,
        borderRadius: 15
    },
    buttonText: {
        color: '#eee',
        fontWeight: '500',
        textAlign: 'center',
    },

})
export default HomeScreen;