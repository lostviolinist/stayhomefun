import React from 'react';
import './HomePage.css'
import {categories} from '../../constant';

import { Link } from 'react-router-dom'

const HomePage = () => {

    console.log({ categories })

    return (
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
        {
            categories.map((category, index) => (
        <div class="card cat" key={index}>
            <Link to={`/category/${category.title}`} className="link">
            <div class="card-body">
                
                    
                    <h4 class="card-title">
                        {category.title}
                    </h4>
                    
                
                <div class="card-text">
                    {category.label} 
                </div>
            </div>
            </Link>
        </div>
            ))
        }
        
       
        </div>
    </div>

    <div class="container fb">
        <h5>See the latest posts from the WHO:</h5>
        <iframe className="facebook container" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FWHO%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>

    <div class="container google">
        <h5>Have a resource to suggest? Submit it here!</h5> 
        <iframe className="googleforms" src="https://docs.google.com/forms/d/e/1FAIpQLSdKyHyYkdpJ3fheffxnaf9s3w_LMB_Fg7RiAsSJrAURuw10rA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>

    
    
    </>

);}
export default HomePage;