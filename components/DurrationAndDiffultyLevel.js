import { View, Text, StyleSheet } from "react-native";
import { Feather, AntDesign, Foundation } from '@expo/vector-icons';

View
function DurrationAndDiffultyLevel() {
    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <AntDesign name="clockcircle" size={15} color="#ccc" />
                <Text>15 minutes</Text>
            </View>
            <View style={styles.iconStyle}>
                <Foundation name="crown" size={23} color="#ccc" />
                <Text>Beginner</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 15
    },
    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center', columnGap: 7
    }
});

export default DurrationAndDiffultyLevel
