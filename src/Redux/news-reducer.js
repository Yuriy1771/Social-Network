const ADD_NEWS_POST = "ADD-NEWS-POST";
const UPDATE_NEWS_POST_TEXT = "UPDATE-NEWS-POST-TEXT";

const newsReducer = (state, action) => {

    switch(action.type) {
        case ADD_NEWS_POST: 
        let newsPost = {
            avatar:
              "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
            name: "Yuriy",
            text: state.newPostText,
            picture: action.imgNews,
            likes: 0,
          };
          state.news.push(newsPost);
          state.newPostText = "";
        return state;


        case UPDATE_NEWS_POST_TEXT: 
        state.newPostText = action.newText;
        return state;

        default : 
        return state;
    }

}

export const NewsActionCreator = () => {
    return {
      type: "ADD-NEWS-POST",
    };
  };
  
  export const updateNewsPostTextActionCreator = (text, img) => {
    return {
      type: "UPDATE-NEWS-POST-TEXT",
      newText: text,
      imgNews: img,
    };
  };
  

export default newsReducer;