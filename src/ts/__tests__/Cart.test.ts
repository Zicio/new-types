import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('the new movie should be added to the cart', () => {
  const cart = new Cart();
  const genre = ['фантастика', ',боевик', 'фэнтези', 'приключения'];
  const movie = new Movie('Мстители', 2012, 'США', 'Avengers Assemble', genre, 137);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});