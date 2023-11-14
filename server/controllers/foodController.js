import Food from '../Models/Food.js';


export const addFood = async(req, res, next)=>{
    const{name, description, price, category} = req.body
    const { userId } = req.user

    try {
        const foodExists = await Food.findOne({ where: { name, Rid:userId } })
        
        if(foodExists){
            return res.status(400).json({msg: "This food already exists" })
        }
    console.log("first")
        const food = await Food.create({
            name,
            description,
            price,
            category,
            Rid: userId
         })
        
         res.status(201).json({
            food
         })
    } catch (error) {
        next(error)
    }
    

    

}


export const getAllFoodByCreaterId = async(req, res, next)=>{
    try {
        const {restaurantId} = req.params
        if(restaurantId==="all"){
            const foodItems = await Food.findAll();

            res.status(200).json({ foodItems })

        }else{
            const foodItems = await Food.findAll({where:{Rid: restaurantId}});

            res.status(200).json({ foodItems })
        }

    } catch (error) {
        next(error)
    }
}