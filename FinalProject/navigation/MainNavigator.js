import React from 'react'
import {  createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import MovieList from '../screens/MovieList'
import AboutMovie from '../screens/AboutMovie'
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
const MainStack = createStackNavigator(
	{
	  MovieList: MovieList,
	  AboutMovie: AboutMovie,
	},
	 )
  const MainTabs = createBottomTabNavigator(
	{
	  Movie: MainStack,
	   Login: Login,
	  },
	  )
  const MainNavigator = createSwitchNavigator({
	 Login: Login,
	 Signup: Signup,
	 Main: MainTabs,
  })
  export default Apps = createAppContainer(MainNavigator);



