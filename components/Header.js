import React from 'react';
import {Header} from 'react-native-elements';
import {StyleSheet} from 'react-native'

const header = props=>{
return(
    <Header centerComponent={{text: props.title,style:styles.header}} backgroundColor={"grey"}/>
)
}

const styles = StyleSheet.create({
header:{
    fontSize:30,
    
}
})
export default header;