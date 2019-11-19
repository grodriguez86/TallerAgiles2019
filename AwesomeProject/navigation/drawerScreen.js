import {DrawerNavigator} from 'react-navigation';

import Screen1 from '../views/viewCrearUsuario';
import Screen2 from '../views/viewPermisosUsuario';
import Screen3 from '../views/viewVerPerfil';

const DrawerScreen = DrawerNavigator({
    Screen1: {screen: Screen1},
    Screen3: {screen: Screen3},
    Screen2: {screen: Screen2}
}, {
    headerMode: 'none',
})

export default DrawerScreen;