import {Link} from 'react-router-dom'


function Home() {
    return (
        <><h1>This is home</h1>
        <Link to = "/detailednews" state = {{name : "ganesh"}} >Go to each</Link>
        </>
        
    )
}


export default Home;