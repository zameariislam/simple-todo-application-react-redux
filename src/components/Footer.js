
import { useSelector,useDispatch } from "react-redux";
import { statusChanged } from "../redux/filters/actions";


export default function Footer() {
    const todos=useSelector((state)=>state.todos)
    const filters=useSelector((state)=>state.filters)
    const{status,colors}=filters
    const dispatch=useDispatch()


    const todosRemaining=()=>{
      const taskLeft=  (todos.filter(todo=>!todo.completed))
      switch (taskLeft.length) {
        case 0:
            
            return 'No Task left'
            case 1:
            
                return 'One Task left'
      
        default:
            return `${taskLeft.length} Tasks left`
      }
     

    }

    const handleStatus=(status)=>{
        dispatch(statusChanged(status))


    }

      
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todosRemaining()} </p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={()=>handleStatus('All')} className={`cursor-pointer ${status==='All' && 'font-bold'} `}>All</li>
                <li>|</li>
                <li onClick={()=>handleStatus('InComplete')} className={`cursor-pointer ${status==='InComplete' 
                && 'font-bold' }`}>Incomplete</li>
                <li>|</li>
                <li onClick={()=>handleStatus('Complete')} className={`cursor-pointer ${status==='Complete' 
                && 'font-bold' }`}>Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>
        </div>
    );
}