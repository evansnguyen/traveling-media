import React from 'react'
import {Card, CardGroup} from "semantic-ui-react";
import PlaceItem from "./PlaceItem";

//params: list of places
const PlacesList = (props) => {

    if(props.placesList.length === 0){
        return (
            <Card
                header='No Place Added. Add Some?'
                centered={true}
            />
        );
    }else{
        return (
            <CardGroup centered stackable>
                {props.placesList.map(place => (
                    <PlaceItem key={place.pid}
                               uid={place.uid}
                               title={place.name}
                               desc={place.desc}
                               imgURL={place.imgURL}
                               address={place.address}
                               location={place.location}
                    />
                ))}
            </CardGroup>
        );
    }

};

export default PlacesList;
