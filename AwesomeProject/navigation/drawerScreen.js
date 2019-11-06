import {DrawerNavigator} from 'react-navigation';

import Screen1 from '../views/viewCrearUsuario';
import Screen2 from '../views/viewPermisosUsuario';

const DrawerScreen = DrawerNavigator({
    Screen1: {screen: Screen1, title: 'Hola'},
    Screen2: {screen: Screen2}
}, {
    headerMode: 'none',
})

export default DrawerScreen;