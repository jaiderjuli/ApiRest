const {Router}=require('express');
const router=Router();


//configure routes

//desde mi app atravez del metodo get cuando visite la ruta inicial de mi app 
//voy a responder con un msj'
router.get('/',(req,res)=>{
    res.json({"title":"Bienvenido"});
    });
    
    
    router.get('/test',(req,res)=>{
    const data={
     "title":"desarrollo app",
     "website":"julianr@gamil",
    };
        res.json(data);
});
    
module.exports = router;