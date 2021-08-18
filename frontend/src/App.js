import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/background.jfif'

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
   
    function handleAddProject(){
        //projects.push(`Novo Projeto ${Date.now()}`);
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        console.log(projects);
    }
    return (
        <>
        <Header title="Projects" />
        <img width={350} src={backgroundImage}></img>
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;