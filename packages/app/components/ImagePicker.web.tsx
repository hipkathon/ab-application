import React, { useRef, ChangeEvent } from 'react'
import { StyleProp, ViewStyle, Pressable, Text } from 'react-native'
import tw from 'twrnc'

interface ImagePickerProps {
  style?: StyleProp<ViewStyle>
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ImagePicker: React.FC<ImagePickerProps> = ({ style, name, onChange }) => {
  const inputRef = useRef<HTMLInputElement>()

  const handlePress = () => {
    inputRef.current.click()
  }

  return (
    <>
      <Pressable onPress={handlePress} style={style}>
        <Text>{name}</Text>
      </Pressable>
      <input
        onChange={onChange}
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        accept="image/*"
      />
    </>
  )
}

export default ImagePicker
