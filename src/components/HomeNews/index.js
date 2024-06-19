import './index.css';
import { useState, useContext, useEffect, useMemo } from 'react';
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
                const url = `https://newsdata.io/api/1/latest?apikey=pub_46799efe61ae689a6306f1dd9ac70b0f7a2dc&q=pizza&category=${category}`;
                // const url = `https://deploydemoxyz.vercel.app/user/`;
                const fetchingPromise = await fetch(url);

                if (!fetchingPromise.ok) {
                    throw new Error(`HTTP error! Status: ${fetchingPromise.status}`);
                }

                const actualNewsData = await fetchingPromise.json();
                console.log(actualNewsData.results);

                // if (!actualNewsData.articles) {
                //     throw new Error('No articles found in the response');
                // }

                // const listOfArticles = actualNewsData.articles;

                // const articlesWithId = listOfArticles.map(article => ({
                //     id: uuidv4(),
                //     ...article,
                // }));

                setNewsList(actualNewsData.results);
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
                        <li key={eachNewsobj.article_id}>{eachNewsobj.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomeNews;
