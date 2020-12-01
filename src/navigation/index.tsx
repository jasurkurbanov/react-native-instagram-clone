import React from 'react';
import {View, Switch, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DarkTheme, LightTheme} from './APIComponents';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomTabBar from './CustomTabBar';

const SearchScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Search</Text>
  </View>
);
const AddScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>AddScreen</Text>
  </View>
);
const LikesScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Likes</Text>
  </View>
);

const CameraScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>CameraScreen</Text>
  </View>
);
const MessagesScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>MessagesScreen</Text>
  </View>
);

//HomeTopNavgation
const TopTab = createMaterialTopTabNavigator();
const TopTabsNavitaion = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      tabBar={() => null}
      removeClippedSubviews={true}
      tabBarOptions={{
        renderIndicator: () => null,
      }}>
      <TopTab.Screen name="Camera" component={CameraScreen} />
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Messages" component={MessagesScreen} />
    </TopTab.Navigator>
  );
};
import Icon from '../constants/icons';
//StackNavigation
import Welcome from './../screens/Welcome';
import Login from './../screens/Login';
import Register from './../screens/Register';

const IntroStack = createStackNavigator();

const IntroNavgation = () => {
  return (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <IntroStack.Screen name="Welcome" component={Welcome} />
      <IntroStack.Screen name="Login" component={Login} />
      <IntroStack.Screen name="Register" component={Register} />
    </IntroStack.Navigator>
  );
};

const renderTabIcon = (
  title: string | undefined,
  focuse: boolean | undefined,
) => {
  switch (title) {
    case 'HomeTopTabNavigation':
      return (
        <Icon.AntDesign
          name="home"
          size={26}
          color={focused ? '#15c62a' : 'black'}
        />
      );
    case 'Search':
      return (
        <Icon.Ionicons
          name="search-outline"
          size={25}
          color={isFocused ? '#15c62a' : 'black'}
        />
      );
    case 'Add':
      return (
        <View style={styles.addButton}>
          <Icon.AntDesign name="plus" size={25} color={'white'} />
        </View>
      );
    case 'Likes':
      return (
        <Icon.Ionicons
          name="heart-outline"
          size={25}
          color={isFocused ? '#15c62a' : 'black'}
        />
      );
    case 'Profile':
      return (
        <Icon.FontAwesome
          name="user-o"
          size={25}
          color={isFocused ? '#15c62a' : 'black'}
        />
      );
    default:
      return null;
  }
};

//MainNavigation
const AppTab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <AppTab.Navigator
      initialRouteName={'Profile'}
      tabBarOptions={{
        style: {height: 80},
        showLabel: false,
        activeTintColor: 'red', // tab text color
        inactiveTintColor: '#000', // tab text color
        tabStyle: {
          justifyContent: 'space-between',
        },
      }}>
      <AppTab.Screen
        name="HomeTopTabNavigation"
        component={TopTabsNavitaion}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon.AntDesign
              name="home"
              size={26}
              color={focused ? '#15c62a' : 'black'}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon.Ionicons
              name="search-outline"
              size={25}
              color={focused ? '#15c62a' : 'black'}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: '#15c62a',
                paddingVertical: 7,
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              <Icon.AntDesign name="plus" size={25} color={'white'} />
            </View>
          ),
        }}
      />
      <AppTab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon.Ionicons
              name="heart-outline"
              size={25}
              color={focused ? '#15c62a' : 'black'}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon.FontAwesome
              name="user-o"
              size={25}
              color={focused ? '#15c62a' : 'black'}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

const AppStack = createStackNavigator();

const Navigation = () => {
  const [value, setValue] = React.useState(true);
  const toggleSwitch = () => setValue(!value);
  return (
    <NavigationContainer>
      {/* <View style={{marginTop: 50}}>
        <Switch onValueChange={toggleSwitch} value={value} />
      </View> */}
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <AppStack.Screen name="Intro" component={IntroNavgation} /> */}
        <AppStack.Screen name="TabNavigation" component={TabNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
