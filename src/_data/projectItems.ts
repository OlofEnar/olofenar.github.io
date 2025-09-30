import type {CodeProject, DesignProject} from "@/types";
import sodertaljeImage from "@/assets/images/projects/cover-imgs/sodertalje.png";
import albertImage from "@/assets/images/projects/cover-imgs/albert.png";
import handsImage from "@/assets/images/projects/cover-imgs/hands.png";
import zatasImage from "@/assets/images/projects/cover-imgs/zatasnickarn.png";
import swimImage from "@/assets/images/projects/cover-imgs/swim.png";
import myrstensCover from "@/assets/images/projects/cover-imgs/myrstens.jpg";
import myrstensImage1 from "@/assets/images/projects/myrstens/myrstens-1.png";
import myrstensImage2 from "@/assets/images/projects/myrstens/myrstens-2.svg";
import myrstensImage3 from "@/assets/images/projects/myrstens/myrstens-3.svg";
import myrstensImage4 from "@/assets/images/projects/myrstens/myrstens-4.jpg";
import hypoImage from "@/assets/images/projects/cover-imgs/hypoteket.png";
import hypoImage1 from "@/assets/images/projects/hypoteket/hypo-1.png";
import hypoImage2 from "@/assets/images/projects/hypoteket/hypo-2.png";
import hypoImage3 from "@/assets/images/projects/hypoteket/hypo-3.png";
import dstImage from "@/assets/images/projects/cover-imgs/dst.png";
import dstImage1 from "@/assets/images/projects/dst/dst-1.jpg";
import dstImage2 from "@/assets/images/projects/dst/dst-2.jpg";
import dstImage3 from "@/assets/images/projects/dst/dst-3.jpg";
import dstImage4 from "@/assets/images/projects/dst/dst-4.jpg";
import tvnuImage from "@/assets/images/projects/cover-imgs/tvnu.png";
import tvnuImage1 from "@/assets/images/projects/tvnu.jpg";
import sodertaljeImage1 from "@/assets/images/projects/södertälje/soder-1.jpg";
import sodertaljeImage2 from "@/assets/images/projects/södertälje/soder-2.jpg";
import sodertaljeImage3 from "@/assets/images/projects/södertälje/soder-3.jpg";
import sodertaljeImage4 from "@/assets/images/projects/södertälje/soder-4.jpg";


const tags: string[] = ["Editorial", "Illustration", "Branding", "For fun", "Ad", "Logo"];

