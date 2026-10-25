import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#d84315' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Recetas' }} />
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}