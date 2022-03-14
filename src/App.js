import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 58px;
    }
    &:active {
      opacity: 0;
    }
  }
  span:hover{}
  span:active{}
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;

/**
 * Attrs 를 직접 추가할수도 있다. 
 * Btn 으로 만들어진 스타일을 링크에도 가져다 쓰고 싶은데. 
 *   1. Link 를 만들어서 Btn을 상속받는 방법
 *   2. Btn 을 잠시 a 태그로 바꿔서 써먹는 방법
 */

