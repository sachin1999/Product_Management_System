
import productModel from "../models/productModel.js";
import fs from 'fs';
export const createProductControllers= async(req,res)=> {
    try{
        const {name,id,manufacturer_name,description,quantity,category} = req.fields;
        const {photo} = req.files;
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error: 'Name is Required'})
            case !id:
                return res.status(500).send({error: 'Product Id is Required'})
            case !manufacturer_name:
                return res.status(500).send({error: 'Manufacture_Name is Required'})
            case !description:
                return res.status(500).send({error: 'Description is Required'})
            case !quantity:
                return res.status(500).send({error: 'Quantity is Required'})
            case !category:
                return res.status(500).send({error: 'Category is Required'})
            case !photo && photo.size > 10000:
                return res
                .status(500)
                .send({error: 'Photo is Required & size should be less than 10mb'})                        
        }
        const products = new productModel({...req.fields});
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        } 
        await products.save();
        res.status(201).send({
            success:true,
            message: 'Product Created Succesfully',
            products
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in creating product"
        })

    }

};
export const getProductController= async(req,res) =>{
    try{
        const products = await productModel.find({}).populate("category").limit(12).sort({createdAt:-1})
        res.status(200).send({
            success:true,
            countTotal: products.length,
            message: "All Products",
            products
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting product details",
            error:error.message
        })
    }
};
export const getSingleProductController =async(req,res) =>{
    try{
        const products = await productModel.findOne({id:req.params.id}).select("-photo").populate("category")
        res.status(200).send({
            success:true,
            message:'Single Product fetched',
            products
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:true,
            message: "Error in getting Single Product",
            error:error.message
        });
       
    }
}
export const productPhotoController = async(req,res) =>{
    try{
        const product = await productModel.findById(req.params.pid).select("photo")
        if(product.photo.data){
            res.set("Content-type",product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in fetching photo",
            error:error.message
        })
    }
};
export const deleteProductController=async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success:true,
            message:"Product Deleted Successfully"
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in deleting product",
            error:error.message
        })
    }
}
//update 
export const updateProductControllers=async(req,res)=>{
    try{
        const {name,id,manufacturer_name,description,quantity,category} = req.fields;
        const {photo} = req.files;
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error: 'Name is Required'})
            case !id:
                return res.status(500).send({error: 'Id is Required'})
            case !manufacturer_name:
                return res.status(500).send({error: 'Manufacture_Name is Required'})
            case !description:
                return res.status(500).send({error: 'Description is Required'})
            case !quantity:
                return res.status(500).send({error: 'Quantity is Required'})
            case !category:
                return res.status(500).send({error: 'Category is Required'})
            case !photo && photo.size > 10000:
                return res
                .status(500)
                .send({error: 'Photo is Required & size should be less than 10mb'})                        
        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,
        {...req.fields },
        { new:true })
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        } 
        await products.save();
        res.status(201).send({
            success:true,
            message: 'Product Updated Succesfully',
            products
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"error in updating product"
        })

    }

}