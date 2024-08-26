import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    skills: [
    { name: "Html", val: 90 },
    { name: "Css", val: 90 },
    { name: "Tailwind Css", val: 90 },
    { name: "Javascript", val: 90 },
    { name: "React.js", val: 90 },
    { name: "Oracle", val: 90 },
    { name: "Java", val: 90 },
    { name: "C", val: 90 },
    { name: "C++", val: 90 }
    ],
    help_tr:[
        { name: "skill", des: "Showcase of my technical abilities." },
        { name: "project", des: "A display of my completed work." },
        { name: "github", des: "Link to my code repositories." },
        { name: "contact me", des: "Get in touch with me directly." },
        { name: "about me", des: "Brief introduction about who I am." },
        { name: "help" , des: "For help"},
        { name: "clear" ,des :"clear the terminal"}
    ],

}


export const funStore=createSlice({
    name:'data',
    initialState:initialState,
    reducers:{
        addData:(state,action)=>{
            state.push(action.payload)
        },
        deleteData:(state,action)=>{
            state=state.filter((state)=>(
                state.id !== action.payload.id
            ))    
        },
    }
})

export const { addData,deleteData }=funStore.actions

export default funStore.reducer
