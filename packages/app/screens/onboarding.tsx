import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AccountStore, { RegisterAccountPayload } from '../../stores/account';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import tw from 'twrnc';
import { useRouter } from '../../navigation/use-router';

export function Onboarding() {
  const router = useRouter()
  const [birthday, setBirthday] = useState('')
  const [isMan, setIsMan] = useState(null)

  useEffect(() => {
    if (AccountStore.getAccount) {
      router.replace('/contents')
    }
  }, [])

  const onBirthdayChange = useCallback((event) => {
    const year = parseInt(event.replace(/[^0-9]/g, ''))

    if (year <= 1940 && year >= dayjs().year()) {
      return
    }
    setBirthday(year.toString());
  }, [])

  const requestPayload = useMemo(() => ({
    birthday: dayjs(`${birthday}-01-01 12:00:00`).format('YYYY-MM-DD HH:mm:ss'),
    isMan
  } as RegisterAccountPayload), [isMan, birthday])

  const onJoin = useCallback(async () => {
    if (requestPayload.isMan !== null && requestPayload.birthday) {
      const registeredAccount = await AccountStore.setAccount(requestPayload)
      if (registeredAccount) {
        console.log('navigation move', registeredAccount.id)
        router.replace('contents')
      }
    }
  }, [requestPayload])

  return (
    <SafeAreaView>
      <Text style={tw`pt-2 ml-4 mt-16 text-5xl text-white`}>{`성별을 \n선택해주세요.`}</Text>
      <View style={tw`flex-row p-2`}>
        <TouchableOpacity
          onPress={() => setIsMan(true)}
          style={
            tw.style({
              'flex-1': true,
              'border-white': true,
              'border-2': true,
              'bg-green-200': isMan,
              'h-20': true,
              'm-2': true,
              'justify-center': true,
              'items-center': true,
              'rounded-xl': true
            })
          }
        >
          <Text style={tw.style({
            'text-white': true,
            'text-gray-900': isMan === true,
            'text-3xl': true
          })}>남성</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsMan(false)}
          style={
            tw.style({
              'flex-1': true,
              'border-white': true,
              'border-2': true,
              'bg-green-200': isMan === false,
              'h-20': true,
              'm-2': true,
              'justify-center': true,
              'items-center': true,
              'rounded-xl': true
            })
          }>
          <Text style={tw.style({
            'text-white': true,
            'text-gray-900': isMan === false,
            'text-3xl': true
          })}>여성</Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`pt-2 ml-4 mt-16 text-5xl text-white`}>{`태어난 연도를 \n입력해주세요.`}</Text>
      <TextInput
        maxLength={4}
        keyboardType={'number-pad'}
        style={tw`m-4 pb-2 text-5xl text-white rounded-xl border-white border-2 leading-tight text-white text-center`}
        placeholder={'1994년'}
        placeholderTextColor={'#909090'}
        onChangeText={onBirthdayChange}
        value={birthday}
        onSubmitEditing={onJoin}
      />
    </SafeAreaView>
  )
}

export default observer(Onboarding)
