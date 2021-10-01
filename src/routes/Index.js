import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../pages/Home";
import Skills from "../pages/Skills";

const Drawer = createDrawerNavigator();

function Routes(){
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Skills" component={Skills}/>
    </Drawer.Navigator>
    )
}

export default Routes;