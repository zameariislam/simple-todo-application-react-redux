import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import fetchData from "../redux/todos/thunk/fetchTodos";



export default function TodoList() {

    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData)

    },[dispatch])



    const { status, colors } = filters

    const filterByStatus = (todo) => {
        switch (status) {
            case 'Complete':
                return todo.completed
            case 'InComplete':
                return !todo.completed


            default:
                return todo;
        }

    }

    const filterByColor = (todo) => {
        if (colors.length > 0) {
            return colors.includes(todo?.color)


        }
        return true;



    }


    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map(todo => <Todo todo={todo} key={todo.id} />)
            }

        </div>
    );
}