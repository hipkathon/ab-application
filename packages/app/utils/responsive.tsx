import { Dimensions, PixelRatio } from 'react-native'

interface DefaultDimensionProps {
  top: number
  right: number
  bottom: number
  left: number
}

interface DefaultDimension {
  top: number
  right: number
  bottom: number
  left: number
  property: string
}

const GUIDELINE_WIDTH = 375
const GUIDELINE_HEIGHT = 812

// TODO: 사실 여기는 함수로 쓸 것이 아니라 (물론 기존에는 리사이징에 대응을 하지 않는 경우였음)
// TODO: 스토어에서 훅 걸고 관리하는 게 맞습니다.

// REMARK: https://stackoverflow.com/questions/44978804/whats-the-difference-between-window-and-screen-in-the-dimensions-api
// WINDOW: AOS에서 상태 표기줄을 포함하지 않는다.
// SCREEN: AOS에서 상태 표기줄을 포함한다.
export const WINDOW_WIDTH = () => Dimensions.get('window').width
export const WINDOW_HEIGHT = () => Dimensions.get('window').height
export const SCREEN_WIDTH = () => Dimensions.get('screen').width
export const SCREEN_HEIGHT = () => Dimensions.get('screen').height

const scale = SCREEN_WIDTH() / GUIDELINE_WIDTH

export const getScaledWidthByWindow = (width: number) =>
  Math.ceil((WINDOW_WIDTH() * width) / GUIDELINE_WIDTH)
export const getScaledHeightByWindow = (height: number) =>
  Math.ceil((WINDOW_HEIGHT() * height) / GUIDELINE_HEIGHT)
export const getScaledWidthByScreen = (width: number) =>
  Math.ceil((SCREEN_WIDTH() * width) / GUIDELINE_WIDTH)

// INFO: HEIGHT를 축으로 하면 안 됩니다. 우선 WIDTH 함수와 동일하게 둡니다.
export const getScaledHeightByScreen = (height: number) =>
  Math.ceil((SCREEN_WIDTH() * height) / GUIDELINE_WIDTH)

export const scaledWidth = (width: number) => getScaledWidthByScreen(width)
export const scaledHeight = (height: number) => getScaledHeightByScreen(height)

// INFO: px to percentage
export const widthPercentageToDP = (height: number) =>
  PixelRatio.roundToNearestPixel((SCREEN_HEIGHT() * height) / 100)

// INFO: round보단 floor가 좋습니다.
export const normalize = (size: number) => Math.floor(PixelRatio.roundToNearestPixel(size * scale))
export const scaleFont = (size: number) => size * PixelRatio.getFontScale()
export const getScaledFontSize = (size: number) => size * PixelRatio.getFontScale()

function dimensions(dimensionProps: DefaultDimension) {
  const { top, right, bottom, left, property } = dimensionProps

  const styles = {} as { [attribute: string]: number }

  styles[`${property}Top`] = top
  styles[`${property}Right`] = right
  styles[`${property}Bottom`] = bottom
  styles[`${property}Left`] = left

  return styles
}

export function margin({ top, right, bottom, left }: DefaultDimensionProps) {
  return dimensions({ top, right, bottom, left, property: 'margin' })
}

export function padding({ top, right, bottom, left }: DefaultDimensionProps) {
  return dimensions({ top, right, bottom, left, property: 'padding' })
}

export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  }
}
