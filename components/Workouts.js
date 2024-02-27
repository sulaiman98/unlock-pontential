import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { Feather, AntDesign, Foundation } from '@expo/vector-icons';

function Workouts({ navigation, image, title, children }) {

    return (
        <>
            <View style={styles.workoutCotianer}>
                <View style={styles.workouts}>
                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.workoutImage}
                            source={image}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={styles.workoutDetails}>
                        <Text style={styles.title}>{title}</Text>

                        {children}
                    </View>
                    <Feather name="chevron-right" size={40} color="#ccc" />
                </View>
            </View>
        </>

    )
};

const styles = StyleSheet.create({
    // Workout Styles 
    workoutCotianer: {
        marginTop: 20,
        // backgroundColor: "#eee"
    },
    imgContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    workoutImage: {
        width: 35,
        height: 35,
        // borderRadius: 40, 
    },
    workouts: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontWeight: "500",
        fontSize: 18,
    },
    workoutDetails: {
        flex: 1,
        rowGap: 7
    },
});

export default Workouts;