import React from "react";

function MemberDetail({match}) {
    console.log(match)
    return (
        <h3 style={{textAlign:'center'}}>{match.url.split('/').pop(-1)}</h3>
    )   
    
    
}

export default MemberDetail