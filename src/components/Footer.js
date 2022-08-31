
import { useSelector, useDispatch } from "react-redux";
import {  colorChanged, statusChanged } from "../redux/filters/actions";


export default function Footer() {
    
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const { status, colors } = filters;

    const dispatch = useDispatch()


    const todosRemaining = () => {
        const taskLeft = (todos.filter(todo => !todo.completed))
        switch (taskLeft.length) {
            case 0:

                return 'No Task left'
            case 1:

                return 'One Task left'

            default:
                return `${taskLeft.length} Tasks left`
        }


    }

    const handleStatus = (status) => {
        dispatch(statusChanged(status))


    }
    const handleColorChanged=(color)=>{
        if(colors.includes(color)){
            dispatch(colorChanged(color,'removed'))
        }
        else{
            dispatch(colorChanged(color,'added'))

        }
    }
    


    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todosRemaining()} </p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => handleStatus('All')} className={`cursor-pointer ${status === 'All' && 'font-bold'} `}>All</li>
                <li>|</li>
                <li onClick={() => handleStatus('InComplete')} className={`cursor-pointer ${status === 'InComplete'
                    && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => handleStatus('Complete')} className={`cursor-pointer ${status === 'Complete'
                    && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={()=> handleColorChanged('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500
                 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500' } `}></li>
                <li onClick={()=> handleColorChanged('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500
                 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500' } `}></li>
                <li onClick={()=> handleColorChanged('yellow')}
                 className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500
                 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500' } `}></li>
            </ul>
        </div>
    );
}