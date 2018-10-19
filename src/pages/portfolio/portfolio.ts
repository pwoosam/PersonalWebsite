export class Portfolio {
    projectTypes: ProjectType[];
    selectedItem: ProjectType;

    constructor() {
        this.projectTypes = [
            new ProjectType('FullStack Software Development', [
                new ProjectSkill('C#', 'badge-primary'),
                new ProjectSkill('Asp.Net', 'badge-primary'),
                new ProjectSkill('.Net Core', 'badge-primary'),
                new ProjectSkill('SASS', 'badge-danger'),
                new ProjectSkill('Aurelia', 'badge-danger'),
                new ProjectSkill('TypeScript', 'badge-danger'),
                new ProjectSkill('HTML5', 'badge-danger'),
            ], `A Full Stack developer is responsible for front and back-end web development.
            Usually, good full stack developers will understand severalhow to work with several
            languages and databases including PHP, HTML, CSS, JavaScript and everything in between.`),
            new ProjectType('Software/Hardware Interface', [
                new ProjectSkill('Raspberry Pi', 'badge-primary'),
                new ProjectSkill('Arduino', 'badge-primary'),
                new ProjectSkill('SPI', 'badge-info'),
                new ProjectSkill('I2C', 'badge-info'),
            ], `In computing, an interface is a shared boundary across which two or more separate 
            components of a computer system exchange information. The exchange can be between software, 
            computer hardware, peripheral devices, humans and combinations of these.`),
            new ProjectType('DevOps', [
                new ProjectSkill('Docker', 'badge-primary'),
                new ProjectSkill('TravisCI', 'badge-info'),
            ], `DevOps is a software development methodology that combines software development with 
            information technology operations. The goal of DevOps is to shorten the systems development 
            life cycle while also delivering features, fixes, and updates frequently in close alignment 
            with business objectives.`),
            new ProjectType('Data Science and Bioinformatics', [
                new ProjectSkill('Python', 'badge-primary'),
                new ProjectSkill('Numpy', 'badge-primary'),
                new ProjectSkill('Pandas', 'badge-primary'),
                new ProjectSkill('Matplotlib', 'badge-primary'),
                new ProjectSkill('R', 'badge-info'),
                new ProjectSkill('MATLAB', 'badge-danger'),
            ], `Data science is an interdisciplinary field that uses scientific methods, processes, 
            algorithms and systems to extract knowledge and insights from data in various forms, both 
            structured and unstructured, similar to data mining.`),
            new ProjectType('3D Modeling and Printing', [
                new ProjectSkill('Cura', 'badge-primary'),
                new ProjectSkill('Fusion 360', 'badge-primary'),
                new ProjectSkill('OpenSCAD', 'badge-info'),
                new ProjectSkill('OctoPi', 'badge-secondary'),
            ], `3D modeling is the process of creating a 3D representation of any surface or object by 
            manipulating polygons, edges, and vertices in simulated 3D space. You've seen the results 
            of 3D modeling in movies, animations, and video games that are filled with fantastical and 
            imaginative creatures and structures.`),
        ];

        this.selectedItem = this.projectTypes.length > 0 ? this.projectTypes[0] : undefined;
    }

    selectItem(item: ProjectType) {
        this.selectedItem = item;
    }
}

class ProjectSkill {
    title: String;
    badgeColorClass: String

    constructor(title: String, badgeColorClass?: String) {
        this.title = title;
        this.badgeColorClass = badgeColorClass;
    }
}

class ProjectType {
    title: String;
    skills: ProjectSkill[];
    description: String;

    constructor(title: String, skills?: ProjectSkill[], description?: String) {
        this.title = title;
        this.skills = skills;
        this.description = description;
    }
}