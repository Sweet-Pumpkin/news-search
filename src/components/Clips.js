// react
import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { deleteScrap } from '../reducer/ArticleScrapReducer';
// image
import deleteSvg from '../assets/delete.svg'; 
// style
import { ClipsStyle } from '../styles/ClipsStyle';

export default function Clips({ clip }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteScrap(clip.id))
  }

  return (
    <ClipsStyle>
      <div className="clip">
        <a href={clip.url}>
          <h3>{clip.title}</h3>
          <span>{clip.date.slice(0, 10)}</span>
          <p>{clip.abstract}</p>
        </a>
        <button onClick={onClick}>
          <img src={deleteSvg} alt="img" />
        </button>
        <hr />
      </div>
    </ClipsStyle>
  )
}
