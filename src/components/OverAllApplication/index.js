import Home from '../Home/index'
import DetailedNews from '../DetailedNews/index'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {SearchAndCategoryContextProvider} from '../SearchCategoryContext/index'



function OverAllApplication() {
    return (
    <div>
    <BrowserRouter>
    <SearchAndCategoryContextProvider>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/detailednews" element = {<DetailedNews/>} />
    </Routes>
    </SearchAndCategoryContextProvider>
    
    </BrowserRouter>
    
    </div>)
}

export default OverAllApplication;