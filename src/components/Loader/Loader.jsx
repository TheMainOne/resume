import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';


export const Loader = () => {
   
    return (

         <Container> <ThreeDots
                height="100"
                width="200"
                radius="9"
                color='#ff6b08'
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
        />
        </Container>


    )
}
