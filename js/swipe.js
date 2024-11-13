// swipe.js
class SwipeInterface {
    constructor() {
        this.currentCuisine = null;
        this.nextCuisine = null;
        this.remainingCuisines = [...window.cuisineTypes];
        this.userPreferences = {
            liked: [],
            disliked: []
        };
        this.isAnimating = false;
        this.setupEventListeners();
    }

    initialize() {
        console.log("Initializing SwipeInterface");
        this.shuffleCuisines();
        this.createCardElements();
        this.showNextPair();
    }

    createCardElements() {
        const container = document.querySelector('.swipe-container');
        
        // Create two cards
        const currentCard = this.createCard('current');
        const nextCard = this.createCard('next');
        
        container.appendChild(nextCard);
        container.appendChild(currentCard);
    }

    createCard(className) {
        const card = document.createElement('div');
        card.className = `food-card ${className}`;
        card.innerHTML = `
            <div class="cuisine-image-container">
                <img class="cuisine-image" alt="Food">
            </div>
            <div class="cuisine-info">
                <h3 class="cuisine-type"></h3>
                <p class="cuisine-description"></p>
                <p class="cuisine-examples"></p>
            </div>
        `;
        return card;
    }

    setupEventListeners() {
        document.getElementById('swipe-left').addEventListener('click', () => {
            if (!this.isAnimating) this.handleSwipe('dislike');
        });
        document.getElementById('swipe-right').addEventListener('click', () => {
            if (!this.isAnimating) this.handleSwipe('like');
        });
        
        document.addEventListener('keydown', (e) => {
            if (this.isAnimating) return;
            if (e.key === 'ArrowLeft') this.handleSwipe('dislike');
            if (e.key === 'ArrowRight') this.handleSwipe('like');
        });
    }

    shuffleCuisines() {
        for (let i = this.remainingCuisines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.remainingCuisines[i], this.remainingCuisines[j]] = 
            [this.remainingCuisines[j], this.remainingCuisines[i]];
        }
    }

    getCorrectPath(imagePath) {
        if (imagePath.startsWith('/')) {
            imagePath = imagePath.substring(1);
        }
        return imagePath;
    }

    preloadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
            img.src = url;
        });
    }

    async updateCardContent(card, cuisine) {
        const imageUrl = this.getCorrectPath(cuisine.images[Math.floor(Math.random() * cuisine.images.length)]);
        
        try {
            await this.preloadImage(imageUrl);
            const imageElement = card.querySelector('.cuisine-image');
            const typeElement = card.querySelector('.cuisine-type');
            const descElement = card.querySelector('.cuisine-description');
            const examplesElement = card.querySelector('.cuisine-examples');

            imageElement.src = imageUrl;
            typeElement.textContent = cuisine.name;
            descElement.textContent = cuisine.description;
            examplesElement.textContent = `Popular dishes: ${cuisine.examples.join(', ')}`;
        } catch (error) {
            console.error('Failed to load image:', error);
            // Use placeholder
            card.querySelector('.cuisine-image').src = 
                `https://via.placeholder.com/500x350?text=${encodeURIComponent(cuisine.name + ' Food')}`;
        }
    }

    async showNextPair() {
        if (this.remainingCuisines.length < 2) {
            console.log('No more cuisines');
            return;
        }

        this.currentCuisine = this.remainingCuisines.pop();
        this.nextCuisine = this.remainingCuisines[this.remainingCuisines.length - 1];

        const currentCard = document.querySelector('.food-card.current');
        const nextCard = document.querySelector('.food-card.next');

        await Promise.all([
            this.updateCardContent(currentCard, this.currentCuisine),
            this.updateCardContent(nextCard, this.nextCuisine)
        ]);
    }

    async handleSwipe(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        if (direction === 'like') {
            this.userPreferences.liked.push(this.currentCuisine.id);
        } else {
            this.userPreferences.disliked.push(this.currentCuisine.id);
        }

        const currentCard = document.querySelector('.food-card.current');
        const nextCard = document.querySelector('.food-card.next');
        
        // Add swipe animation class
        currentCard.classList.add(`swiping-${direction === 'like' ? 'right' : 'left'}`);
        
        // Prepare next card
        nextCard.classList.remove('next');
        nextCard.classList.add('current');
        
        // Create and prepare new next card if there are more cuisines
        if (this.remainingCuisines.length > 1) {
            const newNextCard = this.createCard('next');
            document.querySelector('.swipe-container').appendChild(newNextCard);
            await this.updateCardContent(newNextCard, this.remainingCuisines[this.remainingCuisines.length - 2]);
        }

        // Wait for animation
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Cleanup
        currentCard.remove();
        
        // Update cuisines
        this.remainingCuisines.pop(); // Remove the cuisine that just became current
        this.currentCuisine = this.nextCuisine;
        this.nextCuisine = this.remainingCuisines[this.remainingCuisines.length - 1];
        
        this.isAnimating = false;
    }
}

// Initialize the swipe interface
window.swipeInterface = new SwipeInterface();
console.log("SwipeInterface loaded");