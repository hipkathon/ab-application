import React from 'react'
import dynamic from 'next/dynamic'
import { CarouselProps as NativeCarouselProps } from 'react-native-snap-carousel'
import { Dimensions, Platform, View } from 'react-native'
import tw from 'twrnc'

interface CarouselProps {
  renderItem: () => JSX.Element
}
const LoadedCarousel = dynamic(() =>
  Platform.OS !== 'web'
    ? import('react-native-snap-carousel')
    : import('react-slick')
)

const Carousel: React.FC<CarouselProps> = ({ renderItem }) => {
  const { height, width } = Dimensions.get('window')

  if (Platform.OS !== 'web') {
    const NativeCarousel = LoadedCarousel as React.ComponentType<
      NativeCarouselProps<unknown>
    >
    return (
      <NativeCarousel
        data={[1, 2]}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        vertical
        itemHeight={height}
        sliderHeight={height}
      />
    )
  }

  const WebCarousel = LoadedCarousel as React.ComponentType<any>
  const Item = () => <div style={{height}}>{renderItem()}</div>
  return (
    <View style={tw`flex flex-col flex-1 h-full`}>
      <WebCarousel
        style={{ height: '100%' }}
        infinite={false}
        vertical
        slidesToShow={1}
        slidesToScroll={1}
        verticalSwiping
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </WebCarousel>
    </View>
  )
}

export default Carousel
