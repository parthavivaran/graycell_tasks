import React from 'react';
function Details()
{
    const[name1,get_name]=React.useState([]);
    const[email,get_email]=React.useState([]);
    const[age,get_age]=React.useState("");
    const[phone,get_phone]=React.useState("");
    const get_data = ()=>
    {
        let name2=[];
        let email2=[];
        
        let user = JSON.parse(localStorage.getItem("user"));
        for(let j=0;j<user.length;j++)
        {
            name2[j]=user[j].name;
            email2[j]=user[j].email;
            
        }
        get_name(name2);
        console.log(name2);
        get_email(email2);
    }
    const getval = (values,index) =>{
        let age;
        let phone;
        
        let user = JSON.parse(localStorage.getItem("user"));
        
        age=user[index].age;
        phone=user[index].phone;
        get_age(age);
        console.log(age);
        get_phone(phone);
    }
    return(
        <>
            <div style={{padding:"20px",margin:"20px"}}>
            <button onClick={get_data}>View All record</button>
            <table>
            <thead>
                <th style={{padding:"20px"}}>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Phone Number</td>
                </th>
                
            </thead>
            <tbody>
                
                    
                        
                        {name1.map((values)=>{
                            return <><tr>
                               <td> {values}</td>
                                </tr></>
                        })}
                    
                    
                    {email.map((values,index)=>{
                            return <><tr>
                                <td>
                                {values}
                                <button onClick={()=>getval(values,index)}>View</button>
                                </td>
                                </tr>
                                </>
                        })}
                        <br/>
                    <td>{age}</td>
                    <td>{phone}</td>
                
            </tbody>
            </table>
            </div>
        </>
    )
}
export default Details;