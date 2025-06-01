import foodModel from '../models/food.Model.js'
import fs from 'fs'


const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`
    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })
    try{
        await food.save()
        res.json({success:true,message:"Food added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Failed to add food"})
    }
}

const list_food=async(req,res)=>{
    try{
      const foods=await foodModel.find({})
      res.json({success:true,data:foods})
    }
    catch(error){
      console.log(error)
      res.json({success:false,message:"error"})
    }
}

const remove_food=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"food removed"})
    }
    catch(error){
       console.log(error)
       res.json({success:false,message:"failed to remove food"})
    }
}


export {addFood,list_food,remove_food}