import mongoose from 'mongoose';

const categorySchema = {
    category: {
        type: String,
        enum: {
            value: ['gaming-general', 'gaming-news', 'multiplayer-games', 'mobile-games', 'retro-games', 'rpg-games',
                    'comics-and-film', 'technology', 'business-and-finance', 'science-and-math', 'outdoors', 'sports',
                    'food-and-cooking', 'artwork-critique', 'literature', 'music', 'fashion', 'graphic-design',
                    'japan', 'north-america', 'africa', 'south-america', 'asia', 'europe', 'random', 'diy', 'cool',
                    'zerblog', 'zerlog-star', 'debate', 'left', 'right', 'twitter', 'ideologies', 'activism', 'lgbt',
                    'advice', 'current-news', 'paranormal', 'travel', 'fitness'],
            message: '{value} is not a valid category'
        }
    }
}

export const Category = mongoose.model('Category', categorySchema);