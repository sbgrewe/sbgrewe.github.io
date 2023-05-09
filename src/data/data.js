import bg_tenser from '../assets/projects/tenser.png'
import bg_statistical from '../assets/projects/statistical.png'
import bg_research from '../assets/projects/research.png'
import bg_Offbeat from '../assets/projects/offbeat.png'

import icon_Github from '../assets/projects/github.png'
import icon_Linkedin from '../assets/projects/github.png'
import icon_Email from '../assets/projects/github.png'

import py_logo from '../assets/projects/python.png';
import R_logo from '../assets/projects/R.png';
import MATLAB_logo from '../assets/projects/matlab.png';
import MySQL_logo from '../assets/projects/mysql.png';
import MSAccess_logo from '../assets/projects/msaccess.png';
import MSExcel_logo from '../assets/projects/msexcel.png';
import React_logo from '../assets/projects/react.png';
import JS_logo from '../assets/projects/javascript.png';
import HTML_logo from '../assets/projects/html.png';
import Tableau_logo from '../assets/projects/tableau.png';
import Github_logo from '../assets/projects/github.png';


export const proj_data=[
    {
        id: 0,
        title: 'Tenser.io',
        description: "A chatbot for the application Discord which answers questions from users about tabletop games.",
        image: bg_tenser,
        tags: 'Python, SQL, SQLite3, Discord API.',
        visit: 'https://github.com/sbgrewe/tenser.io-public',
    },
    {
        id: 1,
        title: 'Statistical Sandbox',
        description:"A collection of some statistical problems, tools, visualizations, and dashboards collected during my graduate education.",
        image: bg_statistical,
        tags: 'Python, R, Tableau.',
        visit: 'https://github.com/sbgrewe/Projects-in-Data-Science',
    },
    {
        id: 2,
        title: 'Blog',
        description: "Problems, solutions, and stories encountered in the world of data with interactible figures. (Under construction).",
        image: bg_statistical,
        tags: 'Python, R, Quarto',
        visit: '/#/Blog',
    },
    {
        id: 3,
        title: 'Past Academic Research',
        description: "Investigating the function of cell membranes in enzyme-mediated biocatalysis and bioenergetic pathways.",
        image: bg_research,
        tags: 'Python, MATLAB, VMD, Tcl.',
        visit: 'https://github.com/sbgrewe',
    },
    {
        id: 4,
        title: 'Offbeat',
        description: "A computer game about mythology and road tripping in the American South.",
        image: bg_Offbeat,
        tags: 'Godot 4, SQL, Inkscape.',
        visit: 'https://github.com/sbgrewe',
    },
]
export const skill_data = [
    {
        id: 0,
        name: 'Python',
        src: py_logo,
        alt: "Python logo",
    },
    {
        id: 1,
        name: 'R',
        src: R_logo,
        alt: "R logo",
    },
    {
        id: 2,
        name: 'MATLAB',
        src: MATLAB_logo,
        alt: "MATLAB logo",
    },
    {
        id: 3,
        name: 'MySQL',
        src: MySQL_logo,
        alt: "MySQL logo",
    },
    {
        id: 4,
        name: 'Microsoft Access',
        src: MSAccess_logo,
        alt: "MS Access logo",
    },
    {
        id: 5,
        name: 'Microsoft Excel',
        src: MSExcel_logo,
        alt: "MS Excel logo",
    },
    {
        id: 6,
        name: 'React',
        src: React_logo,
        alt: "React logo",
    },
    {
        id: 7,
        name: 'JavaScript',
        src: JS_logo,
        alt: "JavaScript logo",
    },
    {
        id: 8,
        name: 'HTML',
        src: HTML_logo,
        alt: "HTML logo",
    },
    {
        id: 9,
        name: 'Tableau',
        src: Tableau_logo,
        alt: "Tableau logo",
    },
    {
        id: 10,
        name: 'Github',
        src: Github_logo,
        alt: "Github logo",
    },
]

export const contact_data = [
    {
        id: 0,
        name: 'Email',
        image: icon_Email,
        link: 'mailto:spencer.grewe@gmail.com',
    },    
    {
        id: 1,
        name: 'Linkedin',
        image: icon_Linkedin,
        link: 'https://www.linkedin.com/in/spencer-grewe-820a87157/',
    },    
    {
        id: 2,
        name: 'Github',
        image: icon_Github,
        link: 'https://github.com/sbgrewe',
    },
]