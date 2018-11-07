import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import reactMixin from "react-mixin";
import timerMixin from "react-timer-mixin";

class ProgressView extends Component {

    state = {
        progress: 0
    };

    componentDidMount() {
        this.tick()
    }

    tick() {
        if (this.state.progress < 1.0) {
            this.setTimeout(() => {
                this.setState({
                    progress: this.state.progress + 0.005
                })
                this.tick();
            }, 1 / 60);
        }
    }

    render() {
        return (
            <View style={styles.temp}>
                <Progress.Circle
                    size={100}
                    borderWidth={0}
                    progress={this.state.progress}
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

reactMixin(ProgressView.prototype, timerMixin);

export default ProgressView;