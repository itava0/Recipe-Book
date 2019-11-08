exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Wheat Bread' }, // 1
    { ingredient_name: 'White Bread' }, // 2
    { ingredient_name: 'Peanut Butter' }, // 3
    { ingredient_name: 'Strawberry Jelly' }, // 4
    { ingredient_name: 'Lettuce' }, // 5
    { ingredient_name: 'Tomato' }, // 6
    { ingredient_name: 'Mayonnaise' }, // 7
    { ingredient_name: 'Salami' }, // 8
    { ingredient_name: 'Pepperoni' }, // 9
    { ingredient_name: 'Colby Jack Cheese' }, // 10
    { ingredient_name: 'Pepper Jack Cheese' }, // 11
    { ingredient_name: 'Turkey Slices' }, // 12
    { ingredient_name: 'Salt' }, // 13
    { ingredient_name: 'Pepper' }, // 14
    { ingredient_name: 'Avocado' }, // 15
    { ingredient_name: 'Fresh Spinach' }, // 16
    { ingredient_name: 'Ciabatta Bun'}, // 17
    { ingredient_name: 'Chicken Breast'} // 18
  ]);
};
