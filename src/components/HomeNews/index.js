import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {SearchAndCategoryContext} from '../SearchCategoryContext/index'


function Home() {
    console.log(SearchAndCategoryContext);
    const cont = useContext(SearchAndCategoryContext);
    const {searchValue , category} =  cont;
    console.log(category);
    return (
        <><h1>This is home</h1>
        <Link to = "/detailednews" state = {{name : "ganesh"}} >Go to each</Link>
        </>
    )
}


export default Home;