import React from "react";
import {NewsActionCreator, updateNewsPostTextActionCreator} from "../../Redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";

// const NewsContainer = (props) => {
//
//     // let state = props.store.getState();
//     //
//     // let addNews = () => {
//     //     props.store.dispatch(NewsActionCreator());
//     // }
//     //
//     // let onPostChange = (text, img) => {
//     //
//     //     props.store.dispatch(updateNewsPostTextActionCreator(text, img));
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let addNews = () => {
//                     store.dispatch(NewsActionCreator());
//                 }
//
//                 let onPostChange = (text, img) => {
//
//                     store.dispatch(updateNewsPostTextActionCreator(text, img));
//                 }
//                 return <News updateNewsPostText={onPostChange}
//                              addNews={addNews}
//                              newsPage={state.newsPage}
//                              newPostText={state.newsPage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
        newPostText: state.newsPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(NewsActionCreator());
        },
        onPostChange: (text,img) => {
            dispatch(updateNewsPostTextActionCreator(text, img));
        }
    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
