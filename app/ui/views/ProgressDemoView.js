import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Easing } from 'react-native';
import slowlog from "react-native-slowlog";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgessView from "../components/ProgessView";
import AnimatedProgressView from "../components/AnimatedProgressView";

const remainingTimeInSeconds = 6;

class ProgressDemoView extends Component {

    constructor(props) {
        super(props)
        slowlog(this, /.*/)
    }

    state = {
        start: false,
        componentId: 0,
        remainingTime: remainingTimeInSeconds
    }

    onTimeChanged = ({ remainingTime }) => {
        const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
        console.log(remainingTimeInSeconds);
        this.setState({
            remainingTime: remainingTimeInSeconds
        });
    };

    onPress = () => {
        const { componentId } = this.state;
        this.setState({
            start: true,
            componentId: componentId + 1
        });
    }

    renderView() {
        const { componentId } = this.state;

        const whichComponent = componentId % 3;

        const components = [
            "AnimatedCircularProgress from library",
            "AnimatedProgressView",
            "ProgressView"];

        console.log("components: ", whichComponent, components[whichComponent]);

        switch (whichComponent) {
            case 0:
                {
                    return (<AnimatedCircularProgress
                        style={{ margin: 20 }}
                        size={100}
                        width={4}
                        fill={100}
                        tintColor="orange"
                        duration={6000}
                        rotation={0}
                        easing={Easing.linear}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#00000000" />);
                }
                break;
            case 1: {
                return (<AnimatedProgressView duration={6000} />);
            }
                break;
            default: {
                return (<ProgessView
                    duration={remainingTimeInSeconds * 1000}
                    onTimeout={this.onTimeChanged}
                />);
            }

        }
    }

    render() {
        return (
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={this.onPress}
            >
                <View style={styles.container}>
                    {this.state.start && this.renderView()}
                </View>
            </TouchableWithoutFeedback>
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