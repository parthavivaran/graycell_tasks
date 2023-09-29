import React from 'react';
function Form()
{
    const[name,get_name]=React.useState("");
    const[email,get_email]=React.useState("");
    const[phone,get_phone]=React.useState("");
    const[age,get_age]=React.useState(0);
    const[error,get_error]=React.useState({});
    const get_email1 = (event) =>
    {
        get_email(event.target.value);
        console.log(email);
    }
    const getdata = (event) =>
    {
        event.preventDefault();
        let error={};
        let flag=0;
        if(!name)
        {
            error.name="Enter Name";
            get_error({error});
            flag=1;
        }
       
        if(!email)
        {
            error.email="Enter Email";
            get_error({error});
            flag=1;
        }
        // else{
        //     console.log(email);
        //     if(email !=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
        //     {
        //         error.email="Enter Valid Email";
        //         get_error({error});
        //         flag=1;
        //     }
        // }
        if(!phone)
        {
            error.phone="Enter Phone Number";
            get_error({error});
            flag=1;
        }
        else{
            if(phone.length>10 || phone.length<10)
            {
                error.phone="Phone Number Must be 10 Character";
                get_error({error});
                flag=1;
            }
        }
        if(!age)
        {
            error.age="Enter Age";
            get_error({error});
            flag=1;
        }
        else{
            if(parseInt(age)<18 || parseInt(age)>25)
            {
                error.age="Age Must be between 18 to 25";
                get_error({error});
                flag=1;
                console.log(age);
            }
        }
        get_error(error);
        if(flag==0)
        {
        
            let user = JSON.parse(localStorage.getItem("user")||'[]');
            let new_user={
                name:name,
                email:email,
                phone:phone,
                age:age,
            }
            user.push(new_user);
            localStorage.setItem("user",JSON.stringify(user));
            window.location='/details'
        }
    }
    return(
        <>
            <form onSubmit={(event)=>getdata(event)} style={{padding:"20px",margin:"20px",border:"3px solid black"}}>
                Name :- <input type="text" onChange={(event)=>get_name(event.target.value)}/><p style={{color:"red",fontSize:'20px'}}>{error.name}</p><br/><br/>
                Email :- <input type="email" onChange={(event)=>get_email1(event)}/><p style={{color:"red",fontSize:'20px'}}>{error.email}</p><br/><br/>
                
                Phone Number :- <input type="number" onChange={(event)=>get_phone(event.target.value)}/><p style={{color:"red",fontSize:'20px'}}>{error.phone}</p><br/><br/>
                Age :- <input type="number" onChange={(event)=>get_age(event.target.value)}/><p style={{color:"red",fontSize:'20px'}}>{error.age}</p><br/><br/>
                <input type="submit" value="submit"/>
            </form>
        </>
    );
}
export default Form;