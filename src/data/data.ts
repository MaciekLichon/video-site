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
}

export const newAwardsData: INewAward[] = [
    {
        id: 1,
        award: "Gold",
        event: "Cannes Lions",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview1,
    },
    {
        id: 2,
        award: "Silver",
        event: "Dubai Lynx",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview2,
    },
    {
        id: 3,
        award: "Bronze",
        event: "D&AD",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview3,
    },
    {
        id: 4,
        award: "Gold",
        event: "Cannes Lions",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview4,
    },
    {
        id: 5,
        award: "Silver",
        event: "Dubai Lynx",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview5,
    },
    {
        id: 6,
        award: "Bronze",
        event: "D&AD",
        commentOne: 'Etisalat KSA',
        commentTwo: 'Commercial / Art direction',
        video: videoPreview6,
    }
]

export interface ILocation {
    location: string;
    phone: string;
    email: string;
    address: string;
}

export const locationsData: ILocation[] = [
    {
        location: "Whisker Harbor",
        phone: "123 456 789",
        email: "email@com.pl",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.",
    },
    {
        location: "Pawsperity Square",
        phone: "123 456 789",
        email: "email@com.pl",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi.",
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

import videoPreview1 from "../assets/videos/video-preview-1.mp4";
import videoPreview2 from "../assets/videos/video-preview-2.mp4";
import videoPreview3 from "../assets/videos/video-preview-3.mp4";
import videoPreview4 from "../assets/videos/video-preview-4.mp4";
import videoPreview5 from "../assets/videos/video-preview-5.mp4";
import videoPreview6 from "../assets/videos/video-preview-6.mp4";

export interface IVideo {
    id: string;
    link: string;
    name: string;
    preview: string;
    video: string;
}

export const videosData: IVideo[] = [
    {
        id: "1",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "Napflix and Chill: The Purrvana Chronicles",
        preview: works1,
        video: videoPreview1,
    },
    {
        id: "2",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "WhiskerWhirl: A Feline Odyssey",
        preview: works2,
        video: videoPreview2,
    },
    {
        id: "3",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "Treatopia: Culinary Whisker Delights",
        preview: works3,
        video: videoPreview3,
    },
    {
        id: "4",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "Paws of Harmony: Feline Relations Unleashed 2",
        preview: works4,
        video: videoPreview4,
    },
    {
        id: "5",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "Sunbeam Symphony: A Strategic Catventure",
        preview: works5,
        video: videoPreview5,
    },
    {
        id: "6",
        link: "https://player.vimeo.com/video/482533185?background=1",
        name: "Paws of Harmony: Feline Relations Unleashed",
        preview: works6,
        video: videoPreview6,
    },
];

export interface INavLink {
    to: string;
    text: string;
    availableInHeader: boolean;
}

export const navLinksData: INavLink[] = [
    {
        to: "/videos",
        text: "Works",
        availableInHeader: true,
    },
    {
        to: "/people",
        text: "Squad",
        availableInHeader: true,
    },
    {
        to: "/contact",
        text: "Contact",
        availableInHeader: true,
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
];

export interface IParagraph {
    id: number;
    text: string;
}
export const aboutParagraphs: IParagraph[] = [
    {
        id: 1,
        text: "In the heart of Purrvana, the whimsical rhythm of success is conducted by the creative minds behind our feline-centric culture. As recipients of the Purrvana Excellence in Whiskerization, we take pride in fostering an environment where whiskers aren't just a facial feature but a celebrated aspect of individuality. The Diamond Whisk shines bright as a symbol of our commitment to crafting a workplace where each cat's unique charm is not only acknowledged but embraced.",
    },
    {
        id: 2,
        text: "At Purrvana, the Pawsperity Square, Clawston office is a testament to our dedication to overall excellence. The Purrfection Pioneer Award, our crowning achievement, recognizes the synergy between our cat colleagues and our commitment to innovation in feline-friendly corporate practices. With a score of 9.9 out of 10 in the Pawsome Platinum category, we stride forward, paws held high, into a future where cats and corporate success coexist in purrfect harmony.",
    },
    {
        id: 3,
        text: "Purrvana's journey extends across unique locations like Kitty Grove, Purrlandia, and Tabby Towers, Whiskington. These aren't just physical spaces but vibrant hubs where the Whiskerized ethos thrives. As the Platinum Treat holder, we continue to delight feline taste buds, ensuring that the golden thread of our cat-inspired brilliance weaves through every facet of our expanding empire.",
    },
    {
        id: 4,
        text: "Step into our Catropolis Central, Purrbania location, and you'll witness firsthand the seamless integration of feline finesse and corporate prowess. Gourmet Whiskerina's culinary mastery, celebrated with the Platinum Treat, exemplifies our commitment to providing a gastronomic haven for our discerning cat colleagues. The WhiskerWonder Distinction and SnoozeMaster Excellence Award are more than accolades; they symbolize our dedication to making Purrvana not just a workplace but a realm of endless possibilities for our cherished feline associates.",
    },
];
