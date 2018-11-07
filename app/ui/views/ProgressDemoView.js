import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


class ProgressDemoView extends Component {
    render() {
        return (
            <View style={styles.container} />
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000218"
    }
});

export default ProgressDemoView;