import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack'
import UserContextprovider from './src/contexts/UserContext';

export default () => {
  return (
    <UserContextprovider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextprovider>
  )
}