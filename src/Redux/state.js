let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi, how are you?", likesCount: 4 },
      { id: 1, post: "It's my first post", likesCount: 54 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your dream ?" },
      { id: 3, message: "Nice bro! Thanks ?" },
    ],
    dialogs: [
      { id: 1, name: "Yuriy", avatar : 'https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album'},
      { id: 2, name: "Nika", avatar : 'https://the-challenger.ru/wp-content/uploads/2020/06/shutterstock_1749605879-600x600.jpg'},
      { id: 3, name: "Liza", avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA3PuNUIJHAviGQ0BQ5Q2xNscd-EjRC8IPQ&usqp=CAU'},
      { id: 4, name: "Petr", avatar : 'https://the-challenger.ru/wp-content/uploads/2015/08/shutterstock_92854117-600x600.jpg'},
      { id: 5, name: "David", avatar : 'https://s2.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/sanatorij-druzhba-600x600.jpg'},
    ],
  },
  newsPage: {
    arrayNews: [
      { new: "Boys and Girls", num: 1 },
      { new: "Coca-Cola and Sprite", num: 2 },
      { new: "Russia and Mexico", num: 3 },
      { new: "Drink cup of coffee", num: 4 },
      { new: "That boy want to be famous", num: 5 },
    ],
  },

  musicPage: {
    playlist: [
      { avtor: "Luba", trek: "Hours" },
      { avtor: "Bob Dylan", trek: "Knock knock" },
      { avtor: "Red cheil the papers", trek: "Californication" },
    ],
  },
};

export default state;
