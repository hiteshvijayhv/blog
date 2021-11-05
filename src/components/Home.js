import React from 'react'
import './Home.css'


function Home() {

    return (
        <div className='main-container'>
            <div className='home-center'>

                    <div className='info-div'>
                         <p className="intro">Hey👋, I am Hitesh</p>
                         <p className="intro-description">I enjoy building web applications and solving problems
                         <div className='social'>
                            <a href='https://twitter.com/hiteshvijayhv' target="_blank">
                                 <img  className='icon' src='https://user-images.githubusercontent.com/46933160/121767463-ef387980-cb75-11eb-9413-b32129def4ce.png'>

                                 </img>
                             </a>
                             <a href='https://github.com/hiteshvijayhv' target="_blank">
                                 <img  className='icon' src='https://user-images.githubusercontent.com/46933160/121767611-d1b7df80-cb76-11eb-9c96-f16cc16214ec.png'>
                                 </img>
                             </a>
                    
                            </div> 
                         
                         </p>

                         
                         
                    </div>
                    <div className='img-div'>
                    <img className='profile-img'
                        src='https://user-images.githubusercontent.com/46933160/121765118-5d754000-cb66-11eb-8b52-33f477b49a6e.jpg'>
                    </img>
                    </div>
                
                </div>
        </div>
    )
}

export default Home

{/* */}