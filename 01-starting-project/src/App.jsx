import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
function App() {

  const [projectsState,] = useState({
    selectedProjectedId:undefined,
    projects : []
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectedId :null,
        
      };
    });
  }

  let content;

  if (projectsState.selectedProjectedId === null){
    content = <NewProject/>
  }else if (projectsState.selectedProjectedId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject = {handleStartAddProject}/>
     {content}
     </main>
  );
}

export default App;
