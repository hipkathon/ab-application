import React from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import tw from 'twrnc'

export default function Profile() {
  return (
    <View style={tw`flex flex-1 flex-col`}>
      <View style={tw`flex flex-1 px-2 justify-center`}>
        <Text style={tw`text-white text-2xl`}>제목</Text>
        <TextInput
          onChange={() => {}}
          style={tw`border-2 border-white rounded-lg py-4 px-2 text-white`}
        />
        <View style={tw`flex flex-row py-2`}>
          <Pressable style={tw`flex-1 bg-white p-2 py-4 flex items-center mr-1`}>
            <Text style={tw`text-lg`}>A</Text>
          </Pressable>
          <Pressable style={tw`flex-1 bg-white p-2 py-4 flex items-center ml-1`}>
            <Text style={tw`text-lg`}>B</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={tw`w-full bg-white p-2 py-4 flex items-center`}>
        <Text style={tw`text-lg`}>제출</Text>
      </Pressable>
    </View>
  )
}
