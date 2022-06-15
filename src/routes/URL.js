// react
import React from 'react'
// redux
import { useSelector } from 'react-redux'
// components
import Clips from '../components/Clips';
import NoClip from '../components/NoClip';

export default function URL() {
  // react-redux
  const myClips = useSelector(state => state.scrap);
  //
  return (
    <div>
      { myClips.length === 0 ?
        <NoClip/> :
        myClips.map((clip, idx) => (
          <Clips key={idx} clip={clip} />
        ))
      }
    </div>
  )
}
