import { Platform } from 'react-native-universal'

let Video

switch (Platform.OS) {
  case 'ios':
    Video = require('./Video.js')
    break
  case 'android':
    Video = require('./Video.js')
    break
  case 'web':
    Video = require('./VideoWeb.js')
    break
}

export default Video.default
