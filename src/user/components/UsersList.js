import React from 'react'
import {CardGroup} from "semantic-ui-react";
import UserItem from "./UserItem";

//params: list of users
const UsersList = (props) => {

    return (
        <CardGroup centered stackable>
            {props.usersList.map(user => (
                <UserItem key={user.uid}
                          uid={user.uid}
                          name={user.name}
                          avatar={user.avatar}
                          places={user.places}/>
            ))}
        </CardGroup>
    );
};

export default UsersList;
