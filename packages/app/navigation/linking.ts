import * as Linking from 'expo-linking'
import type { NavigationContainer } from '@react-navigation/native'

import {
  HomeStackParams,
  PlaylistsStackParams,
  ProfileStackParams
} from './types'
import { BootstrapStackParams } from '../pages/bootstrap';

type Props = React.ComponentProps<typeof NavigationContainer>['linking']

function makeTabPath<Path extends keyof any>(
  path: Path
): Path {
  return path
}

function makePlaylistsStackPath<Path extends keyof PlaylistsStackParams>(
  path: Path
): Path {
  return path
}

function makeProfileStackPath<Path extends keyof ProfileStackParams>(
  path: Path
): Path {
  return path
}

function makeHomeStackPath<Path extends keyof HomeStackParams>(
  path: Path
): Path {
  return path
}

function makeBootstrapPath<Path extends keyof BootstrapStackParams>(
  path: Path
): Path {
  return path
}

function makeType<T>(t: T) {
  return t
}

const bootstrapStackPaths = makeType({
  onboarding: makeBootstrapPath('onboarding'),
  contents: makeBootstrapPath('contents')
})

const playlistsStackPaths = makeType({
  playlists: makePlaylistsStackPath('playlists'),
  playlist: makePlaylistsStackPath('playlist'),
  new: makePlaylistsStackPath('new')
})

const profileStackPaths = makeType({
  profile: makeProfileStackPath('profile')
})

const homeStackPaths = makeType({
  home: makeHomeStackPath('home')
})

const tabPaths = makeType({
  home: makeTabPath('homeTab'),
  playlists: makeTabPath('playlistsTab'),
  profile: makeTabPath('profileTab')
})

const linking: Props = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [bootstrapStackPaths.onboarding]: {
        path: '',
        initialRouteName: bootstrapStackPaths.onboarding,
        screens: {
          [bootstrapStackPaths.onboarding]: ''
        }
      },
      [bootstrapStackPaths.contents]: {
        path: 'contents',
        initialRouteName: homeStackPaths.home,
        screens: {
          [homeStackPaths.home]: ''
        }
      },
      // [tabPaths.home]: {
      //   path: '',
      //   initialRouteName: homeStackPaths.home,
      //   screens: {
      //     [homeStackPaths.home]: ''
      //   }
      // },
      // [tabPaths.playlists]: {
      //   initialRouteName: playlistsStackPaths.playlists,
      //   path: 'playlists',
      //   screens: {
      //     [playlistsStackPaths.playlists]: '',
      //     [playlistsStackPaths.playlist]: ':id',
      //     [playlistsStackPaths.new]: 'new'
      //   }
      // },
      // [tabPaths.profile]: {
      //   path: 'profile',
      //   initialRouteName: profileStackPaths.profile,
      //   screens: {
      //     [profileStackPaths.profile]: ''
      //   }
      // }
    }
  }
}

export { linking }
