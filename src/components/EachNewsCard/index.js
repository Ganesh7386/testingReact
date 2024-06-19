import './index.css';
import {Link} from 'react-router-dom'
// import {SearchAndCategoryContext} from '../SearchCategoryContext/index'


function EachNewsCard({eachNewsDetailsObj}) {

    const {title,source} = eachNewsDetailsObj;
    // const searchAndCategoryContext = useContext(SearchAndCategoryContext)
    // const {addItemToSaveList} = searchAndCategoryContext;

    const handleSavingItem = ()=> {
        const previousList = localStorage.getItem('savedList');
        console.log(previousList);
        if(previousList === null) {
            const newList = JSON.stringify([eachNewsDetailsObj]);
            localStorage.setItem('savedList' , newList);
        }
        else {
            const prevList = JSON.parse(previousList);
            console.log(prevList);
            const newList = JSON.stringify([...prevList , eachNewsDetailsObj]);
            localStorage.setItem('savedList' , newList);
        }
    }

    return (
        <li className = "eachNewsCardContainer">
        <div className = "innerContainer">
            <div className = "authorNameContainer">
                <p>{source === null ? "no author" : source}</p>
            </div>
            <div className = "contentContainer">
                <p>{`${title === null ? 'Content unavailable' : title}`}</p>
            </div>
            <div className = "cardOptionsContainer">
                <button onClick = {handleSavingItem} className = "saveBtn" type = "button">Save</button>
                <Link to="/news" state = {eachNewsDetailsObj}  ><button className = "fullDetailsBtn" type = "button">Full details</button></Link>
            </div>
        </div>
        </li>
    )
}

export default EachNewsCard;