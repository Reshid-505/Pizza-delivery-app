import { Col, Form, Row } from "react-bootstrap";
import Good from "./Good";
import { MainContex,useContext } from "../context";




function Pizza() {

  let filter =["chick","meat","spicy","vegan"]
  
  let {goods, size, filt, src, buy} = useContext(MainContex);
  
  return (
    <>
    <Form>
      <div>
      <Form.Control onInput={(e) => {src(e)}} type="text" checked="checked" placeholder="Search" />
      </div>
        <div >
        <Form.Check  onClick={()=>{ filt()}} inline label="All"  name="filter"  type="radio" defaultChecked={true}   /> 
      {filter.map((f,i) => <Form.Check onClick={()=>{ filt(f)}} inline key ={i} label={f}  name="filter"  type="radio"  /> )}
          
        </div>
    </Form>
    

<Row xs={1} md={2} xl={4}>
 
      {
        goods.map( (p, i) => (<Col key={i}><Good pizza={p} size={size} buy={buy} /></Col>) )
      }
    </Row>
    </>
    );
}

export default Pizza;
