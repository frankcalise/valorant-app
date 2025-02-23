import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../screens/overview';
import { Details as AgentDetails } from '../screens/Agents/details';
import { Details as WeaponsDetails } from '../screens/Weapons/details';

import { Agents } from '../screens/Agents/agents';
import Weapons from '../screens/Weapons/weapons';

import { TypeAgent as Agent } from '../features/zod/agentDetails';
import { Suspense, lazy } from 'react';
import { ValorantLoader } from '../components/Loaders/ValorantLoader';
export type RootStackParamList = {
  Overview: undefined;
  Agents: undefined;
  AgentDetails: Agent;
  Weapons: undefined;
  WeaponsDetails: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="AgentDetails"
          component={AgentDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agents"
          component={Agents}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="Weapons"
          component={Weapons}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#c54653',
            },
          }}
        />
        <Stack.Screen
          name="WeaponsDetails"
          component={WeaponsDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
