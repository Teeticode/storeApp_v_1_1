export interface Category{
    name: String,
    color: String,
    icon: String,
    image: String,
}
export interface Product{
    name: String,
    owner: String,
    description: String,
    price: Number,
    image: String,
    countInStock: Number,
    isDiscount: Boolean,
    isFeatured: Boolean,
    category: {
        name: String,
    },
    reviews: [String],
    createdAt: Date,
}