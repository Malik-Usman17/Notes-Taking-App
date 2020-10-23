import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ViewNotes from '../Screens/ViewNotes';
import AddNotes from '../Screens/AddNotes';
import Header from '../Screens/HeaderTry';

const StackNavigator = createStackNavigator({
    ViewNotes:{
        screen: ViewNotes
    },
    AddNotes:{
        screen: AddNotes
    },
    Header: {
        screen: Header
    }
    },
    {
        initialRouteName: 'ViewNotes',
        headerMode: 'none',
        mode: 'modal'
    }
);

export default createAppContainer(StackNavigator);