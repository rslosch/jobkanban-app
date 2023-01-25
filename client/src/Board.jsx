import React, { useContext } from 'react';
import Lists from './Lists'
import { GlobalContext } from './context/globalState';

import { RotatingLines } from 'react-loader-spinner'

const Board = () => {

  const { isLoading } = useContext(GlobalContext)

  if(isLoading) {
    return(
      <div className='grid place-items-center h-screen'>
          < RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
          />
      </div>
    )
  }
  else {
    return (
      <div className="flex p-2">
        <Lists /> 
      </div>
    )
  }
}

export default Board;
