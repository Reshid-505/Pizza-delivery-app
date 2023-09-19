import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tr from './Tr';
import { MainContex,useContext } from '../context';

function Cart() {
  const {basket,goods,changepiece,total,changetotal,del,reset,onHide} = useContext(MainContex)
  function buy(){
    reset()
    onHide()
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Cart</h4>
        <Table striped>
        <thead>
          <tr>
            <th>img</th>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
            <th>Piece</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item,index)=> {  
            const data = goods.find(i => i.id === item.id )
          return(
           <Tr key={index} data={data} changetotal={changetotal} del={del} changepiece={changepiece} index={index} item={item} />
           )} )}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>{total}₼</th>
            <th></th>
          </tr> 
        </tbody>
      </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {onHide()}}>Close</Button>
        <Button onClick={buy} >Buy</Button>
      </Modal.Footer>
    </Modal>
  );
}
  export default Cart