import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1220px;
    padding: 0 15px;
    margin: 0 auto;
`

const Container = (props) => {
    return ( 
        <Wrapper>
            {props.children}
        </Wrapper>
     );
}
 
export default Container;