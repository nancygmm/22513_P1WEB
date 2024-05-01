import React from 'react'
import { Api } from '../../Api';

function Informacion() {
    const [info, setInfo] = React.useState([]);
    const api = async()=>{
        try {
          const x = await Api();
          setInfo(x);
        } catch (error) {
          console.log(error)
        }
      }
      
      React.useEffect(()=>{
        api();
      }, [])
      return info
}

export default Informacion