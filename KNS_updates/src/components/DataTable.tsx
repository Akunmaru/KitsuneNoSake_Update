import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    {field: 'id', headerName: "ID", width: 90, hide: true },
    {field: 'alcohol_content', headerName: "Alcohol Content", width: 90, flex: 1},
    {field: 'brand', headerName: "Alcohol Brand", width: 90, flex: 1},
    {field: 'country_origin', headerName: "Coountry of Origin", width: 90, flex: 1},
    {field: 'price', headerName: "Alcohol Price", width: 90, flex: 1}
]

function DataTable() {
    let [ open, setOpen] = useState(false);

    const { beverageData, getData } = useGetData();

    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
    }

    return (
        <>
            <Modal 
            id={selectionModel}
            open = {open}
            onClose={handleClose} />
            <div className='flex flex-row text-white bg-black'>
                <div>
                    <button 
                    onClick={ () => handleOpen()}
                    className='p-3 m-3 bg-slate-700 rounded hover:bg-yellow-400 hover:text-black'>
                        Add Beverage
                    </button>
                </div>
                <Button onClick={handleOpen} className='p-3 m-3 bg-slate-700 rounded hover:bg-yellow-400 hover:text-black'>Update</Button>
                <Button onClick={deleteData} className='p-3 m-3 bg-slate-700 rounded hover:bg-yellow-400 hover:text-black'>Delete</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col bg-opacity-0"}
            style={{ height: 450, width: '100%'}}>
                <h2 className="p-3 my-2 rounded">Your Beverages</h2>
                <DataGrid rows={beverageData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange={(item: any) => {
                    setSelectionModel(item)
                }}/>
            </div>
        </>
    )
}

export default DataTable
