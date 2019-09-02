import React from 'react';
import Section from './Section';
import Item from './Item';
import Skills from './Skills';
import WhoAmI from './WhoAmI';
import Prism from "prismjs";
import '../vendor/prism.css';

// must be a class component for printing to work :/
class PrintableResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: null,
        };
    }

    async componentDidMount() {
        const resp = await fetch('https://peterdulworth.com/api/resumeData/peterdulworth.json');
        const body = await resp.json();
        this.setState({ model: body });
        Prism.highlightAll()
    }

    render() {
        if (this.state.model === null) {
            return 'loading..';
        }

        const skillsIndex = this.state.model.skills.index;

        const sections = this.state.model.sections.map((section, sectionIdx) => 
            <Section title={section.title} key={sectionIdx}>
                {section.items.map((item, itemIdx) => 
                    <Item {...item} key={itemIdx} />
                )}
            </Section>
        );

        const skills = <Skills key={12342} categories={this.state.model.skills.categories} />

        sections.splice(skillsIndex, 0, skills);

        return <div className="PrintableResume">
            <header className="PrintableResume--title"><span>{this.state.model.name}</span></header>
            <WhoAmI personalInfo={this.state.model.personalInfo} />
            {sections}
            {/* <pre>
                <code className="language-javascript" contenteditable="true">
                    {JSON.stringify(this.state.model, null, 2)}       
                </code>
            </pre> */}
        </div>;
    }
}

export default PrintableResume;
