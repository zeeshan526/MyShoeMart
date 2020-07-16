import React, {createContext, useReducer} from 'react'

import AppReducer from './AppReducer'
//import Shoes from './Shoes.json'


//initial state

const initialstate={
    products:[
           
        {
            "air-jordan-3-valor-blue": {
              "name": "VALOUR BLUE",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "jordan-mars-270-london": {
              "name": "JORDAN MARS 270 LONDON",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            },
            "air-jordan-1-zoom-racer-blue": {
              "name": "RACER BLUE",
              "img":
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
            }
          }

    ]
}



//create context

export const CartContext = createContext (initialstate);

// provider component

export const GlobalProvider =({children}) =>{
    const [state, dispatch] = useReducer(AppReducer);

   


    return(<GlobalProvider.Provider value={{
        products: state.products,
 

    }}>
        {children}
    </GlobalProvider.Provider>);

}
