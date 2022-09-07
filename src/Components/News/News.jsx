import React from "react";
import NewsElement from "./NewsElement";
import classes from "./News.module.css";
import {  NewsActionCreator, updateNewsPostTextActionCreator } from "../../Redux/state";


const News = (props) => {
  let newsItem = props.newsPage.news.map((n) => (
    <NewsElement
      avatar={n.avatar}
      name={n.name}
      text={n.text}
      picture={n.picture}
      likes={n.likes}
    />
  ));


  let textNews = React.createRef();
  let imgNews = React.createRef();

  let addNews = () => {
    props.dispatch(NewsActionCreator());
  }

let onPostChange = () => {
  let text = textNews.current.value;
  let img = imgNews.current.value;
  props.dispatch(updateNewsPostTextActionCreator(text,img));
}

  return (
    <div className={classes.container}>
      <div className={classes.containerAddNews}>
        <div className={classes.textarea}>
          <textarea onChange={onPostChange} value={props.newPostText} ref={ textNews }></textarea>
        </div>
        <div className={classes.btnAddNews}>
          <button onClick={addNews} >Add News</button>
        </div>
        <div className={classes.addImg}>
          <input type="file" ref={ imgNews } />
        </div>
      </div>
      {newsItem}
    </div>
  );
};

export default News;
