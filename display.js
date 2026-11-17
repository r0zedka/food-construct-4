// Отображение блюд на странице: сортировка и создание карточек через DOM.

// Создаёт HTML карточки одного блюда
function createDishCard(dish) {
  const card = document.createElement('div');
  card.className = 'dish';
  card.dataset.dish = dish.keyword; // data-dish="gaspacho"
  card.innerHTML =
    '<img class="dish-image" src="images/' + dish.image + '.jpg" alt="' + dish.name + '">' +
    '<p class="dish-price">' + dish.price + '₽</p>' +
    '<p class="dish-name">' + dish.name + '</p>' +
    '<p class="dish-weight">' + dish.count + '</p>' +
    '<button class="dish-button" type="button">Добавить</button>';
  return card;
}

// Выводит блюда в свои секции, предварительно отсортировав их по алфавиту
function displayDishes() {
  const sortedDishes = dishes.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name, 'ru');
  });

  sortedDishes.forEach(function (dish) {
    const container = document.querySelector('.dishes[data-category="' + dish.category + '"]');
    container.append(createDishCard(dish));
  });
}

displayDishes();
