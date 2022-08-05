import React from 'react';

  
const NewsMore = (props) => {
    // let array = [
    //     {new : Чп, number : 1},
    //     {new : Взрыв, number : 1},
    //     {new : Пожар, number : 1},
    //     {new : Угон, number : 1},
    //     {new : Номер, number : 1},
    //     {new : Столбы, number : 1},
    // ]

// let newArray = array.map((a) => (
    
// ))

    return (
        <div>
        <p>News : {props.news}</p>
        <p>Number news : {props.number}</p>
    </div>
    )
}

export default NewsMore;