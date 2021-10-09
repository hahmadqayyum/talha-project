import React from 'react';
import { useShipInfoQuery } from '../../generated/graphql'
import Loading from '../Utils/Loading/Loading';
import ShipInfo from './ShipInfo';

const ShipInfoContainer = (id) =>{

    let {data,error,loading} = useShipInfoQuery({variables:{id: id}})

    if(loading){
        return <Loading />
    }

    if(error){
        return <div>There was an error</div>
    }

    if(data){
        return <ShipInfo data={data} />
    }

}

export default ShipInfoContainer;