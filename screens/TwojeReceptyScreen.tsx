import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const pageTitle = "TWOJE RECEPTY";

  const data: any = {
    "Nie zrealizowane": [
      {
        timestamp: 1664889536000,
        wystawca: "Jan Kowalski",
        pwz: "2698040",
        kod: "0749",
      },
      {
        timestamp: 1664889536000,
        wystawca: "Jan Kowalski",
        pwz: "2698040",
        kod: "0749",
      },
    ],
    "Zrealizowane": [
      {
        timestamp: 1663917536000,
        wystawca: "Jan Kowalski",
        pwz: "2698040",
        kod: "0749",
      },
      {
        timestamp: 1663668000000,
        wystawca: "Michał Radkowski",
        pwz: "6392586",
        kod: "0749",
      },
      {
        timestamp: 1663236000000,
        wystawca: "Anna Zawiślak",
        pwz: "1936591",
        kod: "0749",
      }
    ]
  }


  return (
    <ScreenWrapper>
      {Object.keys(data).map((key, index) =>
        <View>
          <Text style={styles.tag}>{key}</Text>
          {data[key].map((recipeType: any) => {
            const d = new Date(recipeType.timestamp);
            return <View style={styles.recipeBox}>
              <Text style={styles.smallText}>{`Dnia: ${d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()}`}</Text>
              <View style={styles.textContainer}>
                <Text style={styles.bigText}>{`Wystawca: ${recipeType.wystawca}`}</Text>
                <Text style={styles.bigText}>{`PWZ: ${recipeType.pwz}`}</Text>
              </View>
              <Text style={[styles.smallText, { fontWeight: "bold" }]}>
                {`Kod recepty: ${recipeType.kod}`}
              </Text>
              <Text style={[styles.statusText, { color: index === 0 ? "#B40000" : "#3C8800" }]}>{`${index === 0 ? "NIE " : ""}ZREALIZOWANA`}</Text>
            </View>
          })}
        </View>)}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tag: {
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: "#00000030",
    marginBottom: 18
  },
  recipeBox: {
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    padding: 24,
    marginBottom: 28
  },
  smallText: {
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: "#0000000",
    marginBottom: 17
  },
  bigText: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    color: "#0000000"
  },
  textContainer: {
    backgroundColor: "transparent",
    marginBottom: 17
  },
  statusText: {
    textAlign: "right",
    fontSize: 24,
    lineHeight: 29,
  }
});
