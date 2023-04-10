import { Title, Wrapper, Subtitle, Item, Image, Box, Link, Tech, TechItem} from "./ProjectsInfo.styled"
import { AiFillGithub } from 'react-icons/ai';
import { BsFolderSymlink } from 'react-icons/bs';
import propTypes from 'prop-types';


const ProjectsInfo = ({ label, link, repo, preview, info, tech }) => {
    return (
        <>
        <Item> 
        <Box>
        <Title> {label}  </Title> 
        
        <Image src={preview} alt={label}  loading="lazy" />
        <Wrapper> 
                        <Link href={link} target="_blank" rel="noreferrer" > <BsFolderSymlink size={50}  /> </Link>
                        <Link href={repo} target="_blank" rel="noreferrer" > <AiFillGithub size={50}  /> </Link>
        </Wrapper>
              
        
        </Box>
            <Subtitle>{info} </Subtitle>     
        <Tech>
          {tech.map(({ id, name }) => (
            <TechItem key={id}>[{name}]</TechItem>
          ))}
        </Tech>
        </Item>
        
        </> )
}

ProjectsInfo.propTypes = {
  info: propTypes.string,
  label: propTypes.string,
  link: propTypes.string,
  preview: propTypes.string,
  repo: propTypes.string,
  tech: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string,
    }),
  ),
};

export default ProjectsInfo;

