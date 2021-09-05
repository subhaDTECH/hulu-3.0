import React from 'react'
import Thumnail from './Thumnail'
import FlipMove from 'react-flip-move';

const Results = ({results}) => { 
    return (
        <FlipMove className="results my-10 px-5  gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:  
        flex-wrap  justify-center">

          {/* <FlipMove> */}
          {
            results.map((result)=>{
                return (
                    <Thumnail key={result.id} result={result}  />
                )
            })
        }

          {/* </FlipMove> */}
      
            
        </FlipMove>
    )
}

export default Results
