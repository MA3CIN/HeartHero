import { StyleSheet, Image, Dimensions, TextInput, Pressable, Text } from 'react-native';
import { useContext, useState } from 'react';
import { View } from '../components/Themed';
import { colors } from '../colors'
import React from 'react';
import { LatoText } from '../components/StyledText';
import { ScreenViewWrapper } from '../components/ScreenWrapper';
import { PomiaryContext, usePomiar } from '../context';

export default function ReczneWpisanieScreen({ navigation }: any) {
  const now = new Date();
  const [text, setText] = useState('')
  const { dispatch } = usePomiar();

  const onConfirmPressed = () => {
    if (text.length !== 0) {
      dispatch({ type: 'add', name: "Waga", pomiar: { "value": parseFloat(text), "date": "09/10/2022", "time": now.getHours() + ':' + (now.getMinutes().toString().length === 1 ? "0" : "") + now.getMinutes() } })
      navigation.pop(2);
    }
  }


  return (
    <ScreenViewWrapper style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={styles.mainWrapper}>
        <View style={styles.container}>
          <LatoText style={styles.textName}>Wprowadź pomiar wagi</LatoText>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={setText}
              value={text} />
          </View>
          <Pressable onPress={() => onConfirmPressed()} style={styles.pressableWrapper}>
            <LatoText style={styles.confirmText}>Potwierdzam</LatoText>
          </Pressable>
        </View>
      </View>
    </ScreenViewWrapper>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    fontSize: 40,
    color: colors.black,
    marginBottom: 45,
    textAlign: 'center'
  },
  inputWrapper: {
    height: 120,
    width: 285,
  },
  textValue: {
    fontSize: 40
  },
  textInput: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 23,
    paddingVertical: 25,
    paddingHorizontal: 20,
    fontSize: 36,
    textAlign: 'center',
    borderColor: colors.black,
    borderWidth: 4
  },
  confirmText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center'
  },
  pressableWrapper: {
    height: 80,
    justifyContent: 'center'
  },
});