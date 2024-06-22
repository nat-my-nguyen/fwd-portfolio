export const restBase = 'https://natcreates.com/purplefuzzyl33k/wp-json/wp/v2/'

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

export const techStackLabels = {
    "html5": "HTML5",
    "css3": "CSS3",
    "javascript": "JavaScript",
    "php": "PHP",
    "sass": "Sass",
    "gulp": "Gulp",
    "react": "React",
    "vitejs": "ViteJS"
}
  
export const progToolsLabels = {
    "figma": "Figma",
    "xd": "Adobe XD",
    "photoshop": "Photoshop",
    "illustrator": "Illustrator",
    "vscode": "VS Code",
    "github": "GitHub",
    "wordpress": "WordPress",
    "asana": "Asana",
    "trello": "Trello"
}
  
export const etcSkillsLabels = {
    "sewing": "Sewing",
    "crochet": "Crochet",
    "knitting": "Knitting",
    "needlefelting": "Needle-Felting",
    "watering": "Watering Plants :)"
}

/*Function to map arrays of values to better outputs*/
export const getLabels = (items, labelsMap) => items.map(item => labelsMap[item] || item);

export const collaborationLabels = {
    "solo": "Solo",
    "team-2": "Team of 2",
    "team-3": "Team of 3",
    "team-4": "Team of 4",
    "team-5": "Team of 5"
}

/*Function to convert WP's \r\n and \n to proper paragraph tags*/
export const convertToParagraphs = (text) => {
    return text
        .split(/\r?\n|\n/)
        .filter(paragraph => paragraph.trim() !== '')
        .map(paragraph => `<p>${paragraph.trim()}</p>`)
        .join('')
}

/*Display Devicon icon to Tech Stack and Program labels based on available icons
* Ex. as of June 2024, there is no Asana icon, yet
* Better to not render empty tags, so will have to update the map and name list
*/
const availableIcons = [
    "html5",
    "css3",
    "javascript",
    "php",
    "sass",
    "gulp",
    "react",
    "vitejs",
    "figma",
    "xd",
    "photoshop",
    "illustrator",
    "vscode",
    "github",
    "wordpress",
    "trello"
]

/*Remap the labels to proper values that Devicon recognizes
* Doing this because of Adobe XD...
*/
const deviconNameMap = {
    "HTML5": "html5",
    "CSS3": "css3",
    "JavaScript": "javascript",
    "PHP": "php",
    "Sass": "sass",
    "Gulp": "gulp",
    "React": "react",
    "ViteJS": "vitejs",
    "Figma": "figma",
    "Adobe XD": "xd",
    "Photoshop": "photoshop",
    "Illustrator": "illustrator",
    "VS Code": "vscode",
    "GitHub": "github",
    "WordPress": "wordpress",
    "Trello": "trello"
}

/*Check if there is an associated icon to display, if not return none*/
export const displayDevicon = (label) => {
    const deviconName = deviconNameMap[label]
    if ( deviconName && availableIcons.includes(deviconName) ) {
        const iconClass = `devicon-${deviconName}-plain`
        return <i className={iconClass} key={label}></i>
    }
    return null
}