import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import Loader from "../../components/Loader"
import ProfileInfo from './ProfileInfo'


function Profile() {

    return (
        <Skeleton>
            <Loader />
            <ProfileInfo/>
        </Skeleton>
    )
}

export default Profile
