// cuisines.js
const cuisineTypes = [
    {
        'id': 'italian',
        'name': 'Italian',
        'description': 'Pasta, pizza, risotto, and Mediterranean flavors',
        'examples': ['Pizza', 'Pasta', 'Risotto', 'Osso Buco'],
        'images': [
            '/assets/images/cuisines/italian/italian-1.jpg',
            '/assets/images/cuisines/italian/italian-2.jpg',
            '/assets/images/cuisines/italian/italian-3.jpg',
            '/assets/images/cuisines/italian/italian-4.jpg',
            '/assets/images/cuisines/italian/italian-5.jpg',
            '/assets/images/cuisines/italian/italian-6.jpg',
            '/assets/images/cuisines/italian/italian-7.jpg',
            '/assets/images/cuisines/italian/italian-8.jpg',
            '/assets/images/cuisines/italian/italian-9.jpg',
            '/assets/images/cuisines/italian/italian-10.jpg'
        ]
    },
    {
        'id': 'mexican',
        'name': 'Mexican',
        'description': 'Tacos, enchiladas, and vibrant spicy flavors',
        'examples': ['Tacos', 'Enchiladas', 'Guacamole', 'Mole'],
        'images': [
            '/assets/images/cuisines/mexican/mexican-1.jpg',
            '/assets/images/cuisines/mexican/mexican-2.jpg',
            '/assets/images/cuisines/mexican/mexican-3.jpg',
            '/assets/images/cuisines/mexican/mexican-4.jpg',
            '/assets/images/cuisines/mexican/mexican-5.jpg',
            '/assets/images/cuisines/mexican/mexican-6.jpg',
            '/assets/images/cuisines/mexican/mexican-7.jpg',
            '/assets/images/cuisines/mexican/mexican-8.jpg',
            '/assets/images/cuisines/mexican/mexican-10.jpg'
        ]
    },
    {
        'id': 'chinese',
        'name': 'Chinese',
        'description': 'Diverse regional cuisines with noodles, rice, and stir-fries',
        'examples': ['Dim Sum', 'Kung Pao Chicken', 'Mapo Tofu'],
        'images': [
            '/assets/images/cuisines/chinese/chinese-1.jpg',
            '/assets/images/cuisines/chinese/chinese-4.jpg',
            '/assets/images/cuisines/chinese/chinese-5.jpg',
            '/assets/images/cuisines/chinese/chinese-9.jpg',
            '/assets/images/cuisines/chinese/chinese-10.jpg'
        ]
    },
    {
        'id': 'japanese',
        'name': 'Japanese',
        'description': 'Sushi, ramen, and carefully crafted dishes',
        'examples': ['Sushi', 'Ramen', 'Tempura', 'Udon'],
        'images': [
            '/assets/images/cuisines/japanese/japanese-1.jpg',
            '/assets/images/cuisines/japanese/japanese-2.jpg',
            '/assets/images/cuisines/japanese/japanese-3.jpg',
            '/assets/images/cuisines/japanese/japanese-4.jpg',
            '/assets/images/cuisines/japanese/japanese-5.jpg',
            '/assets/images/cuisines/japanese/japanese-6.jpg',
            '/assets/images/cuisines/japanese/japanese-7.jpg',
            '/assets/images/cuisines/japanese/japanese-10.jpg'
        ]
    },
    {
        'id': 'indian',
        'name': 'Indian',
        'description': 'Rich curries, tandoori dishes, and diverse spices',
        'examples': ['Curry', 'Biryani', 'Tandoori', 'Naan'],
        'images': [
            '/assets/images/cuisines/indian/indian-1.jpg',
            '/assets/images/cuisines/indian/indian-2.jpg',
            '/assets/images/cuisines/indian/indian-3.jpg',
            '/assets/images/cuisines/indian/indian-4.jpg',
            '/assets/images/cuisines/indian/indian-5.jpg',
            '/assets/images/cuisines/indian/indian-6.jpg',
            '/assets/images/cuisines/indian/indian-7.jpg',
            '/assets/images/cuisines/indian/indian-8.jpg',
            '/assets/images/cuisines/indian/indian-10.jpg'
        ]
    },
    {
        'id': 'thai',
        'name': 'Thai',
        'description': 'Balance of sweet, sour, spicy, and savory flavors',
        'examples': ['Pad Thai', 'Green Curry', 'Tom Yum'],
        'images': [
            '/assets/images/cuisines/thai/thai-1.jpg',
            '/assets/images/cuisines/thai/thai-2.jpg',
            '/assets/images/cuisines/thai/thai-3.jpg',
            '/assets/images/cuisines/thai/thai-9.jpg'
        ]
    },
    {
        'id': 'vietnamese',
        'name': 'Vietnamese',
        'description': 'Fresh herbs, rice noodles, and bright flavors',
        'examples': ['Pho', 'Banh Mi', 'Spring Rolls'],
        'images': [
            '/assets/images/cuisines/vietnamese/vietnamese-2.jpg',
            '/assets/images/cuisines/vietnamese/vietnamese-5.jpg',
            '/assets/images/cuisines/vietnamese/vietnamese-10.jpg'
        ]
    },
    {
        'id': 'korean',
        'name': 'Korean',
        'description': 'BBQ, fermented foods, and bold flavors',
        'examples': ['Bulgogi', 'Kimchi', 'Bibimbap'],
        'images': [
            '/assets/images/cuisines/korean/korean-1.jpg',
            '/assets/images/cuisines/korean/korean-3.jpg',
            '/assets/images/cuisines/korean/korean-5.jpg',
            '/assets/images/cuisines/korean/korean-7.jpg',
            '/assets/images/cuisines/korean/korean-8.jpg',
            '/assets/images/cuisines/korean/korean-9.jpg'
        ]
    },
    {
        'id': 'greek',
        'name': 'Greek',
        'description': 'Mediterranean dishes with olive oil, feta, and herbs',
        'examples': ['Gyros', 'Souvlaki', 'Moussaka'],
        'images': [
            '/assets/images/cuisines/greek/greek-1.jpg',
            '/assets/images/cuisines/greek/greek-3.jpg',
            '/assets/images/cuisines/greek/greek-7.jpg',
            '/assets/images/cuisines/greek/greek-8.jpg',
            '/assets/images/cuisines/greek/greek-9.jpg'
        ]
    },
    {
        'id': 'french',
        'name': 'French',
        'description': 'Refined cuisine with rich sauces and techniques',
        'examples': ['Coq au Vin', 'Boeuf Bourguignon', 'Croissants'],
        'images': [
            '/assets/images/cuisines/french/french-1.jpg',
            '/assets/images/cuisines/french/french-2.jpg',
            '/assets/images/cuisines/french/french-3.jpg',
            '/assets/images/cuisines/french/french-4.jpg',
            '/assets/images/cuisines/french/french-5.jpg',
            '/assets/images/cuisines/french/french-7.jpg',
            '/assets/images/cuisines/french/french-8.jpg',
            '/assets/images/cuisines/french/french-9.jpg',
            '/assets/images/cuisines/french/french-10.jpg'
        ]
    },
    {
        'id': 'spanish',
        'name': 'Spanish',
        'description': 'Tapas, paella, and Mediterranean influences',
        'examples': ['Paella', 'Tapas', 'Gazpacho'],
        'images': [
            '/assets/images/cuisines/spanish/spanish-1.jpg',
            '/assets/images/cuisines/spanish/spanish-2.jpg',
            '/assets/images/cuisines/spanish/spanish-3.jpg',
            '/assets/images/cuisines/spanish/spanish-4.jpg',
            '/assets/images/cuisines/spanish/spanish-6.jpg',
            '/assets/images/cuisines/spanish/spanish-8.jpg',
            '/assets/images/cuisines/spanish/spanish-9.jpg',
            '/assets/images/cuisines/spanish/spanish-10.jpg'
        ]
    },
    {
        'id': 'mediterranean',
        'name': 'Mediterranean',
        'description': 'Healthy dishes with olive oil, fresh vegetables, and seafood',
        'examples': ['Hummus', 'Falafel', 'Kebab'],
        'images': [
            '/assets/images/cuisines/mediterranean/mediterranean-2.jpg',
            '/assets/images/cuisines/mediterranean/mediterranean-3.jpg',
            '/assets/images/cuisines/mediterranean/mediterranean-6.jpg',
            '/assets/images/cuisines/mediterranean/mediterranean-7.jpg',
            '/assets/images/cuisines/mediterranean/mediterranean-8.jpg',
            '/assets/images/cuisines/mediterranean/mediterranean-10.jpg'
        ]
    },
    {
        'id': 'middle-eastern',
        'name': 'Middle Eastern',
        'description': 'Aromatic spices, grilled meats, and mezze',
        'examples': ['Shawarma', 'Kebab', 'Hummus'],
        'images': [
            '/assets/images/cuisines/middle-eastern/middle-eastern-1.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-3.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-4.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-5.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-6.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-7.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-8.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-9.jpg',
            '/assets/images/cuisines/middle-eastern/middle-eastern-10.jpg'
        ]
    },
    {
        'id': 'american',
        'name': 'American',
        'description': 'Burgers, steaks, and comfort food classics',
        'examples': ['Burgers', 'Hot Dogs', 'Mac and Cheese'],
        'images': [
            '/assets/images/cuisines/american/american-1.jpg',
            '/assets/images/cuisines/american/american-2.jpg',
            '/assets/images/cuisines/american/american-3.jpg',
            '/assets/images/cuisines/american/american-5.jpg',
            '/assets/images/cuisines/american/american-6.jpg',
            '/assets/images/cuisines/american/american-7.jpg',
            '/assets/images/cuisines/american/american-8.jpg',
            '/assets/images/cuisines/american/american-9.jpg',
            '/assets/images/cuisines/american/american-10.jpg'
        ]
    },
    {
        'id': 'bbq',
        'name': 'BBQ',
        'description': 'Smoked and grilled meats with various regional styles',
        'examples': ['Ribs', 'Brisket', 'Pulled Pork'],
        'images': [
            '/assets/images/cuisines/bbq/bbq-1.jpg',
            '/assets/images/cuisines/bbq/bbq-2.jpg',
            '/assets/images/cuisines/bbq/bbq-3.jpg',
            '/assets/images/cuisines/bbq/bbq-4.jpg',
            '/assets/images/cuisines/bbq/bbq-5.jpg',
            '/assets/images/cuisines/bbq/bbq-8.jpg',
            '/assets/images/cuisines/bbq/bbq-9.jpg',
            '/assets/images/cuisines/bbq/bbq-10.jpg'
        ]
    },
    {
        'id': 'southern',
        'name': 'Southern',
        'description': 'Comfort food with Southern American influences',
        'examples': ['Fried Chicken', 'Biscuits and Gravy', 'Gumbo'],
        'images': [
            '/assets/images/cuisines/southern/southern-2.jpg',
            '/assets/images/cuisines/southern/southern-3.jpg',
            '/assets/images/cuisines/southern/southern-4.jpg',
            '/assets/images/cuisines/southern/southern-10.jpg'
        ]
    },
    {
        'id': 'caribbean',
        'name': 'Caribbean',
        'description': 'Tropical flavors with spices and seafood',
        'examples': ['Jerk Chicken', 'Plantains', 'Rice and Peas'],
        'images': [
            '/assets/images/cuisines/caribbean/caribbean-3.jpg',
            '/assets/images/cuisines/caribbean/caribbean-4.jpg',
            '/assets/images/cuisines/caribbean/caribbean-7.jpg',
            '/assets/images/cuisines/caribbean/caribbean-8.jpg',
            '/assets/images/cuisines/caribbean/caribbean-10.jpg'
        ]
    },
    {
        'id': 'brazilian',
        'name': 'Brazilian',
        'description': 'Grilled meats, feijoada, and tropical ingredients',
        'examples': ['Feijoada', 'Churrasco', 'Pão de Queijo'],
        'images': [
            '/assets/images/cuisines/brazilian/brazilian-1.jpg',
            '/assets/images/cuisines/brazilian/brazilian-4.jpg',
            '/assets/images/cuisines/brazilian/brazilian-7.jpg',
            '/assets/images/cuisines/brazilian/brazilian-9.jpg'
        ]
    },
    {
        'id': 'fusion',
        'name': 'Fusion',
        'description': 'Creative combinations of different culinary traditions',
        'examples': ['Korean-Mexican', 'Asian-European', 'Modern American'],
        'images': [
            '/assets/images/cuisines/fusion/fusion-1.jpg',
            '/assets/images/cuisines/fusion/fusion-3.jpg',
            '/assets/images/cuisines/fusion/fusion-4.jpg',
            '/assets/images/cuisines/fusion/fusion-5.jpg',
            '/assets/images/cuisines/fusion/fusion-7.jpg',
            '/assets/images/cuisines/fusion/fusion-8.jpg'
        ]
    },
    {
        'id': 'vegetarian',
        'name': 'Vegetarian',
        'description': 'Meat-free dishes focusing on vegetables and grains',
        'examples': ['Buddha Bowls', 'Veggie Burgers', 'Grain Bowls'],
        'images': [
            '/assets/images/cuisines/vegetarian/vegetarian-1.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-2.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-3.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-5.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-6.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-7.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-8.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-9.jpg',
            '/assets/images/cuisines/vegetarian/vegetarian-10.jpg'
        ]
    },
    {
        'id': 'vegan',
        'name': 'Vegan',
        'description': 'Plant-based dishes without animal products',
        'examples': ['Plant-Based Burgers', 'Tofu Dishes', 'Grain Bowls'],
        'images': [
            '/assets/images/cuisines/vegan/vegan-1.jpg',
            '/assets/images/cuisines/vegan/vegan-2.jpg',
            '/assets/images/cuisines/vegan/vegan-3.jpg',
            '/assets/images/cuisines/vegan/vegan-5.jpg',
            '/assets/images/cuisines/vegan/vegan-6.jpg',
            '/assets/images/cuisines/vegan/vegan-7.jpg',
            '/assets/images/cuisines/vegan/vegan-8.jpg',
            '/assets/images/cuisines/vegan/vegan-9.jpg',
            '/assets/images/cuisines/vegan/vegan-10.jpg'
        ]
    },
    {
        'id': 'seafood',
        'name': 'Seafood',
        'description': 'Fresh fish and seafood preparations',
        'examples': ['Grilled Fish', 'Seafood Pasta', 'Lobster'],
        'images': [
            '/assets/images/cuisines/seafood/seafood-2.jpg',
            '/assets/images/cuisines/seafood/seafood-3.jpg',
            '/assets/images/cuisines/seafood/seafood-4.jpg',
            '/assets/images/cuisines/seafood/seafood-5.jpg',
            '/assets/images/cuisines/seafood/seafood-6.jpg',
            '/assets/images/cuisines/seafood/seafood-8.jpg',
            '/assets/images/cuisines/seafood/seafood-10.jpg'
        ]
    },
    {
        'id': 'steakhouse',
        'name': 'Steakhouse',
        'description': 'Premium cuts of meat and classic sides',
        'examples': ['Ribeye', 'Filet Mignon', 'Prime Rib'],
        'images': [
            '/assets/images/cuisines/steakhouse/steakhouse-1.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-2.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-3.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-4.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-5.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-8.jpg',
            '/assets/images/cuisines/steakhouse/steakhouse-9.jpg'
        ]
    },
    {
        'id': 'breakfast',
        'name': 'Breakfast',
        'description': 'Morning favorites and brunch classics',
        'examples': ['Pancakes', 'Eggs Benedict', 'French Toast'],
        'images': [
            '/assets/images/cuisines/breakfast/breakfast-1.jpg',
            '/assets/images/cuisines/breakfast/breakfast-2.jpg',
            '/assets/images/cuisines/breakfast/breakfast-6.jpg',
            '/assets/images/cuisines/breakfast/breakfast-8.jpg'
        ]
    },
    {
        'id': 'fast-food',
        'name': 'Fast Food',
        'description': 'Quick service burgers, fries, and sandwiches',
        'examples': ['Burgers', 'Fries', 'Chicken Sandwiches'],
        'images': [
            '/assets/images/cuisines/fast-food/fast-food-1.jpg',
            '/assets/images/cuisines/fast-food/fast-food-2.jpg',
            '/assets/images/cuisines/fast-food/fast-food-3.jpg',
            '/assets/images/cuisines/fast-food/fast-food-4.jpg',
            '/assets/images/cuisines/fast-food/fast-food-5.jpg',
            '/assets/images/cuisines/fast-food/fast-food-6.jpg',
            '/assets/images/cuisines/fast-food/fast-food-7.jpg',
            '/assets/images/cuisines/fast-food/fast-food-8.jpg',
            '/assets/images/cuisines/fast-food/fast-food-9.jpg',
            '/assets/images/cuisines/fast-food/fast-food-10.jpg'
        ]
    }
];

// Helper functions
const CuisineManager = {
    getRandomImageForCuisine(cuisine) {
        const images = cuisine.images;
        return images[Math.floor(Math.random() * images.length)];
    },

    getRandomCuisine() {
        const cuisine = cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)];
        return {
            ...cuisine,
            image: this.getRandomImageForCuisine(cuisine)
        };
    },

    getCuisineById(id) {
        const cuisine = cuisineTypes.find(c => c.id === id);
        if (cuisine) {
            return {
                ...cuisine,
                image: this.getRandomImageForCuisine(cuisine)
            };
        }
        return null;
    }
};

// Make available globally
window.cuisineTypes = cuisineTypes;
window.CuisineManager = CuisineManager;