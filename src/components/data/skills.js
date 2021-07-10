import { FaDev, FaJava, FaPython } from 'react-icons/fa';
import { SiPostgresql, SiTypescript } from 'react-icons/si';

export const SkillsData = [
    {
        type: "Frontend",
        list: [
            {
                name: "Typescript",
                icon: <SiTypescript />
            },
            {
                name: "Python",
                icon: <FaPython />
            },
            {
                name: "Java",
                icon: <FaJava />
            },
        ],
    },
    {
        type: "Backend",
        list: [
            {
                name: "C++",
                icon: <FaDev />
            },
            {
                name: "SQL",
                icon: <SiPostgresql />
            },
        ],
    },
]
