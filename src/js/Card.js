import classNames from "classnames";
import EventEmitter from "eventemitter3";



export default class Card extends EventEmitter {
    static get events() {
      return {
        ADD_TO_CART: "Added",
      };
    }
    static get types(){
        return{
        HAWAIIAN:"hawaiian",
        PEPPERONI:"mepperoni",
        MARGHERITA:"margherita",
        };
    }
  
    constructor({type , price, emoji}) {
      super();
      this._type = type;
      this._price = price;
      this._emoji = emoji;

      this.container = document.createElement("div");
      this.container.classList.add('card-container');
    }
    render(){
        const template = 
        `<div class='card type-${this._type.toLowerCase()}'>
        <div class='emoji'>${this._emoji}</div>
        <span class='type'>${this._type}</span>
        </div>
        `;
        // console.log(`${this._type} , ${this._price},${this._emoji}`)
        // console.log(Card.events.ADD_TO_CART);
        this.container.innerHTML = template;
        this.container.addEventListener('click', () =>{
            this.emit(Card.events.ADD_TO_CART,
                 {
                    type: this._type,
                    price: this._price,
                    emoji: this._emoji,
                });
        })
    }
}
      
     
  
  

