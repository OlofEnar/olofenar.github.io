import type {CodeProject, DesignProject} from "@/types";
import sodertaljeImage from "@/assets/images/projects/cover-imgs/sodertalje.png";
import albertImage from "@/assets/images/projects/cover-imgs/albert.png";
import handsImage from "@/assets/images/projects/cover-imgs/hands.png";
import simplifyImage from "@/assets/images/projects/cover-imgs/simplify.png";
import zatasImage from "@/assets/images/projects/cover-imgs/zatasnickarn.png";
import swimImage from "@/assets/images/projects/cover-imgs/swim.png";
import myrstensImage from "@/assets/images/projects/cover-imgs/myrstens.png";
import hypoImage from "@/assets/images/projects/cover-imgs/hypoteket.png";
import dstImage from "@/assets/images/projects/cover-imgs/dst.png";
import dstImage1 from "@/assets/images/projects/dst/dst-1.png";
import dstImage2 from "@/assets/images/projects/dst/dst-2.png";
import dstImage3 from "@/assets/images/projects/dst/dst-3.png";
import dstImage4 from "@/assets/images/projects/dst/dst-4.png";
import tvnuImage from "@/assets/images/projects/cover-imgs/tvnu.png";

const tags: string[] = ["Editorial", "Illustration", "Branding", "For fun"];

const designProjects: DesignProject[] = [
    {
        slug: "myrstens",
        featured: true,
        title: "Myrstens",
        description: "Branding for carpenter",
        longDescription: "",
        tags: ["Branding", "Logo"],
        category: "Design",
        coverImgUrl: myrstensImage,
    },
    {
        slug: "tvnu",
        featured: true,
        title: "TV.NU",
        description: "Campaign",
        longDescription: "",
        tags: ["Ad"],
        category: "Design",
        coverImgUrl: tvnuImage,
    },
    {
        slug: "dst",
        featured: true,
        title: "DST Control",
        description: "Product showcase",
        longDescription: "",
        tags: ["Branding", "Editorial"],
        category: "Design",
        coverImgUrl: dstImage,
        gallery: [dstImage1, dstImage2, dstImage3, dstImage4]
    },
    {
        slug: "sodertalje",
        featured: true,
        title: "Södertälje kommun",
        description: "Editorial design project",
        longDescription: "",
        tags: ["Editorial"],
        category: "Design",
        coverImgUrl: sodertaljeImage,
    },
    {
        slug: "albert",
        featured: true,
        title: "Albert campaign",
        description: "Illustrations for Albert",
        longDescription: "",
        tags: ["Illustration"],
        category: "Design",
        coverImgUrl: albertImage,
    },
    {
        slug: "hands",
        featured: true,
        title: "Hands",
        description: "Editorial design project",
        longDescription: "",
        tags: ["Illustration"],
        category: "Illustration",
        coverImgUrl: handsImage,
    },
    {
        slug: "simplify",
        featured: true,
        title: "Simplify change",
        description: "Branding for Simplify change",
        longDescription: "",
        tags: ["Branding"],
        category: "Design",
        coverImgUrl: simplifyImage,
    },
    {
        slug: "zatasnickarn",
        featured: true,
        title: "Zätasnickarn",
        description: "Branding for carpenter",
        longDescription: "",
        tags: ["Branding", "Logo"],
        category: "Design",
        coverImgUrl: zatasImage,
    },
    {
        slug: "swim",
        featured: true,
        title: "Exploaterings-processen",
        description: "Editorial design project",
        longDescription: "",
        tags: ["Illustration"],
        category: "Design",
        coverImgUrl: swimImage,
    },
    {
        slug: "hypoteket",
        featured: true,
        title: "Hypoteket",
        description: "Set of illustrations for geotagged campaign",
        longDescription: "",
        tags: ["Illustration"],
        category: "Design",
        coverImgUrl: hypoImage,
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
