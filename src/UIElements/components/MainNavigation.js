import React from 'react';
import { Image, Menu} from "semantic-ui-react";
import Logo from '../../assets/logo.jpg';
import './MainNavigation.css';
import {Link, Route, Switch} from "react-router-dom";
import AddUserModal from "../../user/components/AddUserModal";
import AddPlaceModal from "../../place/components/AddPlaceModal";


const MainNavigation = () => {
    //handling toggle modal

    return (
        // place holder for navigation contents
        <Menu secondary pointing>
            <Link to={'/'} style={{display: 'flex'}}>
                <Menu.Item>
                    <Image src={Logo} width={60}></Image>
                </Menu.Item>
                <Menu.Item style={{fontSize: 24, flex: 'auto '}}> Traveling Media</Menu.Item>
            </Link>

            {/*Add User/Place Modal*/}
            <Menu.Item position='right'>
                <Switch>
                    <Route path='/' exact>
                        <AddUserModal/>
                    </Route>
                    <Route>
                        <AddPlaceModal/>
                    </Route>
                </Switch>
            </Menu.Item>

        </Menu>

    );
};

export default MainNavigation;
