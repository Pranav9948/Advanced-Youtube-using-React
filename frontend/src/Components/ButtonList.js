import React from 'react'

function ButtonList() {

    const title=[

        "cricket","football","hockey","kabbadi","movies","politics","History","Science","Thriller"
    ]


  return (

    <div>
        {
            title.map((head,idx)=>{

                
            return(

                
                    idx===0 ? <button className=' ms-9 mt-9 bg-black text-white p-1 border-gray-900 w-20 h-8' key={idx}>{head}</button>
                    : <button className=' ms-9 mt-9 bg-slate-300 p-1 border-gray-900 w-20 h-8  rounded-lg' key={idx}>{head}</button>

                  
                
            )
                
            })
        }

       

    </div>
  )
}

export default ButtonList