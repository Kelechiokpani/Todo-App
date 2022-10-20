import React, {useState} from "react"
import {Todo} from "../model";
import {AiFillDelete, AiFillEdit,} from "react-icons/ai";
import { MdDone} from "react-icons/md";
import "./style.css"


type Props ={
    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo  = ({todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    //edit task function
    const handleEdit =(e:React.FormEvent, id:number)=>{
        e.preventDefault()
        setTodos(
            todos.map((todo) => (todo.id ===id? {...todo, todo:editTodo}: todo))
        );
        setEdit(false);
    }

    //Delete task function
    const handleDelete = ( id:number)=>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    //completed task function
    const handleDone = (id:number)=>{
        setTodos(
            todos.map((todo) => todo.id===id ?{...todo, isDone: !todo.isDone}: todo
            )
        )
    }


    return (
        <form className="todos_single"
              onSubmit={(e:React.FormEvent) =>
                  handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input value={editTodo}
                           className="todos_single_text"
                           onChange={((e) => setEditTodo(e.target.value))}/>
                ) : (
                    todo.isDone ? (<s className="todos_single_text">{todo.todo}</s>) : (
                        <span className="todos_single_text">{todo.todo}</span>)
                )
            }


            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}> <AiFillEdit/>  </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}> <AiFillDelete/> </span>
                <span className="icon" onClick={() => handleDone(todo.id)}> <MdDone/> </span>
            </div>

        </form>
    );

}

export default SingleTodo