
export function fetchCustomNews(source, relevance){
    //return the actual action to do
    return function(dispatch){
      fetch("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=d2bd4483ceb44f01ae177734f4228c4e")
      .then(res => {
          return res.json();
          
      })
      .then(res => {
       // console.log(res)
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
      })
      .catch(err => {
          console.log(err);
      })

   }
}