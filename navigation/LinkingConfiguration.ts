/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TwojePomiaryScreen: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TwojDzienScreen: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TwojeReceptyScreen: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
        },
      },
      CzujnikPomiarScreen: "CzujnikPomiarScreen",
      PoprzedniePomiaryScreen: 'PoprzedniePomiaryScreen',
      RecznyPomiar: "RecznyPomiar",
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;