import './index.css'
import {useState,useContext, useEffect , useMemo} from 'react';
// import EachNewsCard from '../EachNewsCard/index'
import {SearchAndCategoryContext} from '../SearchCategoryContext/index'
// import { v4 as uuidv4 } from 'uuid';

function HomeNews() {
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext)
    const {searchValue , category} = inputCategoryChangeContext;
    const [newsList , setNewsList] = useState([]);

    useEffect(()=> {    
        const fetchNewsData = async ()=> {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=69abcad3b3794c36bde8b80de589167b`;
            const fetchingPromise = await fetch(url);
            const actualNewsData = await fetchingPromise.json();
            setNewsList(actualNewsData.articles);
        }
        fetchNewsData();
    } , [searchValue , category])

    // const filterNullData = useMemo(()=> {
    //     const filteredList = newsList.filter((eachNews)=>(eachNews.content !== null || eachNews.description !== null));
    //     const filtered1 = newsList.map((eachNews)=>({newsId : uuidv4() , ...eachNews}))
    //     console.log(filtered1);
        
    //     // console.log(filteredList);
    // },[newsList])

    return (
    <div className = "HomeNewsContainer">
        <h1>This is Home news container</h1>
        {/* <ul className = "newsArticlesUlContainer">
            {
                newsList.map((eachNewsobj)=>(<li key = {eachNewsobj.newsId}>{eachNewsobj.author}</li>))
            }
        </ul> */}
    </div>
    )
}

export default HomeNews;