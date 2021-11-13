import React from 'react'
import createStackNavigator from 'app/navigation/create-stack-navigator'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'
import Onboarding from './onboarding';
import Contents from './contents';
import { StatusBar } from 'react-native';

export type BootstrapStackParams = {
  onboarding: undefined
  contents: undefined
}

const BootstrapStack = createStackNavigator<BootstrapStackParams>()

export default function BootstrapStackNavigator() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <BootstrapStack.Navigator
        initialRouteName={'onboarding'}
        screenOptions={navigatorScreenOptions}
      >
        <BootstrapStack.Screen
          name={'onboarding'}
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <BootstrapStack.Screen
          name={'contents'}
          component={Contents}
          options={{ headerShown: false }}
        />
      </BootstrapStack.Navigator>
    </>
  )
}
