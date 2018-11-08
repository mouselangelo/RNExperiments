import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProgessView from "../components/ProgessView";

const remainingTimeInSeconds = 6;

class ProgressDemoView extends Component {

    state = {
        remainingTime: remainingTimeInSeconds
    }

    onTimeChanged = ({ remainingTime }) => {
        const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
        console.log(remainingTimeInSeconds);
        this.setState({
            remainingTime: remainingTimeInSeconds
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ProgessView
                    duration={remainingTimeInSeconds * 1000}
                    onIntervalElapsed={this.onTimeChanged}
                    onTimeout={this.onTimeChanged}
                />
                <Text style={styles.remainingTimeLabel}>
                    {this.state.remainingTime}
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000218",
        justifyContent: "center",
        alignItems: "center",
    },
    remainingTimeLabel: {
        margin: 20,
        color: "#fff",
        fontSize: 72,
        fontWeight: "100",
    }
});

export default ProgressDemoView;