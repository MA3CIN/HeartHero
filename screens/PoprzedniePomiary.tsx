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
    <Text>
        {route.params?.pomiar.name + "STATYSTYKI:"}
    </Text>
      {route.params?.pomiar.data.map((wynik: any)=>
        <View key={wynik.value} style={styles.pomiaryTile}>
            <View style={styles.innerTile}>
              <Text>{wynik.value}</Text>
            </View>
            <View style={styles.tileTextContainer}>
            <LatoText style={styles.textName}>{wynik.time}</LatoText>
            <LatoText style={styles.textValue}>{wynik.date}</LatoText>
          </View>
        </View>
      )
      }
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  textName: {
    fontSize: 25,
    color: colors.innerTextGrey,
    marginBottom: 10
  },
  textValue: {
    fontSize: 40
  },
  pomiaryTile: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 23,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  innerTile: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 5,
    marginRight: 10
  },
  tileTextContainer: {
    flex: 0.9,
    flexDirection: 'column',
    backgroundColor: 'transparent'  }
});


//34 48