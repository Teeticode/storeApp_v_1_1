import {LocationGeocodedAddress} from 'expo-location'
export interface Category{
    name: String,
    color: String,
    icon: String,
    image: String,
}
export interface Product{
    _id: String,
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
export interface Business{
    name: String,
    image: String,
    owner: String,
    description: String,
    products: [],
    createdAt: Date,
}
export interface UserModel{
    username: String,
    email: String,
    password:String,
    contactNumber:String,
    token:string
}
export interface UserState{
    user:UserModel,
    location:LocationGeocodedAddress,
    error:String | undefined
}
export interface ProductState{
    availability: Product
    /*products:Product,
    location:LocationGeocodedAddress,
    error:String | undefined*/
}
export interface CategoryState{
    availability:Category
}
export interface productAvailability{
    categories:[Category],
    business:[Business],
    products:[Product]
}
