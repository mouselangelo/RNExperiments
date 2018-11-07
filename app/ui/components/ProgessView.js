import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class ProgressView extends Component {
    render() {
        return (
            <View style={styles.temp} />
        );

    }
}

const styles = StyleSheet.create({
    temp: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "orange"
    }
});

export default ProgressView;