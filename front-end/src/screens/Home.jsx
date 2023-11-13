import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header/index';
import { MapsList } from '../components/MapsList/index';

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <MapsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});