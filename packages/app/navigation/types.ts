import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { NextComponentType, NextPageContext } from 'next'

type BootstrapStackParams = {
  onboarding: undefined
  contents: undefined
}

type PublishStackParams = {
  playlists: undefined
  playlist: { id: string }
  new: undefined
}

type FeedStackParams = {
  news: undefined
}

type ProfileStackParams = {
  main: { user?: unknown }
}

type PlaylistsScreenProps = NativeStackScreenProps<
  PublishStackParams,
  'playlists'
>
type PlaylistScreenProps = NativeStackScreenProps<
  PublishStackParams,
  'playlist'
>

type NextPageProps = any
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>
  pageProps?: NextPageProps
}

export type {
  PlaylistsScreenProps,
  PlaylistScreenProps,
  NextNavigationProps,
  ProfileStackParams,
  BootstrapStackParams,
  FeedStackParams,
  PublishStackParams
}
