import { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        stock: {
            type: Number,
        },
        color: {
            type: String,
        },
        size: {
            type: Array,
        },
        category: {
            type: Array,
        },
        image: {
            type: Array,
        },
        genre: {
            type: String,
        },
        brand: {
            type: Object,
        },
        price: {
            type: Number,
        },
        active: {
            type: Boolean, //true
        },
        featured: {
            type: Boolean  //true
        }
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

const productModel = model('Product', productSchema)
export default productModel