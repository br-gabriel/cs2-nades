import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Map } from "../screens/Map";
import { GrenadeView } from "../screens/GrenadeView";

const { Navigator, Screen } = createStackNavigator();

export function MyStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Map" component={Map} />
      <Screen name="Grenade" component={GrenadeView} />
    </Navigator>
  );
};