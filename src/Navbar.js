import logo from './images/Combined Shape Copy 2.png'


const Navbar = ()=>{

return(
    <div className='container'>
         <nav className="navbar navbar-expand-lg " style={{height:'80px', fontSize:'18px'}} >
        <a className="navbar-brand " href="/" style={{fontSize:'32px',fontWeight: 'bold'}}>
        <img  src={logo} width="26" height="26" alt=""/> sodo
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item active pt-2">
              <a style={{color:'black'}} id="login" className="nav-link" href="">About us</a>
            </li>
            <li className="nav-item pt-2">
              <a style={{color:'black'}} id="signup" className="nav-link" href="">Download</a>
            </li>
            <li className="nav-item pt-2">
              <a style={{color:'black'}} id="user" className="nav-link" href="">Contact</a>
            </li>
            
          </ul>
          <ul className="navbar-nav mx-auto " style={{paddingLeft:'44%'}}>   
          <li className="nav-item pt-2" style={{marginRight:'20px'}}>
                <a id="cart" style={{fontWeight: 'bold'}} className="nav-link text-primary " href="">log in</a>
              </li>
          <li className="nav-item">
          <button type="button" class="btn text-white" style={{backgroundColor:'#5555FF',width:'191px',height:'56px',fontWeight: 'bold', fontSize:'18px'}}>Primary action</button>
              </li>
            </ul>
        </div>
      </nav>

    </div>
)

}

export default Navbar