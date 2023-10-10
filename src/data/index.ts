import { Itopic, Ifooter } from "../interface";
import highlightPic from "../assets/highlight.jpg";
import writerPic from "../assets/writer.jpg";
import pic1 from "../assets/1 (1).jpg";
import pic2 from "../assets/1 (2).jpg";
import pic3 from "../assets/1 (3).jpg";
import pic4 from "../assets/1 (4).jpg";
import pic5 from "../assets/1 (5).jpg";
import pic6 from "../assets/1 (6).jpg";
import pic7 from "../assets/1 (7).jpg";
import pic8 from "../assets/1 (8).jpg";
import pic9 from "../assets/1 (9).jpg";

export const highlightTopic: Itopic & { writerPic: string } = {
  title: "Exclusive Interview with Kiana Rose Mayer",
  content: "Exclusive Interview with Kiana Rose Mayer",
  pic: highlightPic,
  writer: "Amelie Laurent",
  writerPic: writerPic,
  publish: 1710349200000,
  file: ["Design", "Photography", "Interviews", "10 min read"],
};

export const topics: Itopic[] = [
  {
    title: "Conversations with Mark & Co.",
    content:
      "We sat down with London's fast-growing brand and product dosign studio, Makr & Co. to find out how they've used Blogpost to 2x their revenue.",
    pic: pic1,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Research", "Interviews"],
  },
  {
    title: "A Relentless Pursuit of Perfection in Product Design",
    content:
      "I began to notice that there was a sharp contrast between well-made, crafteti products and poorly made nes, and an even greater distinction between the people. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic2,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Product", "Research", "Frameworks"],
  },
  {
    title: "How to Run a Successful Business With Your Partner",
    content:
      "Starting a business with your spouse or significant other is an exeiting but delicato process and requires a great deal of faith. We spoke to a dozen successful business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic3,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Research"],
  },
  {
    title: "A Continually Unfolding History — Hillview by Made by Hand",
    content:
      "A single building occupies the hillside at Hilvow, a historic 240-hectare former shoop farm on Tasmzanio's Bruny Istand. The much-lauded work of Mache by Hand. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic4,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Architecture"],
  },
  {
    title: "Cognitive Dissonance Theory: Crash Course for UX Designers",
    content:
      "We all like to think of ourselves as in cortain ways. We consider ourselves to bo truthful, hared-working, health-conscious, and in control. But our actions don't always Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic5,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Product", "Research", "Frameworks"],
  },
  {
    title: "How Remote Work Drastically Improved My Design Skills",
    content:
      "Remote working might not only be feasible but beneficial. Stanford University found that remote employee were 13% more productive, with absolute. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic6,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Research"],
  },
  {
    title: "Exclusive Interview with Designer, Jasmin Chew",
    content:
      "Jasmin Chew is a 23-year-old photographer and photoeditor from Toronto, Ontario. she has worked withSpotity, Niko. Chews, Makr, and Square. Mia de Silva. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic7,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Research", "Interviews"],
  },
  {
    title: "Improve Your UI Design Skills and Develop an 'Eye' for Design",
    content:
      "The design industry is constantly evolving, but good design is timotess. Loarn how to quickly dovotop an 'eye' for Ul design and improve your design skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi alias excepturi id doloremque est corrupti obcaecati nihil voluptate minima. Neque excepturi sunt corrupti beatae adipisci pariatur, iure facere doloremque?",
    pic: pic8,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Tools", "Research"],
  },
  {
    title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity",
    content:
      "Frankie Sulfwan explores the 'Design Dilemma' — what happons when best practice UX design clashes with creativity?",
    pic: pic9,
    writer: "Amelie Laurent",
    publish: 1710349200000,
    file: ["Design", "Theory", "Research"],
  },
];

export const footers: Ifooter[] = [
  {
    title: "product",
    list: [
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases",
    ],
  },
  {
    title: "company",
    list: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
  },
  {
    title: "resources",
    list: [
      "Blog",
      "Newsletter",
      "Events",
      "Help centre",
      "Tutorials",
      "Support",
    ],
  },
  {
    title: "use cases",
    list: [
      "Startups",
      "Enterprise",
      "Government",
      "Saas",
      "Marketplaces",
      "Ecommerce",
    ],
  },
  {
    title: "social",
    list: [
      "Twitter",
      "LinkedIn",
      "Facebook",
      "GitHub",
      "AngelList",
      "Dribbble",
    ],
  },
  {
    title: "legal",
    list: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  },
];
