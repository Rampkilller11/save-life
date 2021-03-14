/*import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class BookDonationScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedBooksList : []
    }
  this.requestRef= null
  }

  getRequestedBooksList =()=>{
    this.requestRef = db.collection("requestedBooks")
    .onSnapshot((snapshot)=>{
      var requestedBooksList = snapshot.docs.map(document => document.data());
      this.setState({
        requestedBooksList : requestedBooksList
      });
    })
  }

  componentDidMount(){
    this.getRequestedBooksList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  // renderItem = ( {item, i} ) =>{
  //   return (
  //     <ListItem
  //       key={i}
  //       title={item.book_name}
  //       subtitle={item.reason_to_request}
  //       titleStyle={{ color: 'black', fontWeight: 'bold' }}
  //       rightElement={
  //           <TouchableOpacity style={styles.button}
  //           onPress={()=>{
  //             this.props.navigation.navigate('ReceiverDetails',{'details':item})
  //           }}>
  //             <Text style={{color:'#ffff'}}>View</Text>
  //           </TouchableOpacity>
  //         }
  //       bottomDivider
  //     />
  //   )
  // }
  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("RecieverDetails", {
                details: item,
              });
            }}
          >
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Donate Books" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.requestedBooksList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedBooksList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})*/
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,KeyboardAvoidingView,TextInput,Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      bookName:"",
      reasonToRequest:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(bookName,reasonToRequest)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requestedBooks').add({
        "userId": userId,
        "bookName":bookName,
        "reasonToRequest":reasonToRequest,
        "requestId"  : randomRequestId,
    })

    this.setState({
        bookName :'',
        reasonToRequest : ''
    })

    return Alert.alert(" Rescue Team Will Be Approaching Shortly ")
  }

  
  // getRequestedBooksList =()=>{
  //   this.requestRef = db.collection("requested_books")
  //   .onSnapshot((snapshot)=>{
  //     var requestedBooksList = snapshot.docs.map((doc) => doc.data())
  //     this.setState({
  //       requestedBooksList : requestedBooksList
  //     });
  //   })
  // }

  // componentDidMount(){
  //   this.getRequestedBooksList()
  // }

  // componentWillUnmount(){
  //   this.requestRef();
  // }

  // keyExtractor = (item, index) => index.toString()

  // renderItem = ( {item, i} ) =>{
  //   return (
  //     <ListItem
  //       key={i}
  //       title={item.book_name}
  //       subtitle={item.reason_to_request}
  //       titleStyle={{ color: 'black', fontWeight: 'bold' }}
  //       rightElement={
  //           <TouchableOpacity style={styles.button}
  //             onPress ={()=>{
  //               this.props.navigation.navigate("RecieverDetails",{"details": item})
  //             }}
  //             >
  //             <Text style={{color:'#ffff'}}>View</Text>
  //           </TouchableOpacity>
  //         }
  //       bottomDivider
  //     />
  //   )
  // }

  
  render(){
    return(
      <View style={{flex:1}}>
          <MyHeader title="Help Others  " navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Name / Age / Gender *"}
                onChangeText={(text)=>{
                    this.setState({
                        bookName:text
                    })
                }}
                value={this.state.bookName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Explain The Issue In Detail"}
                onChangeText ={(text)=>{
                    this.setState({
                        reasonToRequest:text
                    })
                }}
                value ={this.state.reasonToRequest}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}}
                >
                <Text> Request Rescue Team </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({

  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:2,
    marginTop:20,
    padding:15,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
  