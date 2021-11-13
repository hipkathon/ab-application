import React, { useEffect } from 'react';
import createStackNavigator from 'app/navigation/create-stack-navigator'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'
import Onboarding from '../screens/onboarding';
import Contents from './contents';
import { StatusBar } from 'react-native';
import dynamic from 'next/dynamic';
import AccountStore from '../stores/account';
import { observer } from 'mobx-react';

export type BootstrapStackParams = {
  onboarding: undefined
  contents: undefined
}

const BootstrapStack = createStackNavigator<BootstrapStackParams>()

function BootstrapStackNavigator({
  Component, pageProps
}) {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <BootstrapStack.Navigator
        screenOptions={navigatorScreenOptions}
        initialRouteName={AccountStore.getAccount ? 'contents' : 'onboarding'}
      >
        {
          AccountStore.getAccount ?
            null
            :
          <BootstrapStack.Screen
            name={'onboarding'}
            component={Onboarding}
            options={{ headerShown: false }}
          />
        }
        <BootstrapStack.Screen
          name={'contents'}
          component={Contents}
          options={{ headerShown: false }}
        />
      </BootstrapStack.Navigator>
    </>
  )
}

export default observer(BootstrapStackNavigator);
