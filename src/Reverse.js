import React from 'react';
function Reverse()
{
    const[str,get_str]=React.useState("");
    const[str1,get_str1]=React.useState("");
    const get_reverse = ()=>
    {
        let j=0,i;
        let new_str=[];
        for(i=str.length-1;i>=0;i--)
        {
            new_str[j]=str[i];
            j++;
        }
        get_str1(new_str);
    }
    return(
        <>
            <input type="text" onChange={(event)=>get_str(event.target.value)}></input>
            <button onClick={get_reverse}>Reverse</button>
            {str1}
        </>
    )
}
export default Reverse;