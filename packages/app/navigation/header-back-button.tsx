import React from 'react'
import {
  HeaderBackButton as ReactNavigationHeaderBackButton,
  HeaderBackButtonProps
} from '@react-navigation/elements'
import { useRouter } from './use-router'

import { useRouter as useNextRouter } from 'next/router'
import { StackRouter } from '@react-navigation/routers'
import { StackActions, getPathFromState } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// this is scary...
// but react navigation doesn't expose LinkingContext 😬
import LinkingContext from '@react-navigation/native/lib/module/LinkingContext'
import type { LinkingOptions } from '@react-navigation/native'

import { useContext } from 'react'

// hack to access getStateForAction from react-navigation's stack
// https://github.com/react-navigation/react-navigation/blob/main/packages/routers/src/StackRouter.tsx#L224
const stack = StackRouter({})

export function HeaderBackButton({
  navigation,
  ...props
}: HeaderBackButtonProps & {
  navigation: NativeStackScreenProps<any>['navigation']
}) {
  const router = useRouter()
  const linking = useContext(LinkingContext) as {
    options?: LinkingOptions<ReactNavigation.RootParamList>
  }
  const nextRouter = useNextRouter()

  if (!props.canGoBack) {
    return null
  }
  const back = () => {
    if (nextRouter) {
      const nextState = stack.getStateForAction(
        navigation.getState(),
        StackActions.pop(),
        // @ts-expect-error pop doesn't need the dict here, it's okay
        // https://github.com/react-navigation/react-navigation/blob/main/packages/routers/src/StackRouter.tsx#L317
        {}
      )
      if (nextState) {
        const getPath = linking.options?.getPathFromState || getPathFromState
        const path = getPath(nextState)

        if (path?.startsWith('/')) {
          return nextRouter.replace(path)
        }
      }
    }

    router.back()
  }

  return <ReactNavigationHeaderBackButton {...props} onPress={back} />
}
