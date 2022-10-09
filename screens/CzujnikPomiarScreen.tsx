import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors } from '../colors';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function CzujnikPomiarScreen({ navigation }: any) {
    const [selectedAction, setSelectedAction] = useState(0);
    const [clicked, setClicked] = useState(false);
    const info = "Kliknik tutaj żeby wpisać pomiar ręcznie"
    const data = {
        title: "WAGI",
        instructions: ["Stań na wadze", "Dokonuję pomiar", "Zczytuję pomiar", "Gotowe"],
        error: "Nie mamy połączenia z wagą"
    };
    return (
        <ScreenWrapper>
            <View style={{ alignItems: 'center', marginTop: 80 }}>
                <Text style={{ fontFamily: 'lato', marginBottom: 20, fontSize: 20 }}>Czas na pomiar</Text>
                <Text style={{ fontFamily: 'lato-bold', marginBottom: 60, fontSize: 38 }}>{data.title}</Text>
                <Pressable onPress={() => setClicked(true)} style={{ width: 250, height: 250, marginBottom: 60 }}>
                    <View style={{ width: "100%", height: "100%", borderRadius: 150, backgroundColor: colors.innerGrey, position: 'absolute' }} />
                    <Text style={{ alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 30, width: '70%', textAlign: 'center', color: 'grey', fontFamily: 'lato-bold' }}>{clicked ? data.error : data.instructions[selectedAction]}</Text>
                </Pressable>
                <Text style={{ fontFamily: 'lato', marginBottom: 10, fontSize: 18 }}>{`Nie łączy Cię z wagą?`}</Text>
                <Pressable onPress={() => navigation.navigate("RecznyPomiar")}><Text style={{ width: 180, alignSelf: 'center', textAlign: 'center', fontFamily: 'lato-bold', fontSize: 18 }}>{`Kliknij tutaj żeby wpisać pomiar ręcznie`}</Text></Pressable>
            </View>
        </ScreenWrapper>
    );
}