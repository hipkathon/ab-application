import React, { useState, ChangeEvent } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import tw from 'twrnc'
import ImagePicker from 'app/components/ImagePicker'

export default function Profile() {
  const [title, setTitle] = useState('')
  const [imageA, setImageA] = useState<File>(null)
  const [imageB, setImageB] = useState<File>(null)

  const handleChange = (value: string) => {
    setTitle(value)
  }

  const handlePress = () => {
    if (title && imageA && imageB) {
      console.log('prepared')
    }
  }

  return (
    <View style={tw`flex flex-1 flex-col`}>
      <View style={tw`flex flex-1 px-2 justify-center`}>
        <Text style={tw`text-white text-2xl`}>제목</Text>
        <TextInput
          onChangeText={handleChange}
          style={tw`border-2 border-white rounded-lg py-4 px-2 text-white`}
        />
        <View style={tw`flex flex-row py-2`}>
          <ImagePicker
            onChange={({ target: { files } }) => setImageA(files[0])}
            name="A"
            style={tw`flex flex-1 bg-white px-2 py-4 items-center mr-1`}
          />
          <ImagePicker
            onChange={({ target: { files } }) => setImageB(files[0])}
            name="B"
            style={tw`flex flex-1 bg-white px-2 py-4 items-center ml-1`}
          />
        </View>
      </View>

      <Pressable
        onPress={handlePress}
        style={tw`w-full bg-white p-2 py-4 flex items-center`}
      >
        <Text style={tw`text-lg`}>제출</Text>
      </Pressable>
    </View>
  )
}
