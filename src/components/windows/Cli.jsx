import Terminal from 'react-console-emulator';
import MacWindow from './MacWindow';
import './cli.scss'

const Cli = ({ windowName, windowProps }) => {

    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite`

        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. EkCupChai - React + Js
3. FluxBoard - HTML/CSS/JS
4. NexusPDF ChatBot - Python & Langchain`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Data Analysis Intern @ IIT Bombay (Jun2025 - Oct2025)
    - Analyzed large datasets using Python and SQL

Web Development Intern @ Walstar Technologies (Sept2025 - Oct2025)
    - Developed a responsive e-commerce website using Shopify theme development and Liquid templating language`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: shreyash@example.com
Phone: +91 123-123-4567
Location: Maharashtra, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/shreyashshetty018', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @shreyash04356
LinkedIn: /in/shreyashshetty-0909
Portfolio: shreyash-shetty-portfolio.netlify.app`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`
    return (
        <MacWindow windowName={windowName} windowProps={windowProps}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'shreyash:~$'}

                    /* docs-based visual customization */
                    backgroundColor="#242424"
                    textColor="#e5e5e5"
                    promptLabelStyle={{ color: '#00ff00' }}
                    inputTextStyle={{ color: '#ffffff' }}
                    outputTextStyle={{ color: '#d1d5db' }}

                    /* docs-based behavior customization */
                    hideTopBar
                    autoFocus
                    commandPassThrough={(cmd) => `command not found: ${cmd}`}
                />
            </div>
        </MacWindow>
    )
}

export default Cli