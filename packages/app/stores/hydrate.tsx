import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'mobx-persist';
import { Platform } from 'react-native';

const hydrate = create({
  storage: Platform.OS !== 'web' ? AsyncStorage : undefined,
  jsonify: true
})

export default hydrate;
