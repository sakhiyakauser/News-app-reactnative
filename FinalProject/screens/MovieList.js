import React from 'react'

import {TouchableHighlight,Image,FlatList, View, TextInput, Text, StyleSheet} from  "react-native";
import { connect } from 'react-redux'
class MovieList extends React.Component {
	static navigationOptions = {
			title: 'Movie List',
			headerStyle: {
			  backgroundColor: 'lightcoral',
			},
			  headerTintColor: '#fff',
			  headerTitleStyle: {
			  fontWeight: 'bold',
			},
		  };
		 constructor(props){
			super(props)
			this.state={
			   text:'',
			   movies: '',
			  };
			   }
		FlatListItemSeparator = () => {
			return (
			  <View
				style={{
				  height: 10,
				  width: "100%",
				  backgroundColor: "white",
				}}
			  />
			);
		  }
	componentDidUpdate(prevState){
	   if(this.state.text !== prevState.text){
		 this.fetchResults(this.state.text)
	   }
	}
	fetchResults = async (text) =>{
	   const url=`https://www.omdbapi.com/?apikey=3ade7c9e&s=${text}`
	  try{
			response= await fetch(url);
			res= await response.json()
			this.setState({
			  movies: res.Search
			  })
		  }
		catch (err){
		   return console.log(err)
			}
		  }
	render(){
		return(
		   <View style={styles.container}>
		   <View style={styles.text}>
		   <TextInput
			   style= {styles.input}
			   placeholder = "Enter the movie name to search"
			   value={this.state.text}
			   onChangeText={text => this.setState({text})
					} 
			   />
		   </View>
	   <FlatList 
			style={styles.flatList}
			data={this.state.movies}
			renderItem = {
				 ({item}) =>
					<TouchableHighlight
					 style={styles.press}
					 onPress={()=>{
						this.props.navigation.navigate("AboutMovie", {
						id: item.imdbID
					  })
				   }} > 
					<View>
						   <Image style={styles.image} source={{uri: item.Poster}} />
							<Text style={styles.heading}>
								 {item.Title}  ({item.Year}) 
						   </Text>
					 </View>
		   </TouchableHighlight>
			  }
			keyExtractor={(item)=> item.imdbID}
			ItemSeparatorComponent = { this.FlatListItemSeparator }
		   />
		 </View>
			  )}
		}
	  const styles = StyleSheet.create({
		container: {
			 flex:1,
			 backgroundColor: "#fff",
			 alignItems: "center",
			 justifyContent: "center",
			 borderWidth:5,
		 },
		input:{
		   backgroundColor:"white",
		   borderColor:"grey",
		   borderWidth: 3,
		   width: 340,
		   height:60,
		   padding: 10,
		   fontSize:16
		},
		image:
		{
		  width: 120, height: 40, 
		},
	
		text: {
		  backgroundColor: "white",
		  marginTop: 30,
		  marginBottom: 10
		},
	   press: {
			backgroundColor: "white",
			borderColor: "grey",
			borderWidth:1,
			padding:15
		},
		heading:{
			 fontSize:20,
			 color:"grey" ,
			 marginLeft: 10
		 },
		flatList:{
			marginTop: 10,
			fontSize:30,
			backgroundColor:"white",
			width: 340,
			height:500
		}
	  });
const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(MovieList)