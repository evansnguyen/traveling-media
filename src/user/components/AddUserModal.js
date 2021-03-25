import React, {useState} from 'react';
import {Button, Image, Input, Modal} from "semantic-ui-react";
import Avatar from "../../assets/avatar.png";

const AddUserModal = () => {
    const [show, setShow] = useState(false);

    return (

        <Modal
            onClose={() => setShow(false)}
            onOpen={() => setShow(true)}
            open={show}
            trigger={<Button primary basic icon='add' content='Add User'/>}
        >
            <Modal.Header>Add New User</Modal.Header>
            <Modal.Content image>
                <Image size='small' src={Avatar} wrapped spaced='right'/>

                {/*Input name*/}
                <Modal.Content>
                    <Input focus label='Your Name' labelPosition='left' placeholder='Enter your name...'/>
                </Modal.Content>
                {/*Input something other information*/}
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
export default AddUserModal;
