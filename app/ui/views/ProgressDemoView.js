import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProgessView from "../components/ProgessView";


class ProgressDemoView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProgessView />
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
});

export default ProgressDemoView;