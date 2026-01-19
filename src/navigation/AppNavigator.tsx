import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import BasicInfoScreen from "../screens/BasicInfoScreen";
import AddressScreen from "../screens/AddressScreen";
import SummaryScreen from "../screens/SummaryScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
