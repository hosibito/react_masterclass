import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true , minLength: 10})`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

/**
 * Attrs 를 직접 추가할수도 있다. 
 * Btn 으로 만들어진 스타일을 링크에도 가져다 쓰고 싶은데. 
 *   1. Link 를 만들어서 Btn을 상속받는 방법
 *   2. Btn 을 잠시 a 태그로 바꿔서 써먹는 방법
 */

