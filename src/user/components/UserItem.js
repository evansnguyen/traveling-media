import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";
import './UserItem.css'

//params: user
const UserItem = props => {
    return (

            <Card href={'/'+props.uid+'/places'} >
                <Image src={props.avatar} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Icon name='plane'/>
                    {props.places} {props.places <= 1 ? 'Place' : 'Places'}
                </Card.Content>
                <Card.Content>
                    <Button floated='right' negative basic icon>
                        Delete User
                        <Icon name='user delete'/>
                    </Button>
                </Card.Content>
            </Card>

    );
}
export default UserItem;
