import { HeaderStyled, NavLinkStyled } from "./Header.styled"

export const Header = () => {
  return (
    <HeaderStyled>
        <nav className="header-nav">
            <NavLinkStyled to="/" className="header-link">Shop</NavLinkStyled>
            <NavLinkStyled to="/shopping-cart" className="header-link">Shopping Cart</NavLinkStyled>
        </nav>
    </HeaderStyled>
  )
}
