import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { InputBoxStyled } from "./style"

export const InputBox = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const sendName = () => dispatch(changeName({name}))
    return <InputBoxStyled>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>sendName()}>Atualizar</button>
    </InputBoxStyled>
}