import { Platform } from 'react-native-universal'

let Video

switch (Platform.OS) {
  case 'ios':
    Video = require('./index.ios.js')
    break
  case 'android':
    Video = require('./index.android.js')
    break
  case 'web':
    Video = require('./index.web.js')
    break
}

export default Video.default
