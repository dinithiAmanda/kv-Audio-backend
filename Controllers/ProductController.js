import product from "../Models/Product";

export function getProducts(req, res) {
    console.log = (req.user)

    if (req.user == null) {
        res.status(401).json({ message: "Please login and try again" });
        return
    }

    if (req.user.role != "admin") {
        res.status(403).json({ message: "You are not authorized to perfrom this page" });
        return
    }

        
    const data = req.body;
    const newproduct = new product(data);
    newProduct.save()
        .then(() => {
            res.json({ messege: "Product added successfuly" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Product registration failed" });
        });
}



