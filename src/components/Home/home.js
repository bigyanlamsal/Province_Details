import React from 'react';
import './home.css'

const Home =()=>{
    return(
        <div className='containerHome'>
            <div className="time">
                <div className="timeContent">
                     <div className='alignTime'>
                         <h1>5:13 AM</h1>
                     </div>
                     <div className="timeDescription">
                         <p>
                         Before the unification of Nepal, the Kathmandu Valley was known as Nepal.[a] The precise origin of the term Nepāl is uncertain. Nepal appears in ancient Indian literary texts dated as far back as the fourth century BC.[which?] An absolute chronology can not be established, as even the oldest texts may contain anonymous contributions dating as late as the early modern period. Academic attempts to provide a plausible theory are hindered by the lack of a complete picture of history and insufficient understanding of linguistics or relevant Indo-European and Tibeto-Burman languages.[19]
                         </p>
                     </div>
                </div>
                <hr></hr>
                <div className="image1">
                    <h3>For more information...</h3>
                    <h3>Navigate through the provided navbar</h3>
                </div>

            </div>

            <div className="content2">
              <div className="trees">
              <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt='nature'/>
              </div>
              <br/>
              <div className="countryDescription">
                   <h1>Our cities...</h1>
                   <h2>Kathmandu</h2>
                   <h2>Bhaktapur</h2>
                   <h2>Illam</h2>
                   <h2>Sikkim</h2>
              </div>
            </div>
        </div>
    )
}

export default Home;