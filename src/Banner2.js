import './App.css'
import img from './images/image 1.png'

const Banner2 = ()=>{
    return(
        <div className="container" style={{marginTop:"50px"}}>

            <div className="row"  >

                <div className="col ">
                    <img id='img' src={img}/>
                </div>

                <div className="col " style={{minWidth:'390px',marginTop:"8%"}}>
                    <h1 style={{fontSize:"40px", fontWeight:"bold"}}>Lorem ipsum dolor sit amet</h1>
                    <h1 style={{fontSize:"40px", fontWeight:"bold"}}>consectetur adipiscing elit.</h1>
                    <p style={{fontSize:"24px", fontWeight:"bold", marginTop:"30px"}}>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada.</p>  
                </div>
             
            </div>

        </div>
    )
}

export default Banner2