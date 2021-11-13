import React from 'react'
import { Platform } from 'react-native'

import createStackNavigator from 'packages/app/navigation/create-stack-navigator'
import PlaylistsScreen from 'packages/app/screens/playlists'
import PlaylistScreen from 'packages/app/screens/playlist'
import NewPlaylistScreen from 'packages/app/screens/new-playlist'
import { PlaylistsStackParams } from 'packages/app/navigation/types'
import { navigatorScreenOptions } from 'packages/app/navigation/navigator-screen-options'

const PlaylistsStack = createStackNavigator<PlaylistsStackParams>()

function PlaylistsNavigator() {
  return (
    <PlaylistsStack.Navigator screenOptions={navigatorScreenOptions}>
      <PlaylistsStack.Group>
        <PlaylistsStack.Screen
          name="playlists"
          component={PlaylistsScreen}
          options={{ title: 'Playlists', headerTitle: 'Playlists' }}
        />
        <PlaylistsStack.Screen
          name="playlist"
          component={PlaylistScreen}
          options={{ title: 'Playlist', headerTitle: 'Playlist' }}
        />
      </PlaylistsStack.Group>
      <PlaylistsStack.Group
        screenOptions={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'transparentModal'
        }}
      >
        <PlaylistsStack.Screen name="new" component={NewPlaylistScreen} />
      </PlaylistsStack.Group>
    </PlaylistsStack.Navigator>
  )
}

export default PlaylistsNavigator
