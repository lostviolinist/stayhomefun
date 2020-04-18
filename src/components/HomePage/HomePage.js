import React from 'react';
import './HomePage.css'



const HomePage = props => (
    <>
    <div class="container">
        <div>
            <p className="hashtag">#STAYATHOME</p>
            
        </div>
        <div>
        <p className="desc"><span >Bored at home? Here are some some treats to keep you occupied!</span> <span> &#128071;</span></p>
        </div>
    </div>
    <div class="container">
    <div className="category">
        
        <div class="card ">
            
            <div class="card-body">
                <h4 class="card-title">
                    News
                </h4>
                <div class="card-text">
                    Get news from verified sources... not Whatsapp University 2020
                </div>
                
            </div>
        </div>
        
       
        </div>
    </div>

    <div class="container fb">
        <h5>See the latest tweets from the WHO:</h5>
        <iframe className="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FWHO%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>

    <div class="container google">
        <h5>Have a resource to suggest? Submit it here!</h5> 
        <iframe className="googleforms" src="https://docs.google.com/forms/d/e/1FAIpQLSdKyHyYkdpJ3fheffxnaf9s3w_LMB_Fg7RiAsSJrAURuw10rA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>

    
    
    </>

);
export default HomePage;