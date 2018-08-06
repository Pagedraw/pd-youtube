import React from 'react'

import YouTube from 'react-youtube'

YouTube.pdPropControls = {
  videoId: 'Text',
  id: 'Text',
  className: 'Text',
  containerClassName: 'Text',
  opts: {
    height: 'Number',
    width: 'Number',
    playerVars: {
      autoplay: 'Boolean',
    },
  },
  onReady: 'Function',
  onPlay: 'Function',
  onPause: 'Function',
  onEnd: 'Function',
  onError: 'Function',
  onStateChange: 'Function',
  onPlaybackRateChange: 'Function',
  onPlaybackQualityChange: 'Function',
}

export default { YouTube }
