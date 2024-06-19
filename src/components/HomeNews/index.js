import './index.css';
import { useState, useContext, useEffect, useMemo } from 'react';
import EachNewsCard from '../EachNewsCard/index'
import { SearchAndCategoryContext } from '../SearchCategoryContext/index';
import ReactLoading from 'react-loading';
import { v4 as uuidv4 } from 'uuid';

function HomeNews() {
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext);
    const { searchValue, category } = inputCategoryChangeContext;
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading , setIsLoading] = useState("true");

    useEffect(() => {
        const fetchNewsData = async () => {
            setIsLoading("true");
            try {
                const url = `https://api.thenewsapi.com/v1/news/all?api_token=pmwVWa8BYqoyIJKq3Mg0efLRqbAPO0L80Mi3dmzP&language=en&category=technology`;
                // const url = `https://deploydemoxyz.vercel.app/user/`;
                const fetchingPromise = await fetch(url);


                const actualNewsData = await fetchingPromise.json();
                console.log(actualNewsData.data);

                setNewsList(actualNewsData.data);
            } catch (err) {
                console.error('Failed to fetch news data:', err);
                setError(err.message);
            }
            setIsLoading("false");
        };
        fetchNewsData();
    }, [searchValue, category]);

    // const filteredNewsList = useMemo(() => {
    //     const filteredList = newsList.filter(
    //         eachNews => eachNews.content !== null || eachNews.description !== null
    //     );
    //     console.log(filteredList);
    //     return filteredList;
    // }, [newsList]);

    
    const successfullUi = ()=> (
        <>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="newsArticlesUlContainer">
                    {newsList.map(eachNewsobj => (
                        <EachNewsCard key = {eachNewsobj.uuid} eachNewsDetailsObj = {eachNewsobj} />
                    ))}
                </ul>
            )}
        </>
    )

    const renderBasedOnLoading = ()=> {
        switch(isLoading) {
            case 'true' :
                return <div className = "loadingContainer"><ReactLoading type={'spin'} color={'blue'} height={'50px'} width={'50px'} /></div>;
            case 'false' :
                return successfullUi();
        }
    }

    return (
        <div className="HomeNewsContainer">
            <h1>This is Home news container</h1>
            {renderBasedOnLoading()}
        </div>
    );
}

export default HomeNews;
