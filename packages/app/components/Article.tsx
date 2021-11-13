import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import UserProfile from './UserProfile'
import VersusIcon from './VersusIcon'

const Article: React.FC = () => {
  return (
    <View style={tw`flex flex-1 p-4 h-full`}>
      <UserProfile info="남성 20대" nickname="졸음깨우는껌" />
      <View style={tw.style(`flex flex-row`, { height: '60%' })}>
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-full`}
        />
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-illustration/temporary-permanent-choice-life-pictured-600w-1726904257.jpg'
          }}
          style={tw`flex-1 h-full`}
        />

        <View
          style={tw`absolute left-0 right-0 top-0 bottom-0 justify-center items-center`}
        >
          <VersusIcon />
        </View>
      </View>
      <Text style={tw`text-white py-4`}>어떤게 더 좋아보임?</Text>
    </View>
  )
}

export default Article
