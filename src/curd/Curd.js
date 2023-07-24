import React, { useState } from 'react'

const Curd = () => {
    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState([])
    const [toggleButton, setToggleButton] = useState(true)
    const [isEditItem, setEditItem] = useState(null);


    const addItem = () => {

        if (!toggleButton ) {
            
            let newValue = item.map((elem) => {
              
                if (elem.id === isEditItem) {
                 
                    elem.name = inputData
                }
                return elem;
            })
            setItem(newValue)
        
            setToggleButton(true)
            // setEditItem(null)
            setInputData('')
        } else {
        
            const allinputData = { id: new Date().getTime().toString(), name: inputData }
            if(allinputData?.name !== '' )
            {
                // !inputData && item.length &&
                setItem([...item, allinputData])
             }
            setInputData('')
        }
    }

    const deleteItem = (index) => {
        const updateItem = item.filter((elem) => {
            return index !== elem.id
        });
        setItem(updateItem)
    }

    const removeall = () => {
        setItem([]);
    }

    const editItem = (id) => {
        let newEditItem = item.find((elem) => {
            return elem.id == id
        })
        setToggleButton(false)
        setInputData(newEditItem.name)
        setEditItem(id)
    }

    
    return (
        <>
            <div>
                <h1 className='h1'>Todo app design.....!</h1>
                <div>
                    <input type="text" className='input1' name='text' placeholder='additem....' value={inputData} onChange={(e) => setInputData(e.target.value)} />

                    <button className='btn' onClick={addItem}>{toggleButton ? "Add" : "Edit"}</button>



                    <div>
                        {
                             item.map((elem) => {
                                return (

                                    <div key={elem.id}>

                                        <h3>{elem.name}</h3>
                                        <button className='btn' onClick={() => deleteItem(elem.id)}>Delete</button>
                                        <button className='btn' onClick={() => editItem(elem.id)}>Edit</button>
                                    </div>

                                )

                            })
                           
                        }

                    </div>
                    <br /><br />
                    <div>
                        <button className='btn' onClick={removeall}>CheckList</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curd
