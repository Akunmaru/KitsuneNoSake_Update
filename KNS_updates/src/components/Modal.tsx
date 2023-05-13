import React from 'react'
import BeverageForm from './BeverageForm';

type Props = {
    id?: string[];
    open?: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>); 
    return(
        <div onClick={ props.onClose } 
            className='fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-purple-300 bg-opacity-30'>
            <div className='max-w-600 w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded'
            onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row space-apart'>
                            <i className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 
                            text-white fa-brands fa-wolf-pack-battalion"
                            onClick={props.onClose}>
                            </i>
                    </div>
                    <div className='flex flex-col items-center text-center mt-3 p-2'>
                        <BeverageForm id={props.id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal