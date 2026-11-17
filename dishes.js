// Массив всех блюд. Хранится отдельно от остального кода.
// keyword — уникальное имя на латинице, category — soup / main / drink,
// image — путь к фото без папки images и без расширения .jpg
const dishes = [
  { keyword: 'gaspacho', name: 'Гаспачо', price: 195, category: 'soup', count: '350 г', image: 'soups/gazpacho' },
  { keyword: 'mushroom-puree', name: 'Грибной суп-пюре', price: 185, category: 'soup', count: '330 г', image: 'soups/mushroom_soup' },
  { keyword: 'norwegian', name: 'Норвежский суп', price: 270, category: 'soup', count: '330 г', image: 'soups/norwegian_soup' },
  { keyword: 'fried-potatoes', name: 'Жареная картошка с грибами', price: 150, category: 'main', count: '250 г', image: 'main_course/friedpotatoeswithmushrooms1' },
  { keyword: 'lasagna', name: 'Лазанья', price: 385, category: 'main', count: '310 г', image: 'main_course/lasagna' },
  { keyword: 'chicken-cutlets', name: 'Котлеты из курицы с картофельным пюре', price: 225, category: 'main', count: '280 г', image: 'main_course/chickencutletsandmashedpotatoes' },
  { keyword: 'orange-juice', name: 'Апельсиновый сок', price: 120, category: 'drink', count: '300 мл', image: 'beverages/orangejuice' },
  { keyword: 'apple-juice', name: 'Яблочный сок', price: 90, category: 'drink', count: '300 мл', image: 'beverages/applejuice' },
  { keyword: 'carrot-juice', name: 'Морковный сок', price: 110, category: 'drink', count: '300 мл', image: 'beverages/carrotjuice' }
];
