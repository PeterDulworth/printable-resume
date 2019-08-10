import React from 'react';
import ItemHeader from './ItemHeader';
import Section from './Section';
import Bullets from './Bullets';
import Item, { WorkItem } from './Item';
import Skills from './Skills';
import WhoAmI from './WhoAmI';

// must be a class component for printing to work :/
class PrintableResume extends React.Component {
    render() {
        return <div className="PrintableResume">
            <header className="PrintableResume--title"><span>Peter Dulworth</span></header>
            
            <WhoAmI />

            <Section title="education">
                <Item>
                    <ItemHeader title="Rice University" date="Spring 2020" />
                    <i>B.S. Computer Science, B.A. Mathematics</i>
                </Item>
            </Section>
            
            <Section title="work experience">
                <WorkItem title="Indeed" subTitle=" - Austin, TX" date="Summer 2019" position="SDE Intern" >
                    <Bullets items={[
                        "Built a full stack web-app using ReactJS and Java Spring that allowed non-technical team members to easily manage a set of complex configuration files which enabled and disabled different features on the search results page of indeed dot com."
                    ]}/>
                </WorkItem>

                <WorkItem title="Two Sigma" subTitle=" - Houston, TX" date="Spring 2019" position="Lead Programming Mentor">
                    <Bullets items={[
                        "Worked with Two Sigma engineers and fellow Rice students to guide HS students in the creation of a robot for the 2019 FRC competition."
                    ]}/>
                </WorkItem>

                <WorkItem title="Computer Science Department" subTitle=" - Rice University" date="Spring 2018, 2019" position="Teaching Assistant">
                    <Bullets items={[
                        "TA'd Algorithms and Advanced OOP. Responsibilities include grading, weekly office hours, and assisting students with weekly in class problem solving sessions. "
                    ]}/>
                </WorkItem>

                <WorkItem title="Computer Science Department" subTitle=" - Rice University" date="May 2017 - May 2018" position="Research Assistant">
                    <Bullets items={[
                        <span>Built a python application for visualizing evolutionary diversity across genomes <a href="https://github.com/chilleo/ALPHA">ALPHA</a>: a toolkit for Automated Local PHylogenomic Analyses, that provides an intuitive user interface for phylogenetic analyses and data-viz.</span>
                    ]}/>
                </WorkItem>

                <WorkItem title="BreviTest Technologies" subTitle=" - Houston, TX" date="Summer 2014 - 2016" position="SWE Intern" >
                    <Bullets items={[
                        "Built the front-end (using angular.js) and the back-end (using node.js) of a website that connected our cloud enabled device to both the users and the company."
                    ]}/>
                </WorkItem>
            </Section>
            
            <Section title="publications">
                <Item>
                    <ItemHeader title="DGEN: A Test Statistic for Detection of General Introgression Scenarios" date="Presented: 21 August 2018" />
                    WABI 2018, <a href="https://doi.org/10.1101/348649 ">https://doi.org/10.1101/348649 </a>
                </Item>
                <Item>
                    <ItemHeader title="ALPHA: A Toolkit for Automated Local Phylogenomic Analyses" date="Published: 19 March 2018" />
                    Bioinformatics, bty173, <a href="https://doi.org/10.1093/bioinformatics/bty173">https://doi.org/10.1093/bioinformatics/bty173</a> 
                </Item>
            </Section>
            
            <Section title="skills">
                <Skills columnTitles={['Languages', 'Libraries/Frameworks', 'Other']}>
                    <Bullets items={[
                        "Expert in Java",
                        "Expert in JS/CSS/HTML",
                        "Proficient in Python",
                        "Proficient in C / C++",
                    ]} />
                    <Bullets items={[
                        "Expert in ReactJS",
                        "Experienced in Java Spring",
                        "Experienced in Flask",
                        "Experienced in Hadoop / Spark",

                    ]} />
                    <Bullets items={[
                        "Proficient in Linux / Bash / Zsh",
                        "Proficient in LATEX",
                        "Proficient in VCS (git, SVN)",
                        "Experience in Agile",

                    ]} />
                </Skills>
            </Section>
            
            <Section title="projects">
                <Item>
                    <ItemHeader title="Jam Programming Language" subTitle=": Java / Interpreters / Rice University" date="Spring 2019" />
                    <Bullets items={["Implemented an interpreter for a functional programming language called Jam (roughly based on Scheme). Parsed the program text into an Abstract Syntax Tree which was then traversed using the Visitor Design Pattern. The interpreter supported things like type safety, context sensitive syntax checking, and lazy evaluation."]}/>
                </Item>
                <Item>
                    <ItemHeader title="Part-of-Speech Tagging Project" subTitle=": Python / Algorithmic Thinking / Rice University" date="Spring 2017" />
                    <Bullets items={["Developed a program to tag each word in a text-file with its part of speech using a second order Hidden Markov Model and the Trigram-Viterbi algorithm."]}/>
                </Item>
            </Section>
            
            <Section title="awards and achievements">
                <Item>
                    <ItemHeader title="President’s Honor Roll" subTitle=" - Rice University" date="Spring 2019" />
                    <Bullets items={["The President's Honor Roll is recognition of an undergraduate’s outstanding academic achievement that particular semester."]} />
                </Item>
                <Item>
                    <ItemHeader title="Best First Time Hack" subTitle=" - Texas A&M Hackathon" date="Spring 2018" />
                    <Bullets items={["Built a web-app that matched Spotify playlists to the user’s primary emotion using Python Flask, and the Spotify Web API."]} />
                </Item>
            </Section>
        </div>;
    }
}

export default PrintableResume;