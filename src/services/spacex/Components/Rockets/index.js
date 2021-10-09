import React from 'react'
import { useRocketsQuery } from '../../generated/graphql'
import Rockets from './Rockets'
import Loading from '../Utils/Loading/Loading'

const RocketContainer = () => {
    const {data,error,loading} = useRocketsQuery();

    if(error){
        return <p>There was an error</p>
    }

    if(loading){
        return <Loading />
    }

    if(data){
        return <Rockets data={data} /> 
    }
}

export default RocketContainer