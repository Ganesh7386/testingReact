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
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=69abcad3b3794c36bde8b80de589167b`;
                // const url = `https://deploydemoxyz.vercel.app/user/`;
                const fetchingPromise = await fetch(url);

                if (!fetchingPromise.ok) {
                    throw new Error(`HTTP error! Status: ${fetchingPromise.status}`);
                }

                const actualNewsData = await fetchingPromise.json();
                console.log(actualNewsData);

                // if (!actualNewsData.articles) {
                //     throw new Error('No articles found in the response');
                // }

                const listOfArticles = actualNewsData.articles;

                const articlesWithId = listOfArticles.map(article => ({
                    id: uuidv4(),
                    ...article,
                }));

                setNewsList(articlesWithId);
            } catch (err) {
                console.error('Failed to fetch news data:', err);
                setError(err.message);
            }
        };
        fetchNewsData();
    }, [searchValue, category]);

    const filteredNewsList = useMemo(() => {
        const filteredList = newsList.filter(
            eachNews => eachNews.content !== null || eachNews.description !== null
        );
        console.log(filteredList);
        return filteredList;
    }, [newsList]);

    return (
        <div className="HomeNewsContainer">
            <h1>This is Home news container</h1>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <ul className="newsArticlesUlContainer">
                    {filteredNewsList.map(eachNewsobj => (
                        <li key={eachNewsobj.id}>{eachNewsobj.author || 'Unknown Author'}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default HomeNews;
