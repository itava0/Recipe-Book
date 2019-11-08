exports.seed = function(knex) {
  return knex('instructions').insert([
    { "steps": 'Grab your wheat bread.', "step_number": 1, "recipe_id": 1 },
    { "steps": 'Apply turkey slices to bread.', "step_number": 2, "recipe_id": 1 },
    { "steps": 'Place Colby Jack cheese on those good ol\' meat slices!', "step_number": 3, "recipe_id": 1 },
    { "steps": 'Stack top slice of bread, and slice diagonally. Now enjoy your fresh sandwich!', "step_number": 4, "recipe_id": 1 },
    { "steps": 'Grab your fresh white bread slices.', "step_number": 1, "recipe_id": 2 },
    { "steps": 'Smother one slice with plenty of peanut butter.', "step_number": 2, "recipe_id": 2 },
    { "steps": 'Gob up your other slice of bread with plenty of strawberry jelly.', "step_number": 3, "recipe_id": 2 },
    { "steps": 'Slap those slices together, cut in half (in the center, or diagonal), and then enjoy that fresh home made meal! Just like mom used to make for school!', "step_number": 4, "recipe_id": 2 },
    { "steps": 'This is a big boy recipe! Here go! First, grab your fresh Ciabatta Bun!', "step_number": 1, "recipe_id": 3 },
    { "steps": 'Now, on the bottom bun place your tomato, lettuce, avocado, and fresh spinach.', "step_number": 2, "recipe_id": 3 },
    { "steps": 'Next, lay all of your meats on top: salami, pepperoni, and turkey!', "step_number": 3, "recipe_id": 3 },
    { "steps": 'Top meat with a slice of Pepper Jack Cheese, and sprinkle with salt and pepper.', "step_number": 4, "recipe_id": 3 },
    { "steps": 'Coat top bun with mayonnaise, and place it on top of the sandwich!', "step_number": 5, "recipe_id": 3 },
    { "steps": 'Slice and enjoy your deluxe sandwich!', "step_number": 6, "recipe_id": 3 },
    { "steps": 'Grab a new Ciabatta Bun, straight from the bag!', "step_number": 1, "recipe_id": 4 },
    { "steps": 'Top the crown of the bun with a thin layer of mayonnaise.', "step_number": 2, "recipe_id": 4 },
    { "steps": 'On the bottom bun, place your lettuce & tomato.', "step_number": 3, "recipe_id": 4 },
    { "steps": 'Top the bottom bun items with a freshly cooked chicken breast!', "step_number": 4, "recipe_id": 4 },
    { "steps": 'Lay on a fresh slice of Colby Jack Cheese! Sprinkling some salt and pepper to taste!', "step_number": 5, "recipe_id": 4 },
    { "steps": 'Complete the build of the sandwich, and slice it right down the middle. Now, ENJOY!', "step_number": 6, "recipe_id": 4 }
  ]);
};
