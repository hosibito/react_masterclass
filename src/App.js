import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Link = styled(Btn)`

`;

function App() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
    </Father>
  );
}

export default App;

/**
 * 확장뿐 아니라 변경도 가능하다. 
 * Btn 으로 만들어진 스타일을 링크에도 가져다 쓰고 싶은데. 
 *   1. Link 를 만들어서 Btn을 상속받는 방법
 *   2. Btn 을 잠시 a 태그로 바꿔서 써먹는 방법
 */

