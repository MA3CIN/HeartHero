import { ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {colors} from '../colors'
import React from 'react';
import { LatoText } from '../components/StyledText';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function PoprzedniePomiaryScreen({ navigation, route }: RootTabScreenProps<'PoprzedniePomiaryScreen'>) {
  
    return (
    <ScreenWrapper>
      {route.params?.pomiar.data.map((wynik: any)=>
        <View key={wynik.value + wynik.date} style={styles.pomiaryTile}>
            <View style={styles.valueContainer}>
              <LatoText style={styles.measureValue}>{wynik.value}</LatoText>
            </View>
            <View style={styles.tileTextContainer}>
            <LatoText style={styles.dateOfMeasure}>{wynik.date}</LatoText>
            <LatoText style={styles.dateOfMeasure}>{wynik.time}</LatoText>
          </View>
        </View>
      )
      }
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  measureValue: {
    fontSize: 48,
    color: colors.black  },
  dateOfMeasure: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "right"
  },
  pomiaryTile: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 23,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  valueContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

},
  tileTextContainer: {
    flex: 0.9,
    flexDirection: 'column',
    backgroundColor: 'transparent'  }
});
