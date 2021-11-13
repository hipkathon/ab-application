import React from 'react'
import { Pressable, Text, StyleProp, ViewStyle } from 'react-native'
import tw from 'twrnc'

interface ImagePickerProps {
  style: StyleProp<ViewStyle>
  name: string
}
const ImagePicker: React.FC<ImagePickerProps> = ({ style, name }) => {
  return (
    <Pressable style={style}>
      <Text style={tw`text-lg`}>{name}</Text>
    </Pressable>
  )
}

export default ImagePicker
