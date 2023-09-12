import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 // 
  

const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const  defaultImageUrl = "https://www.beinformed.com/wp-content/uploads/2018/12/be-informed-logo.png";



 const updateNews = async()=> {
    props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5c8f5fb792db40dba79a550b832b74c5&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category )} -  BeInformed`;
    updateNews();
   // eslint-disable-next-line

  }, [])


  const fetchMoreData = async() => {
    
    const nextPage = page + 1;
    setPage(nextPage);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5c8f5fb792db40dba79a550b832b74c5&page=${nextPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false)

    
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
          {" "}
          BeInformed - Top {capitalizeFirstLetter(
            props.category
          )}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
            <div className="container">
        <div className="row">

          {articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className="col-md-4"
                  style={{ margin: "35px 0px" }}
                >
                  <NewsItem
                    source={element.source}
                    time={element.publishedAt}
                    author={element.author}
                    title={element.title}
                    description={
                      element.description == null
                        ? ""
                        : element.description.slice(0, 88)
                    }
                    imageUrl={
                      element.urlToImage == null
                        ? defaultImageUrl
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>    
        );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
