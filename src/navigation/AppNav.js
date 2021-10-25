import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { UsersScreen } from '../screens/UsersScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { PostInfo } from '../screens/PostInfo'
import { DetailsScreen } from '../screens/DetailsScreen'
import AddNew  from '../screens/AddNew'
const PostNavigator = createStackNavigator({
    Users: UsersScreen,
    Post: {
        screen: PostScreen
    },
    Details: {
        screen: DetailsScreen
    },
    AddNew:{
        screen: AddNew 
    },
    PostInfo: {
        screen: PostInfo
    } 
},
    {
        initialRouteName: 'Users',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR
            },
            headerTintColor: '#fff'
        }
    })

export const AppNav = createAppContainer(PostNavigator)