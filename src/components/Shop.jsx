import DarkBowl from './../assets/DarkBowl.png'
import DecorPlate from './../assets/DecorPlate.png'
import MintPottery from './../assets/MintPottery.png'
import OrangeCeramic from './../assets/OrangeCeramic.png'
import SetOfPottery from './../assets/SetOfPottery.png'
import SquarePottery from './../assets/SquarePottery.png'

export const Shop = () => {
  return (
    <section className="store">
        <div className="store__heading">
            <h2>OUR ONLINE STORE</h2>
            <h3>Pottery Collection</h3>
        </div>
        <div className="store__goods">
            <div className="store__item">
                <img src={ DecorPlate } alt="Decor Plate" />
                <h2>Decor Plate</h2>
                <p>$ 65.00 USD</p>
            </div>
            <div className="store__item">
                <img src={ MintPottery } alt="Mint Pottery" />
                <h2>Mint Pottery</h2>
                <p>$ 75.00 USD</p>
            </div>
            <div className="store__item">
                <img src={ SetOfPottery } alt="Set Of Potterys" />
                <h2>Set Of Potterys</h2>
                <p>$ 125.00 USD</p>
            </div>
        </div>
        <div className="store__goods2">
            <div className="store__item2">
                <img src={ OrangeCeramic } alt="Orange Ceramic" />
                <h2>Orange Ceramic</h2>
                <p>$ 55.00 USD</p>
            </div>
            <div className="store__item2">
                <img src={ DarkBowl } alt="Dark Bowl" />
                <h2>Dark Bowl</h2>
                <p>$ 115.00 USD</p>
            </div>
            <div className="store__item2">
                <img src={ SquarePottery } alt="Square Pottery" />
                <h2>Square Pottery</h2>
                <p>$ 75.00 USD</p>
            </div>
        </div>
        <a href="/">VIEW ALL PRODUCTS</a>
    </section>
  )
}