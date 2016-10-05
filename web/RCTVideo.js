const React = require('react')
const pick = require('lodash/pick')

const { PropTypes, Component, createElement } = React

class RCTVideo extends Component {
  constructor(...args) {
    super(...args)

    this.video = null
  }

  componentDidMount() {
    // Render component twice so this.video is available
    // in get aspectStyles

    this.video.addEventListener('loadedmetadata', ({ target }) => {
      const { onLoad } = this.props

      onLoad && onLoad({
        canPlayFastForward: true,
        canPlayReverse: true,
        canPlaySlowForward: true,
        canPlaySlowReverse: true,
        canStepBackward: true,
        canStepForward: true,
        currentTime: 0,
        duration: target.duration,
        naturalSize: {
          height: target.height,
          orientation: target.width >= target.height ? 'landscape' : 'portrait',
          width: target.width,
        },
      })
      this.forceUpdate()
    })
  }

  setNativeProps(props) {
    this.base.setNativeProps(props)
  }

  get aspectStyles() {
    if (!this.base) return {}

    const { offsetWidth, offsetHeight } = this.base
    const { videoWidth, videoHeight } = this.video

    const containerAspectRatio = offsetWidth / offsetHeight
    const videoAspectRatio = videoWidth / videoHeight

    switch (this.props.resizeMode) {
      case RCTVideo.Constants.ScaleAspectFit:
        return videoAspectRatio >= containerAspectRatio ? { width: '100%' } : { height: '100%' }
      case RCTVideo.Constants.ScaleAspectFill:
        return videoAspectRatio >= containerAspectRatio ? { height: '100%' } : { width: '100%' }
      case RCTVideo.Constants.ScaleToFill:
        return { width: '100%', height: '100%' }
    }
    return {}
  }

  render() {
    const { View } = require('react-native-web')
    const { source, muted, repeat } = this.props
    const other = pick(this.props, Object.keys(View.propTypes))

    return (
      createElement(View, Object.assign({}, {
        ref: c => this.base = c,
      }, other),
        createElement('video', {
          ref: c => this.video = c,
          muted,
          autoPlay: true,
          loop: repeat,
          style: this.aspectStyles,
        },
          createElement('source', {
            src: source.uri,
          })
        )
      )
    )
  }
}

RCTVideo.Constants = {
  ScaleToFill: 'ScaleToFill',
  ScaleAspectFit: 'ScaleAspectFit',
  ScaleAspectFill: 'ScaleAspectFill',
  ScaleNone: 'ScaleNone',
}

RCTVideo.propTypes = {
  resizeMode: PropTypes.string,
  muted: PropTypes.bool,
  repeat: PropTypes.bool,
  source: PropTypes.object.isRequired,
  onLoad: PropTypes.func,

  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

RCTVideo.defaultProps = {
  muted: false,
  repeat: false,
}

module.exports = RCTVideo
