import React from 'react'

import createStackNavigator from 'app/navigation/create-stack-navigator'
import Profile from '../../../screens/profile'
import { ProfileStackParams } from 'app/navigation/types'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'
import AccountStore from '../../../stores/account';

const ProfileStack = createStackNavigator<ProfileStackParams>()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={navigatorScreenOptions}>
      <ProfileStack.Screen
        name="main"
        component={Profile}
        options={{ title: 'MyProfile', headerTitle: `내 프로필 - ${AccountStore.getAccount.birthday}` }}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
