import { StyleSheet, Image, Dimensions, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { colors } from '../colors'
import React from 'react';
import { LatoText } from '../components/StyledText';
import { ScreenWrapper } from '../components/ScreenWrapper';

export default function ReczneWpisanieScreen({ navigation }: any) {
    const onConfirmPressed = ()=>{
        return null
    }
    const onChangeText = () => {
        console.log(text)
        setText
        console.log(text)
    }
    const [text, setText] = useState('')

  return (
    <ScreenWrapper>
        <View style={styles.mainWrapper}>
          <View style={styles.container}>
          <LatoText style={styles.textName}>Wprowadź pomiar tętna</LatoText>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={text} />            
            </View>
            <Pressable onPress={() => onConfirmPressed()}>
                <LatoText style={null}>Potwierdzam</LatoText>
            </Pressable>
          </View>
        </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 400
  },
  container: {
    // height: Dimensions.get('window').height / 2,
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textName: {
    fontSize: 25,
    color: colors.innerTextGrey,
    marginBottom: 10
  },
  inputWrapper: {

  },
  textValue: {
    fontSize: 40
  },
  textInput: {
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
});