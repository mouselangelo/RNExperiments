import React, { Component } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import * as Progress from 'react-native-progress';

class ProgressWrapper extends Component {
    render() {
        return (
            <Progress.Circle
                size={100}
                borderWidth={0}
                progress={this.props.progress}
                color="orange"
                thickness={4} />
        );
    }
}

const AnimatedCirclularProgress = Animated.createAnimatedComponent(ProgressWrapper);


class AnimatedProgressView extends Component {

    state = {
        progress: new Animated.Value(0)
    };

    componentDidMount() {
        this.animate();
    }

    animate() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: this.props.duration,
            easing: Easing.linear,
        }).start(() => console.log('done...'));
    }

    render() {
        return (
            <View style={styles.temp}>
                <AnimatedCirclularProgress
                    progress={this.state.progress}
                />
            </View >
        );
    }
};

const styles = StyleSheet.create({
    temp: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000011"
    }
});

export default AnimatedProgressView;