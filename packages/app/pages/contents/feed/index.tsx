import React from 'react'

import createStackNavigator from 'app/navigation/create-stack-navigator'
import Profile from '../../../screens/profile'
import { FeedStackParams } from 'app/navigation/types'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'

const FeedStack = createStackNavigator<FeedStackParams>()

function FeedNavigator() {
  return (
    <FeedStack.Navigator screenOptions={navigatorScreenOptions}>
      <FeedStack.Screen
        name="news"
        component={Profile}
        options={{ title: 'Newsfeed', headerTitle: '뉴스피드' }}
      />
    </FeedStack.Navigator>
  )
}

export default FeedNavigator
