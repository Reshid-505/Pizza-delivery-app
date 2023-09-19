import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Cart from "./Cart";
import { MainContex} from "../context";

const size = { "xs": "mini - 15", "sm": "Kiçik - 23", "md": "Orta - 30", "lg": "Böyük - 35" }
let basket = [
]

function App() {
    let [total, setTotal] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")
    const [goods, setGoods] = useState([])


    
    useEffect(() => {
        fetch('./pizza.json')
        .then(res => res.json())
        .then(text => setGoods(text.goods))
    },[])
    
    const data = {goods:aplyFilter(search),basket,src,setModalShow,buy,filt,size,search,Reset,del,changePiece,modalShow,total,changeTotal,onHide:() => {setModalShow(false)}}

    
    function filt(filter) {
        setFilter(filter)
    }

    
    function changePiece(id, size, piece) {
        basket.find(i => i.id === id && i.size === size).quant = piece

    }
    function del(id, size) {
        basket = basket.filter(item=> item.id !== id && item.size !== size)
        changeTotal()
    }

    function changeTotal() {
        setTotal(0)
        basket.map(item => setTotal(total => total + goods.find(i => i.id === item.id).price[item.size] * item.quant))
    }

    function src(e) {
        setSearch(e.target.value);
    }
    function Reset() {
        basket = []
        changeTotal()
    }

    function buy(id, piece, size) {
        let x = basket.find(item => item.id === id && item.size === size)
        if (x === undefined) {
            basket.push({ id: { id }.id, size: { size }.size, quant: { piece }.piece },)
        } else {
            x.quant += piece
        }
        changeTotal()
    }
    
    function aplyFilter(search) {
        if (filter === undefined || filter === "") {
            return goods.filter(g => g.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        } else {
            return goods.filter(g => g.cath.includes(filter)).filter(g => g.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        }

    }
    return (
        <MainContex.Provider value={data}>
            <Header />
            <Main />
            <Footer />
            <Cart />
        </MainContex.Provider>
    );
}

export default App;
