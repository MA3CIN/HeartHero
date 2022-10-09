import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Pomiary } from "./mockedData/pomiary";

export default function App() {
  const [pomiary, setPomiary] = useState(Pomiary);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const addPomiar = (newPomiar: any, name: string) => {
    const newPomiary = JSON.parse(JSON.stringify(pomiary));
    const index = pomiary.findIndex(pom => pom.name === name);
    newPomiary[index].data.unshift(newPomiar);
    newPomiary[index].value = newPomiar;
    setPomiary(pomiary);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} addPomiar={addPomiar} pomiary={pomiary} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
