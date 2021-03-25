import React, {useState} from 'react';
import {Button, Modal} from "semantic-ui-react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapModal = (props) => {
    const [show, setShow] = useState(false);

    return (
        <Modal
            onClose={() => setShow(false)}
            onOpen={() => setShow(true)}
            open={show}
            trigger={<Button floated='left' color='green' basic>
                View On Map
            </Button>}
        >
            <Modal.Content style={{height: '70vh'}}>
                <Map google={window.google}
                     style={{height: '95%',width:'95%'}}
                    initialCenter={props.location} zoom={14}
                     onDragend={window.centerMoved}
                >
                    <Marker onClick={window.onMarkerClick}
                            name={'Current location'} />

                </Map>
            </Modal.Content>
        </Modal>

    );
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCYqbn8UQa-NEy0bW_2J64dG2QT_MXDzr8')
})(MapModal);
