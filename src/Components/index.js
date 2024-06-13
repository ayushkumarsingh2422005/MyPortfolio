import web from "../assets/skills/web.png"
import android from '../assets/skills/android.png'
import ai from '../assets/skills/ai.png'

import js from '../assets/icons/java-script.png'
import cpp from '../assets/icons/c-.png'
import java from '../assets/icons/java.png'
import py from '../assets/icons/python.png'

import project1 from '../assets/projects/project1.png'

const services = [
    { name: "Web", icon: web },
    { name: "Android", icon: android },
    { name: "DBMS", icon: js },
    { name: "AI/ML", icon: ai },
]

const data = [
    { color: '#444', image: js, scale: 1.5, text: 'JS' },
    { color: '#444', image: cpp, scale: 2, text: 'C++' },
    { color: '#ff4060', image: java, scale: 3, text: 'Java' },
    { color: '#444', image: py, scale: 1.5, text: 'Py' },
    { color: '#444', image: ai, scale: 2, text: 'AI' },
    { color: '#444', image: js, scale: 1.5, text: 'JS' },
    { color: '#444', image: cpp, scale: 2, text: 'C++' },
    { color: '#ff4060', image: java, scale: 3, text: 'Java' },
    { color: '#444', image: py, scale: 1.5, text: 'Py' },
    { color: '#444', image: ai, scale: 2, text: 'AI' },
    { color: '#444', image: js, scale: 1.5, text: 'JS' },
    { color: '#444', image: cpp, scale: 2, text: 'C++' },
    { color: '#ff4060', image: java, scale: 3, text: 'Java' },
]

const projects = [
    {heading: "Clint website", content: "this is my website done by this this and this", image: project1, tags: ["html", "css", "JS"], repo: 'url'},
    {heading: "Clint website", content: "this is my website done by this this and this", image: project1, tags: ["html", "css", "JS"], repo: 'url'},
    {heading: "Clint website", content: "this is my website done by this this and this", image: project1, tags: ["html", "css", "JS"], repo: 'url'},
    {heading: "Clint website", content: "this is my website done by this this and this", image: project1, tags: ["html", "css", "JS"], repo: 'url'}
]
export { services, data, projects }