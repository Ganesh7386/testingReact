import {useEffect, useState} from 'react';
import EachNewsCard from '../EachNewsCard/index'


function SavedRoute() {
    const [savedList , setSavedList] = useState([])

    useEffect(()=> {
        const gotList = localStorage.getItem("savedList");
        if(gotList === null) {
            setSavedList([])
        }
        else {
            setSavedList(JSON.parse(gotList));
        }
    } , [])

    return (
        <div>
            <ul className="newsArticlesUlContainer">
                {
                    savedList.map((eachNewsobj)=>(<EachNewsCard key = {eachNewsobj.uuid} eachNewsDetailsObj = {eachNewsobj}  />))
                }
            </ul>
        </div>
    )
}

export default SavedRoute;