import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { Link } from 'react-router-dom'


const Contact = () => {
    const [contactData, setContactData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchContactData = async () => {
        const response = await fetch(restBase + 'pages/15');
        if ( response.ok ) {
            const data = await response.json();
            setContactData(data);
            setLoadStatus(true);
        }
    }

    useEffect(() => {
        fetchContactData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />;
    }

    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html:contactData.title.rendered}}></h1>
            <section dangerouslySetInnerHTML={{__html:contactData.content.rendered}}></section>
        </>
    )
}

export default Contact