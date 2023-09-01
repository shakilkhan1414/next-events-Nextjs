'use client'
import { createContext,useState,useEffect } from "react";

const NotificationContext= createContext({
    notification: null,
    showNotification:function(){},
    hideNotification:function(){}
})

export const NotificationContextProvider=({children})=>{

    const [activeNotification,setActiveNotification]=useState({
        title: '',
        status: '',
        message: ''
    })

    useEffect(()=>{
        if(activeNotification.status==='success' || activeNotification.status==='error'){
            const timer=setTimeout(()=>{
                setActiveNotification({
                    title: '',
                    status: '',
                    message: ''
                })
            },2000)
            
            return ()=>{
                clearTimeout(timer)
            }

        }
    },[activeNotification])

    const showNotificationHandler=(data)=>{
        setActiveNotification(data)
    }

    const hideNotificationHandler=()=>{
        setActiveNotification({
            title: '',
            status: '',
            message: ''
        })
    }

    const context={notification: activeNotification, showNotification: showNotificationHandler, hideNotification:hideNotificationHandler }

    return(
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext

