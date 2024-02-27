import awardOne from '../assets/icons-new/award-lion.svg';
import awardTwo from '../assets/icons-new/award-lynx.svg';
import awardThree from '../assets/icons-new/award-dnad.svg';

export interface IAward {
    award: string;
    description: string;
    title: string;
    year: string;
    video: string;
}

export const awardsData: IAward[] = [
    {
        award: "Golden Whisker",
        description: "Recognized for pioneering innovative nap strategies, creating a purrfectly relaxed workplace.",
        title: "SnoozeMaster Excellence Award",
        year: "2024",
        video: videoPreview1,
    },
    {
        award: "Silver Purr",
        description: "Acknowledged for outstanding mediation, fostering a harmonious and playful feline community.",
        title: "Paw-sitive Harmony Accolade",
        year: "2023",
        video: videoPreview2,
    },
    {
        award: "Bronze Beam",
        description:
            "Celebrated for expertly optimizing sunbeam access, enhancing well-being through strategic basking.",
        title: "Solar Serenity Accolade",
        year: "2021",
        video: videoPreview3,
    },
    {
        award: "Platinum Treat",
        description:
            "Awarded for exceptional treat curation, delighting taste buds and promoting nutritional excellence.",
        title: "Gourmet Whisker Delight",
        year: "2023",
        video: videoPreview4,
    },
    {
        award: "Diamond Whisk",
        description:
            "Recognized for creating a whisker-centric culture, prioritizing the happiness of feline employees.",
        title: "WhiskerWonder Distinction",
        year: "2022",
        video: videoPreview5,
    },
    {
        award: "Pawsome Platinum",
        description:
            "Honored for overall excellence in feline-friendly corporate practices and pawsitive workplace initiatives.",
        title: "Purrfection Pioneer Award",
        year: "2022",
        video: videoPreview6,
    },
];

export interface INewAward {
    id: number,
    award: string;
    event: string;
    commentOne: string;
    commentTwo: string;
    video: string;
    icon: string;
}

export const newAwardsData: INewAward[] = [
    {
        id: 1,
        award: "Gold",
        event: "Cannes Lions",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview1,
        icon: awardOne
    },
    {
        id: 2,
        award: "Silver",
        event: "Dubai Lynx",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview2,
        icon: awardTwo
    },
    {
        id: 3,
        award: "Bronze",
        event: "D&AD",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview3,
        icon: awardThree
    },
    {
        id: 4,
        award: "Gold",
        event: "Cannes Lions",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview4,
        icon: awardOne
    },
    {
        id: 5,
        award: "Silver",
        event: "Dubai Lynx",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview5,
        icon: awardTwo
    },
    {
        id: 6,
        award: "Bronze",
        event: "D&AD",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview6,
        icon: awardThree
    }
]

export interface ILocation {
    location: string;
    phone: string;
    email: string;
    address: React.ReactNode;
}

export const locationsData: ILocation[] = [
    {
        location: "Cairo",
        phone: "+20 117 193 3005",
        email: "name@bigfoot.com",
        address: <>32 Ahmed Heshmat, <br/>Mohammed Mazhar, Zamalek <br/>Cairo, Egypt</>
    },
    {
        location: "Dubai",
        phone: "+971 55 678 8371",
        email: "name@bigfoot.com",
        address: <>113 Loft Offices, <br/>Dubai, United Arab Emirates</>
    },
];

import person1 from "../assets/images/cat-1.jpg";
import person2 from "../assets/images/cat-2.jpg";
import person3 from "../assets/images/cat-3.jpg";
import person4 from "../assets/images/cat-4.jpg";

export interface IPerson {
    name: string;
    title: string;
    description: string;
    image: string;
}

export const peopleOne: IPerson[] = [
    {
        name: "Professor Snugglepaws",
        title: "Chief Nap Officer",
        description:
            "Professor Snugglepaws is the mastermind behind optimizing the company's nap environment. This cat possesses an innate ability to locate the coziest spots, strategically choosing the softest cushions and warmest blankets. A seasoned expert in the art of relaxation, Professor Snugglepaws leads the charge in creating a stress-free atmosphere through strategic napping placements and gentle purring consultations.",
        image: person1,
    },
    {
        name: "Fluffy Harmony",
        title: "Director of Feline Relations",
        description:
            "Fluffy Harmony excels in maintaining positive relationships among the feline workforce. This diplomatic cat mediates disputes with an elegant blend of tail flicks and friendly nose boops. By organizing playful team-building sessions and facilitating grooming circles, Fluffy Harmony ensures that the office environment remains harmonious and fosters a sense of camaraderie among the cat colleagues.",
        image: person2,
    },
];

