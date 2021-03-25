import React from 'react'
import LandScape from '../../assets/northbridge.jpg';
import {useParams} from 'react-router-dom'
import PlacesList from "../components/PlacesList";

//dummy list of users
const PLACES_ARRAY = [
    {
        pid: 'p1',
        uid: 'u1', //created by user1
        title: 'North Bridge',
        desc: 'Northbridge is an inner city suburb of Perth, Western Australia',
        imgURL: LandScape,
        address: '69 Fitzgerald St, Northbridge WA 6003',
        location: {lat: '-31.946', lng: '115.851'},
    },
    {
        pid: 'p2',
        uid: 'u2', //created by user2
        title: 'Edith Cowan University',
        desc: ' It was named after the first woman to be elected to an Australian Parliament',
        imgURL: LandScape,
        address: '2 Bradford St, Mount Lawley WA 6050',
        location: {lat: '-31.938', lng: '115.867'},
    }
];
//places page
const UserPlaces = () => {
    const reqUserId = useParams().uId;
    const filteredPlaces = PLACES_ARRAY.filter(place => place.uid === reqUserId);

    return (
        <PlacesList placesList={filteredPlaces}/>
    );

};

export default UserPlaces;

