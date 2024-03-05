import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/shopping-cart">Shopping Cart</NavLink>
        </nav>
    </header>
  )
}
