import './App.css'
import img from './images/image 1.png'

const Banner = ()=>{
    return(
        <div className="container" style={{marginTop:"50px"}}>

            <div className="row"  >
                <div className="col " style={{minWidth:'390px'}}>
                    <h1 style={{fontSize:"64px", fontWeight:"bold"}}>Lorem ipsum dolor sit amet</h1>
                    <p style={{fontSize:"24px", fontWeight:"bold", marginTop:"30px"}}>Praesent placerat ipsum nec mi maximus, vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada</p>
                    <button id="b1" type="button" className="btn text-white" style={{backgroundColor:'#5555FF',fontWeight: 'bold', fontSize:'18px'}}>Primary action</button>
                    <button id="b2" type="button"  style={{marginBottom:'30px',marginTop:"35px",border :"#FAFAFF",color:"black",backgroundColor:'#FAFAFF',fontWeight: 'bold', fontSize:'18px'}}>Primary action</button>
                    
                </div>
                <div className="col ">
                    <img id='img' src={img}/>
                </div>
            </div>

        </div>
    )
}

export default Banner