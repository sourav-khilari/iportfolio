import { createSlice } from "@reduxjs/toolkit";
import Auction from '../assets/projects/Auction.png';
import ev_dashboard from '../assets/projects/ev_dashboard.png';
const initialState = {
    skills: [
        { name: "Html", val: 90 },
        { name: "Css", val: 90 },
        { name: "Tailwind Css", val: 90 },
        { name: "Javascript", val: 90 },
        { name: "React.js", val: 90 },
        { name: "Oracle", val: 90 },
        { name: "Java", val: 90 },
        { name: "C", val: 90 },
        { name: "C++", val: 90 },
        { name: "Node.js", val: 90 },
        { name: "express.js", val: 90 },
        { name: "MongoDb", val: 90 },
        { name: "JSP", val: 90 },
        { name: "Ejs", val: 90 },

    ],
    help_tr: [
        { name: "skill", des: "Showcase of my technical abilities." },
        { name: "project", des: "A display of my completed work." },
        { name: "github", des: "Link to my code repositories." },
        { name: "contact me", des: "Get in touch with me directly." },
        { name: "about me", des: "Brief introduction about who I am." },
        { name: "help", des: "For help" },
        { name: "clear", des: "clear the terminal" }
    ],
    projects: [
        {
            id: 1,
            title: "My Bid",
            description: " Designed and implemented a full-stack bidding platform that lets users browse listings, place and update bids in real time, and view winning offers",
            tech: ["React", "Tailwind", "Redux","Node.js","Express.js","MongoDB"],
            github: "https://github.com/sourav-khilari/Bid",
            demo: "https://auction-l219.vercel.app/",
            image: Auction,
        },
        {
            id: 2,
            title: "Ev Dashboard",
            description: "EV Dashboard visualizes key electric vehicle trends—like adoption by year, range distribution, and top manufacturers—using real CSV data",
            tech: ["React", "Tailwind", "Redux"],
            github: "https://github.com/sourav-khilari/Ev_Dashboard",
            demo: "https://ev-dashboard-sand.vercel.app/",
            image: ev_dashboard,
        }
    ],

}


export const funStore = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        },
        deleteData: (state, action) => {
            state = state.filter((state) => (
                state.id !== action.payload.id
            ))
        },
    }
})

export const { addData, deleteData } = funStore.actions

export default funStore.reducer
