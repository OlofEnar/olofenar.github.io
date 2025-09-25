import type { CodeProject, DesignProject } from "@/types";
import sodertaljeImage from "@/assets/images/projects/sodertalje.png";
import albertImage from "@/assets/images/projects/albert.png";
import handsImage from "@/assets/images/projects/hands.png";
import simplifyImage from "@/assets/images/projects/simplify.png";
import zatasImage from "@/assets/images/projects/zatasnickarn.png";
import swimImage from "@/assets/images/projects/swim.png";
import myrstensImage from "@/assets/images/projects/myrstens.png";
import hypoImage from "@/assets/images/projects/hypoteket.png";
import dstImage from "@/assets/images/projects/dst.png";
import tvnuImage from "@/assets/images/projects/tvnu.png";

const tags: string[] = ["Editorial", "Illustration", "Branding", "For fun"];

const designProjects: DesignProject[] = [
  {
    slug: "myrstens",
    featured: true,
    title: "Myrstens",
    description: "Branding for carpenter",
    tags: ["Branding", "Logo"],
    category: "Design",
    imgUrl: myrstensImage,
  },
  {
    slug: "tvnu",
    featured: true,
    title: "TV.NU",
    description: "Campaign",
    tags: ["Ad"],
    category: "Design",
    imgUrl: tvnuImage,
  },
  {
    slug: "dst",
    featured: true,
    title: "DST Control",
    description: "Product showcase",
    tags: ["Branding", "Editorial"],
    category: "Design",
    imgUrl: dstImage,
  },
  {
    slug: "sodertalje",
    featured: true,
    title: "Södertälje kommun",
    description: "Editorial design project",
    tags: ["Editorial"],
    category: "Design",
    imgUrl: sodertaljeImage,
  },
  {
    slug: "albert",
    featured: true,
    title: "Albert campaign",
    description: "Illustrations for Albert",
    tags: ["Illustration"],
    category: "Design",
    imgUrl: albertImage,
  },
  {
    slug: "hands",
    featured: true,
    title: "Hands",
    description: "Editorial design project",
    tags: ["Illustration"],
    category: "Illustration",
    imgUrl: handsImage,
  },
  {
    slug: "simplify",
    featured: true,
    title: "Simplify change",
    description: "Branding for Simplify change",
    tags: ["Branding"],
    category: "Design",
    imgUrl: simplifyImage,
  },
  {
    slug: "zatasnickarn",
    featured: true,
    title: "Zätasnickarn",
    description: "Branding for carpenter",
    tags: ["Branding", "Logo"],
    category: "Design",
    imgUrl: zatasImage,
  },
  {
    slug: "swim",
    featured: true,
    title: "Exploaterings-processen",
    description: "Editorial design project",
    tags: ["Illustration"],
    category: "Design",
    imgUrl: swimImage,
  },
  {
    slug: "hypoteket",
    featured: true,
    title: "Hypoteket",
    description: "Set of illustrations for geotagged campaign",
    tags: ["Illustration"],
    category: "Design",
    imgUrl: hypoImage,
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

export { tags, designProjects, codeProjects };