const designProjects: DesignProject[] = [
    {
        slug: "dst",
        featured: true,
        title: "DST Control",
        description: "Katalog för DST med uppdaterat formspråk.",
        longDescription: "Katalog för DST med uppdaterat formspråk. " +
            "Jag ansvarade för koncept och layout från brief till tryck, " +
            "inklusive ett tidslinjeuppslag som berättar företagets och drönarteknikens utveckling."
        ,
        tags: ["Branding", "Editorial"],
        category: "Design",
        coverImgUrl: dstImage,
        gallery: [dstImage1, dstImage2, dstImage3, dstImage4]
    },
    {
        slug: "myrstens",
        featured: true,
        title: "Myrstens",
        description: "Branding för ett snickeri med fokus på byggnadsvård.",
        longDescription: "Briefen var enkel: ta fram en logotyp för en snickare med fokus på byggnadsvård " +
            "med samma namn som gården de nyligen köpt och renoverar.\n" +
            "På en gammal tapet hittade vi ett mönster de fattat tycke för som jag föreslog " +
            "att vi skulle utgå från. När grundidén var spikad flöt resten på naturligt. " +
            "Jag ritade om symbolen, byggde identiteten kring den och tog fram en färgpalett " +
            "som för tankarna till matt linoljefärg som är så starkt förknippad med byggnadsvård.\n\n" +

            "Resultatet blev en identitet starkt förknippad med gården och även hantverket de utför.",

        tags: ["Branding", "Logo"],
        category: "Design",
        coverImgUrl: myrstensCover,
        gallery: [myrstensImage2, myrstensImage3, myrstensImage1, myrstensImage4]
    },
    {
        slug: "sodertalje",
        featured: true,
        title: "Södertälje kommun",
        description: "Folder samt vepa om hur en exploatering går till.",
        longDescription: "En folder samt vepa som steg för " +
            "steg visar hur en exploateringsprocess går till. Jag utvecklade " +
            "idén tillsammans med Ryter och formgav sedan hela projektet för Södertälje kommun.",
        tags: ["Editorial"],
        category: "Design",
        coverImgUrl: sodertaljeImage,
        gallery: [sodertaljeImage1, sodertaljeImage2, sodertaljeImage3, sodertaljeImage4]
    },
    {
        slug: "hypoteket",
        featured: true,
        title: "Hypoteket",
        description: "Illustrationer för geostyrd kampanj åt Hypoteket",
        longDescription: "",
        tags: ["Illustration"],
        category: "Design",
        coverImgUrl: hypoImage,
        gallery: [hypoImage1, hypoImage2, hypoImage3]
    },
    {
        slug: "tvnu",
        featured: true,
        title: "TV.NU",
        description: "Illustrerad kampanj för tryck",
        longDescription: "Kampanj för TV.NU för tryck. Illustration och design av mig. Koncept utformat tillsammans med byrån QUAD",
        tags: ["Ad", "Illustration"],
        category: "Design",
        coverImgUrl: tvnuImage,
        gallery: [tvnuImage1]
    },
    {
        slug: "albert",
        featured: true,
        title: "Albert campaign",
        description: "Illustration åt Albert",
        longDescription: "",
        tags: ["Illustration"],
        category: "Design",
        coverImgUrl: albertImage,
    },
    {
        slug: "hands",
        featured: true,
        title: "Hands ( I )",
        description: "Illustration för #36daysoftype",
        longDescription: "Illustration för #36daysoftype",
        tags: ["Illustration", "For fun"],
        category: "Illustration",
        coverImgUrl: handsImage,
    },
    // {
    //     slug: "simplify",
    //     featured: true,
    //     title: "Simplify change",
    //     description: "Branding for Simplify change",
    //     longDescription: "",
    //     tags: ["Branding"],
    //     category: "Design",
    //     coverImgUrl: simplifyImage,
    // },
    {
        slug: "zatasnickarn",
        featured: true,
        title: "Zätasnickarn",
        description: "",
        longDescription: "",
        tags: ["Branding", "Logo"],
        category: "Design",
        coverImgUrl: zatasImage,
    },
    {
        slug: "swim",
        featured: true,
        title: "Swim ( A )",
        description: "Illustration för #36daysoftype",
        longDescription: "Illustration för #36daysoftype",
        tags: ["Illustration", "For fun"],
        category: "Design",
        coverImgUrl: swimImage,
    },
];

const codeProjects: CodeProject[] = [
    {
        slug: "snowflake",
        featured: false,
        title: "BI dashboard",
        description:
            "Typescript React frontend ASP Core Backend with Dapper and Postresql database, with Snowflake integration",
        tags: ["Backend"],
        category: "Coding",
        url: "https://github.com/OlofEnar/LIA-frontend",
    },
    {
        slug: "dashboard",
        featured: false,
        title: "Dashboard",
        description:
            "Dashboard built with React with Node backend and Notion as database",
        tags: ["Backend"],
        category: "Coding",
        url: "",
    },
    {
        slug: "webshop",
        featured: false,
        title: "Webshop",
        description:
            "Typescript frontend ASP Core Backend with Dapper and Postresql database, with Snowflake integration",
        tags: [
            "Backend",
            ".NET",
            "Frontend",
            "Node",
            "Blazor",
            "ASP Core",
            "Entity",
        ],
        category: "Coding",
        url: "",
    },
    {
        slug: "coding",
        featured: false,
        title: "Dashboard",
        description:
            "Typescript frontend ASP Core Backend with Dapper and Postresql database, with Snowflake integration",
        tags: ["Backend"],
        category: "Coding",
        url: "",
    },
];

export {tags, designProjects, codeProjects};
