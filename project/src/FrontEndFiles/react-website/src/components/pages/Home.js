import '../../App.css';
import React from 'react';


function Home(){
    return(
        <>          
        <div className='admin'> 
            <h2>Search courses by course name: </h2>
            <div className="input-group mb-3">        
                <input type="text" className="form-control" placeholder="Search by course name: ENSF593" ></input>
                <div className="input-group-append">            
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        </div>
        
        
        <div className='admin'>       
            <h2>To find all students currently enrolled, click the button below:</h2>
            <button type="button" className="btn btn-primary btn-lg">Find All Students </button>
        </div>                    
        </>
    );
}

export default Home;