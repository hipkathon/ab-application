import React, { useState, ChangeEvent } from 'react'
import { View, TextInput, Pressable, Text, Platform } from 'react-native'
import tw from 'twrnc'
import ImagePicker from 'app/components/ImagePicker'
import axios from 'app/utils/api'

export default function Profile() {
  const [title, setTitle] = useState('')
  const [images, setImages] = useState({ A: null, B: null })

  const handleChange = (value: string) => {
    setTitle(value)
  }

  const handlePress = async () => {
    if (title && images.A && images.B) {
      const formData = new FormData()
      formData.append('file', images.A)

      const resp = await axios.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(resp.data)
    }
  }

  const handlePicker = (type: 'A' | 'B') => (files: FileList | string) => {
    if (Platform.OS === 'web') {
      setImages({ ...images, [type]: files[0] })
    } else {
      setImages({ ...images, [type]: files })
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
            onChange={handlePicker('A')}
            name="A"
            style={tw`flex flex-1 bg-white px-2 py-4 items-center mr-1`}
          />
          <ImagePicker
            onChange={handlePicker('B')}
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
