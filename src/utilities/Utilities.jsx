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
    "vite": "Vite"
};
  
export const progToolsLabels = {
    "figma": "Figma",
    "adobe-xd": "Adobe XD",
    "photoshop": "Photoshop",
    "illustrator": "Illustrator",
    "vscode": "VS Code",
    "github": "GitHub",
    "wordpress": "WordPress",
    "asana": "Asana",
    "trello": "Trello"
};
  
export const etcSkillsLabels = {
    "sewing": "Sewing",
    "crochet": "Crochet",
    "knitting": "Knitting",
    "needlefelting": "Needle-Felting",
    "watering": "Watering Plants :)"
};

/* Function to map arrays of values to better outputs*/
export const getLabels = (items, labelsMap) => items.map(item => labelsMap[item] || item);

export const collaborationLabels = {
    "solo": "Solo",
    "team-2": "Team of 2",
    "team-3": "Team of 3",
    "team-4": "Team of 4",
    "team-5": "Team of 5"
};