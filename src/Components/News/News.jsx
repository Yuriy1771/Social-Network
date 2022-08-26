import React from "react";
import NewsElement from "./NewsElement";

const News = (props) => {

  let newsItem = props.state.news.map(n => (<NewsElement avatar={n.avatar} name={n.name} text={n.text} picture={n.picture} likes={n.likes} />))

  return (
    <div>
      {newsItem}
    </div>
  );
};

export default News;
