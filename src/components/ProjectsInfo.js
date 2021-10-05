import brandPic from '../images/project_thumbnails/MoodPic.png'
import technovaPic from '../images/project_thumbnails/TechnovaPic.png'
import voicenotedPic from '../images/project_thumbnails/VoicePic.png'

const projects = {
    technova: {
        key: "technova",
        image: "../images/project_thumbnails/TechnovaPic.png",
        title: "Hack with Us",
        color: "#FFFBFB",
        subtitle: "TechNova",
        description: "Innovating the design for UWaterloo's first women+ in tech hackathon.",
        categories: "Branding, UX Design"
    },
    brand: {
        key: "brand",
        image: brandPic,
        description: "halo",
        color: "#D0DEE7",
        title: "Personal Portfolio",
        subtitle: "hehe",
        categories: "UX Design, Frontend Development"
    },
    voicenoted: {
        key: "voicenoted",
        image: voicenotedPic,
        title: 'voicenoted.',
        color: "#FFE3DC",
        subtitle: 'Hack the North 2021 Finalist',
        description: "Reinventing the podcast experience through notetaking functionality. ",
        categories: "UX Design, Frontend Development"
    }
}

export default projects;