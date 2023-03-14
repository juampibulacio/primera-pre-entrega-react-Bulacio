import "./navbar.css"
import CartWidget from "./cartWidget"

function Navbar () {
return (
    <div className="container">
<div className="logo">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IUmlY8D28JgP1l0oKZ-oBvgY-eh1iv7HJg&usqp=CAU" alt="" width="130"/>
  </div>
<nav>
  <ul>
    <a href=""><li> Home</li></a> 
    <a href=""><li>Novedades</li></a> 
    <a href=""><li>Ofertas</li></a>
    <a href=""><li>Promociones</li></a>
    <a href=""><li> <CartWidget/> </li> </a>
  </ul>
  </nav>
</div>

)

}

export default Navbar