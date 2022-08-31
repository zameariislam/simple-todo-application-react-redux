import { STATUSCHANGED } from "./actionTypes"



export const statusChanged=(status)=>{
   
    return{
        type:STATUSCHANGED,
        payload:status
    }
    
}

export const colorChanged=(color,changeType)=>{
   
    return{
        type:STATUSCHANGED,
        payload:{
            color,
            changeType
        }
      
    }
    
}