import Input from "./Input"
import Button from "./Button"
import {useForm} from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAlcohol, chooseBottle, chooseCountry, choosePrice } from "../redux/slices/RootSlice"

//INTERFACES

interface ContactFormProps {
    id?: string[]
}

const BeverageForm = (props: ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        if (props.id && props.id.length>0){
          server_calls.update(props.id[0], data)
          console.log(`Updated: ${ data.name } ${ props.id }`)
          setTimeout(() => {window.location.reload()}, 1000)
          event.target.reset()
        } else {
          dispatch(chooseAlcohol(data.alcohol_content))
          dispatch(chooseBottle(data.brand))
          dispatch(chooseCountry(data.country_origin))
          dispatch(choosePrice(data.price))
    
          server_calls.create(store.getState())
          setTimeout( () => {window.location.reload()}, 1000)
        }
      }

  return (
    <div>
        <form onSubmit={ handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="brand">Bottle Name</label>
                <Input {...register('brand')} name='brand' placeholder="Brand"/>
            </div>
            <div>
                <label htmlFor="alcohol_content">Alcohol Content</label>
                <Input {...register('alcohol_content')} name='alcohol_content' placeholder="Alcohol"/>
            </div>
            <div>
                <label htmlFor="country_origin">Country of Origin</label>
                <Input {...register('country_origin')} name='country_origin' placeholder="Country Origin"/>
            </div>
            <div>
                <label htmlFor="price">Price Per Bottle</label>
                <Input {...register('price')} name='price' placeholder="Price"/>
            </div>
            <div className="flex p-1">
                <Button className="flex place-items-center m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Add To Storage
                </Button>
            </div>
        </form>
    </div>
  )
}

export default BeverageForm
