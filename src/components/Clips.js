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

  const onClick = (e) => {
    e.preventDefault();
    dispatch(deleteScrap(clip.id));
  }

  return (
    <ClipsStyle>
      <div className="clip">
        <a href={clip.url}>
          {/* ARTICLE IMAGE */}
          { 
            clip.img_url.length ? 
            <img 
              className="mainIMG"
              src={`https://static01.nyt.com/${clip.img_url[0].url}`} 
              alt="img"
            /> :
            null
          }
          <div className="title-wrap">
            {/* CLIP TITLE */}
            <h3>{clip.title}</h3>
            {/* CLIP BTM */}
            <button onClick={onClick}>
            <img src={deleteSvg} alt="img" />
            </button>
          </div>
          <span>{clip.date.slice(0, 10)}</span>
          <p>{clip.abstract}</p>
        </a>
        <hr />
      </div>
    </ClipsStyle>
  )
}
