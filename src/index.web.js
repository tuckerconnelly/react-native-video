import React, { Component, PropTypes } from 'react'

import VideoResizeMode from './VideoResizeMode.js'

class Video extends Component {

  componentDidMount() {
    // Render component twice so this.refs.video is available
    // in get aspectStyles
    this.forceUpdate()
  }

  get aspectStyles() {
    if (!this.refs.video) return {}

    const { videoWidth, videoHeight } = this.refs.video
    switch (this.props.resizeMode) {
      case VideoResizeMode.contain:
        return videoWidth > videoHeight ? { height: '100%' } : { width: '100%' }
      case VideoResizeMode.cover:
        return videoWidth > videoHeight ?
        { width: '100%', marginTop: '-25%' } :
        { height: '100%', marginLeft: '-25%' }
      case VideoResizeMode.stretch:
        return { width: '100%', height: '100%' }
    }
    return {}
  }

  render() {
    const { source, muted, repeat, style, ...other } = this.props
    return (
      <div style={{ ...styles.base, ...(style || {}) }} {...other}>
        <video
          ref="video"
          muted={muted}
          autoPlay
          loop={repeat}
          style={this.aspectStyles}>
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
