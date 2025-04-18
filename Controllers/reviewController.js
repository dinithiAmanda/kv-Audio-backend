import review from "../Models/reveiw";

export function addReview(req, res) {
    if (req.user == null) {
        res.status(401).json({ message: "Please login and try again" });
        return;
    }

    const data = req.body;

    data.name = req.user.firstName + " " + req.user.lastName;
    data.profilepicture = req.user.profilepicture;
    data.email = req.user.email;


    const newReview = new review(data);

    newReview.save()
        .then(() => {
            res.json({ messege: "Review added successfuly" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Review registration failed" });
        });
}

export function getreviews(req, res) {
    const user = req.user;

    if (user == null || user.role != "admin") {
        review.find({}).then((reviews) => {
            res.json(reviews);
        })
        returns
}

    if (user.role == "admin") {
        review.find({}).then((reviews) => {
            res.json(reviews);
        })
    }
}

export function deletereview(req, res) {
    const email = req.params.email;

    if (req.user == null) {
        res.status(401).json({ message: "Please login and try again" });
        return;
    }

    if (req.user.role == "admin") {
        review.deleteOne({ email: email })
            .then(() => {
                res.json({ messege: "Review deleted successfuly" });
            })
            .catch((err) => {
                res.status(500).json({ error: "Review registration failed" });
            });
        
        return 
    
    }

    if (req.user.role == "customer") {
        
        if (req.user.email == email) {
            review.deleteOne({ email: email })
            .then(() => {
                res.json({ messege: "Review deleted successfuly" });
            })
            .catch((err) => {
                res.status(500).json({ error: "Review deletation failed" });
            });

        } else {
            
                res.status(403).json({ message: "You are not authorized to perfrom this page" });
            
            }
        }
    }


