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
  const onClick = () => {
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
      }))
    } else {
      // delete scrap
      dispatch(deleteScrap(article._id));
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrapBtn])

  useEffect(() => {
    const confirmId = confirmScrap.map(x => x.id);
    for (let i = 0; confirmId.length > i; i ++) {
      if (article._id === confirmId[i]) {
        setScrapBtn(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article])

  return (
    <ArticleStyle>
      <div className="article">
        <a href={article.web_url}>
          <h3>{article.headline.main}</h3>
          <span>{article.pub_date.slice(0, 10)}</span>
          <p>{article.abstract}</p>
        </a>
        <button onClick={onClick}>
          <img
            className={ scrapBtn ? "on" : "off" }
            src={star} 
            alt="img" 
          />
        </button>
        <hr />
      </div>
    </ArticleStyle>
  )
}
