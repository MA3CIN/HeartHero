import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, TextProps } from './Themed';

export function ScreenWrapper(props: TextProps) {
    return <ScrollView contentContainerStyle={{
        paddingTop: 35,
        paddingBottom: 25,
    }} {...props} style={[props.style, styles.container]} />;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        backgroundColor: "white"
    },
});