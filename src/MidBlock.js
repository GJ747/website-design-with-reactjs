import './MidBlock.css'
import img from './images/Ellipse 2.png'

const MidBlock = ()=>{
    return(
        <div className='container' style={{marginTop:"5%"}}>
            <div class="d-flex justify-content-center">
                <div className='flex-column '>
                <h1 style={{fontSize:"53px", fontWeight:"bold"}} className="p-2" >“Lorem ipsum dolor sit amet,</h1>
                <h1 style={{fontSize:"53px", fontWeight:"bold"}} className="p-2">consectetur adipiscing elit.”</h1>
            <div className="p-2 " id='divImg' >
                <img  src={img} style={{marginLeft:"40%"}}/>
                <p id='p1' style={{marginTop:"10px",fontSize:"18px", fontWeight:"bold"}}>Jennifer Rowlands</p>
                <p id='p2' style={{fontSize:"18px"}}>Chief Design Office, uxtoast</p>
            </div>
            </div>
            </div>
        </div>

    )

}

export default MidBlock