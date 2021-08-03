import Cart from './service/Cart';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie('Мстители', 2012, 'США', 'Avengers Assemble', ['фантастика', ',боевик', 'фэнтези', 'приключения'], '137 мин.'));

console.log(cart.items);
