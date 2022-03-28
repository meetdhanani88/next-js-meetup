import React, { useState } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
function Meetupform() {
    const Router = useRouter();
    const [success, setsuccess] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const Suceessmsg =
        <div>
            <h1>Inserted Successfully</h1>
            <p>Redirect to Homepage in 2 Seconds...</p>
        </div>

    async function getmeetupdata(data) {
        setLoading(true);
        let status;
        try {
            const res = await fetch("/api/new-meetup",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            console.log("res", res);
            status = res.statusText;
            const result = await res.json();
            console.log(result);
            setLoading(false);
            setsuccess(true);
            setTimeout(() => Router.push("/"), 1000);

        } catch (error) {
            console.log("status", status);
            setError({ msg: status });
            setLoading(false);
            setsuccess(false);
        }

    }
    return (
        <>
            <Head>
                <title>New Meetup</title>
                <meta name='description' content='Book New MeetUp' ></meta>
            </Head>
            {Loading && !success && <h1>Loading...</h1>}
            {error && <h1>Error {error.msg}</h1>}
            {!success && !error && <NewMeetupForm onAddMeetup={getmeetupdata}></NewMeetupForm>}
            {success && Suceessmsg}
        </>
    )
}

export default Meetupform;  