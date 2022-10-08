import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TwojDzienScreen() {
  const date = new Date();
  const getMonth = (month: number) => {
    switch(month){
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twój Dzień</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
