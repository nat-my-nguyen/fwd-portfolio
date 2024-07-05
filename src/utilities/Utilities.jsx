export const restBase = 'https://natcreates.com/purplefuzzyl33k/wp-json/wp/v2/'

/*From Jonathon Leathers*/
export const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
}

/*Display Devicon icon to Tech Stack and Program labels based on available icons
* Ex. as of June 2024, there is no Asana icon, yet...
* Better to not render empty tags, so will have to update the map and name list
*/
const notAvailableDeviconList = [
    "asana"
]

/*Check if there is an associated icon to display, if not return none*/
export const displayDevicon = (value) => {
    if (notAvailableDeviconList.includes(value)) {
        return null
    }
    const iconClass = `devicon-${value}-plain`
    return <i className={iconClass} key={value}></i>
}