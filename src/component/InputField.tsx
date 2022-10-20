import React, {useRef} from "react"
import "./style.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=> void;
}

const InputField:React.FC<Props> =  ({todo, setTodo, handleAdd}:Props)=>{
    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form className="input"
              onSubmit={(e) => {
              handleAdd(e);
              inputRef.current?.blur();
        }}>


            <input className="input_box" placeholder="Enter a task"
                   type="input"
                   ref={inputRef}
                   value={todo}
                   onChange={ (e) => setTodo(e.target.value)} />


            <button className="input_submit" type="submit">Go</button>

        </form>
    )
}

export default  InputField