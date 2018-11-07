import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

class ProgressView extends Component {
    render() {
        return (
            <View style={styles.temp}>
                <Progress.Circle
                    size={100}
                    borderWidth={0}
                    progress={0.3}
                    color="orange"
                    thickness={4}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    temp: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ProgressView;