import { useSelector } from "react-redux";
import { InputBox } from "./components/Input";
import { GlobalStyle, StyledComponent } from "./StyleGlobal";

export default function App() {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <StyledComponent className="App">
      <GlobalStyle/>
      <div>
        <h2>User name: {user}</h2>
        <InputBox/>
      </div>
    </StyledComponent>
  );
}
