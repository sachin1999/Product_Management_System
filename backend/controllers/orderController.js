
import Orders from "../models/orderModel.js";
import fs from 'fs';
export const createOrderControllers= async(req,res)=> {
    try{
        const {name,id,manufacturer_name,description,quantity,price} = req.fields;
        const {photo} = req.files;
        validation
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
            case !price:
                return res.status(500).send({error: 'Price is Required'})
            case !photo && photo.size > 10000:
                return res
                .status(500)
                .send({error: 'Photo is Required & size should be less than 10mb'})                        
        }
        const orders = new Orders({...req.fields});
        if(photo){
            orders.photo.data = fs.readFileSync(photo.path)
            orders.photo.contentType = photo.type
        } 
        await orders.save();
        res.status(201).send({
            success:true,
            message: 'Product Created Succesfully',
            orders
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
}
export const getOrderController= async(req,res) =>{
    try{
        const orders = await Orders.find({})
        res.status(200).send({
            success:true,
            countTotal: products.length,
            message: "All Products",
            orders
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
