import express from 'express';
const app = express();

app.listen(8080,() => {
    console.log("Server started...");
});

app.use(express.json())

let products = []

app.post("/", (req,res) => {
    // res.send("Post request...");
    try{
        const {id, name, price} = req.body;
        const existingProduct = products.find(product => {
            return product.name.toLowerCase() === name.toLowerCase();
        });
        if(existingProduct){
            res.send("Product already exist");
            return;
        }
        const newProduct = {
            id: products.length + 1,
            name,
            price
        };
        products.push(newProduct);
        res.send("Product Created");
    }
    catch(err){
        res.send("Something went wrong..." + err);
    }
})

app.get("/",(req,res) => {
    res.json(products);
})

app.delete("/:id", (req,res) => {
    try{
    const id = parseInt(req.params.id);
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        products.splice(index, 1); 
        res.json("Product deleted");
    } else {
        res.json("Product not found");
    }
}   catch(err){
    res.json({message: "Something went wrong..."});
}

//     try {
//      const id = Number(req.params.id);
//      products = products.filter((value) => value.id !== id);
//      res.json("Product deleted");
//      }  catch (err) {
//      res.json({ message: "Something went wrong" });
//      }
});


app.patch("/", (req, res) => {
  res.send(req.body);
});