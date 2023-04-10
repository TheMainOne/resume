import { personalProjects, teamProjects } from "../../utils/projects";
import { Title, List, Main} from "../Projects/Projects.styled";
import ProjectsInfo from "../../components/Projects/ProjectsInfo"
import { Button, NavItem } from "../../utils/commonStyles"
import { IoCaretForward } from "react-icons/io5"



const Projects = () => {
    return (
        <Main> 
    
        <Title> [Personal Projects] </Title>
        
        <List> 
                {personalProjects.map(({ id, label, link, repo, preview, info, tech }) => (
                    <ProjectsInfo key={id} label={label} link={link} repo={repo} preview={preview} info={info} tech={tech} />
                ))}
        </List>
            

        <Title> [Team Projects] </Title>
        
        <List>         
                {teamProjects.map(({ id, label, link, repo, preview, info, tech }) => (
                    <ProjectsInfo key={id} label={label} link={link} repo={repo} preview={preview} info={info} tech={tech} />
                ))}
        </List>
                
         <NavItem to="/contact" key={"contact"}> <Button>Contact_Me<IoCaretForward/> </Button> </NavItem>  


        </Main>
    )
}


export default Projects;