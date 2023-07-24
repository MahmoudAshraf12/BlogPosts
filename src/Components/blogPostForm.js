import React,{useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../Context/BlogContext";

const BlogPostForm = ({onSubmit,initialValues}) =>{
    const[title,setTitle] = useState(initialValues.title);
    const[content,setContent] = useState(initialValues.content);
    return(
        <View style={styles.content}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
            <Button style={styles.button} 
                title="SAVE BLOG POST"
                onPress={()=>{
                    onSubmit(title,content)
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:10,
        padding:5,
    },
    label:{
        fontSize:23,
    },
    content:{
        margin:10,
    },
});
BlogPostForm.defaultProps = {
    initialValues:{
        title:"",
        content:""
    }
};
export default BlogPostForm;