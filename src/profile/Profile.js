import React from "react";
import PropTypes from "prop-types";

const Profile = (props)  =>{

    
    return(
        
     <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        margin:"10px",
        padding:"15px",
        width:"250px",
        height:"370px",
        border:"1px solid white",
        }}>
          
        
        {props.children}
       
        <p style={{
            color:"white",
            fontSize:"20px",
        }}>Fullname: {props.fullName}</p>


        <p style={{
            color:"white",
            fontSize:"15px",
        }}>Bio: {props.bio}</p>
        
        
        <p style={{
            color:"white",
            fontSize:"15px",
        }}>Profession: {props.profession}</p>
    <button style={{backgroundColor:"blue",color:"white"}}
    onClick={()=>props.handleName(props.fullName)}
    >click</button>
     </div>   

    )
}

Profile.defaultProps = {
    fullName:"insert Fullname",
    bio:"Type Bio",
    profession:"Type your profession"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
}

export default Profile;