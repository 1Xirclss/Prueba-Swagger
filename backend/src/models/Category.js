import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        slug: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            trim: true,
        },
        subcategories: [{
            name: {
                type: String,
                required: true,
            },
            slug: {
                type: String,
                required: true,
            },
            items: {
                type: [String],
                default: [],
            }
        }],
        featured: {
            type: Boolean,
            default: false,
        },
        order: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);



const Category = mongoose.model('Category', categorySchema);

export default Category;
