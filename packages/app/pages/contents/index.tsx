import React from 'react';
import { NextTabNavigator } from '../../navigation/next-tab-navigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { TabBarIcon } from '../../navigation/tab-bar-icon';
import { createNextTabNavigator } from '../../navigation/universal-tab-navigator';
import dynamic from 'next/dynamic';

const HomeNavigator = dynamic(() => import('../home'))
const PlaylistsNavigator = dynamic(() => import('../playlists'))
const ProfileNavigator = dynamic(() => import('../profile'))

const BottomTab = createNextTabNavigator()

export function Contents() {
  return (
    <BottomSheetModalProvider>
      <BottomTab.Navigator
        initialRouteName="homeTab"
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
      >
        <BottomTab.Screen
          name="homeTab"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
          }}
        />
        <BottomTab.Screen
          name="playlistsTab"
          component={PlaylistsNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
          }}
        />
        <BottomTab.Screen
          name="profileTab"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
          }}
        />
      </BottomTab.Navigator>
    </BottomSheetModalProvider>
  )
}

export default Contents
