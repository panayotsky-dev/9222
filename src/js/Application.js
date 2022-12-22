import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    

    let pizzas = [
      {
       type: "Hawaiian",
        emoji: "🍍" ,
        price: 13.99,
      },
       { 
        type: "Pepperoni",
         emoji: "🍕" ,
           price: 14.99,
      },
          { 
            type: "Margherita",
             emoji: "🍅",
             price: 11.99,
          }]
    
          pizzas.forEach((pizza) => {
            const card = new Card({...pizza});
            card.render();
            card.on(Card.events.ADD_TO_CART,  (obj) => new Notification().render(obj))
            document.querySelector('.main').appendChild(card.container);
          });


    this.emit(Application.events.READY);
  }
}
// let pizzas = [
//   {
//    type: "Hawaiian",
//     emoji: "🍍" ,
//     price: 13.99,
//   },
//    { 
//     type: "Pepperoni",
//      emoji: "🍕" ,
//        price: 14.99,
//   },
//       { 
//         type: "Margherita",
//          emoji: "🍅",
//          price: 11.99,
//         }]


// let main = document.querySelector(".main");
// let cardContainer = document.createElement("div");
// let notification = document.createElement("div");
// cardContainer.classList.add("card-container");
// notification.classList.add("notification");
// main.appendChild(cardContainer);
// main.appendChild(notification);

// let notificationContainer = document.createElement("div");
// notificationContainer.classList.add("notification-container");
// notification.appendChild(notificationContainer);
// // pizzas.forEach(element => {
// //   cardContainer.innerHTML +=`
// //     <div class='card type-${element.type}'>
// //       <div class='emoji'>${element.emoji}</div>
// //      <span class="type" id='${element.type}' emoji="${element.emoji}" price=${element.price}>${element.type} </span>    
// //  </div>` 
// });
// document.getElementById(`Pepperoni`).addEventListener("click", (e) => {
  
//  notifications(e.target.attributes);})
//  document.getElementById(`Margherita`).addEventListener("click", (e) => {
//   notifications(e.target.attributes);})
//   document.getElementById(`Hawaiian`).addEventListener("click", (e) => {
//     notifications(e.target.attributes);})

//   function notifications(data) {

//     notificationContainer.innerHTML += ` 
//   <div class="notification type-${data.id.value} ${classNames({"is-danger" : data.id.value === Hawaiian,})} "> 
//   <span class="emoji">${data.emoji.value}</span>
//   <span class="type">${data.id.value}</span>
//   <span class="price">${formatCurrency(data.price.value)}</span>
//   <button class="delete" >X</button>
//   `
//   const deleteNotification = document.querySelector(".delete");
//   deleteNotification.addEventListener("click", (e) =>  
//   onDelete(e))
//   notification.appendChild(notificationContainer);

 
// }
// function onDelete(e) {
//   let x = e.target.parentElement
//   notification.removeChild(x)
//   console.log(e.target.parentElement);
// }

    




// let asd = document.getElementById("push");
// console.log(asd);
// console.log(document.querySelectorAll("#push"));






