import { useState, useEffect } from "react"
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'

function FooterContacts() {
    const [contactsData, setContactsData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchContactsData = async () => {
        const response = await fetch(restBase + 'pages/15?acf_format=standard&_embed')
        if ( response.ok ) {
            const data = await response.json()
            setContactsData(data)
            setLoadStatus(true)
        }
    }

    useEffect(() => {
        fetchContactsData()
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <> 
            <div className="social-links">
                <ul>
                {contactsData.acf.contact_email && contactsData.acf.contact_email.map((item, index) => (
                    <li key={index}>
                        <a href={`mailto:${item.social_email}`} className="soc-icon">
                            <img src={item.social_icon.url} alt={item.social_icon.alt} />
                        </a>
                    </li>
                ))}
                {contactsData.acf.contact_link && contactsData.acf.contact_link.map((item, index) => (
                    <li key={index}>
                        <a href={item.social_link} className="soc-icon">
                            <img src={item.social_icon.url} alt={item.social_icon.alt} />
                        </a>
                    </li>
                ))}
                </ul>
            </div>
            <p className="copyright">&copy;2024 Developed and designed by <a href="https://natcreates.com/">Natalia Nguyen</a>.</p>
        </>
    )
}

export default FooterContacts