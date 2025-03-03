import React, {useState, useContext}from "react";
import userContext from "../context/UserContext";



function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile