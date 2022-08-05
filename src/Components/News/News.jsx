import React from 'react';
import NewsMore from './NewsMore';

const News = (props) => {
  
    let newArray = props.state.arrayNews.map(n => (
        <NewsMore news={n.new} number={n.num}/>
    ))

return (
    
    <div>
        News! why news is so boring?
        {newArray}
    </div>
)
}

export default News;