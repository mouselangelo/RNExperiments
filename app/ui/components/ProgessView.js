import PropTypes from "prop-types";
import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as Progress from 'react-native-progress';
import reactMixin from "react-mixin";
import timerMixin from "react-timer-mixin";


const propTypes = {
    duration: PropTypes.number.isRequired,
    interval: PropTypes.number,
    onIntervalElapsed: PropTypes.func,
    onTimeout: PropTypes.func,
};

const defaultProps = {
    interval: 1000
};

class ProgressView extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            remainingTime: this.props.duration,
            previousTime: null,
            timeoutId: null,
            progress: 0
        };
    }

    start() {
        this.setState({
            ...this.state,
            progress: 0,
            startTime: Date.now()
        });
        this.tick()
    }

    tick() {
        const duration = this.props.duration;
        const currentTime = Date.now();
        const elapsedTime = currentTime - (this.state.startTime || currentTime);
        const remainingTime = duration - elapsedTime;
        const isCompleted = remainingTime <= 0;
        var progress = elapsedTime / duration;

        var previousTime = this.state.previousTime || 0;
        const timeSincePreviousInterval = currentTime - previousTime;

        if (timeSincePreviousInterval >= this.props.interval) {
            previousTime = currentTime;
            if (this.props.onIntervalElapsed) {
                this.props.onIntervalElapsed({ remainingTime });
            }
        }

        if (isCompleted) {
            progress = 1
            if (this.props.onTimeout) {
                this.props.onTimeout({ remainingTime: 0 })
            }
        }

        clearTimeout(this.state.timeoutId);

        this.setState({
            timeoutId: isCompleted ? null : this.setTimeout(this.tick, 1 / 60),
            remainingTime,
            previousTime,
            progress
        });
    }

    componentDidMount() {
        this.start()
    }


    render() {
        return (
            <View style={styles.temp}>
                <TouchableWithoutFeedback>
                    <Progress.Circle
                        size={100}
                        borderWidth={0}
                        progress={this.state.progress}
                        color="orange"
                        thickness={4}
                    />
                </TouchableWithoutFeedback>
            </View >
        );

    }
}

const styles = StyleSheet.create({
    temp: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000011"
    }
});

reactMixin(ProgressView.prototype, timerMixin);

ProgressView.propTypes = propTypes;
ProgressView.defaultProps = defaultProps;

export default ProgressView;