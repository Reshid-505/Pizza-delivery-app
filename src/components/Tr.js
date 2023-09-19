import React from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap/';
import {BsTrashFill} from 'react-icons/bs';

export default function Tr(props) {
    let{data,index,item,changepiece,changetotal,del}=props
    let [piece,setPiece] = useState(item.quant)
    let price = data.price[item.size]
    function inc() {
        setPiece(piece=piece+1)
        changepiece(data.id,item.size,piece)
        changetotal()
      }
      function dec() {
        if(piece>1) setPiece(piece=piece-1)
        changepiece(data.id,item.size,piece)
        changetotal()
      }

  return (
    <>
      <tr key ={index}>
            <td> <img width='50px' src={data.img} alt={data.name} /></td>
            <td>{data.name}</td>
            <td>{item.size}</td>
            <td>{price}₼</td>
            <td>
                <Button variant="outline-danger" size="sm" onClick={ dec }>-</Button>
                <span className='mx-2'>{piece}</span>
                <Button variant="outline-success" size="sm" onClick={ inc }>+</Button>
                </td>
            <td>{piece * price}₼</td>
            <td><Button variant="outline-danger" size="sm" onClick={()=> del(data.id,item.size) } ><BsTrashFill /></Button></td>
            
          </tr> 
    </>
  )
}
