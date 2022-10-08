import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { LatoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function TwojDzienScreen() {
  const [leki, setLeki] = useState([{
    nazwa: "Kandesatran",
    dawka: "1 kapsuła podczas jedzenia",
    czas: "9:00",
    zaznaczone: false
  },
  {
    nazwa: "Corsanum",
    dawka: "1 kapsuła po jedzeniu",
    czas: "10:00",
    zaznaczone: false
  }])

  const date = new Date();
  const getTextMonth = (month: number) => {
    switch (month) {
      case 0: return "Styczeń";
      case 1: return "Luty";
      case 2: return "Marzec";
      case 3: return "Kwiecień";
      case 4: return "Maj";
      case 5: return "Czerwiec";
      case 6: return "Lipiec";
      case 7: return "Sierpień";
      case 8: return "Wrzesień";
      case 9: return "Październik";
      case 10: return "Listopad";
      case 11: return "Grudzień";
    }
  }

  const getTextDay = (day: number) => {
    switch (day) {
      case 0: return "pn";
      case 1: return "wt";
      case 2: return "śr";
      case 3: return "cz";
      case 4: return "pt";
      case 5: return "sb";
      case 6: return "nd";
    }
  };

  const getDayData = () => {
    const dayData = [];
    for (let i = 5; i > 0; i--) {
      const day = new Date(date.getTime());
      day.setDate(day.getDate() - i + 3);
      dayData.push({
        day: `${day.getDate().toString().length === 1 ? "0" : ""}${day.getDate()}`,
        weekDay: getTextDay(day.getDay())
      });
    }
    return dayData;
  }

  return (
    <ScrollView contentContainerStyle={{
      paddingTop: 20,
      paddingBottom: 25,
    }} style={{ backgroundColor: 'white' }}>
      <Text style={styles.title}>{`${getTextMonth(date.getMonth())} ${date.getFullYear()}`}</Text>
      <View style={styles.daysContainer}>
        {getDayData().map(dayData =>
          <View style={[styles.singleDay, { opacity: dayData.day === `${date.getDate().toString().length === 1 ? "0" : ""}${date.getDate()}` ? 1 : 0.2 }]}>
            <Text style={styles.bigText}>{dayData.day}</Text>
            <Text style={styles.smallText}>{dayData.weekDay}</Text>
          </View>
        )}
      </View>

      <ScreenWrapper>
        <Text style={styles.tag}>Leki</Text>
        {leki.map(lek =>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 25, padding: 20, backgroundColor:  colors.innerGrey, borderRadius: 15 }}>
            <FontAwesome5
              name={lek.zaznaczone ? "check-square" : "square"}
              size={25}
              color={"black"}
              style={{ marginRight: 15 }}
            />
            <View>
              <Text style={{ fontSize: 24 }}>{lek.nazwa}</Text>
              <Text style={{ fontSize: 14 }}>{lek.dawka}</Text>
            </View>
            <Text style={{ marginRight: 0, marginLeft: "auto", fontSize: 24 }}>{lek.czas}</Text>
          </View>
        )}
        <Text style={styles.tag}>Pomiary</Text>
      </ScreenWrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: "#00000030",
    fontFamily: "lato",
    marginBottom: 18
  },
  title: {
    fontSize: 32,
    fontFamily: 'lato-bold',
    textAlign: 'center'
  },
  daysContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.innerGrey,
    padding: 20,
    marginBottom: 25
  },
  singleDay: {
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center"
  },
  bigText: {
    fontSize: 36,
    fontFamily: "lato-bold"
  },
  smallText: {
    fontSize: 17,
    fontFamily: "lato-bold"
  }
});
