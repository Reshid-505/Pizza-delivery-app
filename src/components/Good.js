import { useState } from 'react';
import {Button, Card, Col, Form, Row} from 'react-bootstrap/';

function Good({pizza,size,buy}) {
  const {img, name, desc, price,id} = pizza
  const [curprice, setCurprice] = useState( Object.values(price)[0] )
  const [piece, setPiece] = useState(1)
  const [siz, setSiz] = useState(Object.keys(price)[0])


  function changePrice(e) {
    setCurprice(price[e.target.value])
    setSiz(e.target.value)
  }
  function inc() {
    setPiece(piece+1)
  }
  function dec(e) {
    if(piece>1){setPiece(piece-1)}
  }
  function reset() {
    buy(id,piece,siz) 
    setPiece(1)
  }
  
  return (
    <Card className="my-2 ">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Row>
          <Col md={8}>
            <Form.Select className='bg-danger text-white' onChange={ changePrice } size="sm">
              {
                Object.keys(price).map( (s, i)=> <option value={s} key={i}>{size[s]}sm - {price[s]}₼</option> )
              }
            </Form.Select>
          </Col>
          <Col md={4}>
            <h3 className='text-nowrap'>{curprice * piece}₼</h3>
          </Col>
          <Col md={6}>
          <Button variant="outline-danger" onClick={ dec }>-</Button>
            <span className='mx-2'>{piece}</span>
            <Button variant="outline-success" onClick={ inc }>+</Button>
          </Col>
        </Row>
        <Button className='my-2' variant="primary" onClick={()=> reset()} >Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Good;