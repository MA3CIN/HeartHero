import { ScrollView, StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {colors} from '../colors'
import {Pomiary} from '../mockedData/pomiary' 
import React from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Twoje Pomiary</Text>
      {Pomiary.map((pomiar)=>
        <View key={pomiar.name} style={styles.pomiaryTile}>
          {/* <View style={styles.tileTextContainer}> */}
            <Text style={null}>{pomiar.name}</Text>
            <Text style={null}>{pomiar.value}</Text>
          {/* </View> */}
            <View style={styles.innerTile}>
              <Image source={pomiar.source}
                      style={{ width: 40, height: 40 }}/>
            </View>
        </View>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'lato'
  },
  text: {
    fontFamily: 'lato'
  },
  pomiaryTile: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    width: '100%'
  },
  innerTile: {
    backgroundColor: colors.innerGrey,
    height: 20,
    width: 20
  },
  tileTextContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});
