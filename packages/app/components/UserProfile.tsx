import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'

interface UserProfileProps {
  info: string
  nickname: string
}
const UserProfile: React.FC<UserProfileProps> = ({ info, nickname }) => {
  return (
    <View style={tw`p-2 flex flex-row`}>
      <Image
        source={{
          uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
        }}
        style={tw.style(`rounded-3xl`, { height: 50, width: 50 })}
      />
      <View style={tw`flex pl-4 my-auto`}>
        <Text style={tw`text-white font-bold`}>{info}</Text>
        <Text style={tw`text-white`}>{nickname}</Text>
      </View>
    </View>
  )
}

export default UserProfile
