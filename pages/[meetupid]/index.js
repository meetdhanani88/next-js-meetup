import React from 'react';
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from 'next/router';
import Head from 'next/head';


export async function getStaticPaths() {


    const client = await MongoClient.connect("mongodb+srv://meet:mnXyMojHjW7ymLmt@cluster0.gyf4z.mongodb.net/meetup?retryWrites=true&w=majority")

    const db = client.db();

    const meetupcollection = db.collection("meetupdata");

    const meetupdata = await meetupcollection.find({}).project({ _id: 1 }).toArray()

    return {
        paths: meetupdata.map(item => { return { params: { meetupid: item._id.toString() } } }),
        fallback: true
    }

}

export async function getStaticProps(context) {

    const id = context.params.meetupid;

    console.log("context", context);

    //fetch Data from API

    //connect to usermongodb & create databse with name "meetup"
    const client = await MongoClient.connect("mongodb+srv://meet:mnXyMojHjW7ymLmt@cluster0.gyf4z.mongodb.net/meetup?retryWrites=true&w=majority")
    console.log("cli", client);
    //Redirect to client database
    const db = client.db();
    //Redirect table(Collection) With name "MEETUP"
    const meetupcollection = db.collection("meetupdata");

    const currentdata = await meetupcollection.findOne({ _id: ObjectId(id) });

    currentdata.id = currentdata._id.toString();
    delete currentdata._id;

    return {
        props: {
            meetupdata: currentdata
        },
        revalidate: 1
    }

}

function Meetupitem(props) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }


    return (
        <>
            <Head>
                <title>{props.meetupdata.title}</title>
                <meta name='description' content={props.meetupdata.description} ></meta>
            </Head>
            <img src={props.meetupdata.image} alt="img-1" width="100%" />
            <h1>{props.meetupdata.title}</h1>
            <address>{props.meetupdata.address}</address>
        </>
    )

}

export default Meetupitem;