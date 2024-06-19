import React from 'react'
import {useState} from 'react';

export const SearchAndCategoryContext = React.createContext({
    searchValue : "",
    category : "Business",
    savedList : [],
    setSearchValue  : ()=>{},
    setCategoryValue : ()=>{},
    addItemToSaveList : ()=> {}
})

export const SearchAndCategoryContextProvider = ({children})=> {
    const [searchValue , setSearchValue] = useState('')
    const [category , setCategory] = useState('Business')
    const [savedList , setSavedList] = useState([])

    const handleSetSearchValue = (text)=> {
        setSearchValue(text);
    }

    const handleSetCategoryValue = (category)=> {
        setCategory(category);
    }

    const handleSavingNews = (newsObj)=> {
        setSavedList([...savedList , newsObj]);
    }

    return (
        <SearchAndCategoryContext.Provider value = {{searchValue , category ,savedList, setSearchValue : handleSetSearchValue , setCategoryValue : handleSetCategoryValue , addItemToSaveList : handleSavingNews}}>
            {children}
        </SearchAndCategoryContext.Provider>
    )

}
