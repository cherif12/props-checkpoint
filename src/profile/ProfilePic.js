import React from "react";
import PropTypes from "prop-types";

const ProfilePic = (props) =>{
    return(
    <img style={{
        width: 200,
        marginLeft:"10%",
        border:"1px solid white",
    }} src={props.imagePath}alt="0"/>
    )
}
ProfilePic.propTypes = {
    imagePath: PropTypes.string,
}
export default ProfilePic