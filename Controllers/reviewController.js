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