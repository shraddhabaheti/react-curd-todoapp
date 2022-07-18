import React, { useState } from 'react'

const Curd = () => {
    const[inputData,setInputData]=useState('')
    const [item,setItem]=useState([])
    const [toggleButton,setToggleButton]=useState(true)
    const [isEditItem,setEditItem]=useState(null);
   const addItem=()=>{
       if(!inputData){

       }else if(inputData && !toggleButton){
        
           setItem(
             item.map((elem)=>{
                   if(elem.id === isEditItem){

                       return {...elem,name:inputData};
                      
                   }
                   return elem;
               })
               
           )
           setToggleButton(true)
           setEditItem(null)
           setInputData('')
       }
       else{
            const allinputData={id:new Date().getTime().toString(),name:inputData}
           setItem([...item,allinputData])
           setInputData('')
       }
   }
   const deleteItem=(index)=>{
       const updateItem=item.filter((elem)=>{
         return index !==elem.id
       });
       setItem(updateItem)

   }
   const removeall=()=>{
       setItem([]);
   }
   const editItem=(id)=>{
        let newEditItem=item.find((elem)=>{
        
            return  elem.id ==id
        })
        setToggleButton(false)
           setInputData(newEditItem.name)
           setEditItem(id)
           
          
        
   }
   return (
    <>
      <div>
          <h1>Todo app design</h1>
          <div>
              <input type="text" placeholder='additem' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
              {
                toggleButton ?<button onClick={addItem}>+</button>:<button onClick={addItem}>-</button>
              }
              
              <div>
                  {
                      item.map((elem)=>{
                          return(
                              
                            <div key={elem.id}>
                            <h3>{elem.name}</h3>
                            <button onClick={()=>deleteItem(elem.id)}>Delete</button>
                            <button onClick={()=>editItem(elem.id)}>Edit</button>
                        </div>

                          )

                      })
                  }
                  
              </div>
              <div>
                  <button onClick={removeall}>CheckList</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Curd
