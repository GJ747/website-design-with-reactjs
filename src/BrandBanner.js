import monzo from './images/Monzo.png'
import zoopla from './images/Zoopla.png'
import google from './images/Google.png'
import nike from './images/Nike.png'
import amazon from './images/Amazon.png'
const BrandBanner = () =>{

    return(
        <div className="container" style={{marginLeft:"15%"}}>
            <h1 style={{fontWeight: 'bold', fontSize:'32px',marginTop:'8%'}}>Trusted by</h1>
        <div className="row">
            <img id = 'i1'  className=" col-sm" src={monzo}/>
            <img id = 'i2'  className=" col-sm" src={zoopla}/>
            <img id = 'i3'  className=" col-sm" src={google}/>
            <img id = 'i4'  className=" col-sm" src={nike}/>
            <img id = 'i5'  className=" col-sm" src={amazon}/>
        </div>
        
        </div>

    )

}

export default BrandBanner