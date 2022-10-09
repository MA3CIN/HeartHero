import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, TextProps } from './Themed';

export function ScreenWrapper(props: TextProps) {
    const route = useRoute();
    return <ScrollView contentContainerStyle={{
        paddingTop: route.name == "TwojDzienScreen" ? 20 : 35,
        paddingBottom: 25,
    }} {...props} style={[props.style, styles.container]} />;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        backgroundColor: "white",
        flexGrow: 1
    },
});

export function ScreenViewWrapper(props: TextProps) {
    const route = useRoute();
    return <View  {...props} style={[props.style, styles.container, { paddingVertical: 30 }]} />;
}