import './index.css';
import { useState, useContext, useEffect, useMemo } from 'react';
import EachNewsCard from '../EachNewsCard/index'
import { SearchAndCategoryContext } from '../SearchCategoryContext/index';
import { v4 as uuidv4 } from 'uuid';

function HomeNews() {
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext);
    const { searchValue, category } = inputCategoryChangeContext;
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const url = `https://api.thenewsapi.com/v1/news/all?api_token=pmwVWa8BYqoyIJKq3Mg0efLRqbAPO0L80Mi3dmzP&language=en&category=technology`;
                // const url = `https://deploydemoxyz.vercel.app/user/`;
                const fetchingPromise = await fetch(url);

                if (!fetchingPromise.ok) {
                    throw new Error(`HTTP error! Status: ${fetchingPromise.status}`);
                }

                const actualNewsData = await fetchingPromise.json();
                console.log(actualNewsData.data);

                // if (!actualNewsData.articles) {
                //     throw new Error('No articles found in the response');
                // }

                // const listOfArticles = actualNewsData.articles;

                // const articlesWithId = listOfArticles.map(article => ({
                //     id: uuidv4(),
                //     ...article,
                // }));

                setNewsList(actualNewsData.data);
            } catch (err) {
                console.error('Failed to fetch news data:', err);
                setError(err.message);
            }
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

    return (
        <div className="HomeNewsContainer">
            <h1>This is Home news container</h1>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="newsArticlesUlContainer">
                    {newsList.map(eachNewsobj => (
                        <EachNewsCard key = {eachNewsobj.uuid} eachNewsDetailsObj = {eachNewsobj} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomeNews;
