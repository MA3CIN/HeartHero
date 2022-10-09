/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ColorSchemeName, Pressable, View, Text } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CzujnikPomiarScreen from '../screens/CzujnikPomiarScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PoprzedniePomiaryScreen from '../screens/PoprzedniePomiary';
import TwojDzienScreen from '../screens/TwojDzienScreen';
import TabOneScreen from '../screens/TwojePomiaryScreen';
import ReczneWpisanieScreen from '../screens/ReczneWpisanieScreen';
import TabTwoScreen from '../screens/TwojeReceptyScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="PoprzedniePomiaryScreen" component={PoprzedniePomiaryScreen} options={{ title: 'POPRZEDNIE POMIARY' }} />
        <Stack.Screen name="CzujnikPomiarScreen" component={CzujnikPomiarScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="RecznyPomiar" component={ReczneWpisanieScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TwojDzienScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TwojePomiaryScreen"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TwojePomiaryScreen'>) => ({
          title: 'TWOJE POMIARY',
          headerBackgroundContainerStyle: { height: 110, width: "100%" },
          headerTitleStyle: {
            fontSize: 32,
            marginTop: 10
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="balance-scale" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="TwojDzienScreen"
        component={TwojDzienScreen}
        options={{
          title: 'TWÓJ DZIEŃ',
          header: () => <View style={{ height: 50 }} />,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-plus-o" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TwojeReceptyScreen"
        component={TabTwoScreen}
        options={{
          title: 'TWOJE RECEPTY',
          headerBackgroundContainerStyle: { height: 110, width: "100%" },
          headerTitleStyle: {
            fontSize: 32,
            marginTop: 10
          },
          tabBarIcon: ({ color }) => <Ionicons name="receipt-outline" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
