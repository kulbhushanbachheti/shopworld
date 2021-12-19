import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Bachheti',
            email: 'admin@example.com',
            password: bcrypt.hashSync('2345', 8),
            isAdmin: true,
        },
        {
            name: 'jeo',
            email: 'user@example.com',
            password: bcrypt.hashSync('2345', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            
            name: 'Nike slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 12,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality products'


        },
        {
            
            name: 'Puma slim Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            countInStock: 15,
            price: 120,
            brand: 'Puma',
            rating: 3.9,
            numReviews: 16,
            description: 'high quality products'


        },{
            
            name: 'Adidas slim Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 25,
            brand: 'Adidas',
            rating: 4.3,
            numReviews: 11,
            description: 'high quality products'


        },{
            
            name: 'Nike slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 108,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 21,
            description: 'high quality products'


        },{
            
            name: 'Puma slim pant',
            category: 'pants',
            image: '/images/p5.jpg',
            price: 175,
            countInStock: 42,
            brand: 'Puma',
            rating: 4.7,
            numReviews: 33,
            description: 'high quality products'


        },
        {
            name: 'Lotto slim pant',
            category: 'pants',
            image: '/images/p6.jpg',
            price: 165,
            countInStock: 35,
            brand: 'Lotto',
            rating: 4.0,
            numReviews: 24,
            description: 'high quality products'
        },
        {
            name: 'Blackbery slim pant',
            category: 'pants',
            image: '/images/p7.jpg',
            price: 161,
            countInStock: 45,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 23,
            description: 'high quality products'
        },
        {
            name: 'Gucci slim shirt',
            category: 'shirt',
            image: '/images/p8.jpg',
            price: 250,
            countInStock: 45,
            brand: 'Gucci',
            rating: 4.9,
            numReviews: 19,
            description: 'high quality products'
        }
    ],
};

 export default data;