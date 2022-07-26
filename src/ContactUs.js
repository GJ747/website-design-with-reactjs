
const ContactUs = ()=>{
    return(
        <div className=" container mx-auto" style={{minWidth:"400px",maxWidth:'800px'}}>
            <div style={{marginTop:'30px'}} >
            <h2  style={{fontSize:"40px", fontWeight:"bold"}}>Contact us</h2>
            <div id="contact"  style={{marginTop:"30px"}}>
            <form>
                    <div class="row">
                        <div class=" col-md-6 input-group-lg">
                        <label for="inputEmail4">First name</label>
                        <input type="text" class="form-control input-lg" id="inputEmail4" placeholder="Alex"/>
                        </div>
                        <div class=" col-md-6 input-group-lg">
                        <label for="inputPassword4">Last name</label>
                        <input type="text" class="form-control input-lg" id="inputPassword4" placeholder="Bloggs"/>
                        </div>
                    </div>
                    <div class="form-group input-group-lg">
                        <label for="inputAddress" style={{marginTop:'30px'}}>Email address</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="alex.bloggs@email.com"/>
                    </div>
                    <div class="form-group input-group-lg">
                        <label for="inputAddress2" style={{marginTop:'30px'}}>Your message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Please enter your message"></textarea>
                    </div>
                    <div style={{marginTop:"20px",float: 'right'}}>
                    <button id="b1" type="button" className="btn text-white" style={{backgroundColor:'#5555FF',fontWeight: 'bold', fontSize:'18px'}}>Submit message</button>
                    </div>    
                
            </form>
            </div>
            </div>
        </div>
    )
}

export default ContactUs