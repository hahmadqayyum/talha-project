
import { useShipsQuery } from '../../generated/graphql'
import Loading from '../Utils/Loading/Loading';
import Ships from './Ships';

const ShipContainer = () =>{

    const { data , loading , error } = useShipsQuery();

    if (loading){
        return <Loading />
    }

    if(error){
        return <div>There was an error</div>
    }

    if (data){
        return <Ships data={data} />
    }

}

export default ShipContainer