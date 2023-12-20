import User from "../models/userModel.js";

export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Empty fields"
            })
        }
        const user = await User.findOne({email: email});
        if(!user || (password !== user.password)){
            return res.status(400).json({
                message:"Invalid email or password"
            })
        }
        return res.status(200).json({
            success: true,
            message: "logged in successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in login"
        })
    }
}
export const getUserData = async(req,res) =>{

    try{
        const userData = await User.findOne({email:req.params.email})
        res.status(200).send({
            success:true,
            message:'User Data fetched',
            userData
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:true,
            message: "Error in getting user data",
            error:error.message
        });
       }
}
export const register = async(req, res) => {
    try{
        const {name,email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Empty fields"
            })
        }
        await User.create({
            name:name,email:email, password:password});
        return res.status(200).json({
            success: true,
            message: "registered successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in register"
        })
    }
}