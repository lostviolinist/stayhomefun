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
    
    </>

);
export default HomePage;