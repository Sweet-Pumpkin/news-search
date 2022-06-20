// react
import React, { useState, useEffect } from "react"
// react-intersection-observer
import { useInView } from "react-intersection-observer";
// redux
import { useDispatch } from "react-redux";
import { UpdateHistory } from "../reducer/HistoryReducer";
// uuid
import { v4 as uuid } from "uuid";
// react-loading
import ReactLoading from "react-loading";
// routes&components
import History from "../components/History";
import Article from "../components/Artice";
// style
import { MainStyle } from "../styles/MainStyle";

export default function Main() {
  // api key
  const API_KEY = process.env.REACT_APP_API_KEY
  // input value
  const [input, setInput] = useState("");
  // search(api) value
  const [search, setSearch] = useState("");
  // article
  const [articleValues, setArticleValues] = useState([]);
  // page number
  const [page, setPage] = useState(1);
  // react-intersection-observer
  const [ref, inView] = useInView({ threshold: 0.5 });
  // history true or false
  const [history, setHistory] = useState(false)
  // react-loading true or false
  const [isLoading, setIsLoading] = useState(false);
  // react-redux dispatch
  const dispatch = useDispatch();
  // update input from history
  const [updateInput, setUpdateInput] = useState("");

  // searching article
  useEffect(() => {
    if (!input.trim()) {
      setSearch("");
      setPage(1);
      setArticleValues([]);
    } else {
      const delay = setTimeout(() => setSearch(input), 1000);
      setPage(1);
      setArticleValues([]);
      setHistory(true)
      return () => {
        clearTimeout(delay);
        setSearch("")
      }
    }    
  }, [input])

  // get API
  useEffect(() => {
    if (!search.trim()) {
      return;
    } else {
      setIsLoading(true);
      // nyt article search api
      fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&page=${page}&sort=newest&api-key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setArticleValues(articleValues.concat(data.response.docs));
          setIsLoading(false);
          setTimeout(() => setHistory(false), 500);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  // inView = true or false
  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1)
    }
  }, [inView])

  // edit history
  useEffect(() => {
    if (!search.trim()) {
      return
    } else {
      dispatch(UpdateHistory({
        id: uuid(),
        value: search
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  // update input from history
  useEffect(() => {
    if (!updateInput.trim()) {
      return;
    } else {
      setInput(updateInput);
    }
  }, [updateInput])

  return (
    <>
      <MainStyle>

        {/* SEARCHING ARTICLE */}
        <div className="input-wrap" onFocus={() => setHistory(true)} onBlur={() => setHistory(false)}>
          <input 
            className="input"
            type="text" 
            placeholder="Search Article..."
            value={input} 
            onChange={e => setInput(e.target.value)} 
          />
        </div>

        {/* SEARCH HISTORY */}
        { history && 
          <div onMouseDown={e => e.preventDefault()}>
            <History setUpdateInput={setUpdateInput} />
          </div> 
        }

        {/* ARTICLES */}
        {
          articleValues.map(article => (
            <Article key={article._id} article={article} />
          ))
        }

          {/* REACT LOADING */}
          { isLoading && 
            <ReactLoading className="loading" type="spin" color="#ccc" height={24} width={24} />
          }
      </MainStyle>
      {/* REACT INTERSECTION OBSERVER */}
      <div className="ref" ref={ref} />
    </>
  );
}
