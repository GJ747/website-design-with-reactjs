import './Card2.css'

const Card2 = () =>{
    return(
    <div className="container">
        <div className="row">
        <div id="c11" class="col-sm mt-5">
            <h1 style={{fontWeight: 'bold', fontSize:'32px',marginTop:'50px'}}>Free</h1>
            <span style={{fontWeight: 'bold', fontSize:'56px',marginTop:'50px'}}>£0</span><span style={{fontWeight: 'bold', fontSize:'32px'}}>/month</span>
            <p style={{fontWeight: 'bold', fontSize:'18px',marginTop:'20px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-x"></i> Lorem ipsum dolor</p>
            <button className='btn' style={{height:'56px',width:"320px",marginTop:"20px"}}>Sign up</button>
        </div>

        <div id="c12" class="col-sm">
            <h1 style={{fontWeight: 'bold', fontSize:'32px',marginTop:'50px'}}>Standard</h1>
            <span style={{fontWeight: 'bold', fontSize:'56px',marginTop:'50px'}}>£9</span><span style={{fontWeight: 'bold', fontSize:'32px'}}>/month</span>
            <p style={{fontWeight: 'bold', fontSize:'18px',marginTop:'40px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-x"></i> Lorem ipsum dolor</p>
            <button className='btn' style={{backgroundColor: 'white',height:'56px',width:"320px",marginTop:"40px"}}>Sign up</button>
        </div>

        <div id="c13" class="col-sm mt-5">
            <h1 style={{fontWeight: 'bold', fontSize:'32px',marginTop:'50px'}}>Enterprise</h1>
            <span style={{fontWeight: 'bold', fontSize:'56px',marginTop:'50px'}}>£16</span><span style={{fontWeight: 'bold', fontSize:'32px'}}>/month</span>
            <p style={{fontWeight: 'bold', fontSize:'18px',marginTop:'20px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-check"></i> Lorem ipsum dolor</p>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}><i class="bi bi-x"></i> Lorem ipsum dolor</p>
            <button className='btn' style={{height:'56px',width:"320px",marginTop:"20px"}}>Sign up</button>
        </div>
        </div>
    </div>
    )
}

export default Card2