let Cart=require('../models/Cart')
let uuid=require("uuid")

let addCart=async(req,res)=>{
    let uid=uuid.v4()
    let data={...req.body,"_id":uid}
    let x=await Cart.find({"userid":data.userid,"pid":data.pid})
    if(x.length==0)
    {
    let cdata=new Cart(data)
    cdata.save().then(()=>{
        res.json({"mag":"ok"})
    })
}

}
let getCart=async(req,res)=>{
    
    let data=await Cart.find({"userid":req.headers.usid})
    
    console.log(data)
    res.json(data)
}

module.exports={addCart,getCart}