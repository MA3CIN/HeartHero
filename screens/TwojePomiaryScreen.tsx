import { StyleSheet, Image, Pressable } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { colors } from '../colors'
import { Pomiary } from '../mockedData/pomiary'
import React from 'react';
import { LatoText } from '../components/StyledText';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TwojePomiaryScreen'>) {
  const OnPressFunction = (pomiar: any) => {
    navigation.navigate('PoprzedniePomiaryScreen', { pomiar });
  }

  return (
    <ScreenWrapper>
      {Pomiary.map((pomiar) =>
        <Pressable onPress={() => OnPressFunction(pomiar)}>
          <View key={pomiar.name} style={styles.pomiaryTile}>
            <View style={styles.tileTextContainer}>
              <LatoText style={styles.textName}>{pomiar.name}</LatoText>
              <LatoText style={styles.textValue}>{pomiar.value}</LatoText>
            </View>
            <View style={styles.innerTile}>
              <Image source={pomiar.source}
                style={{ width: 70, height: 70 }} />
            </View>
          </View>
        </Pressable>
      )}
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
    backgroundColor: 'transparent'
  }
});