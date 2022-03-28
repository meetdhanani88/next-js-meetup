import React from 'react'
import { MongoClient } from "mongodb"
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';
const Dummy_data = [{
    id: "q1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg/1200px-Buckingham_Palace_aerial_view_2016_%28cropped%29.jpg",
    title: "1st MeetUp",
    address: "b-305 xyz Palace",
    description: "Nice Palace"
}, {

    id: "q2",
    image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: "2nd MeetUp",
    address: "b-305 abc Palace",
    description: "Good Palace"
}]



export async function getStaticProps() {

    //fetch Data from API

    //connect to usermongodb & create databse with name "meetup"
    const client = await MongoClient.connect("mongodb+srv://meet:mnXyMojHjW7ymLmt@cluster0.gyf4z.mongodb.net/meetup?retryWrites=true&w=majority")

    //Redirect to client database
    const db = client.db();

    //Redirect table(Collection) With name "MEETUP"
    const meetupcollection = db.collection("meetupdata");

    const meetup = await meetupcollection.find().toArray();
    console.log("meetup", meetup)

    client.close();


    // console.log("gahgs", arr);


    return {
        props: {
            meetups: meetup.map(item => {
                item.id = item._id.toString();
                delete item._id;
                return {
                    ...item
                }
            })
        },
        revalidate: 1
    }

}

function Homepage(props) {
    console.log(props);

    return (
        <>
            <Head>
                <title>React MeetUp</title>
                <meta name='description' content='Huge List Of Meetups' ></meta>
            </Head>
            <MeetupList meetups={props.meetups}></MeetupList>
        </>
    )

}

export default Homepage;

