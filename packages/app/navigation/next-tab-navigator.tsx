import React from 'react'
import dynamic from 'next/dynamic'

import { TabBarIcon } from 'app/navigation/tab-bar-icon'
import { NextNavigationProps } from './types'
import { createNextTabNavigator } from './universal-tab-navigator'

const FeedNavigator = dynamic(() => import('../pages/contents/feed'))
const PublishNavigator = dynamic(() => import('../pages/contents/publish'))
const ProfileNavigator = dynamic(() => import('../pages/contents/profile'))

const BottomTab = createNextTabNavigator()

export function NextTabNavigator({
  pageProps,
  Component
}: NextNavigationProps) {
  return (
    <BottomTab.Navigator
      initialRouteName="feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7e7f81',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          zIndex: 1
        },
        lazy: true
      }}
      Component={Component}
      pageProps={pageProps}
    >
      <BottomTab.Screen
        name="feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="publish"
        component={PublishNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}
