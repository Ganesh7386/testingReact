import Home from '../HomeNews/index'
import DetailedNews from '../DetailedNewsComp/index'
import Navbar from '../Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {SearchAndCategoryContextProvider} from '../SearchCategoryContext/index'



function OverAllApplication() {
    return (
    <div>
    <BrowserRouter>
    <SearchAndCategoryContextProvider>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/detailednews" element = {<DetailedNews/>} />
    </Routes>
    </SearchAndCategoryContextProvider>
    
    </BrowserRouter>
    
    </div>)
}

export default OverAllApplication;