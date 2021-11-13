import React from 'react'
import { View } from 'react-native'

import tw from 'twrnc'
import Carousel from 'app/components/Carousel'
import Article from 'app/components/Article'

export default function HomeScreen() {
  const renderArticle = () => <Article />

  return (
    <View style={tw`flex-1`}>
      <Carousel renderItem={renderArticle} />
    </View>
  )
}
