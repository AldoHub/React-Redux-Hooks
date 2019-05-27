import React, { useState, useEffect } from 'react';
//redux hooks
//import the action
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";


const Main = () => {
    //news sources
    const [sources, setSources] = useState([]);
    //select source
    const [source, setSource] = useState("");
    //select relevance
    const [relevance, setRelevance] = useState("");

    //----- connect redux
    //here we get add the reducer that has the state we want
    const customNewsSelector = useSelector((state) => state.CustomSearch);
    //dispatch hook
    const dispatch = useDispatch();
    //action to dispatch
    const getCustomNews = (source, relevance) => dispatch(fetchCustomNews(source, relevance));

    //get the sources
    const getSources = () => {
        fetch("https://newsapi.org/v1/sources?")
        .then(res => {
            console.log(customNewsSelector.customNews);
            return res.json();
            
        })
        .then(response => {
            console.log(response);
            setSources(response.sources)
        })
    }



    //effect
    useEffect(()=>{
        getSources();
    }, [])


    const getNews = (e) => {
        console.log(source);
        e.preventDefault();
        if(source === "" || source === "nothing" ){
            console.log("There is no source selected");
        }else{
            getCustomNews(source, relevance);
            console.log(customNewsSelector.customNews)
        }
    }
    
    let news;
    if(customNewsSelector.customNews.length > 0){
      news =  <div className="news">
                    { customNewsSelector.customNews.map(x => {
                            return (
                                <div className="post" key={x.title}> 
                                <img src={x.urlToImage} alt={x.title} />
                                    <h2>{x.title}</h2>
                                    <p>{x.description}</p>
                                </div>
                            )
                        }) 
                    }
               </div>              
    
    }else{
        news = <p>Select a source and relevance from the form</p>
    }

    return(
        <React.Fragment>
            <section>
                <h2>Custom Search</h2>

                 <form onSubmit = {getNews}>
                    <div className="form-control">
                        <label>Source</label>
                        <select onChange = {e => setSource(e.target.value)}>
                            <option value="nothing">Select an option...</option>
                            {
                                sources.map(source => {
                                    return(
                                        <option key={source.id} value={source.id}>{source.name}</option>
                                    )
                                })
                            }
                        </select>
                        <label>Relevance</label>
                        <select onChange={e => setRelevance(e.target.value) }>
                            <option value="latest">Latest</option>
                            <option value="top">Top</option>
                        </select>
                        <input type="submit" value="Search" />
                    </div>
                 </form>   
           
                    {news}
                     
                           
            </section>
        </React.Fragment>
    )   
}

export default Main;