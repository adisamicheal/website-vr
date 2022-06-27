import './Home.scss';
import Form from '../../components/Form/Form.js'
// import 'bulma/css/bulma.min.css';
// import { Button } from 'react-bulma-components';

const Home = () => {
    return (
        <div className="Home">
            <div className="app-container">
                <div>
                    <h1 className="greetings">Hey There!</h1>
                    <p className="intro">My name is <span className="name">Micheal</span>.</p>
                    <p className="description">
                        A Software engineer keen about growth and development. I like to transform designs into relatable and interactive softwares
                        having scalability in mind.
                        I am an engineer who values high-performance accessible web experiences. I design to ensure my products are quality, user-friendly and scalable.
                        I believe in the fact that all problem have an actual solution which is somewhere lurking around waiting to be found.
                    </p>
                </div>
                <div className="design">
                    <p className="more-stuffs">
                        I design
                        and build
                        cool stuff.
                    </p>
                    <p className="solution">Provide  solutions for Engineering Problems.</p>
                </div>
                <div className="tech_socials">
                    <p>Technologies used</p>
                    <div className="tech">
                        <p><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJs</a></p> 
                        <p><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex</a></p> 
                        <p><a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">NuxtJS</a></p> 
                        <p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></p>
                        <p><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJS</a></p>
                    </div>
                        <div className="tech">
                            <p><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Scss</a></p>
                            <p><a href="https://git-scm.com/about" target="_blank" rel="noopener noreferrer">Git</a></p>
                            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a></p>
                        </div>
                </div>
                <div className="tech_socials">
                    <p className="find">Find me on</p>
                    <div className="socials">
                        <p><a href="https://twitter.com/michellead" target="_blank" rel="noopener noreferrer">Twitter</a></p> 
                        <p><a href="https://linkedin.com/in/micheal-adisa-5b5250170" target="_blank" rel="noopener noreferrer">LinkedIn</a></p> 
                        <p><a href="https://github.com/adisamicheal" target="_blank" rel="noopener noreferrer">Github</a></p> 
                    </div>
                </div>
                <div className="resume">
                    Find my Résumé <a href="https://drive.google.com/file/d/18fNDRuyrWbx9st7jB4z01bpw2dCUZ8gx/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
                </div>
            </div>
            <div className="form">
                <Form />
            </div>
        </div>
    );
}

export default Home;