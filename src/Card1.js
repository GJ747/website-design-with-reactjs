import card from './images/Capture.PNG'
import './card1.css'

const Card1 = ()=>{
    return(
        <div className="container " id='c' >
            <div  className="row ">
            <div class="col-sm">
           <div id='c1' class="card " >
            <img class="card-img-top" src={card} alt="Card image cap"/>
            <div class="card-body">
                <h2 style={{fontWeight: 'bold', fontSize:'24px'}} class="card-title" >Card title</h2>
                <p style={{fontWeight: 'bold', fontSize:'18px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a style={{height:'56px', width:'100%',backgroundColor:'#5555FF',fontWeight: 'bold', fontSize:'18px'}} href="#" class="btn btn-primary">Button</a>
            </div>
            </div>
            </div>

            <div class="col-sm">
            <div id='c2' class="card " >
            <img class="card-img-top" src={card} alt="Card image cap"/>
            <div class="card-body">
                <h2 style={{fontWeight: 'bold', fontSize:'24px'}} class="card-title">Card title</h2>
                <p style={{fontWeight: 'bold', fontSize:'18px'}}  class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a style={{height:'56px', width:'100%',backgroundColor:'#5555FF',fontWeight: 'bold', fontSize:'18px'}} href="#" class="btn btn-primary">Button</a>
            </div>
            </div>
            </div>

            <div class="col-sm">
            <div id='c3' class="card" >
            <img class="card-img-top" src={card} alt="Card image cap"/>
            <div class="card-body">
                <h2 style={{fontWeight: 'bold', fontSize:'24px'}} class="card-title">Card title</h2>
                <p style={{fontWeight: 'bold', fontSize:'18px'}} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" style={{height:'56px', width:'100%',backgroundColor:'#5555FF',fontWeight: 'bold', fontSize:'18px'}} class="btn btn-primary">Button</a>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Card1