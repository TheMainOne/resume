import  errorImage  from "../../icons/profiles/not-found-error-min.jpg"
import {Img, Container} from "./NotFound.styled"

const NotFound = () => {

   return (
    <Container role="alert">
      <Img src={errorImage} width="650" alt="Error" />
      {/* <Title>Page not found 😨</Title> */}
    </Container>
  );
}


export default NotFound;
