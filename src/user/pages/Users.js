import React from 'react'

import UsersList from "../components/UsersList";
import Avatar from '../../assets/avatar.png'
import {Card} from "semantic-ui-react";

//dummy list of users
const USERS_ARRAY = [
    {
        uid: 'u1',
        name: 'Long Nguyen',
        avatar: Avatar,
        places: 0
    },
    {
        uid: 'u2',
        name: 'Log Nguyen',
        avatar: Avatar,
        places: 0
    },
    {
        uid: 'u3',
        name: 'ng Nguyen',
        avatar: Avatar,
        places: 0
    }
];
//user page
const Users = () => {
    if (USERS_ARRAY.length === 0) {
        return (
            <Card
                header='No Traveler Added. Add Some?'
                centered={true}
            />
        );
    } else {
        return (
            <UsersList usersList={USERS_ARRAY}/>
        );
    }


};

export default Users;

