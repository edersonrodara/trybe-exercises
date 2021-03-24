const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// order.order.pizza = 'muzzarella';
// order.order.pizza = 'calabresa';

const customerInfo = (order) => {  
  return `Olá ${order.name}, entrega para: ${order.order.delivery.deliveryPerson}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}
console.log(customerInfo(order));

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = '50,00';

  let newKey = 'muzzarella';
  const muzzarella = '';
  order.order.pizza[newKey] = muzzarella;

  let newKey2 = 'calabresa';
  const calabresa = '';
  order.order.pizza[newKey2] = calabresa;

  const pizzas = Object.keys(order.order.pizza);

  return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizzas[2]}, ${pizzas[3]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`

  // "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

}
orderModifier(order);
console.log(orderModifier(order));

