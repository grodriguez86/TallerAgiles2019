import {DrawerNavigator} from 'react-navigation';

import Screen1 from '../views/viewCrearUsuario';
import Screen2 from '../views/viewPermisosUsuario';
import Screen3 from '../views/viewVerPerfil';
import Screen4 from '../views/viewOng';


const DrawerScreen = DrawerNavigator({
    Screen1: {screen: Screen1, title: 'Hola'},
    Screen3: {screen: Screen3, title: 'Hola'},
    Screen4: {screen: Screen4, title: 'Hola'},
    Screen2: {screen: Screen2}
}, {
    headerMode: 'none',
})

export default DrawerScreen;