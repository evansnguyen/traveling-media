import React, {useState} from 'react';
import {Button, Image, Input, Modal} from "semantic-ui-react";
import Landscape from "../../assets/northbridge.jpg";


//need to change to add place form
const AddPlaceModal = () => {
    const [show, setShow] = useState(false);

    return (
        <Modal
            onClose={() => setShow(false)}
            onOpen={() => setShow(true)}
            open={show}
            trigger={<Button primary basic icon='add' content='Add Place'/>}
        >
            <Modal.Header>Add New Place</Modal.Header>
            <Modal.Content image>
                <Image size='large' src={Landscape} wrapped spaced='right'/>

                {/*Input name*/}
                <Modal.Content >
                    <Input focus label='Title' labelPosition='left' placeholder='Enter Title...'/>
                    <Input focus label='Description' labelPosition='left' placeholder='Enter description...'/>
                    <Input focus label='Address' labelPosition='left' placeholder='Enter address...'/>
                </Modal.Content>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    size='small'
                    floated='left'
                    content='Upload Image'
                    onClick={() => {
                        //    upload image later
                    }}
                    color='red'
                />
                <Button color='black' onClick={() => setShow(false)}>
                    Cancel
                </Button>
                <Button
                    content="Add"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setShow(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>

    );
}
export default AddPlaceModal
