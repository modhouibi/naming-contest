import React from 'react'

const ContestPreview=(props)=>{

    return(
        <div className="contest-preview">
    <div>{props.contest.categoryName}</div>
    <div>{props.contest.contestName}</div>
      </div>
    );
}



export default ContestPreview;