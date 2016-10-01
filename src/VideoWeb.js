import React, { Component, PropTypes } from 'react'

import VideoResizeMode from './VideoResizeMode.js'

class Video extends Component {
  componentDidMount() {
    // Render component twice so this.refs.video is available
    // in get aspectStyles

    this.refs.video.addEventListener('loadedmetadata', ({ target }) => {
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

  get aspectStyles() {
    if (!this.refs.base) return {}

    const { offsetWidth, offsetHeight } = this.refs.base
    const { videoWidth, videoHeight } = this.refs.video

    const containerAspectRatio = offsetWidth / offsetHeight
    const videoAspectRatio = videoWidth / videoHeight

    switch (this.props.resizeMode) {
      case VideoResizeMode.contain:
        return videoAspectRatio >= containerAspectRatio ? { width: '100%' } : { height: '100%' }
      case VideoResizeMode.cover:
        return videoAspectRatio >= containerAspectRatio ? { height: '100%' } : { width: '100%' }
      case VideoResizeMode.stretch:
        return { width: '100%', height: '100%' }
    }
    return {}
  }

  render() {
    const { source, muted, repeat, style, ...other } = this.props
    return (
      <div ref="base" style={{ ...styles.base, ...(style || {}) }} {...other}>
        <video
          ref="video"
          muted={muted}
          autoPlay
          loop={repeat}
          style={{ ...styles.video, ...this.aspectStyles }}>
          <source src={source.uri} type="video/mp4" />
        </video>
      </div>
    )
  }
}

Video.propTypes = {
  resizeMode: PropTypes.string,
  muted: PropTypes.bool,
  repeat: PropTypes.bool,
  source: PropTypes.object.isRequired,
  style: PropTypes.object,
  onLoad: PropTypes.func,
}

Video.defaultProps = {
  muted: false,
  repeat: false,
}

export default Video

const styles = {
  base: {
    overflow: 'hidden',
  },
}
