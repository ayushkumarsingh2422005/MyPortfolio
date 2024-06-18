// Importing assets
import web from "../assets/skills/web.png";
import android from '../assets/skills/android.png';
import ai from '../assets/skills/ai.png';

import js from '../assets/icons/java-script.png';
import cpp from '../assets/icons/c-.png';
import java from '../assets/icons/java.png';
import py from '../assets/icons/python.png';
import figma from '../assets/icons/figma.png';
import docker from '../assets/icons/docker.png';
import devops from '../assets/icons/devops.png';
import db from '../assets/icons/db.png';
import git from '../assets/icons/git.png';
import linux from '../assets/icons/linux.png';
import bootstarp from '../assets/icons/bootstarp.png';
// import android from '../assets/icons/android.png';

import project1 from '../assets/projects/project1.png';
import codophile from '../assets/projects/codophile.png';
import restorentClint from '../assets/projects/restorentClint.png';
import culfest from '../assets/projects/culfest.png';



const getRandomSize = (min, max) => Math.random() * (max - min) + min;
const getRandomColor = () => {
    // Generate random RGB values within a mid-range to produce balanced shades
    const r = Math.floor(Math.random() * 100) + 100; // R component between 100 and 200
    const g = Math.floor(Math.random() * 100) + 100; // G component between 100 and 200
    const b = Math.floor(Math.random() * 100) + 100; // B component between 100 and 200
    return `rgb(${r},${g},${b})`;
};

// Services array
const services = [
    { name: "Web", icon: web },
    { name: "Android", icon: android },
    { name: "DBMS", icon: js },
    { name: "AI/ML", icon: ai },
];

// Data array
const data = [
    { image: js, text: 'JS' },
    { image: cpp, text: 'C++' },
    { image: java, text: 'Java' },
    { image: py, text: 'Py' },
    { image: ai, text: 'AI' },
    { image: figma, text: 'figma' },
    { image: docker, text: 'docker' },
    { image: devops, text: 'devops' },
    { image: db, text: 'MySQL' },
    { image: android, text: 'android' },
    { image: git, text: 'git' },
    { image: linux, text: 'linux' },
    { image: bootstarp, text: 'bootstrap' },
].map(item => ({
    ...item,
    scale: getRandomSize(1.5, 2),
    color: getRandomColor()
}));
// Projects array
const projects = [
    {
        heading: "Restaurant Manager",
        content:`
                This web-based application streamlines restaurant operations with the features like Daily Sales Records, Order Tracking, Receipt Generation, Store Item Management.
        `, 
        image: restorentClint, 
        tags: ["react", "express", "sqlite"], 
        repo: 'https://github.com/ayushkumarsingh2422005/FrontEnd-Clint'
    },
    {
        heading: "Codophile",
        content: "Codophile is a user-friendly CSS tool designed to generate CSS codes and help users learn CSS efficiently, perfect for both beginners and advanced developers.",
        image: codophile,
        tags: ["SEO", "django", "sqlite"],
        repo: 'https://codophile.in/'
    },
    {
        heading: "Culfest 2k24",
        content: "Culfest is the official website for the cultural fest of NIT Jamshedpur, showcasing event details, schedules, and participation information.",
        image: culfest,
        tags: ["react", "tailwind", "JS"],
        repo: 'https://github.com/Culfest-24'
    },
    {
        heading: "Client Website 3",
        content: "This is my website done by this, this, and this.",
        image: project1,
        tags: ["html", "css", "JS"],
        repo: 'url'
    }
];


export { services, data, projects };



