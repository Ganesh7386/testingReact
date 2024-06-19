import {useLocation} from 'react-router-dom'
import './index.css'

const DetailedNews = ()=> {

    const location = useLocation();
    console.log(location);
    
    return (
    <div className = "savedListContainer">
    <h1>This is saved items page</h1>
    </div>)

}
export default DetailedNews;