import React from 'react'
import { Pressable, Text, StyleProp, ViewStyle } from 'react-native'
import tw from 'twrnc'
import * as ExpoImagePicker from 'expo-image-picker'

interface ImagePickerProps {
  style: StyleProp<ViewStyle>
  name: string
  onChange: (uri: string) => void
}
const ImagePicker: React.FC<ImagePickerProps> = ({ style, name, onChange }) => {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ExpoImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ExpoImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === false) {
      console.log(pickerResult)
      onChange(pickerResult.uri)
    }
  }
  return (
    <Pressable style={style} onPress={openImagePickerAsync}>
      <Text style={tw`text-lg`}>{name}</Text>
    </Pressable>
  )
}

export default ImagePicker
