import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Header } from '../components/Header/index';
import { MapsList } from '../components/MapsList/index';

export function Home() {
  return (
    <View style={{flex: 1, backgroundColor: '#26264E'}}>
      <StatusBar style="light" />
      <Header />
      <MapsList />
    </View>
  );
};