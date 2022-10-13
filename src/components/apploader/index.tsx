import { CircularProgress } from "@mui/material"
import React from "react"
import { useStore } from "store"

interface Props { }

const AppLoader: React.FC<Props> = () => {

    const { state } = useStore();

    return <>{
        state.apploader ? < div className="apploader" >
            <CircularProgress />
        </div > : null
    }</>
}

export default AppLoader