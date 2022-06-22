// react
import React, { useState, useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
// reducer
import { addScrap, deleteScrap } from '../reducer/ArticleScrapReducer';
// style
import { ArticleStyle } from '../styles/ArticleStyle';
// image
import star from "../assets/star.svg";

export default function Article( { article } ) {
  // react-redux
  const dispatch = useDispatch();
  const confirmScrap = useSelector(state => state.scrap);
  // scrap btn management
  const [scrapBtn, setScrapBtn] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    // true or false
    setScrapBtn(prev => !prev);
  }

  // scrap
  useEffect(() => {
    // add scrap
    if (scrapBtn) {
      dispatch(addScrap({
        title: article.headline.main,
        id: article._id,
        date: article.pub_date,
        abstract: article.abstract,
        url: article.web_url,
        img_url: article.multimedia,
      }))
    } else {
      // delete scrap
      dispatch(deleteScrap(article._id));
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrapBtn])

  // scrap // usememo
  useEffect(() => {
    const confirmId = confirmScrap.map(x => x.id);
    confirmId.map(id => {
      if (article._id === id) {
        return setScrapBtn(true);
      } else {
        return null;
      }
    })
    // eslint rule
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article])
    
  return (
    <ArticleStyle>
      <div className="article">
        {/* GO TO ARTICLE */}
        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
          {/* ARTICLE IMAGE */}
          { 
            article.multimedia.length ? 
            <img 
              className="mainIMG"
              src={`https://static01.nyt.com/${article.multimedia[0].url}`} 
              alt="img"
            /> :
            null
          }
          <div className="title-wrap">
            {/* ARTICLE TITLE */}
            <h3>{article.headline.main}</h3>
            {/* SCRAP BTN */}
            <button onClick={onClick}>
              <img
                className={ scrapBtn ? "on" : "off" }
                src={star} 
                alt="img" 
              />
            </button>
          </div>
          {/* ARTICLE DATE */}
          <span>{article.pub_date.slice(0, 10)}</span>
          {/* ARTICLE DESCRIPTION */}
          <p>{article.abstract}</p>
        </a>
        <hr />
      </div>
    </ArticleStyle>
  )
}
