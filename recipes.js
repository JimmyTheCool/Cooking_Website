const recipeData = [
    {
        "ID": 1,
        "Title": "Rosti potato pancakes",
        "Category": "Breakfast",
        "Ingredients": "1 Egg\n4 Potatoes\n1 Onion\nSalt & Pepper\n2-4 tablespoons of flour",
        "Instructions": "1. Canola-Oil in pan to prevent sticking.\n2. Peal and grate potatoes; squeeze potatoes to remove juice.\n3. Grate Onion; Mix egg and grated Onion and grated Potatoes (no juice)\n4. Add flour until clumpy and sticks together.\n5. Put mixture in pan, flatten, cook until brown.",
        "Author": ""
    },
    {
        "ID": 2,
        "Title": "Baked Meat lasagne",
        "Category": "Dinner",
        "Ingredients": "Serves \u2013 6\ninstant lasagne noodles\nfresh herbs in the meat sauce and lots of them\nI just make a white sauce not a b\u00e9chamel and I add a fair sprinkling of parmesan to it\nUse lots of very thin layers\n250g [1/2 lb] lasagne noodles\n250g [1/2 lb] minced steak\n2 rashes bacon, chopped\n1 onion, chopped finely\n1 tablespoon chopped parsley\n1 bay leaf\nSalt and pepper to taste\n2 large tomatoes, peeled and chopped\n\u00bc cup beef stock\n\u00bc cup water\n2 tablespoons tomato paste\n\u00bd teaspoon dried oregano\n\u00bd teaspoon dried basil\n\nBECHAMEL SAUCE\n\u00bc cup grated parmesan cheese\n2\u00bd cups of milk\n1 bay leaf\nsmall piece of onion\n2 pepper corns\n60 g [2ozs] butter\n4 tablespoons flour\npinch of nutmeg\nsalt and pepper to taste",
        "Instructions": "Cook the lasagne in plenty of boiling salted water, stirring occasionally for about 15 minutes. Drain and arrange on a tea towel to drain.\nPut meat, bacon, onion, parsley, bay leaf, salt and pepper into a saucepan and let brown slowly, stirring frequently.\nPour fat off pan. Add tomatoes, stock, water, and tomato paste, and stir well and then simmer for 10 to 12 minutes.\nRemove bay leaf and stir in oregano and basil.\nSpoon a layer of this sauce over the base of a lightly oiled shallow oblong baking dish, and top with some of the b\u00e9chamel sauce.\nCover with a layer of noodles. Repeat these layers, ending with the meat sauce and the b\u00e9chamel over that.\nSprinkle with the parmesan cheese and bake in a moderate oven for about 30 minutes, or until bubbling hot.\n\nBECHAMEL SAUCE METHOD:\nPut milk, 1 bay leaf, small piece of onion, and 2 pepper corns into a saucepan. Heat gently until small bubbles form around the edge of the milk. Remove from heat and leave 5 minutes. Then strain.\nMelt 60 g [2ozs] butter and add 4 tablespoons flour and cook stirring for 3 minutes. Add the milk mixture and cook, stirring until boiling.\nStir in a pinch of nutmeg, and salt and pepper to taste.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 3,
        "Title": "Basic Meat Loaf",
        "Category": "Dinner",
        "Ingredients": "Cooking time \u2013 1 hour\nServes: 8\n2 lb mince\n2 teaspoons salt\n\u00bc teaspoon freshly ground pepper\n\u00bd teaspoon Mixed herbs\nThymes\nA little Worchestershire Sauce\n1 cup soft breadcrumbs\n1 cup evaporated milk\n\u00bd onion, chopped\n3 to 4 rashes of bacon",
        "Instructions": "Thoroughly combine all ingredients except bacon.\nPack tightly in a greased 9 X 5 inch loaf tin.\nTop with the bacon rashes.\nBake in a moderate oven (350\u00baF) for 1 hour or until the loaf shrinks slightly from the sides of the pan.\n\nVariations:\nPut a little tomato sauce on the bottom of the pan before putting in the meat ingredients.\nAlso instead of bacon, added a little tomato sauce on the top near the end of cooking. This gives it a glazed look.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 4,
        "Title": "Chicken nuggets",
        "Category": "Dinner",
        "Ingredients": "Chicken breasts\nFlour\nSalt and Pepper\nPlastic bags x2\nEggs\nBread-crumbs\nHerbs",
        "Instructions": "1.Cut chicken into thin pieces\n2.Chicken into first plastic bag with flour, salt and pepper to coat chicken.\n3.Whisk egg, dip floured chicken into eggs (large bowl to prevent spills).\n4.Place chicken into second plastic bag, with herbs and bread-crumbs\n5.Place battered chicken onto non-stick tray and place in oven.\n6.Cook for X mins and Y degrees.",
        "Author": "Joe Shaw"
    },
    {
        "ID": 5,
        "Title": "Chilli Con Carne",
        "Category": "Dinner",
        "Ingredients": "Brown Rice (Rice cooker = 3 cups of rice, 6 cups of water)\nChilli con carne packet\nMinced Meat (500g)\nTomato paste (puree)\nBeef stock (1 beef cube or liquid 250ml)\nBlack Beans (Canned) (or red kidney beans) 1 can (~400g)\nBeans (Canned) (lentils/chick-peas, etc) 1 can (~400g)\nCarrot 2\nCapsicum 1\nGarlic, 4 cloves\nOnion or spring onion 1\nMushrooms handful\nTomatoes chopped (1 can)\nHerbs: Cumin, Oregano, Paprika, Cayenne pepper, Parsley (1 tbsp each)",
        "Instructions": "Cook rice in rice cooker (2 cups of water per 1 cup of rice).\n1.Cook Garlic and Onion for 3 minutes in big pot, then\n2.Add beef mince and cook until brown in big pot.\n3.Add all ingredients chopped or grated (Wash canned beans and add them into pot without the can's liquid)\n4.Cook until mixture thickens (1 to 2 hours?)\n5.Check that the vegetables are cooked throughout (not raw).",
        "Author": "James Shaw"
    },
    {
        "ID": 6,
        "Title": "Chilli Mussels or Crabs",
        "Category": "Dinner",
        "Ingredients": "1 red and 1 green capsicum\n\u00bd cup spring onions or 2 whole chopped onions\n3 cloves garlic\n1 piece root ginger or 2 teaspoons ginger powder\n\u00bc cup Thai chilli sauce\n\u00bd cup lemon juice\n\u00bd cup soya sauce\n1 tablespoon sugar\n\u00bc cup chicken stock\n\u00bd cup of wine of choice\n3 tablespoons of honey\n\u00bd cup tomato sauce",
        "Instructions": "Saut\u00e9 onions, garlic, capsicum, and ginger. Then add other ingredients and your mussel or crab catch. Crack crab shells. Simmer for 5 to 10 minutes. Serve with napkins and crusty bread.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 7,
        "Title": "Roast Beef",
        "Category": "Dinner",
        "Ingredients": "Coles Beef Oyster Blade With Pepper ~1kg",
        "Instructions": "Oven at 180 Degrees for 1.5 hours",
        "Author": "James Shaw"
    },
    {
        "ID": 8,
        "Title": "Fish with Lime Sauce",
        "Category": "Dinner",
        "Ingredients": "4 white fish fillets\n2 tablespoons finely grated fresh parmesan cheese\n\nLime Sauce:\n2 tablespoons cornflour\n1 1/3 cup chicken stock\n\u00bd cup lime juice\n1/3 cup brown sugar\n20g butter\n1 tablespoon chopped capers\n1 tablespoon chopped chives",
        "Instructions": "Blend cornflour with stock in pan. Add remaining stock in pan. Then add remaining juice, sugar butter and capers. Stir over heat until sauce boils and thickens. Stir in chives.\nPlace a sheet of foil on an oven tray. Arrange fish in a single layer over the foil. Spoon a little of the sauce over the fish. Sprinkle with parmesan cheese.\nCook fish under a hot grill until cooked thru.\nServe fish with remaining lime sauce.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 9,
        "Title": "Meat Pie",
        "Category": "Dinner",
        "Ingredients": "1 onion\n250g mince- [approximately]\n1 carrot, finely grated\n2 cups of water [ approximately]\n2 beef stock cubes[optional-as Gravox is quite salty and has flavour]\n2 tablespoon fresh parsley- or 1 tablespoon of dried parsley\nSwig of wine or dry sherry\n2 tablespoons of Gravox [ this thickens the \u201csauce\u201d]\nReadymade pastry sheets-[ I buy butter puff pastry]",
        "Instructions": "Set oven at 200\u00baC and bake the bottom of the pie [pie base] for about 10 minutes until a little brown. If the base has risen and is not sitting flat in the pan, gently push it down with the back of a spoon.\nPut the mince, finely grated carrot and parsley in a heavy fry pan and immediately add one glass of water. Mix well over medium heat.\nAdd swig of wine or sherry.\nStir often over heat and add more water if necessary. Cook until the meat is browned all over.\nAdd Gravox. Stir immediately so that it does not become clumpy.\nStir on heat until thickened.\nPut meat into cooked pie base. Put pastry over the top. Fold over the edges roughly. Make several cut marks in the top pastry with a sharp knife [this lets the steam out while the pie cooks and stops it from rising too much]. Cook until browned. Serve.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 10,
        "Title": "Pepper Steak",
        "Category": "Dinner",
        "Ingredients": "4 fillet steaks\nFew pepper corns\nSalt\n2 oz butter [ \u00bc cup]\n\u00bc pint thick cream\n1-2 tablespoon of brandy\nChopped chives or parsley",
        "Instructions": "Crush pepper corns with a rolling pin and press onto either side of the steak. Add a light dusting of salt.\nHeat butter in the pan and fry steak rapidly on either side for 2-3 minutes to seal in the juices.\nThen lower the heat and cook.\nWhen steaks are just cooked, lift them out of the pan onto a hot dish.\nAdd approximately \u00bc pint of thick cream to fry pan and stir well. Simmer lightly. Do not boil. Add brandy. Add extra seasoning if necessary.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 11,
        "Title": "Sausages with Onion Gravy",
        "Category": "Dinner",
        "Ingredients": "Serves 4 to 6\n1 kg sausages\n1 tablespoon oil\n2 large onions\n3 tablespoon plain flour\n2 \u00bd cups water\n2 beef stock cubes\n2 tablespoon tomato sauce\n\u00bd teaspoon Worcestershire Sauce\nSalt and pepper",
        "Instructions": "Heat oil in frying pan, add sausages and cook till golden brown and remove.\nAdd peeled and chopped onions to pan and cook until golden brown. Add flour, stir until brown, then remove from heat. Add water and stir. Then return pan to heat and stir until sauce boils and thickens.\nAdd crumbled stock cubes, tomato sauce, Worcestershire sauce and stir after each addition.\nReduce heat and add sausages, cover and simmer gently for 30 minutes.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 12,
        "Title": "Spaghetti Bolognese",
        "Category": "Dinner",
        "Ingredients": "Packet of noodles/pasta\nPaul Newman's Tomato Sauce\nTomato Paste 50g\nHandful of Mushrooms\nMince Meat 500g\nCarrot 2\nCapsicum 1 or 2\nOnion or spring onion 1\nDiced tomatoes (1 tin)\nLeak\nGarlic 4 cloves\nRed wine\nHerbs (thyme, rosemary, oregano)\nGarlic Bread",
        "Instructions": "Noodles in pot of boiling water (until soft, use fork to sample pasta)\n1.Cook Garlic and Onion for 3 minutes in big pot, then\n2.Add mince to a separate pot and cook until browned,\n3.then add all other ingredients (chopped or grated) to pot.\n4.Cook until mixture thickens\n5.Check that the vegetables are cooked throughout (not raw).",
        "Author": "James Shaw"
    },
    {
        "ID": 13,
        "Title": "Sweet and Sour chicken",
        "Category": "Dinner",
        "Ingredients": "1 small can pineapple pieces\n6 oz quartered mushrooms [Zena used tinned champignons]\n2\u00bd ozs dry white wine [ \u00bc cup]\n4 chicken joints\n1 tablespoon oil\n1 oz butter [25gm]\n\u00bc pint sour cream [if sour cream is unavailable, Zena used ordinary cream] [125gm]\n\u00bd pint chicken stock [1 cup]\n1 tablespoon cornflour\n1oz roasted almonds\nSalt and pepper\n2 tablespoons drained pineapple juice",
        "Instructions": "Drain pineapple pieces but retain 2 tablespoons of juice.\nPlace the pineapple pieces in a saucepan with the mushrooms and white wine. Simmer gently for 5 to 7 minutes.\nRoast almonds until brown in oil and butter.\nSaut\u00e9 chicken joints in oil and butter until they are light golden brown. Transfer to a 3 pint casserole.\nRemove mushrooms and pineapple from the heat and carefully blend a little of the liquor with the sour cream.\nReturn this mixture to the pan and heat gently, but do not boil.\nPour the mushrooms and pineapples over the chicken pieces.\nBlend the stock, cornflour and 2 tablespoons of pineapple juice together, and add to the fat remaining in the pan.\nBring to the boil and boil 1 minute.\nAdd roasted almonds and seasoning and pour over the chicken joints.\nCook in a cool oven for 1\u00bd hours.",
        "Author": "Zena Jennings"
    },
    {
        "ID": 14,
        "Title": "Yum Yum Pumpkin",
        "Category": "Dinner",
        "Ingredients": "1 small whole Japanese pumpkin [about 750g]\n1 heaped cup soft white or wholemeal breadcrumbs\n1 teaspoon fresh rosemary, chopped\n1 tablespoon fresh parsley, chopped\n2 sage leaves, chopped\nScant \u00bd level teaspoon salt\nFew grinds black pepper\n1 level tablespoon each raisins and choice dried apricots, chopped\n2 tablespoon shelled pistachios\n2 to 3 tablespoons cream",
        "Instructions": "Scrub the skin of the pumpkin under cold running water. Cut a slice from the stem end and remove all the seeds. With a fine skewer pierce the pumpkin skin evenly all over. Put pumpkin into a dish [open end uppermost] add 1 tablespoon of water to the dish. Cover all over with plastic wrap and microwave on full power for 10 minutes.\nMake the stuffing for the pumpkin by mixing the remaining ingredients, adding sufficient cream to bind the mixture.\nRemove the pumpkin from the bowl with the water and place on a flat plate.\nFill the hollow with the stuffing and microwave on full power for a further 5 minutes.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 15,
        "Title": "Udon and leek miso broth",
        "Category": "Dinner",
        "Ingredients": "Serves 2-3\n2 large leeks\nCanola oil spray\n2 tbsp miso paste\n2 cups vegetable stock\n2 tbsp soy sauce\n1 sheet sushi nori (optional)\n300g udon noodles\n300g extra firm tofu",
        "Instructions": "Oven at 220degrees & Saucepan with water over high heat.\nCut 2 Leeks into quarters, into baking tray @220 degrees for 22minutes, until golden and soft.\nBroth: 2 tbsp miso, vegetable stock 2 cups, 2tbsp soy sauce, 400ml water, sushi nori torn up into small bits. Whisk & simmer.\nBoil udon noodles 300g for 3minutes, noodles into serving bowls.\nTofu 300g cut into small cubes, simmer(low boil) for 2minutes. Fish out tofu Into serving bowls.\nShred the cooked leeks into small pieces, put into serving bowls.\nPour broth into serving bowls.",
        "Author": "James Shaw"
    },
    {
        "ID": 16,
        "Title": "Tamago and mushroom Donburi",
        "Category": "Dinner",
        "Ingredients": "Rice 150g\nMushrooms\n4 eggs\n2 tsp caster sugar\ncanola oil spray\n1/2 cabbage\nSushi nori sheet (optional)\nSalt\nMixing bowl, whisk\nBaking paper\nBaking tray\nCling film",
        "Instructions": "Oven 200degrees C; line baking tray with baking paper.\n150g rice, 300ml water into pot and high heat, bring to boil, cover lid, reduce heat to low, simmer for 9minutes.\nCut Mushrooms into bite size pieces, put onto baking paper as a single layer, light spray of canola oil, season with salt, into oven 220degrees C for 9minutes until golden/crisp.\n\nTamago:\nWhisk 4 eggs in a bowl, 2tbsp sugar, 1tbsp soy sauce.\nFrying pan, add 1/2 tbsp oil (or light spray) medium heat, once oil is shimmering tip 1/2 of egg mixture into pan. Allow egg to set for 1-2minutes, roll one edge to opposite to make a sausage shape, with eggroll still in pan, pour in rest of mixture, fry for another 1-2minutes until set, roll eggroll back over newly formed eggsheet to make even bigger eggroll, transfer to board for cutting.\n\nCook cabbage:\nCabbage into mixing bowl, cover with cling film microwave for 5-6minutes.\n\nMushrooms onto plate, cabbage onto plate, eggroll(tamago) onto plate or put all into a sushi nori sheet.",
        "Author": "James Shaw"
    },
    {
        "ID": 17,
        "Title": "Okonomiyaki with pickled cucumber salad",
        "Category": "Dinner",
        "Ingredients": "2 eggs\n30g flour\n2 tbsp soy sauce\n1/2 cabbage\n10g ginger\n3 tbsp mayonnaise\n1 tsp miso paste\n3 tbsp tomato ketchup\n1 tbsp allspice\n3 tbsp Canola oil\n150g mushrooms\n3 tbsp vinegar\n2 tbsp caster sugar\n1 cucumber\n2 sheets sushi nori\n5 Spring onion\nMixing bowl\nWhisk",
        "Instructions": "Oven 180C degrees.\n2 eggs, 30g flour, 1tbsp soy sauce, whisk; pancake batter consistency.\nThinly slice the 1/2 cabbage & 5 spring onion & 10g grated ginger throw into the bowl and mix everything to have an even coating.\n\nSauces:\n3tbsp mayonnaise, 1 tsp miso into small bowl.\nIn another small bowl, 3 tbsp ketchup, 1tbsp all-spice 1tbsp soy sauce.\n\nLarge Oven proof Pan with canola oil, on oven until smoking, then place mushrooms into chunks into pan for 4minutes (golden).\nAfter golden mushrooms, pour cabbage mixture into pan, cook for another 5minutes, then into oven for 5minutes (once can cut through cleanly = done).\nPut onto plates mushroom side up, put sauces on top of the okonomiyaki (mostly using the ketchup based sauce).\n\nSalad:\n3tbsp vinegar and 2 tbsp sugar into large mixing bowl, microwave for 90sec until sugar dissolves. Then use a vegetable peeler to cut ribbons from the cucumber into mixture, mix, put cucumber on side of plates.",
        "Author": "James Shaw"
    },
    {
        "ID": 18,
        "Title": "Mashed Sweet Potato",
        "Category": "Dinner",
        "Ingredients": "Sweet potato\ncling wrap\nmicrowaveable mixing bowl\nwater, salt and pepper",
        "Instructions": "1. Cut sweet potato into bite sizes, and add into large microwaveable mixing bowl with water, salt and pepper and cover with cling wrap.\n2. Microwave for 15 minutes.",
        "Author": ""
    },
    {
        "ID": 19,
        "Title": "Thai Green Prawn and Edamame noodle soup",
        "Category": "Dinner",
        "Ingredients": "Prawns 400g\nThai Green Curry Paste 2 tbsp\nCoconut milk 400g\nEdamame beans 300g\nNoodles 200g\nVegetable oil 2 tbsp",
        "Instructions": "1. Medium heat Vegetable oil 2tbsp and Thai Green Curry Paste 2 tbsp. Fry for 2 minutes.\n2. Add 400g Coconut milk, mix and bring up to boil.\n3. Reduce heat to low and add in Prawns and Edamame, Poach for 6 minutes.\n4. Boil noodles.",
        "Author": ""
    },
    {
        "ID": 20,
        "Title": "Pumpkin Chips",
        "Category": "Dinner",
        "Ingredients": "Aluminium Foil\nPumpkin\nHerbs",
        "Instructions": "1. Pre-heat Oven 200C.\n2. (remove seeds first) Cut Pumpkin into 3cm cubes and chuck onto foil lined tray.\n3. In Oven for 25minutes.",
        "Author": ""
    },
    {
        "ID": 21,
        "Title": "Pumpkin Soup",
        "Category": "Soups",
        "Ingredients": "Serves: 6\n2 kg pumpkin\n2 medium white onions\n2 red apples (skinned)\n3 chicken stock cubes\n1 teaspoon nutmeg\n1 teaspoon salt\n2 cups water\n2\u00bd cups milk\nFreshly ground pepper to taste",
        "Instructions": "Peel and chop pumpkin.\nChop onions and apples.\nPlace in a heavy based saucepan.\nAdd stock cubes, seasonings and water. Bring to boil. Cover and simmer for 35 to 40 minutes until the pumpkin is tender.\nVitamise through a blender or rub through a sieve.\nBlend in milk.\nAdjust seasonings to taste.\nGarnish with sour cream and chopped chives.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 22,
        "Title": "Vegetable Lasagne",
        "Category": "Dinner",
        "Ingredients": "Serves: 8 to 10\n60 g [2oz] butter\n2 medium carrots, finely chopped\n2 stalks of celery, finely chopped\n1 medium green capsicum, chopped\n2 medium onions chopped\n2 medium zucchini, sliced\n440g can tomatoes, chopped\n1\u00bd cups tomato puree\n2 bay leaves\n3 garlic cloves, finely chopped\n\u00bc cup parsley, chopped\n1 tablespoon chopped basil leaves\n1 teaspoon dried oregano crushed\nSalt and freshly ground black pepper to taste\n2 cups sliced mushrooms\n250g [8oz] lasagne noodles, cooked, rinsed and drained\n2 cups ricotta or cottage cheese\n250g [8oz] mozzarella cheese cut into thin pieces\n\u00bc cup grated parmesan cheese",
        "Instructions": "In a large saucepan melt butter or margarine.\nStir in carrots, celery, capsicum and onion. Cover and cook 10 minutes, stirring frequently.\nAdd zucchini, un-drained tomatoes and tomato puree and mix well.\nAdd bay leaves garlic, parsley, basil, oregano, salt and pepper. Cover and simmer 30 minutes.\nRemove cover and continue simmering 10 to 15 minutes more or until thickened to desired consistency.\nStir in sliced mushrooms, cook 5 minutes more.\nRemove from heat. Discard bay leaves.\n\nTo make up the lasagne:\nIn a greased 30 x 23 x 5cm baking dish, layer \u2153 of the noodles, vegetable sauce, Ricotta, and mozzarella. Repeat twice, ending with mozzarella. Sprinkle parmesan all over. Cover with foil. Place on a baking sheet. Bake in oven preheated to 180\u00b0C for 45 minutes.\nRemove foil and continue baking 10 minutes more until cheese is golden.\nRemove from oven and let stand 10 minutes before serving.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 23,
        "Title": "Brownies-Macadamia Brownies",
        "Category": "Desserts",
        "Ingredients": "From Cadbury Dark Cooking chocolate wrapper\n150g unsalted butter, chopped\n250g Dark cooking chocolate, chopped\n1\u00bd cups caster sugar\n4 eggs, lightly beaten\n1 teaspoon vanilla essence\n1 cup plain flour, sifted\n\u00bd cup sour cream\n1 cup macadamia nuts, cut in half",
        "Instructions": "Pre-heat oven to 160\u00b0C conventional or 140\u00b0C fan forced. Line a 20cm X30 cm slice pan with baking paper.\nCombine butter and chocolate in a medium saucepan; stir over low heat until the chocolate is just melted. Add sugar, egg, vanilla, flour, sour cream and nuts. Stir until well combined. Spread mixture into prepared pan.\nBake 35 minutes or until brownie forms and a crust forms on the outside. Allow to cool and slice.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 24,
        "Title": "Easy Orange or Lemon Cake",
        "Category": "Desserts",
        "Ingredients": "120 g [4 oz] butter\n1\u00bd cups S-R flour\n1 cup sugar\n\u00bd cup milk\n2 eggs\nGrated rind of 1 lemon or orange",
        "Instructions": "Melt butter.\nPut all other ingredients in a basin.\nAdd melted butter and beat for 5 minutes.\nPlace in a greased cake tin about 8 inches across and bake in a 350\u00b0F oven for about \u00bd hour.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 25,
        "Title": "Lemon Delicious",
        "Category": "Desserts",
        "Ingredients": "5 Small serves\nOven temperature 190C\nCooking time- 45 minutes\n1 tablespoon butter\n3/4 cup caster sugar\n1 tablespoon flour\n2 tablespoons S-R flour\n2 lemons- rind and juice (I only use 1 and a bit lemons)\n2 eggs, separated\n1 cup milk",
        "Instructions": "1. Collect ingredients\n2. mix butter and sugar\n3. Stir in flours, lemon juice and rind. Add egg yolks and milk. Beat well.\n4. Beat egg white until stiff. Fold into mixture. Pour into dish. ( I use a small casserole dish.)\n5. Stand dish in a baking dish of warm water about 3 centimetres deep Bake until set and lightly browned.\n6. Serve with cream or ice-cream.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 26,
        "Title": "Scones",
        "Category": "Desserts",
        "Ingredients": "3\u00bd cups S-R flour\n\u00bd level teaspoon salt\nPinch nutmeg\n60g butter\n\u00bc cup caster sugar\n1 egg\n350 ml milk [almost 1\u00bd cups]\nFew drops each of lemon and vanilla essence",
        "Instructions": "Sift flour, salt and nutmeg into a mixing bowl.\nRub in the butter with the finger tips and then add the sugar and mix well.\nMake a well in the middle, and then add the egg, milk and flavouring essences and make into a soft dough.\nEmpty the dough out onto a lightly floured surface and knead slightly with a little extra S-R flour.\nRoll out the dough to 2cm thickness.\nCover the scones with a clean tea towel and leave them to \u201crest\u201d for 1 hour.\nArrange closely on a greased baking tray. This lets the scones support one another as they rise.\nBefore baking, brush the tops of the scones with milk and then bake in a very hot oven [220\u00b0C] for about 20 to 25 minutes or until cooked.\nRemove from the oven and wrap in a clean tea towel to steam for 10 minutes.\nServe with jam and cream.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 27,
        "Title": "Thelma Pumpkin Scones",
        "Category": "Desserts",
        "Ingredients": "3 cups S-R flour\n1\u00bd dessertspoon sugar\n\u00be cup pumpkin cold [cooked, drained and mashed with no lumps]\n\u00be teaspoon baking powder\nOrange juice or milk",
        "Instructions": "Rub butter into flour.\nAdd all the other ingredients and mix together.\nMake into scones and bake.\nGlaze with butter immediately out of the oven.\nFreeze immediately.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 28,
        "Title": "Apple Cake",
        "Category": "Desserts",
        "Ingredients": "4 tablespoons of very soft butter\n4 tablespoons caster sugar\n2 whole eggs, beaten\n1 teaspoon vanilla essence\n8 tablespoons of S-R flour [approximately]\n1 large can of pie apples\nSugar, cinnamon and ground coriander for sprinkling on top.",
        "Instructions": "Mix soft butter and sugar until smooth.\nAdd 2 whole eggs beaten and add vanilla essence.\nAdd about 8 tablespoons of S-R flour- just keep adding until it is firm but still softish.\nDivide mixture into two.\nGrease the round cake pan well and press one part of the mixture on the base.\nSpread the apple over the base. Sprinkle with sugar, to taste, cinnamon and ground coriander.\nArrange the other part of the mixture- usually it needs to be done in pieces at a time.\nCook in oven at 180\u00b0 for 40 minutes or until golden brown.\nTurn out onto a plate. Spread the top with butter and sprinkle sugar and cinnamon.\nServe warm with cream or ice cream.",
        "Author": "Wendy Jones"
    },
    {
        "ID": 29,
        "Title": "Apple Crumble",
        "Category": "Desserts",
        "Ingredients": "Fuji apples/ Golden delicious (Cut the same size)\n2 tablespoons honey\n2 tablespoons caster sugar\nSome self raising flour\nBrown sugar",
        "Instructions": "Put apples in a saucepan with 2 tablespoons honey, 2 tablespoons caster sugar, and some self raising flour.\nAdd brown sugar on top and gently mix in.\nCook at 180\u00b0C for 40 minutes.",
        "Author": ""
    },
    {
        "ID": 30,
        "Title": "Apricot Chocolate Truffles",
        "Category": "Desserts",
        "Ingredients": "1 cup rice bubbles\n\u00bd cup desiccated coconut\n\u00bc cup dried apricots\n\u00bc cup chopped mixed peel\n\u00bc cup slivered almonds\n\u00be cup sweetened condensed milk\n250g white chocolate chopped\n100g dark chocolate chopped\nGlaze cherries for decoration (three red bits and green leaves)",
        "Instructions": "Combine rice bubbles, coconut, apricots, peel and almonds. Add condensed milk. Stir until combined. Cover with plastic wrap and refrigerate till firm.\nShape heaped teaspoons of mixture into balls.\nPlace white chocolate into small heatproof bowl. Stand over bowl of simmering water until chocolate has melted.\nDip truffles into chocolate allow excess to run off. Refrigerate till set.\nRe-dip in dark chocolate if desired.\nDecorate the top with glaze cherries.",
        "Author": ""
    },
    {
        "ID": 31,
        "Title": "Beef Curry",
        "Category": "Dinner",
        "Ingredients": "Serves: 6\n1.25kg skirt or chuck steak\n2 large onions, sliced thinly\n1 teaspoon grated fresh ginger\n3 cloves garlic, crushed\n2 tablespoons curry powder\n2 teaspoon salt\n\u00bd teaspoon chilli powder\n1 teaspoon poppy seeds\n2 large tomatoes, peeled and chopped",
        "Instructions": "After trimming excess fat from meat, cut into 2.5cm [1 inch] cubes.\nGently fry onions, ginger and garlic in about 2 tablespoons oil until softened and onions are lightly tinted.\nAdd curry powder, salt and chilli powder, stir over low heat for 2 to 3 minutes.\nAdd the meat and fry, stirring for another 3 minutes.\nStir in the poppy seeds, tomatoes and \u2153 cup warm water. Cover pan and cook over very low heat for about 2 hours, adding more water [very little] if necessary.",
        "Author": ""
    },
    {
        "ID": 32,
        "Title": "Beef Sate",
        "Category": "Dinner",
        "Ingredients": "Serves: 6\n1 kg [2 lb] rump steak\n2 tablespoons tomato paste\n3 tablespoons tomato sauce\n3 teaspoons curry powder\n2 teaspoons chilli powder\n1 teaspoon garam masala\n2 teaspoon cumin\n1 clove garlic\n3 tablespoons white vinegar\nSalt and pepper\n1 teaspoon soya sauce\n1 tablespoon water\n3 tablespoons oil, extra\n\nSate Sauce:\n4 tablespoons peanut butter [or 1\u00bd tablespoons]\n\u00bd teaspoon chilli powder\n\u2153 cup brown malt vinegar\n3 tablespoons of sugar\n1 cup water\n30g [1oz] butter\n1 medium onion\n1 teaspoon soya sauce\nSalt and pepper",
        "Instructions": "Remove all fat from the meat. Cut meat into 1 cm cubes.\nPut tomato paste, tomato sauce, curry powder, chilli powder, garam masala, cumin, crushed garlic, vinegar, salt, pepper, oil, soya sauce, and water into a bowl. Mix well.\nAdd meat, Mix well. Let stand overnight or several hours.\nDrain marinade from meat. Reserve marinade for sauce.\nThread meat onto bamboo skewers.\nPut under hot grill. Grill until golden brown and cooked through. Turn skewers frequently, brushing with extra oil. Serve with sate sauce.\n\nSATE SAUCE METHOD:\nHeat butter in pan. Add peeled and finely chopped onion. Saute gently until onion is golden brown.\nAdd remaining ingredients and mix well. Add reserved marinade, stir until combined.\nBring to boil. Boil uncovered for 5 minutes or until the sauce is thick.",
        "Author": ""
    },
    {
        "ID": 33,
        "Title": "Boeuf en Daube Proven\u00e7ale",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n2 pounds lean beef, cut in 2 1/2-inch cubes\n1 pound salt pork\n1/4 pound pork skin\n3 tablespoons butter\nFlour\n2 large onions, thinly sliced\n1 clove garlic, chopped\n3 carrots, thinly sliced\nPinch of ground cloves\n1 teaspoon thyme\n1 bay leaf\n1/4 cup cognac, warmed\n1 bottle red Burgundy or California Pinot Noir\n1/2 cup water\nSalt, freshly ground black pepper",
        "Instructions": "Cube salt pork and cut pork skin into small rounds. When browned, remove from pan. Add butter to rendered fat. Flour beef lightly and brown in butter-fat mixture, turning to brown evenly on all sides. Return salt pork to pan with pork skin, onions, garlic, carrots, ground cloves, thyme and bay leaf. Pour on warmed cognac and ignite. Extinguish flames by pouring on wine and water. Bring to a boil, add salt and pepper to taste. Cover pan and simmer on low heat (or cook very slowly in a 275\u00b0F. oven) for 8 hours. The liquid must never return to the boiling point. Serve with parsleyed boiled potatoes.",
        "Author": ""
    },
    {
        "ID": 34,
        "Title": "Boiled Pineapple fruit cake",
        "Category": "Desserts",
        "Ingredients": "One 15 oz can crushed pineapple, undrained\n4 oz butter\n1 cup sugar\n\u00bd pound sultanas\n\u00bc pound chopped dates\n\u00bc pound chopped glazed cherries\n1 level teaspoon bicarb of soda\n2 eggs\n1 cup S-R flour\nPinch salt",
        "Instructions": "Simmer undrained crushed pineapple, butter, sugar, sultanas, chopped dates and cherries in a saucepan for 15 minutes. Add bicarb of soda, stir and then cool.\nBeat eggs and stir into cooled fruit mixture. Lightly fold in sifted flours and salt.\nTurn into an 8 inch round cake tin lined with brown paper and then white paper.\nBake at 350\u00b0 for 1 \u00be hours.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 35,
        "Title": "Best Ever Chocolate Cake",
        "Category": "Cake",
        "Ingredients": "\u00bd cup cocoa\n\u00bd cup boiling water\n185gm butter\n1 \u00bd cups of caster sugar\n3 eggs\n2 cups S-R flour [or 1 \u00be cups S-R and \u00bc cup plain flour]\n\u00bc level teaspoon bicarbonate of soda\n\u00be cup milk\n1 tablespoon vanilla",
        "Instructions": "Mix cocoa with boiling water in a small bowl, cool.\nGrease a large baking dish 27cm X 32 cm and line the base with Gladbake (or 2 X 20cm sandwich tins lined with baking paper).\nCream butter and sugar until light and fluffy. Add eggs one at a time and beat in well.\nSift flour and soda and gently stir into the creamed ingredients, then add milk and vanilla.\nWhen well mixed, gradually stir in the cocoa mixture, mixing thoroughly. (If it curdles, do not worry).\nPour into prepared cake tin and bake in a moderate oven for 30 to 35 minutes. Test with a skewer. Stand 5 minutes before turning out.",
        "Author": ""
    },
    {
        "ID": 36,
        "Title": "Cake- Pecan Sour Cream Cake",
        "Category": "Desserts",
        "Ingredients": "250gm [8 oz] butter\n\u00be cup sugar\n2 x 60g eggs\n1 teaspoon vanilla essence\n300ml sour cream\n2 cups plain flour\n1 teaspoon bicarbonate of soda\n1 teaspoon baking powder\n\u00bd teaspoon salt\n\nTopping:\n\u00bd to \u00be cup pecans\n2 tablespoons brown sugar\n\u00bd teaspoon cinnamon",
        "Instructions": "Beat together butter and sugar until creamy. Add eggs, one at a time, beating well after each addition, then add the vanilla essence. Whisk sour cream until smooth and stir in. Sift together flour, bicarbonate of soda, baking powder and salt and fold in.\nPour half into a greased deep 20cm cake tin, sprinkle with half the combined topping ingredients. Cover with the remaining half of the cake mixture, sprinkle rest of topping over, pressing pecans in lightly.\nBake in a moderate oven for one hour or until done when tested. Let stand for 10 minutes before turning out.",
        "Author": ""
    },
    {
        "ID": 37,
        "Title": "Cake-Layer Strawberry Mocha Torte",
        "Category": "Desserts",
        "Ingredients": "Cake:\n125gm butter, softened\n1 cup caster sugar\n2 eggs\n\u00bd cup cocoa\n\u00be cup water\n\u00bc cup Tia Maria\n\nFilling:\n250gm ricotta cheese\n2 tablespoons sugar\n60g finely chopped mixed peel\n125gm strawberries, chopped\n\nCoffee Cream:\n2 tablespoons instant coffee powder\n1 teaspoon hot water\n3/4 cup thickened cream\n125 gm strawberries, sliced as decoration",
        "Instructions": "Cake: Combine butter, sugar, eggs, sifted flour, cocoa, and water in a small mixing bowl. Beat with an electric mixer until smooth and pale. Pour into a greased and base-lined 23cm round cake pan. Bake in a moderate oven for 45 minutes. Turn onto wire rack to cool upside down. Cut cake into 3 even layers and brush each with Tia Maria.\nFilling: Combine ricotta cheese, sugar, chopped mixed peel, and chopped strawberries.\nAssemble: Place a layer of cake onto a serving plate, spread with half the filling. Repeat layers. Cover and refrigerate.\nCoffee Cream: Dissolve coffee in water. Whip combined cream and coffee mixture until soft peaks form. Spread on cake and decorate with sliced strawberries.",
        "Author": ""
    },
    {
        "ID": 38,
        "Title": "Carol-Baked Fish Fillets",
        "Category": "Dinner",
        "Ingredients": "Fish fillets\n\u00bc cup lemon juice\n1 teaspoon grated lemon rind\n2 cup breadcrumbs [fresh]\n1/2 teaspoon mustard\n1 Tablespoon Parmesan\n1 cup cheddar cheese, grated\n3 spring onions, sliced\nSalt and pepper\nWater and a little olive oil",
        "Instructions": "Layer fish fillets in a shallow dish. Pour on the lemon juice and leave sit while preparing the breadcrumb mixture.\nCombine breadcrumbs, rind, mustard, parmesan, cheddar cheese, spring onions, salt, and pepper. Make slightly moist with water and a little olive oil.\nCover fish with layer of breadcrumb mixture.\nBake 20 minutes in a mod-hot oven until the topping is brown and crisp.",
        "Author": "Carol Wall"
    },
    {
        "ID": 39,
        "Title": "Carol-Grilled Tuna with Thai Cucumber Salad",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n2 lebanese cucumbers\n1 tablespoon sugar\n2 tablespoons white wine vinegar\n1 red chilli, finely chopped\n2 spring onions, thinly sliced\n2 tablespoon coriander leaves\n2 teaspoon fish sauce\n1 tablespoon lime juice\n\u2153 cup chopped roasted peanuts\n4 x 200g tuna fillets\nSalt and freshly ground pepper\nVegetable oil\nLime wedges for garnish",
        "Instructions": "Salad: Cut the cucumbers in half and slice thinly into rounds. Combine with the rest of the ingredients down to the tuna on the list.\nTuna: Season well and barbeque or grill until they are medium rare - about 2 minutes on each side on high heat. Serve each tuna fillet with a portion of salad and a lime wedge.",
        "Author": "Carol Wall"
    },
    {
        "ID": 40,
        "Title": "Carol's Chocolate Plum Puddings",
        "Category": "Desserts",
        "Ingredients": "SERVES 6\n125gm (4oz) dark cooking chocolate, chopped\n90gm (3oz) butter, chopped\n1/2 cup (55g) almond meal\n3 eggwhites, whisked lightly\n1/4 teaspoon mixed spice\npinch ground cloves\n1 1/2 tablespoons plain flour, sifted\n1/2 teaspoon baking powder\n1/3 cup (75g) castor sugar\n1/2 cup (120g) chopped pitted prunes\n1 1/2 tablespoons marsala\nvanilla ice-cream to serve\ncocoa powder for dusting",
        "Instructions": "Preheat oven to 150'C (300'F). Place the chocolate & butter in a saucepan over low heat & stir until melted & combined. Set aside.\nPlace the almond meal, eggwhites, mixed spice, cloves, flour, baking powder, sugar, prunes & marsala in a bowl. Pour in the chocolate mixture & stir until fully combined.\nSpoon the mixture into six 1/2 cup capacity greased metal dariole moulds. Place on a baking tray & cook for 30 minutes or until springy to touch. Cool in the tins for 5 minutes before removing. Serve warm sitting on their small ends with ice-cream and cocoa powder.",
        "Author": "Carol Wall"
    },
    {
        "ID": 41,
        "Title": "Carrot Cake",
        "Category": "Desserts",
        "Ingredients": "\u00be cup oil\n\u00bd cup chopped walnuts\n1 cup sugar\n1 teaspoon mixed spice\n2 eggs\n\u00bd cup plain flour\n\u00bd teaspoon bicarb of soda\n1\u00bd cups grated carrot\n\u00bd cup S-R flour\n1 teaspoon vanilla\n\nLemon Cream Cheese Icing:\n123gm softened cream cheese\n2 cups of icing sugar\n1 teaspoon lemon juice",
        "Instructions": "Beat sugar and eggs together. Stir in the oil and carrot and then the dry ingredients. Spoon into a 20cm greased round tin. Bake for 1 hour in a moderate oven. Ice with lemon cream cheese icing when cold.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 42,
        "Title": "Chicken Wings Baked",
        "Category": "Dinner",
        "Ingredients": "Chicken wings\nLemon juice\nCoriander\nPaprika\nSoya sauce\nCooking oil\nSalt",
        "Instructions": "Put chicken wings in a baking dish. Sprinkle lemon juice over. Sprinkle with coriander, paprika and rub in. Sprinkle with soya sauce. Bake in a moderate oven.\nWhen half cooked, put lemon juice, soya sauce and also cooking oil over chicken wings and sprinkle with salt. Then continue cooking. Serve.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 43,
        "Title": "Chicken- Tangy lemon chicken",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n1 medium cooked chicken (or raw chicken breast cut up)\n2 tablespoons polyunsaturated oil\n3 teaspoons grated ginger\n3 tablespoons lemon juice\n1 cup [250ml] chicken stock\n1\u00bd tablespoons honey\n2 tablespoons sugar\n1 tablespoon cornflour blended with 1 tablespoon water\n2 shallots chopped",
        "Instructions": "Cut chicken into serving pieces. Heat oil in frying pan or wok and stirfry chicken for 2-3 minutes. Remove and keep warm.\nStir in ginger and cook for 1 minute. Pour in combined lemon juice, stock, honey, and sugar. Add blended cornflour to pan and cook for 1-2 minutes until the sauce has thickened.\nReturn chicken to pan and heat through gently. Serve sprinkled with shallots. (Goes well with rice and salad).",
        "Author": ""
    },
    {
        "ID": 44,
        "Title": "Chocolate Brownies Recipe",
        "Category": "Desserts",
        "Ingredients": "24 Slices\n1/3 cup S-R flour\n1/2 cup cocoa\n1\u00bd cups sugar\n1 cup of chopped dark chocolate chips\n100g chopped walnuts\n125 g butter, melted\n4 lightly beaten eggs\n2 teaspoons vanilla essence",
        "Instructions": "Grease Slice pan and line with baking paper. Preheat Oven at 180\u00b0.\nSift Flour and cocoa powder into a large bowl. Add in sugar, chocolate bits and walnuts. Mix thoroughly.\nMake a well in the center of dry ingredients. Add melted butter, eggs and vanilla essence into well.\nMix all ingredients thoroughly until mixture turns thick and creamy.\nPour into pan and smooth surface. Bake for 40 minutes.\nCool for 10 minutes and fridge them for about 2 hours. Slice and serve!",
        "Author": ""
    },
    {
        "ID": 45,
        "Title": "Chocolate Fruit cake slice",
        "Category": "Desserts",
        "Ingredients": "250g dates, finely chopped\n\u00be cup brown sugar\n\u00bd cup water\n125g butter\n\u00be cup choco pieces\n2 eggs beaten\n1 \u00bc cup plain flour\n\u00be level teaspoon bicarb of soda\nGood pinch salt\n\u00bd cup of orange juice\n\u00bd cup milk\n1 cup chopped walnuts\n\nLemon Icing:\n1 \u00bd cups sifted icing sugar\n1 tablespoon soft butter\n1 teaspoon grated lemon rind\n2 tablespoons lemon juice\nWalnuts to garnish",
        "Instructions": "Combine dates, sugar, water and butter in a saucepan. Stir over low heat until dates are soft. Cool slightly and stir in chocolate. Add well beaten eggs. Then add sifted dry ingredients, alternating with orange juice and milk. Fold in nuts.\nSpread into a greased lined tin 28 X 18 cm. Bake at 180\u00b0C for 35 to 45 minutes. Cool in tray.\nIcing: Mix icing sugar, butter, lemon rind and juice together. Stir over low heat for a minute. Spread over slice and garnish with walnuts.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 46,
        "Title": "Chocolate Ripple Cake",
        "Category": "Desserts",
        "Ingredients": "\u00bd pound chocolate Ripple biscuits\n1 teaspoon castor sugar\n\u00bd pint cream\nVanilla essence\nChopped nuts",
        "Instructions": "Add sugar and a drop of vanilla essence to cream and whip until it is very stiff.\nJoin biscuits together with the cream.\nAllow the cake to stand at least 6 hours to set. Top with chopped nuts.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 47,
        "Title": "Chocolate Rum Truffles",
        "Category": "Desserts",
        "Ingredients": "4 oz butter\n4 oz icing sugar\n2 oz cocoa\n2 tablespoons rum\n6 oz coconut\n1 teaspoon vanilla essence\n2 cups chopped mixed fruit [dates, raisins, cherries, or glazed ginger]\nChocolate nonpareils",
        "Instructions": "Beat the butter and sifted icing sugar to a cream, then beat in cocoa adding a little rum to moisten.\nBeat the remainder of the rum. Then stir in the coconut, vanilla essence and chopped fruit.\nTake spoonfuls and roll into balls before tossing in chocolate nonpareils.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 48,
        "Title": "Christmas Punch",
        "Category": "Drinks",
        "Ingredients": "3 oranges\n3 lemons\nHandful mint\n1 cup sugar\n1 cup lime juice cordial\n3 bottles ginger ale\n3 bottles lemonade\n5 cups water\nIce cubes",
        "Instructions": "Slice oranges and lemons and place in a large bowl. Add finely chopped mint. Add sugar and bruise fruit until the juices begin to run. Allow to stand for 1 hour.\nAdd lime juice and water.\nJust before serving add dry ginger, lemonade and ice cubes.",
        "Author": ""
    },
    {
        "ID": 49,
        "Title": "Christmas Roasted Vegies",
        "Category": "Christmas",
        "Ingredients": "Serves 8\n2 beetroot, trimmed and washed\n2 medium sweet potatoes, cut in chunks\n2 parsnip, cut into quarters and halved\n2 red onions, cut into quarters\n\u00bd cauliflower, broken into florets\n2 or 3 whole red chillies\nOlive oil spray\nBeetroot leaves shredded\n\nMustard Dressing:\n1 \u00bd tablespoon whole grain mustard\n2 teaspoons Dijon mustard\n1 tablespoon sherry\n2 tablespoons of lemon juice\nSalt and pepper\n125 ml olive oil",
        "Instructions": "Pre-heat oven to 200\u00b0C. Wrap the beetroot in foil and roast on a tray for 25 minutes. Spray the remaining vegetables with olive oil and roast until golden.\nRemove beetroot, peel skins, cut into eighths, and drizzle with some dressing.\nCool other vegetables slightly, place in bowl, drizzle with dressing and toss with beetroot leaves. Add beetroot wedges just before serving.\nDressing: Shake all ingredients in a jar until creamy.",
        "Author": ""
    },
    {
        "ID": 50,
        "Title": "Christmas \u2013 Hard sauce",
        "Category": "Christmas",
        "Ingredients": "2 tablespoons butter\n3 tablespoons icing sugar\n1 tablespoon brandy\n\u00bd teaspoon vanilla\nNutmeg for dusting",
        "Instructions": "Collect ingredients. Cream butter and sugar until light and fluffy. Gradually add brandy and vanilla. Place in a small dish and dust with nutmeg.",
        "Author": ""
    },
    {
        "ID": 51,
        "Title": "Cottage Cheese and Herb Loaf",
        "Category": "Vegetarian",
        "Ingredients": "Serves: 6\n\u00bd cup finely chopped onion\n30g butter\n1 tablespoon chopped parsley\n500g cottage cheese\n1 cup finely chopped celery\n1 cup rolled oats or breadcrumbs\n3 eggs, beaten\n1 teaspoon vegetable salt\n1 teaspoon mayonnaise\nSesame seeds\n\nSEV Modifications:\n250g cottage cheese, parmesan, tasty cheese, fresh basil, black pepper, capsicum, mushrooms, poppy seeds.",
        "Instructions": "Gently fry onion in butter until soft. Remove from heat, sprinkle rosemary over and let stand.\nPlace cottage cheese in mixing bowl and add saut\u00e9ed onion and all remaining ingredients except sesame seeds. Mix well.\nPour mixture into greased loaf tin and sprinkle sesame seeds over the top.\nBake at 180\u00b0C for 1 hour or until firm and golden.",
        "Author": ""
    },
    {
        "ID": 52,
        "Title": "Couscous-Lamb and vegies",
        "Category": "Desserts",
        "Ingredients": "1 lamb shoulder, boned\n3 tablespoons olive oil\n2 onions, cut in wedges\n3 cloves garlic, sliced\n2 sticks cinnamon\n\u00bc teaspoon saffron\n2 teaspoons salt\n\u00bd teaspoon ground black pepper\n2 cups chick peas\n2 large carrots\n500g pumpkin\n1 medium sweet potato\n1/3 cup chopped fresh coriander\n500gm zucchini\n\u00bd cup seedless raisins\n2 cups couscous",
        "Instructions": "Trim fat from lamb and cut into cubes. Brown lamb in 2 tbsp olive oil in batches; remove.\nAdd remaining oil and fry onions and garlic until golden. Return lamb, add water to come level with meat, and add cinnamon. Toast saffron, dissolve in boiling water, add to pan with salt, pepper, and chick peas. Simmer for 1.5 hours.\nAdd carrots, pumpkin, sweet potato, coriander, and raisins. Simmer 25 minutes, adding zucchini 10 minutes before the end.\nPrepare couscous as directed. Pile couscous on a dish, ladle stew in the centre.",
        "Author": ""
    },
    {
        "ID": 53,
        "Title": "Crustless Quiche",
        "Category": "Dinner",
        "Ingredients": "1\u00bd cups milk [or \u00bd cup milk, 1 cup cream]\n3 eggs\n1 tablespoon melted butter\n3 rashes bacon, chopped\n1 small onion, finely chopped\n\u00bd cup S-R flour, sifted\nSalt and pepper\n1 cup cheddar cheese",
        "Instructions": "Combine milk, eggs, butter, salt, and pepper and beat.\nIn a separate mixing bowl, stir together bacon, onion, flour, and cheese.\nPour egg mixture into bacon mixture. Stir.\nPour into a medium quiche dish and bake at 200\u00baC for 40 minutes or until set.",
        "Author": ""
    },
    {
        "ID": 54,
        "Title": "Eggplant casserole",
        "Category": "Dinner",
        "Ingredients": "Eggplant\nBasil\nBlack pepper\nBeans",
        "Instructions": "Ingredients and instructions structurally matching the dynamic placeholder text notes.",
        "Author": ""
    },
    {
        "ID": 55,
        "Title": "FLAN- Savoury Pumpkin Flan",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n4 sheets of filo pastry\n2 tablespoon polyunsaturated oil\n2 rashes bacon, chopped\n\u00bd medium onion, chopped\n250g pumpkin, cooked and mashed\n1\u00bd cups grated tasty cheese\n2 eggs, separated\n2 tablespoons cream or yoghurt\nBlack pepper\nPinch chilli powder\n1 tablespoon fresh parsley",
        "Instructions": "Brush each layer of pastry with oil and fold in half to get 8 layers total. Line an 18cm flan dish.\nCook bacon and onion until crisp. Combine with pumpkin, cheese, egg yolks, and cream. Season with pepper and chilli powder.\nBeat egg whites until stiff peaks form. Fold into pumpkin mixture, spoon into pastry case, sprinkle with parsley. Bake at 200\u00b0C for 30 minutes.",
        "Author": ""
    },
    {
        "ID": 56,
        "Title": "Fluffy Savory Omelette",
        "Category": "Dinner",
        "Ingredients": "Serves 1\n2 eggs\n3 shakes of pepper\n\u00bd teaspoon salt\n2 teaspoons butter\nGrilled or fried bacon\nParsley sprigs\nChampignons, bacon, tomato filling",
        "Instructions": "Separate egg whites from yolks. Add pepper and water to egg yolks and beat until creamy. Beat egg whites and salt until stiff; fold yolks into whites.\nMelt 1 tsp butter in pan, wipe out. Melt remaining butter, pour in mixture. Cook slowly until brown underneath.\nPlace under hot griller until top is set. Cut almost through centre, fold over, and serve with bacon and parsley.",
        "Author": ""
    },
    {
        "ID": 57,
        "Title": "Ginger Fluff Sponge",
        "Category": "Desserts",
        "Ingredients": "4 eggs\n\u00be cup castor sugar\n\u00bd cup cornflour\n2 dessert spoons plain flour\n2 teaspoon ground ginger\n2 teaspoon cinnamon\n1 teaspoon cocoa\n1 teaspoon cream of tartar\n\u00bd teaspoon bicarb of soda\n1 dessertsp golden syrup\nCream and lemon icing for filling/topping",
        "Instructions": "Separate egg whites and beat till stiff. Whisk egg yolks gently and stir into whites. Sift dry ingredients twice and fold into egg mixture. Add golden syrup.\nPlace in two sandwich pans and bake 15-20 minutes in a moderate oven. Fill with cream and top with lemon icing.",
        "Author": ""
    },
    {
        "ID": 58,
        "Title": "Harissa Sauce for Couscous",
        "Category": "Dinner",
        "Ingredients": "50g fresh hot red chillies or 20g dried chillies\n3-4 cloves garlic\n1 teaspoon ground coriander\n1 teaspoon ground cumin\n1 teaspoon dried mint leaves\n1 teaspoon salt\n2 tablespoon chopped fresh coriander\nOlive oil",
        "Instructions": "Snip off stems and remove seeds from chillies (leave seeds for hotter sauce). If using dried, soak in boiling water for an hour, then drain and reserve water.\nPut chillies and all other ingredients into a blender. Puree to a paste, using a little soaking water.\nTurn into a small glass jar, cover top with a thin layer of olive oil and refrigerate.",
        "Author": ""
    },
    {
        "ID": 59,
        "Title": "Jam drop biscuits",
        "Category": "Desserts",
        "Ingredients": "2 cups flour\nPinch salt\n\u00be cup sugar\n1 teaspoon cream of tartar\n\u00bd teaspoon bicarb of soda\n\u00bd cup butter\n2 eggs\nJam for filling",
        "Instructions": "Beat butter and sugar to a cream, add eggs, then flour mixture. Make into small balls. Place on baking tray, press down in the centre and fill with jam.\nBake at 350\u00baF on the top shelf on a paper-lined tray for 7 minutes, turn tray, and bake for 5 minutes longer.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 60,
        "Title": "Kaya Toast",
        "Category": "Breakfast",
        "Ingredients": "Eggs (room temperature)\nBread\nKaya jam\nHot water",
        "Instructions": "Cook at 19C for 9 minutes using room temperature eggs and pre-heated bowls with hot water.",
        "Author": ""
    },
    {
        "ID": 61,
        "Title": "Lamb Cutlets with Herbed Barbeque Sauce",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n8 lamb cutlets\n1 tablespoon lemon juice\n1 level tablespoon honey\n2 level tablespoons tomato sauce\nGarlic salt and black pepper\nFew sprigs fresh rosemary\n\nFrench Beans:\n250 g green beans\n1 teaspoon butter\nsalt",
        "Instructions": "Trim fat from cutlets. Combine lemon juice, honey, and tomato sauce on a plate. Dip cutlets to coat. Sprinkle with garlic salt, pepper, and rosemary leaves.\nMicrowave on full power for 8 to 10 minutes. Cover with foil. Return sauce to microwave uncovered for 1 minute, skim fat, and pour over cutlets.\nBeans: Chop beans to 2cm, place in microwave-safe bowl with butter and salt (no water). Cover and microwave on full power for 7 minutes.",
        "Author": ""
    },
    {
        "ID": 62,
        "Title": "Lamb in Pastry by Margaret Fulton",
        "Category": "Dinner",
        "Ingredients": "90g butter\n6 lamb kidneys, sliced\n\u00bd cup Madeira\n125g mushrooms, chopped\n1 teaspoon fresh thyme and tarragon\nSalt and pepper\n1 leg of baby lamb, boned\n250g frozen puff pastry, thawed\n1 egg, beaten",
        "Instructions": "Heat butter and saut\u00e9 kidneys for 2 minutes. Add Madeira, mushrooms, and herbs; simmer 3 minutes and cool.\nStuff lamb with kidney mixture, re-shape, and sew with white thread. Rub with butter and bake at 200\u00b0C for 20 minutes. Let become cold and remove thread.\nRoll pastry thin, wrap the lamb, and seal with beaten egg. Decorate with pastry trimmings. Refrigerate 30 minutes. Brush with egg and bake at 230\u00b0C for 10 minutes (add extra time for Australian lamb).",
        "Author": "Margaret Fulton"
    },
    {
        "ID": 63,
        "Title": "Lamingtons",
        "Category": "Desserts",
        "Ingredients": "Cake pieces\n1 pound sifted icing sugar\n3 tablespoons cocoa\n4 tablespoons hot water\n\u00bd teaspoon vanilla\nCoconut",
        "Instructions": "Sift sugar with cocoa and mix with hot water and vanilla. Heat gently over low heat.\nDip cake pieces into icing and then coat completely with coconut.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 64,
        "Title": "Lenten Moussaka",
        "Category": "Dinner",
        "Ingredients": "Serves: 6 to 8\n315g chick peas\n2 small eggplants [500g each]\nSalt and olive oil\n2 onions, sliced\n1 kg tomatoes, peeled and chopped\n3 tablespoons chopped parsley\n250ml water\n1 egg\n125ml yoghurt\nBrown lentils, marjoram, thyme (optional additions)",
        "Instructions": "Soak chick peas overnight, then boil in fresh water for 2 hours until tender. Cut eggplant into 5cm cubes, salt in a colander for 30 minutes, then drain.\nFry eggplant in oil for 5 minutes; place in casserole. Fry onion, place on eggplant, then cover with chick peas. Mix tomatoes with parsley, salt, and pepper; place on top. Pour water over.\nBeat egg with yoghurt, pour on top, and bake at 190\u00baC for 45 minutes.",
        "Author": ""
    },
    {
        "ID": 65,
        "Title": "Lime dipping sauce with seared Tuna",
        "Category": "Lunch",
        "Ingredients": "Dipping Sauce:\n3 tbsp lime juice, 2 tbsp rice wine vinegar, 1 tbsp sweet chilli sauce, 2 tsp sesame oil, 2 tsp fish sauce.\n\nTuna:\nJuice of 2 limes, 2 tbsp sweet chilli sauce, 1 tbsp light soya sauce, 4 x 200g tuna steaks, 2 tsp olive oil.\nServing: 3 Lebanese cucumbers in ribbons, extra sliced lime.",
        "Instructions": "Sauce: Combine all dipping sauce ingredients together.\nTuna: Combine lime juice, sweet chilli, and soya sauce. Marinate tuna in fridge for 30 minutes. Remove tuna, heat pan with olive oil, and cook tuna for 1 minute on each side. Slice thinly, arrange with cucumber ribbons, and drizzle with dipping sauce.",
        "Author": ""
    },
    {
        "ID": 66,
        "Title": "Maureen\u2019s Sponge",
        "Category": "Desserts",
        "Ingredients": "4 eggs\n\u00be cup caster sugar\n3/4 cup cornflour\n1 tablespoon custard powder\n\u00bd teaspoon soda\n1 teaspoon cream of tartar\n\u00bd teaspoon vanilla essence\nPinch of salt",
        "Instructions": "Separate eggs. Beat whites with salt until stiff. Add sugar a little at a time while beating. Add egg yolks and beat in.\nSift dry ingredients 3 times and fold in, adding vanilla.\nPour into 2 large sandwich tins and bake for 25 minutes at 325\u00b0 to 350\u00b0F.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 67,
        "Title": "Maureen\u2019s pavlova",
        "Category": "Desserts",
        "Ingredients": "4 whites of eggs\n8 oz caster sugar\n1 teaspoon vinegar\n\u00bd teaspoon vanilla\n1 level dessertspoon cornflour\nCold water",
        "Instructions": "Preheat electric oven to 400\u00baF.\nBeat egg whites for 5 to 6 minutes. Gradually add sugar, vinegar, and vanilla. Beat until stiff. Fold in sifted cornflour lightly.\nWet a plate with cold water and put mixture on it.\nTurn oven down to 250\u00baF, place pavlova in, and bake undisturbed for 1\u00bd hours.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 68,
        "Title": "Maureen\u2019s Simplicity Chocolate Cake",
        "Category": "Desserts",
        "Ingredients": "1 large cup of S-R flour\nPinch salt\n2 level table spoon cocoa\n\u00bd cup milk\n1 cup castor sugar\n\u00bd teaspoon vanilla\n3 tablespoon butter\n2 eggs",
        "Instructions": "Melt butter. Place all ingredients in a bowl and pour melted butter over. Mix well. Bake in a moderate oven for 30 minutes.",
        "Author": "Maureen Ryan"
    },
    {
        "ID": 69,
        "Title": "Mike\u2019s Slice",
        "Category": "Desserts",
        "Ingredients": "Makes 24\nBase:\n4 oz butter, \u00bd cup sugar, 1 teaspoon golden syrup, 1 cup S-R flour, \u00be cup coconut.\n\nTopping:\n1 egg white, 2oz glace cherries, 2oz unsalted peanuts, \u00bd packet choco bits.",
        "Instructions": "Base: Cream butter and sugar. Add golden syrup, then flour. Fold in coconut. Spread in a greased 11 X 7 inch tray. Mark 3 strips.\nTopping: Brush base lightly with egg white. Arrange cherries, nuts, and chocolate bits on top.\nBake at 350\u00b0F for 20 minutes. Cut into finger lengths when cold.",
        "Author": "Michael Shaw"
    },
    {
        "ID": 70,
        "Title": "Mini Quiches",
        "Category": "Lunch",
        "Ingredients": "Makes 24\n2 sheets ready rolled puff pastry\n1 onion, finely chopped\n1-2 rashes bacon, chopped\n1/2 cup grated cheese\n2 eggs\n1/2 cup cream\nSeasoning to taste",
        "Instructions": "1. Cut 24 pastry rounds using a 6.5cm cutter; line patty tins.\n2. Divide onion, bacon, and cheese into the cases.\n3. Combine eggs, cream, and seasoning; beat with a fork.\n4. Pour carefully into cases.\n5. Bake in a hot oven for 15-20 minutes until golden.",
        "Author": ""
    },
    {
        "ID": 71,
        "Title": "Moussaka-Eggplant moussaka with Meat",
        "Category": "Dinner",
        "Ingredients": "Serves 6-8\n1 kg eggplant, oil\n\nMeat Sauce:\n1 onion, 2 cloves garlic, 2 tbsp oil, 1 kg ground beef, 1 cup peeled tomatoes, 2 tbsp tomato paste, \u00bd cup white wine, 2 tbsp parsley, 1 tsp sugar, \u00bc tsp cinnamon, salt and pepper.\n\nCream Sauce:\n\u00bc cup butter, 1/3 cup flour, 2 cups milk, 1/8 tsp nutmeg, \u00bc cup parmesan, 1 egg.",
        "Instructions": "D\u00e9gorge and fry eggplant slices. Fry onion and garlic, add meat to brown, then add remaining meat sauce ingredients; simmer 30 minutes.\nCream Sauce: Melt butter, stir in flour for 2 mins, add milk, bring to boil stirring. Remove from heat, add nutmeg, 1 tbsp cheese, salt, pepper. Stir in beaten egg.\nLayer eggplant and meat sauce in a dish. Pour cream sauce on top, sprinkle with remaining cheese. Bake 1 hour in a moderate oven.",
        "Author": ""
    },
    {
        "ID": 72,
        "Title": "Okonomiyaki (Hiroshima)",
        "Category": "Dinner",
        "Ingredients": "Batter (unspecified quantity)\nShredded Cabbage (~150g)\nTempura Crisps\nProtein (squid tempura/chicken)\nSpring onion, Beansprouts\nFish powder, Pork belly (3 strips)\nNoodles (1 bag), Dashi (2 rounds)\nEgg (1), Okonomiyaki sauce, Mayo, Seaweed bits",
        "Instructions": "At edge of grill: Spread 80% ladle of batter into a thin hand-sized circle. Move to centre.\nLayer cabbage, tempura crisps, protein, spring onion, beansprouts, fish powder, and pork belly strips. Drizzle remaining batter. Flip over.\nPrep noodles: Drop bag on grill, add 2 rounds of dashi, loosen, and shape into a circle. Place okonomiyaki on noodles.\nCrack egg, spread circle, place okonomiyaki on top while wet. Flip entire assembly, dress with sauce, mayo, seaweed, and eat.",
        "Author": "James Shaw"
    },
    {
        "ID": 73,
        "Title": "Paella",
        "Category": "Dinner",
        "Ingredients": "250 g chicken\n\u00bc cup olive oil\n1 rasher bacon\n1 onion\n2 tomatoes\n1 green pepper\n3 cloves garlic\n1 cup rice\n1 tsp salt\n2-3 cups chicken stock\n1 cup peas\n125g French beans\n\u00bd diced crayfish\n1 cup prawns\n\u00bd cup mussels\n\u215b tsp saffron\n6 olives",
        "Instructions": "Heat oil, fry chicken until brown, remove. Saut\u00e9 bacon, onion, tomatoes, pepper, and garlic for 2 mins. Add rice and salt.\nAdd \u00be of the stock, boil until absorbed. Add remaining stock, simmer 15 mins until rice is cooked. Add cooked peas, beans, prawns, crayfish, mussels, and saffron to color.\nMix gently and serve within 10 minutes.",
        "Author": ""
    },
    {
        "ID": 74,
        "Title": "Pancakes-Drop Scones",
        "Category": "Breakfast",
        "Ingredients": "Makes 24\n1\u00bd cups S-R flour\n3 tablespoons sugar\n1 egg, beaten\n\u00be cup milk\n1 tablespoon butter",
        "Instructions": "Mix flour and sugar, make a well. Add milk to egg and pour into well; beat gradually. Heat pan, grease with butter, drop spoonfuls of mixture. Turn when bubbles appear. Cover with a clean towel when cooked to keep soft.",
        "Author": ""
    },
    {
        "ID": 75,
        "Title": "Pasta with Fresh Basil and Chilli Pesto",
        "Category": "Dinner",
        "Ingredients": "Serves 4\n275g spaghetti\n1 cup fresh basil leaves\n1 small red chilli\n2 cloves garlic\n\u00bc cup pine nuts, toasted\n1/3 cup grated parmesan cheese\n100ml olive oil",
        "Instructions": "Cook spaghetti in boiling salted water. Process basil, chilli, and garlic in a food processor until fine. Add pine nuts and parmesan, process. Drizzle olive oil with the motor running.\nToss hot spaghetti with 3 tablespoons of pesto. Store remaining pesto in a jar.",
        "Author": ""
    },
    {
        "ID": 76,
        "Title": "Peach, Tomato, Buffalo Mozzarella Salad",
        "Category": "Vegetarian",
        "Ingredients": "2 ripe peaches\n2 ripe tomatoes\n4 balls buffalo mozzarella\nzest & 1 tsp juice of 1 lemon\nSea salt & black pepper\n3 tbsp basil oil\nExtra prawns (optional)",
        "Instructions": "Slice tomatoes into rough 1-inch pieces. Tear mozzarella and peaches to matching size pieces. Place all in a bowl.\nSqueeze lemon juice, add zest, season with salt and pepper, and drizzle with basil oil. Mix gently by hand. Arrange on plates, garnish with basil, and serve immediately.",
        "Author": ""
    },
    {
        "ID": 77,
        "Title": "Playdough",
        "Category": "Playdough",
        "Ingredients": "Uncooked:\n2 cups flour, 1 cup salt, water, 1 tbsp oil, food colouring, oil of cloves.\n\nCooked:\n1 cup flour, \u00bc cup salt, 1 cup water, 1 tbsp oil, 2 tsp cream of tartar, food colouring.",
        "Instructions": "Uncooked: Mix flour, salt, colored water into dough. Knead in oil and cloves. Store in fridge.\nCooked: Stir all cooked version ingredients together and cook over low heat for 3-5 minutes until formed. Store in airtight container.",
        "Author": ""
    },
    {
        "ID": 78,
        "Title": "Pork- Hot Spicy Pork",
        "Category": "Dinner",
        "Ingredients": "Serves 6\n1kg pork fillet, sliced into thin strips\n2 tbsp cornflour\n\u00bd tsp five spice powder\n2 tbsp polyunsaturated oil\n1 tsp fresh ginger, grated\n2 tbsp honey\n2 tsp cornflour mixed with 4 tbsp water\n2 tsp hot chilli sauce\n2 tsp oyster sauce\n4 tbsp lemon juice",
        "Instructions": "Toss pork strips in cornflour and five spice. Heat oil in wok and stir-fry pork over high heat for 3-4 minutes.\nAdd ginger and honey, cook 1 minute. Pour in blended cornflour mixture, chilli sauce, oyster sauce, and lemon juice. Stir until thick and serve immediately.",
        "Author": ""
    },
    {
        "ID": 79,
        "Title": "Ratatouille",
        "Category": "Dinner",
        "Ingredients": "Serves 6\n4 tablespoons olive oil\n2 large onions, sliced\n1-2 aubergines, sliced\n2 large peppers, sliced\n4 medium tomatoes, peeled and sliced\n2 small zucchinis, sliced\n4 cloves garlic, chopped\n1 tsp salt, 6 shakes pepper\n2 tbsp parsley",
        "Instructions": "Warm oil in a large casserole. Layer onions, aubergines, and peppers. Cook gently for 10 minutes without stirring.\nAdd tomatoes, zucchinis, garlic, salt, and pepper. Cover and simmer for 30 minutes. Stir in parsley before serving.",
        "Author": ""
    },
    {
        "ID": 80,
        "Title": "Rice with eggplant and Potato Casserole",
        "Category": "Vegetarian",
        "Ingredients": "1 cup rice, 2 cups water\n1\u00bd tsp salt, \u00bd tsp pepper, \u00bd tsp sugar\n1 tsp turmeric, 2 tsp flour, 1 tbsp\u610f coriander, 1 tbsp lemon juice\n4 tbsp butter\n1 eggplant, cubed\n350g potatoes\n1 tsp cumin",
        "Instructions": "Cook rice in water. Combine spices, flour, lemon juice, and sugar into a paste. Melt butter and cook eggplant and potatoes for 20 minutes.\nLayer half the rice in a casserole dish, add vegetables mixed with spice paste, top with remaining rice and melted butter. Bake for 25 minutes.",
        "Author": ""
    },
    {
        "ID": 81,
        "Title": "Rich Beef Casserole",
        "Category": "Dinner",
        "Ingredients": "Serves 4 to 6\n1 kg round steak\n90g butter (total)\n8 small onions\n250g carrots\n125g bacon pieces\n3 tablespoons of flour\n2 cups water\n1/2 cup dry red wine\n425g can whole tomatoes\n2 beef stock cubes\nsalt, pepper, basil, oregano",
        "Instructions": "1. Cut meat into 2.5cm cubes. Saute carrots, whole onions, and bacon pieces in butter until browned; remove.\n2. Add flour to pan until golden brown, then remove from heat.\n3. Add water, wine, tomatoes, stock cubes, and herbs off heat; stir.\n4. Return pan to heat to boil and thicken. Return meat and vegetables, cover, and simmer for 1.5 hours.",
        "Author": ""
    },
    {
        "ID": 82,
        "Title": "Risotto-Roast Pumpkin and Garlic Risotto",
        "Category": "Dinner",
        "Ingredients": "1 butternut pumpkin\n\u00bc cup olive oil\n4 cloves garlic\n\nRisotto:\n1.25L vegetable stock\n\u00bd cup white wine\n\u00bc cup olive oil\n1 onion\n2 cloves garlic\n1 \u00bd cups arborio rice\n\u00bd cup parmesan\n1 tbsp butter\n\u00bc cup fresh basil\nPomegranate seeds (optional)",
        "Instructions": "Preheat oven to 180\u00b0C. Clean pumpkin, wedge, brush with oil/garlic, and roast for 25-30 minutes.\nRisotto: Simmer stock and wine. In another pan, cook onion and garlic in oil for 2 mins. Add rice, cook 1 min. Add stock 1 cup at a time, stirring until absorbed, until al dente. Stir in parmesan, butter, basil, and seasonings. Top with pumpkin.",
        "Author": ""
    },
    {
        "ID": 83,
        "Title": "Rosie\u2019s Bread",
        "Category": "Breakfast",
        "Ingredients": "Makes 2 loaves\n9 cups flour\n2 tablespoons Fermipan Yeast\n2 tablespoon Lucimax yeast\n4 teaspoon salt\n2 tablespoon oil\n1\u00bd pints tepid water\n\u00bd cup extra water",
        "Instructions": "Grease bread tins. Mix all ingredients together and knead for 15 minutes.\nPlace in oven at 100\u00b0F for 30 minutes to double in size.\nMove higher in oven and bake at 350\u00b0F for \u00bd to \u00be hour.",
        "Author": "Rose Vary"
    },
    {
        "ID": 84,
        "Title": "SOUP- Pea & Ham soup",
        "Category": "Lunch",
        "Ingredients": "Serves 10\n500g yellow split peas\n2 large onions\n2 large carrots\n\u00bc bunch celery\n1 smoked ham hock\n4 litres water\nSalt to taste",
        "Instructions": "Rinse and drain peas. Place in a large pot. Grate onions and carrots, chop celery, and add to pot with ham hock and water (no salt yet).\nCover and simmer for 2 hours, stirring occasionally. Remove hock, chop meat, and return meat to pot. Season with salt to taste.",
        "Author": ""
    },
    {
        "ID": 85,
        "Title": "Salad- Pebre from Chile",
        "Category": "Vegetarian",
        "Ingredients": "1 medium onion or 4 green onions\n\u00bd cup coriander\n2 medium tomatoes\nSalt and pepper\n1 tablespoon oil\n3 tablespoons lemon juice or white vinegar\n1 tablespoon hot chilli sauce",
        "Instructions": "Chop onion, coriander, and tomatoes finely. Mix thoroughly with the oil, lemon juice/vinegar, and chilli sauce. Serve.",
        "Author": ""
    },
    {
        "ID": 86,
        "Title": "Savory Pancake Stack",
        "Category": "Breakfast",
        "Ingredients": "Serves: 6\nPancakes: 3 eggs, \u00be cup flour, \u00bc tsp salt, 1 cup milk, 1 tbsp butter.\nFilling: 2 tbsp butter, 2 tbsp oil, parsley, oregano, 4 onions, 6 zucchinis, salt, pepper.\nSauce: 2 tbsp butter, 2 tbsp flour, 1\u00bd cups milk, 2 eggs, \u00bc cup parmesan.",
        "Instructions": "Pancakes: Whisk batter, rest 1 hour, cook ~10 large pancakes.\nFilling: Fry sliced onions in butter/oil. Shred zucchini, fry on high until dry. Combine with onion and herbs.\nSauce: Cook butter/flour, add milk to boil. Temper into beaten eggs, stir in parmesan.\nAssemble: Layer pancakes, filling, and sauce in an ovenproof dish. Top with final sauce/parmesan and bake for 30 minutes.",
        "Author": ""
    },
    {
        "ID": 87,
        "Title": "Sour cream scones",
        "Category": "Desserts",
        "Ingredients": "2 cups SR flour\n1 egg\n1 tablespoon sugar\n\u00bd cup sour cream\n\u2153 cup milk",
        "Instructions": "Beat egg and sugar until fluffy. Add sour cream and milk; mix thoroughly. Add sifted flour to form a soft dough.\nKnead lightly on floured surface, pat to 2cm thickness, and cut into rounds. Glaze with milk and bake in a very hot oven for 10 to 15 minutes.",
        "Author": ""
    },
    {
        "ID": 88,
        "Title": "Spanakopita",
        "Category": "Dinner",
        "Ingredients": "Serves 8\n1kg spinach\n1 onion, chopped\n1 cup spring onions\n\u00bd cup parsley\n2 tsp dill or fennel\n\u00bc tsp nutmeg\n\u00bd cup cottage cheese\n1 cup feta cheese\n\u00bc cup parmesan\n4 eggs, beaten\n10 sheets filo pastry\nMelted butter or olive oil",
        "Instructions": "Cook spinach for 7-8 minutes, drain and press dry. Fry onions and spring onions. Combine spinach, onions, herbs, nutmeg, cheeses, and eggs.\nLine a 25x30cm dish with 5 sheets of buttered filo. Add filling, top with remaining 5 sheets of buttered filo. Score top, sprinkle with water, and bake at 180\u00b0C for 45 minutes.",
        "Author": ""
    },
    {
        "ID": 89,
        "Title": "Tabbouleh",
        "Category": "Dinner",
        "Ingredients": "Serves 8\n250g burghul (cracked wheat)\n1\u00bd cups chopped parsley\n\u00bd cup chopped mint\n1 dozen shallots\n\u00bd cup lemon juice\n\u00bd cup salad oil\nSalt and pepper\nTomato wedges",
        "Instructions": "Soak burghul for one hour, drain and squeeze completely dry.\nPlace in a bowl with parsley, mint, and shallots. Toss with lemon juice and oil. Season with salt and pepper. Garnish with tomato wedges.",
        "Author": ""
    },
    {
        "ID": 90,
        "Title": "Roasted Pumpkin and Spinach Tart",
        "Category": "Vegetarian",
        "Ingredients": "1 Japanese pumpkin, cubed\n2 onions, sliced\n2 tablespoons parsley\n2 tablespoons olive oil\n1 bunch spinach, shredded\n1 clove garlic\n200g feta, cubed\n4 eggs\n150ml cream\nPinch nutmeg\nSalt and pepper\nPrepared tart shell",
        "Instructions": "Roast pumpkin in olive oil at 200\u00b0C for 30 minutes. Saut\u00e9 onions, garlic, and spinach for a minute.\nSpoon spinach mixture, pumpkin, and feta into the tart shell keeping them somewhat separate for distinct colors.\nBeat eggs with cream, nutmeg, and seasonings. Pour into tart shell and bake at 180\u00b0C for 20 to 30 minutes until set.",
        "Author": ""
    },
    {
        "ID": 91,
        "Title": "Apple Patty Cakes",
        "Category": "Desserts",
        "Ingredients": "2 cups S-R flour\n1 cup chopped apple\n1 egg, beaten\n1 cup milk\n\u00bd cup sugar\n\u00be teaspoon baking powder\n2 oz melted butter\n\nTopping:\n2 tbsp brown sugar, \u00bc tsp cinnamon and nutmeg",
        "Instructions": "Mix dry ingredients and stir in apple. Combine egg, butter, and milk; mix into flour until just moist (do not over-mix). Spoons into patty tins.\nSprinkle topping ingredients over cakes. Cook in a moderate oven for 15 to 20 minutes.",
        "Author": "Thelma"
    },
    {
        "ID": 92,
        "Title": "Truffles- Handmade Chocolate Truffles",
        "Category": "Desserts",
        "Ingredients": "250 g cooking chocolate\n4 tablespoons liqueur [Baileys or Grand Marnier]\n100ml cream\nCocoa powder for dusting",
        "Instructions": "Bring cream, butter, and liqueur to a boil in a small saucepan. Remove from heat, add chocolate, and stir until smooth. Chill until firm. Roll into balls, dust with cocoa powder, and store in an airtight container.",
        "Author": ""
    },
    {
        "ID": 93,
        "Title": "Veal and Eggplant casserole",
        "Category": "Dinner",
        "Ingredients": "6 veal steaks\nFlour, salt, pepper\n120g butter\n\u00bc cup oil\n\u00bd cup dry white wine\n2 medium eggplants\n250g mozzarella cheese\n\u00bc cup parmesan\n\nTomato Sauce:\n470g can tomatoes, 1 onion, 1 garlic clove, 30g butter, oregano, basil, 2 tbsp tomato paste, \u00bd cup water, 2 chicken stock cubes, \u00bd tsp sugar",
        "Instructions": "Coat veal in seasoned flour. Brown in butter and oil; place in ovenproof dish. Deglaze pan with wine, salt, and pepper; reduce by half, add extra butter, and pour over veal.\nSauce: Saut\u00e9 onion and garlic in butter. Add tomatoes, tomato paste, water, stock cubes, sugar, and herbs; simmer 20 minutes. Pour over veal.\nSlice, flour, and fry eggplant. Overlap on sauce, cover with mozzarella and parmesan. Bake 30 minutes.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 94,
        "Title": "Eggplant Casserole",
        "Category": "Vegetarian",
        "Ingredients": "1 eggplant\n1 onion\n1 carrot\n1 capsicum\n1 tomato\n1 tablespoon parsley\n1 tablespoon butter\n1 cup cooked rice\nSalt, breadcrumbs, grated cheese, paprika",
        "Instructions": "Peel eggplant and steam for 15 minutes. Saut\u00e9 onion, carrot, parsley, and capsicum in butter. Combine with eggplant and rice; season to taste.\nTransfer mixture into a casserole dish, top with cheese and breadcrumbs, and sprinkle with paprika. Bake for 30 minutes.",
        "Author": ""
    },
    {
        "ID": 95,
        "Title": "Savory Bean Pot",
        "Category": "Vegetarian",
        "Ingredients": "Serves 4\n2 tbsp vegetable oil\n2 vegetable bouillon cubes\n2 onions, chopped\n2 apples, grated\n2 carrots, grated\n3 tbsp tomato paste\n1\u00bc cups water\n2 tbsp white wine vinegar\nSour cream\n1 tbsp dried mustard\n1 tsp oregano\n1 tsp cumin\n2 tsp brown sugar\n3 cups red kidney beans, cooked",
        "Instructions": "Heat oil and saut\u00e9 bouillon cubes, onions, apples, and carrots for 5 minutes. Mix tomato paste with water, then add to pan along with vinegar, mustard, oregano, cumin, and sugar. Simmer 2 minutes.\nAdd kidney beans, transfer to a casserole dish, and bake at 350\u00b0F for 35-40 minutes (add water halfway if needed). Top with sour cream swirls.",
        "Author": ""
    },
    {
        "ID": 96,
        "Title": "Sweet Vegies",
        "Category": "Vegetarian",
        "Ingredients": "\u00bc cup oil\n1 cup chopped onion\n2 cloves garlic\n1 dessertspoon honey\n1 teaspoon pepper\n1 cup chopped tomatoes\n1\u00bd cups chopped pumpkin\n\u00bd cup celery\n\u00bd cup currants\nLemon juice\nPinch of nutmeg",
        "Instructions": "Heat oil and fry onions and garlic. Add honey, pepper, and nutmeg. Add pumpkin and celery, cooking until the pumpkin is soft. Stir in currants and lemon juice to taste.",
        "Author": ""
    },
    {
        "ID": 97,
        "Title": "Curried Chick Peas",
        "Category": "Vegetarian",
        "Ingredients": "2 cups chick peas (soaked overnight)\n3 tablespoons butter\n1 teaspoon cumin seeds\n1 medium onion, chopped\n1 inch ginger, chopped\n1 teaspoon turmeric\n\u00bd teaspoon ground cumin\n1 teaspoon coriander\n1 teaspoon garam masala\n\u00bc teaspoon chilli powder\nSalt",
        "Instructions": "Boil chick peas in 6 cups of salted water; simmer 1 hour. Melt butter, fry cumin seeds for 1 minute, then add onion and ginger.\nMix turmeric, ground cumin, coriander, garam masala, and chilli powder with 2 tbsp water to form a paste. Fry paste with onions for 3 minutes.\nAdd chick peas and their cooking liquid, bring to a boil, then cover and simmer for 30 minutes.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 98,
        "Title": "Vegetable Curry",
        "Category": "Vegetarian",
        "Ingredients": "4-6 Servings\n3 tablespoon oil\n2 medium onions\n1 \u00bd inch ginger\n2 garlic cloves\n2 green chillies, chopped\n1 teaspoon turmeric\n1 tablespoon coriander\n\u2154 cup beans\n\u2154 cup peas\n1 tablespoon paprika\n\u00bd teaspoon cayenne\n\u00bc teaspoon fenugreek\n\u00bc teaspoon black pepper\n2 tablespoons lemon juice\n\u00bd kg potatoes, cubed\n1 turnip, cubed\n3 carrots, sliced\n425g canned tomatoes",
        "Instructions": "Heat oil and add onions, ginger, garlic, paprika, cayenne, fenugreek, and pepper. Mix lemon juice and a little water to make a smooth paste; add to onions and fry for 5 minutes.\nAdd potatoes, turnip, and carrots; fry for 5 minutes stirring constantly. Stir in tomatoes, beans, peas, and turmeric. Bring to boil, reduce heat, cover, and simmer 25 minutes.",
        "Author": "Sharyn Vary"
    },
    {
        "ID": 99,
        "Title": "A-B-C Soup",
        "Category": "Soups",
        "Ingredients": "1.5kg chicken with bone (chicken drum-sticks)\n1 bulb of garlic\n300 to 400g potato\n300 to 400g tomato\n300 to 400g brown onion\n300 to 400g carrot\nsalt or soya sauce to taste\n",
        "Instructions": "Bring small pot of water to boil.\nBlanch the chicken (wash gunk off).\nPut blanched chicken into big pot.\nFill big pot to half way to let it come to boil.\nPeal and cut vegitables into large chunks.\nThrow everything into big pot and top up water.\n*if using thermal pot, simmer for >5minutes, with final minute with the lid on.\n*leave in thermal pot between 2hours until overnight",
        "Author": "Cynthia Ang"
    }
];