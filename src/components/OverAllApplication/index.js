import HomeNews from '../HomeNews/index'
import DetailedNews from '../DetailedNewsComp/index'
import Navbar from '../Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {SearchAndCategoryContextProvider} from '../SearchCategoryContext/index'
import SavedRoute from '../SavedRoute/index'
import './index.css'


function OverAllApplication() {
    return (
    <div className = "overAllApplicationContainer">
    <BrowserRouter>
    <SearchAndCategoryContextProvider>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<HomeNews/>} />
        <Route path = "/saved" element = {<SavedRoute/>} />
    </Routes>
    </SearchAndCategoryContextProvider>
    </BrowserRouter>
    
    </div>)
}

export default OverAllApplication;