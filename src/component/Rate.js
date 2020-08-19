import React from 'react'

const Rate=({rating,starIndex})=>{

    const stars=(x)=>{
        let starsArray=[];
        for(let i = 1; i <= 5; i++) { 
            if (i <= x) {
                starsArray.push(
                <span key={i}
                 onClick={() => starIndex(i)}
                  style={{color:"yellow"}}>
                      ★</span>
                      );

            }
            else{ starsArray.push(
            <span key={i}
             onClick={() => starIndex(i)}
              style={{color:"yellow"}}>
                  ☆
                  </span>)
                  ;
                }
        }
        return starsArray;

    };

    return <div> {stars(rating)} </div>
    
}
Rate.defaultProps = {
    starIndex: () => {},
    rating: 1,
  };

export default Rate
