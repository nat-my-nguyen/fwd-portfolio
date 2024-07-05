import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import CTAProjectAbout from '../components/CTA-project-about'

const Contact = () => {
    const [contactData, setContactData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchContactData = async () => {
        const response = await fetch(restBase + 'pages/15?acf_format=standard&_embed')
        if ( response.ok ) {
            const data = await response.json();
            setContactData(data)
            setLoadStatus(true)
        }
    }

    useEffect(() => {
        fetchContactData()
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <section className="page-intro">
                <h1 dangerouslySetInnerHTML={{__html:contactData.title.rendered}} />
                <div dangerouslySetInnerHTML={{__html:contactData.content.rendered}} />
            </section>
            <div className="contact-list">
                <ul>
                {contactData.acf.contact_email && contactData.acf.contact_email.map((item, index) => (
                    <li key={index}>
                        <a href={`mailto:${item.social_email}`} className="soc-icon">
                            <img src={item.social_icon.url} alt={item.social_icon.alt} />
                            {item.social_email}
                        </a>
                    </li>
                ))}
                {contactData.acf.contact_link && contactData.acf.contact_link.map((item, index) => (
                    <li key={index}>
                        <a href={item.social_link} className="soc-icon">
                            <img src={item.social_icon.url} alt={item.social_icon.alt} />
                            {item.link_label}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
            <CTAProjectAbout />
        </>
    )
}

export default Contact