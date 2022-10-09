import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Pomiary } from "./mockedData/pomiary";
import { PomiaryProvider } from './context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PomiaryProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PomiaryProvider>
      </SafeAreaProvider>
    );
  }
}
