import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        post: "Hi, how are you?",
        likesCount: 4,
        avatar:
          "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
      },
      {
        id: 1,
        post: "It's my first post",
        likesCount: 54,
        avatar:
          "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
      },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your dream ?" },
      { id: 3, message: "Nice bro! Thanks ?" },
    ],
    dialogs: [
      {
        id: 1,
        name: "Yuriy",
        avatar:
          "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
      },
      {
        id: 2,
        name: "Nika",
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2020/06/shutterstock_1749605879-600x600.jpg",
      },
      {
        id: 3,
        name: "Liza",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA3PuNUIJHAviGQ0BQ5Q2xNscd-EjRC8IPQ&usqp=CAU",
      },
      {
        id: 4,
        name: "Petr",
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2015/08/shutterstock_92854117-600x600.jpg",
      },
      {
        id: 5,
        name: "David",
        avatar:
          "https://s2.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/sanatorij-druzhba-600x600.jpg",
      },
    ],
  },

  musicPage: {
    playlist: [
      { avtor: "Luba", trek: "Hours" },
      { avtor: "Bob Dylan", trek: "Knock knock" },
      { avtor: "Red cheil the papers", trek: "Californication" },
    ],
  },
  SidebarFriends: {
    sidebarFriend: [
      {
        name: "Nika",
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2020/06/shutterstock_1749605879-600x600.jpg",
      },
      {
        name: "Petr",
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2015/08/shutterstock_92854117-600x600.jpg",
      },
      {
        name: "Liza",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA3PuNUIJHAviGQ0BQ5Q2xNscd-EjRC8IPQ&usqp=CAU",
      },
    ],
  },

  newsPage: {
    news: [
      {
        avatar:
          "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
        name: "Yuriy",
        text: "Hi, I was at sea recently, here is a photo of the sunset!)",
        picture:
          "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        likes: 34,
      },

      {
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2020/06/shutterstock_1749605879-600x600.jpg",
        name: "Nika",
        text: "Lol, This picture is really funny!)))",
        picture:
          "https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?k=20&m=1154370446&s=612x612&w=0&h=2AWvof66ovB87P3b7C_cu0pCZlZhDDFYUFr2KQ2UnwQ=",
        likes: 14,
      },

      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA3PuNUIJHAviGQ0BQ5Q2xNscd-EjRC8IPQ&usqp=CAU",
        name: "Liza",
        text: "I'm very like cakes... I want to eat it)",
        picture:
          "https://konditor.co.uk/media/catalog/product/cache/3e4a5f8f672cd4ecf787a9d4c4fe7b8d/7/_/7_tropical_cake_044_1_edited.jpg",
        likes: 24,
      },

      {
        avatar:
          "https://the-challenger.ru/wp-content/uploads/2015/08/shutterstock_92854117-600x600.jpg",
        name: "Petr",
        text: "Oh, I dance very well!",
        picture:
          "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/05/07/7dd771ad-f327-40bf-9c81-b679d4a85b64/juste-debout-2018-diablo-stalamuerte",
        likes: 18,
      },

      {
        avatar:
          "https://s2.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/sanatorij-druzhba-600x600.jpg",
        name: "David",
        text: "Hi all! I'm here for the first time! This is my dog) his name is Steve",
        picture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
        likes: 24,
      },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 0,
    avatar:
      "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let addNews = (postNews, imgNews) => {
  debugger
  let newsPost = {
    avatar:
      "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
    name: "Yuriy",
    text: postNews,
    picture: imgNews,
    likes: 0,
  };
  state.newsPage.news.push(newsPost);
  rerenderEntireTree(state);
};

export default state;
