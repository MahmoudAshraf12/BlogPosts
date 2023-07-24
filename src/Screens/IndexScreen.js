import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Button,TouchableOpacity } from "react-native";
import {Context} from "../Context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) =>{
    const {state, deleteBlogPost, getBlogPost} = useContext(Context);
    useEffect(()=>{
        getBlogPost();
        const listener = navigation.addListener('focus',()=>{
            getBlogPost();
        });
        // To Avoid Memory Leak
        return() => {
            listener.remove();
        };
    }, [])
    return(
        <View>
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                    
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:"#ccc",
        margin:20
    },
    title:{
        fontSize:18,
    },
});


export default IndexScreen;