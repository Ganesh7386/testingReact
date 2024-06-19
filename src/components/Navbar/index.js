import {useState , useContext} from 'react'
import {Link} from 'react-router-dom'
import {SearchAndCategoryContext} from '../SearchCategoryContext/index'
import { MdCategory , MdHome , MdSave ,MdSearch } from 'react-icons/md';
import './index.css'

const imageUrl = "https://previews.123rf.com/images/valentint/valentint1605/valentint160506798/57147228-daily-news-icon-internet-button-on-white-background.jpg"

function Navbar() {
    const [showInput , setShowInput] = useState(false);
    const [showCategories , setShowCategories] = useState(false);
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext)
    const {setSearchValue , setCategoryValue} = inputCategoryChangeContext;

    return (
        <div className = "wholeNavBarContainer">
        <div className = "navBarContainer">
        <img src = {imageUrl} alt = "logo" className = "logoImgStyling" />
        <div className = "linksContainer">
        <Link className = "navbarLinks" to = "/"><button type = "button"><MdHome size={24} /></button></Link>
        <Link className='navbarLinks' to = "/saved"><button type= "button"><MdSave size={24} /></button></Link>
        </div>
        <ul className = "navbarOptionsContainer">
        <li><button onClick = {()=>{setShowInput(!showInput);setShowCategories(false)}} type = "button"><MdSearch size = {24}/></button></li>
        <li><button type = "button" onClick={()=>{setShowCategories(!showCategories); setShowInput(false)}} ><MdCategory size={24} color="blue" /></button></li>
        </ul>
    </div>
    <div className = {` searchContainer ${showInput ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "searchElement">Search Here</label>
        <input type = "text" id = "searchElement" placeholder='Search to filter' onChange = {(e)=>{setSearchValue(e.target.value)}} />
    </div>
    <div className = {` categoriesContainer ${showCategories ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "categories">Search categories here</label>
        <select id = "categories" onChange = {(e)=>{setCategoryValue(e.target.value)}}>
            <option value = "Business">Business</option>
            <option value = "Entertainment">Entertainment</option>
            <option value = "technology">Technology</option>
        </select>
    </div>
    </div>
    )
}


export default Navbar