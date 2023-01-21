import Cart from './../assets/cart.svg'

export const Navbar = () => {
  return (
    <div className="header">
      <a href="/" className="header__link">Pompeo</a>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><a href="/">HOME</a></li>
          <li className="header__item"><a href="/">ABOUT</a></li>
          <li className="header__item"><a href="/">SHOP</a></li>
          <li className="header__item"><a href="/">CONTACT</a></li>
        </ul>
        <a href="/" className="header__link2"><img className="header__image" src={ Cart } alt="cart" />Cart</a>
      </nav>
    </div>
  )
}