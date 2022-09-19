import React from "react";
import {NewsActionCreator, updateNewsPostTextActionCreator} from "../../Redux/news-reducer";
import News from "./News";

const NewsContainer = (props) => {

    let state = props.store.getState();

    let addNews = () => {
        props.store.dispatch(NewsActionCreator());
    }

    let onPostChange = (text, img) => {

        props.store.dispatch(updateNewsPostTextActionCreator(text,img));
    }

    return (
        <News updateNewsPostText={onPostChange}
              addNews={addNews}
              newsPage={state.newsPage}
              newPostText={state.newsPage.newPostText}
        />
    )
}

export default NewsContainer;
