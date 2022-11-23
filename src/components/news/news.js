import React from "react";
import Axios from 'axios';
class News extends React.Component
{
  state = {
    newsData:[]
  }
  componentDidMount()
  {
    const URL="https://newsapi.org/v2/everything?q=tesla&from=2022-07-21&sortBy=publishedAt&apiKey=3ab4a45b269c45a6ae9c09f137325f20"
    Axios.get(URL)
    .then(res=>{
      this.setState({newsData:res.data.articles})
    })
  }
  render()
  {
    return(
      <div>
      <div className="comp">
        <h1> Latest News</h1>
        {this.state.newsData.map(news=>
          <div>
            <h1>{news.title}</h1>
            <h2>{news.description}</h2>
            <h3 style={{color:'red'}}>{news.content}</h3>
            <img src={news.urlToImage} height={300} width={600} alt="news" />
            </div>
          )}
          </div>
      </div>
    )
  }
}
export default News;