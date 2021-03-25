import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";
import MapModal from "./MapModal";


//params: place {pid,uid,title,desc,location,imgUrl,address}
const PlaceItem = props => {

    return (
        <Card style={{width:'70%'}}>
            <Image src={props.imgURL} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <p>{props.desc}</p>
                <p>{props.address}</p>
            </Card.Content>
            <Card.Content>
                <MapModal location={props.location}/>
                <Button floated='right' negative basic>
                    Delete
                    <Icon name='delete'/>
                </Button>
            </Card.Content>
        </Card>
    );
}
export default PlaceItem;
