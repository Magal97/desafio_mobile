
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38' },
        }}>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default AuthRoutes;