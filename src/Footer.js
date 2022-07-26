import img from './images/Capture3.PNG'
import apple from './images/apple.PNG'
import google from './images/googleb.PNG'

const Footer =()=>{
    return(
        <div id='footer'>
        <div  className="container">
            <div className="row">
                <div className="col-sm">
                    <img src={img}/>
                </div>
                <div className="col-sm mt-2">
                    <h5 style={{fontWeight:"bold"}}>Company</h5>
                    <h5>About us</h5>
                    <h5>Meet the team</h5>
                    <h5>Careers</h5>
                    <h5>Blog</h5>
                </div>
                <div className="col-sm mt-2">
                    <h5 style={{fontWeight:"bold"}}>Product</h5>
                    <h5>Product</h5>
                    <h5>Product</h5>
                    <h5>Product</h5>
                    <h5>Product</h5>
                </div>
                <div className="col-sm mt-2">
                    <h5 style={{fontWeight:"bold"}}>Product</h5>
                    <h5>Product</h5>
                    <h5>Product</h5>
                    <h5>Product</h5>
                </div>
                <div className="col-sm">
                <button id='b3' className='btn btn-light btn-lg' style={{fontWeight:"bold",fontSize:'18px'}} ><i class="bi bi-apple"></i> App Store</button>
                </div>
                <div className="col-sm">
                <button id='b4' className='btn btn-light btn-lg' style={{fontWeight:"bold",fontSize:'18px'}} ><i class="bi bi-google-play"></i> Play Store</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer