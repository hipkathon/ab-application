import * as Linking from 'expo-linking'
import type { NavigationContainer } from '@react-navigation/native'
import {
  PublishStackParams,
  PlaylistScreenProps,
  ProfileStackParams,
  BootstrapStackParams, FeedStackParams
} from './types';
import AccountStore from '../stores/account';

type Props = React.ComponentProps<typeof NavigationContainer>['linking']

function makeTabPath<Path extends keyof any>(
  path: Path
): Path {
  return path
}

function makePublishStackPath<Path extends keyof PublishStackParams>(
  path: Path
): Path {
  return path
}

function makeProfileStackPath<Path extends keyof ProfileStackParams>(
  path: Path
): Path {
  return path
}

function makeBootstrapStackPath<Path extends keyof BootstrapStackParams>(
  path: Path
): Path {
  return path
}

function makeFeedStackPath<Path extends keyof FeedStackParams>(
  path: Path
): Path {
  return path
}

function makeType<T>(t: T) {
  return t
}

const bootstrapStackPaths = makeType({
  onboarding: makeBootstrapStackPath('onboarding'),
  contents: makeBootstrapStackPath('contents')
})

const publishStackPaths = makeType({
  playlists: makePublishStackPath('playlists'),
  playlist: makePublishStackPath('playlist'),
  new: makePublishStackPath('new')
})

const profileStackPaths = makeType({
  main: makeProfileStackPath('main')
})

const feedStackPaths = makeType({
  news: makeFeedStackPath('news')
})

const tabPaths = makeType({
  feed: makeTabPath('feed'),
  publish: makeTabPath('publish'),
  profile: makeTabPath('profile')
})

const linking: Props = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [bootstrapStackPaths.onboarding]: {
        path: '',
        initialRouteName: bootstrapStackPaths.onboarding,
        screens: {
          [bootstrapStackPaths.onboarding]: '',
        }
      },
      [bootstrapStackPaths.contents]: {
        path: 'contents',
        initialRouteName: tabPaths.feed,
        screens: {
          [tabPaths.feed]: {
            path: 'feed',
            initialRouteName: feedStackPaths.news,
            screens: {
              [feedStackPaths.news]: '',
            }
          },
          [tabPaths.publish]: {
            path: 'publish',
            initialRouteName: publishStackPaths.playlist,
            screens: {
              [publishStackPaths.playlist]: 'playlist',
              [publishStackPaths.playlists]: 'playlists',
              [publishStackPaths.new]: 'new',
            }
          },
          [tabPaths.profile]: {
            path: 'profile',
            initialRouteName: profileStackPaths.main,
            screens: {
              [profileStackPaths.main]: ''
            }
          }
        }
      },
      // [tabPaths.feed]: {
      //   path: 'contents/feed',
      //   initialRouteName: feedStackPaths.news,
      //   screens: {
      //     [tabPaths.feed]: {
      //       path: '',
      //       initialRouteName: feedStackPaths.news,
      //       screens: {
      //         [feedStackPaths.news]: '',
      //       }
      //     },
      //   }
      // },
      // [bootstrapStackPaths.contents]: {
      //   path: 'contents',
      //   initialRouteName: tabPaths.feed,
      //   screens: {
      //     [tabPaths.feed]: {
      //       path: '',
      //       initialRouteName: feedStackPaths.news,
      //       screens: {
      //         [feedStackPaths.news]: '',
      //       }
      //     },
      //   }
      // },
      // [bootstrapStackPaths.contents]: {
      //   path: 'contents',
      //   initialRouteName: tabPaths.feed,
      //   screens: {
      //     [tabPaths.feed]: {
      //       path: '',
      //       initialRouteName: feedStackPaths.news,
      //       screens: {
      //         [feedStackPaths.news]: ''
      //       }
      //     },
      //   }
        // }
        // [tabPaths.publish]: {
        //       path: '',
        //       initialRouteName: '',
        //       screens: {
        //         [tabPaths.publish]: ''
        //       }
        //     },
        //     [tabPaths.profile]: {
        //       path: '',
        //       initialRouteName: '',
        //       screens: {
        //         [profileStackPaths.main]: ''
        //       }
        //     }
        //   }
        // },
        // [tabPaths.home]: {
        //   path: '',
        //   initialRouteName: homeStackPaths.home,
        //   screens: {
        //     [homeStackPaths.home]: ''
        //   }
        // },
        // [tabPaths.publish]: {
        //   initialRouteName: playlistsStackPaths.publish,
        //   path: 'publish',
        //   screens: {
        //     [playlistsStackPaths.publish]: '',
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
      // }
    }
  }
}

export { linking }
