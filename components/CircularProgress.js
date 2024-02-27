import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function CircularProgress() {
    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={8}
                    fill={80}
                    tintColor="#011736"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#eee"
                    children={(fill) => (
                        <View style={styles.progressContent}>
                            <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 12
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressContent: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
    progressText: {
        fontSize: 16,
        color: '#000',
    },
});

export default CircularProgress;