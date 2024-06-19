import Home from '../Home/index'
import DetailedNews from '../DetailedNews/index'
import {BrowserRouter , Routes , Route} from 'react-router-dom'



function OverAllApplication() {
    return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/detailednews" element = {<DetailedNews/>} />
    </Routes>
    </BrowserRouter>
    
    </div>)
}

export default OverAllApplication;