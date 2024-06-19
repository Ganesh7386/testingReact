import {useLocation} from 'react-router-dom'


const DetailedNews = ()=> {

    const location = useLocation();
    console.log(location);
    
    return (<h1>This is saved items page</h1>)

}
export default DetailedNews;