export const peopleTwo: IPerson[] = [
    {
        name: "Sunny Whiskerfield",
        title: "Senior Sunbeam Strategist",
        description:
            "Sunny Whiskerfield is a seasoned strategist when it comes to basking in sunlight. With a keen eye for optimal sunbeam locations, this cat expertly positions herself and her team members to soak up the warm rays. Sunny Whiskerfield's role involves surveying the office space, strategically placing cat trees near sunny spots, and orchestrating a purrfectly sunny atmosphere for the feline workforce.",
        image: person3,
    },
    {
        name: "Gourmet Whiskerina",
        title: "Executive Treat Connoisseur",
        description:
            "Gourmet Whiskerina takes treat selection to the next level. This cat is a connoisseur of flavors and textures, curating a menu that satisfies the discerning palates of the feline employees. From organizing treat tastings to staying abreast of the latest trends in gourmet cat cuisine, Gourmet Whiskerina ensures that the company's treat offerings are not only delectable but also nutritionally sound, contributing to the overall well-being of her furry colleagues.",
        image: person4,
    },
];

import works1 from "../assets/images/works-1.jpg";
import works2 from "../assets/images/works-2.jpg";
import works3 from "../assets/images/works-3.jpg";
import works4 from "../assets/images/works-4.jpg";
import works5 from "../assets/images/works-5.jpg";
import works6 from "../assets/images/works-6.jpg";

import videoPreview1 from "../assets/videos/abla_fahita_x_vouge_arabia_snippet.mp4";
import videoPreview2 from "../assets/videos/alex_bank_-_mo_salah_snippet.mp4";
import videoPreview3 from "../assets/videos/banque_misr_-_money_copy_snippet.mp4";
import videoPreview4 from "../assets/videos/banque_misr-_parking_snippet.mp4";
import videoPreview5 from "../assets/videos/bmw_museum_of_sound_snippet.mp4";
import videoPreview6 from "../assets/videos/carrier_snippet.mp4";

export interface IVideo {
    id: string;
    name: string;
    preview: string;
    snippet: string;
}

export const contentData: IVideo[] = [
    {
        id: "1",
        name: "Abla Fahita x Vogue Arabia / Editor-in-Chief / Tameem Youness",
        preview: works1,
        snippet: videoPreview1,
    },
    {
        id: "2",
        name: "ALEX BANK / The Uninvited Guest / Ahmed Hussein",
        preview: works2,
        snippet: videoPreview2,
    },
    {
        id: "3",
        name: "Banque Misr / x / Tameem Youness",
        preview: works3,
        snippet: videoPreview3,
    },
    {
        id: "4",
        name: "Banque Misr / x / Tameem Youness",
        preview: works4,
        snippet: videoPreview4,
    },
    {
        id: "5",
        name: "BMW / Museum of Sound / x",
        preview: works5,
        snippet: videoPreview5,
    },
    {
        id: "6",
        name: "Carrier / Nothing beats Mona / Ali Ali",
        preview: works6,
        snippet: videoPreview6,
    },
];

export const commercialsData: IVideo[] = [
    {
        id: "1",
        name: "ALEX BANK / The Uninvited Guest / Ahmed Hussein",
        preview: works2,
        snippet: videoPreview2,
    },
    {
        id: "2",
        name: "Banque Misr / x / Tameem Youness",
        preview: works3,
        snippet: videoPreview3,
    },
    {
        id: "3",
        name: "Abla Fahita x Vogue Arabia / Editor-in-Chief / Tameem Youness",
        preview: works1,
        snippet: videoPreview1,
    },
    {
        id: "4",
        name: "BMW / Museum of Sound / x",
        preview: works5,
        snippet: videoPreview5,
    },
    {
        id: "5",
        name: "Banque Misr / x / Tameem Youness",
        preview: works4,
        snippet: videoPreview4,
    },
];


export interface INavLink {
    to: string;
    text: string;
    availableInHeader: boolean;
}

export const navLinksData: INavLink[] = [
    {
        to: "/commercials",
        text: "Commercials",
        availableInHeader: true,
    },
    {
        to: "/content",
        text: "Content",
        availableInHeader: false,
    },
    {
        to: "/awards",
        text: "Awards",
        availableInHeader: false,
    },
    {
        to: "/about",
        text: "About",
        availableInHeader: false,
    },
    {
        to: "/people",
        text: "People",
        availableInHeader: true,
    },
    {
        to: "/contact",
        text: "Contact",
        availableInHeader: true,
    },
];

export interface IParagraph {
    id: number;
    text: string;
}
export const aboutParagraphs: IParagraph[] = [
    {
        id: 1,
        text: "Like our namesake, we have worked in the shadows and quietly earned a reputation for ourselves. Founded in 2011, Bigfoot Films is the region's most awarded production house with the unshared advantage of having offices in Cairo, Dubai and Riyadh. Our talented and experienced team cannot overstate their love for spinning a good tale whether it's tv commercials, music videos, films, mini-series, documentaries or branded content.",
    },
    {
        id: 2,
        text: "We have been privileged to work with many big name brands to create content that holds a creative edge all around the globe (UK, Lithuania, to South Africa, Spain, Germany, Amsterdam, and Slovenia). But don't take our word for it, have a look around our website and see for yourself!",
    }
];

export interface IVideoSubpages {
    sublink: 'content' | 'commercials'
}
