import {useState , useContext} from 'react'
import {Link} from 'react-router-dom'
import {SearchAndCategoryContext} from '../SearchCategoryContext/index'
import { MdCategory } from 'react-icons/md';
import './index.css'

function Navbar() {
    const [showInput , setShowInput] = useState(false);
    const [showCategories , setShowCategories] = useState(false);
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext)
    const {setSearchValue , setCategoryValue} = inputCategoryChangeContext;

    return (
        <div className = "wholeNavBarContainer">
        <div className = "navBarContainer">
        <h1>Dail News</h1>
        <div className = "linksContainer">
        <Link className = "navbarLinks" to = "/">Home</Link>
        <Link className='navbarLinks' to = "/saved">Saved</Link>
        <Link className='navbarLinks' to = "/detailednews">Saved</Link>
        </div>
        <ul className = "navbarOptionsContainer">
        <li><button onClick = {()=>{setShowInput(!showInput);setShowCategories(false)}} type = "button">search</button></li>
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