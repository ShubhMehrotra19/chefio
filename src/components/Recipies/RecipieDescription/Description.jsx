import React from 'react';
import { useLocation } from 'react-router-dom';

function Description() {
    const location = useLocation();
    const { value } = location.state || {};
  
  const images = ['/images/food/image4.png', '/images/food/image5.png', '/images/food/image1.png', '/images/food/image2.png', '/images/food/image3.png'];
  
  const title =['Grilled Halibut with Spinach', 'grilled salmon and herbs', 'Basil-Tomato Penne pasta', 'Quinoa salad with beetroot', 'Brazilian food dish Feijoada'];
  
  const desc = [
    "Grilled halibut with sautéed spinach, leeks, and pine nuts, dressed with lemon-Dijon sauce",
    "Grilled salmon with tender asparagus, seasoned with garlic, lemon, and olive oil.",
    "Basil-tomato penne pasta: a simple, flavorful dish with fresh tomatoes, basil, and Parmesan cheese.",
    "Quinoa salad with roasted beetroot, spinach, feta cheese, and walnuts. Healthy and delicious.",
    "Feijão Tropeiro: a savory Brazilian dish with black beans, bacon, sausage, and rice.",
  ];

  const procedure = [
    ["1. Preheat the grill to medium-high heat. Rinse the salmon fillets and pat them dry with paper towels.", 
     "2. Season with salt and pepper.", 
     "3. In a small bowl, whisk together olive oil, lemon juice, minced garlic, salt, and black pepper to make the marinade.", 
     "4. Place the salmon fillets in a shallow dish and pour the marinade over them.", 
     "5. Let them marinate for 10-15 minutes. Meanwhile, toss the trimmed asparagus with a little bit of olive oil, salt, and pepper.", 
     "6. Grill the salmon fillets for about four/five minutes per side until cooked through.", 
     "7. You can also use a grill basket for the asparagus, grilling them for about 5-6 minutes, turning occasionally, until tender and lightly charred.", 
     "8. Serve the grilled salmon and asparagus on a platter and garnish with lemon wedges. Enjoy this healthy and delicious meal!"],
    
    ["1. Preheat the grill to medium-high heat.",  
    "2. Rinse the halibut fillets and pat them dry with paper towels.", 
    "3. Season with salt and pepper. In a large skillet, heat the olive oil over medium heat.", 
    "4. Add sliced leeks and sauté until tender.", 
    "5. Add fresh spinach leaves to the skillet and stir until wilted.", 
    "6. Toast pine nuts in a small skillet over medium heat, stirring frequently, until lightly browned.", 
    "7. In a small bowl, whisk together lemon juice and Dijon mustard to make the dressing.",
    "8. Grill the halibut fillets for about 3-4 minutes per side until cooked through.",
    "9. To serve, place the sautéed spinach and leeks on a plate.",
    "10. top with a grilled halibut fillet, and sprinkle with toasted pine nuts.", 
    "11. Drizzle the lemon-Dijon dressing over the top and serve immediately.", 
    "12. Enjoy this delicious and healthy seafood dish!"],

    ["1. Cook the penne pasta according to the package instructions until al dente.", 
    "2. In a large skillet, heat olive oil over medium heat.",
    "3. Add minced garlic and cook for one-two minutes until fragrant.", 
    "4. Add halved cherry tomatoes and cook for five-seven minutes until they start to soften and release their juices.", 
    "5. Stir in chopped basil leaves, salt, and black pepper.", 
    "6. Add cooked pasta to the skillet and toss everything together.", 
    "Serve hot with freshly grated Parmesan cheese on top. Enjoy!"],
    
    ["1. Rinse the quinoa in a fine mesh strainer and place it in a medium saucepan with two cups of water or vegetable broth.", 
    "2. Bring to a boil, then reduce heat to low and simmer for 15-20 minutes until the quinoa is tender and the liquid is absorbed.", 
    "3. While the quinoa is cooking, roast the beetroot in the oven at 400°F for 30-40 minutes until tender.", 
    "4. Once cooled, dice the beetroot into small pieces.", 
    "5. In a large bowl, combine the cooked quinoa, roasted beetroot, fresh spinach leaves, crumbled feta cheese, chopped walnuts, and chopped fresh parsley.", 
    "6. In a small bowl, whisk together olive oil, lemon juice, salt, and black pepper to make the dressing.", 
    "7. Pour the dressing over the salad and toss everything together until well combined.", 
    "8. Adjust seasoning to taste, and serve chilled or at room temperature. Enjoy!"],
    
    ["1. In a large skillet, cook the bacon over medium heat until crisp.", 
    "2. Remove from skillet and set aside. In the same skillet, cook the sliced sausage until browned.", 
    "3. Remove from skillet and set aside.", 
    "4. In the same skillet, add chopped onion, minced garlic, chopped green and red bell peppers, and cook until onions are translucent.", 
    "5. Add cooked black beans to the skillet and stir everything together.", 
    "6. Gradually add cassava flour (or cornmeal) to the skillet, stirring constantly, until it is well incorporated and the mixture is dry.", 
    "7. Add cooked white rice, cooked bacon, cooked sausage, and chopped fresh parsley to the skillet.", 
    "8. Stir everything together until well combined. Season with salt and black pepper to taste.", 
    "9. Serve hot and enjoy this delicious Brazilian dish!"]
  ];

  const Ingredients = [
    [
        "4 halibut fillets (about 6 ounces each)",
        "4 cups fresh spinach leaves",
        "2 leeks, sliced thinly",
        "1/4 cup pine nuts",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice",
        "1 teaspoon Dijon mustard",
        "Salt and pepper to taste",
    ],
    [
       "4 salmon fillets (about 6 ounces each)",
        "1 pound asparagus, trimmed",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice",
        "2 garlic cloves, minced",
        "1 teaspoon salt",
        "1/2 teaspoon black pepper",
        "Lemon wedges for serving",
    ],
    [   "1 pound (16 oz) penne pasta",
        "3 tbsp olive oil",
        "3 cloves garlic, minced",
        "1 pint cherry tomatoes, halved",
        "1/2 cup fresh basil leaves, roughly chopped",
        "1/2 tsp salt",
        "1/4 tsp black pepper",
        "1/4 cup freshly grated Parmesan cheese]"
  ],
    [
        "1 cup uncooked quinoa",
        "2 cups water or vegetable broth",
        "1 medium beetroot, roasted and diced",
        "2 cups fresh spinach leaves",
        "1/2 cup crumbled feta cheese",
        "1/4 cup chopped walnuts",
        "1/4 cup chopped fresh parsley",
        "2 tbsp olive oil",
        "2 tbsp lemon juice",
        "Salt and black pepper to taste",
    ],
    [
        "2 cups cooked black beans",
        "1 cup cooked white rice",
        "1/2 pound bacon, diced",
        "1/2 pound pork sausage, sliced",
        "1 medium onion, chopped",
        "3 cloves garlic, minced",
        "1/2 green bell pepper, chopped",
        "1/2 red bell pepper, chopped",
        "1/2 cup cassava flour (or cornmeal)",
        "1/4 cup chopped fresh parsley",
        "2 tbsp olive oil",
        "Salt and black pepper to taste",
    ],
  ];

  const procedureSteps = value !== undefined ? procedure[value] : [];

  return (
    <div className='flex'>
    <div className='mt-6 ml-20 flex flex-col justify-start gap-4'>
        <div className="text-black text-6xl font-bold font-serif capitalize mb-3">Recipes</div>
        <div className="ml-20 h-fit max-w-[500px] py-4 px-4 relative bg-zinc-300 bg-opacity-40 shadow-xl z-20">
          <div className="text-center text-slate-800 text-2xl font-semibold font-['Poppins']">{title[value]}</div>
        </div>
        <div className="ml-20 w-80 h-fit text-black text-xl font-normal font-['Poppins']">{desc[value]}</div>
        <div className="rounded-sm px-4 ml-8 max-w-[800px] w-fit min-w-96 h-[330px] bg-white shadow">
        <div className="pt-2 mb-6 text-black text-2xl font-semibold font-['Poppins']">Procedure:</div>
        <div className="text-black text-lg font-medium font-['Poppins'] h-[250px]" style={{ maxHeight: '100%', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#4F46E5 lightgrey' }}>
            {procedureSteps.map((step, index) => (
            <p className='mb-1' key={index}>{step}</p>
            ))}
        </div>
        </div>
      </div>
      <div className='scale-[80%] -ml-[350px] -mt-12 z-[11]'>
            <img className=' hover:scale-105 ease-in-out' src={images[value]} alt="img" />
          </div>
          <div className="p-2 z-10 rounded-sm mt-20 w-[350px] -ml-20 max-h-[500px] bg-white shadow">
          <div className=" pl-3 pt-3 mb-3 text-black text-2xl font-semibold font-['Poppins']">Ingredients:</div>
          <div className="text-black text-lg font-medium font-['Poppins']">
          {Ingredients[value].map((item, index) => (
             <p className='mb-[6px] pl-2' key={index}>👉🏽 {item}</p>
              ))}
          </div>
          </div>
    </div>
  );
}

export default Description;


