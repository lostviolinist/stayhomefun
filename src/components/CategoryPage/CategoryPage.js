import React from 'react';
import './CategoryPage.css'
import {useFirebase} from '../../firebase';

const CategoryPage = props => {
    
    const firebase = useFirebase()
    console.log();

    const [articles, setArticles] = React.useState([])
    console.log({articles});
    React.useEffect(()=>{
        firebase
        .getCategoryArticles(props.category)
        .then(val=> {
            setArticles(val)
            console.log('sdss')
            console.log(val)})
    },[props.category, firebase])

    return (
    <>
        

        <div class="title">
            <h1>{props.category}</h1>
        </div>
<div class="container">
        <div class="resources"> {
      
        articles.map((resource, index) => {
            
    return (
        
            <div class="row mb5"  >
                <div class="col-sm" key={index}>
                    <div class="card res">
                        <div class="card-body">
                            <h5 class="card-title">{resource.title}</h5>
                            <p class="card-text">{resource.desc}</p>
                            <a href={resource.link} class="btn" target="_blank">Take me there</a>
                        </div>
                    </div>
                </div>
            </div>
            
    )
        })
    }
        </div>
        </div>
    </>
    )};

    export default CategoryPage;