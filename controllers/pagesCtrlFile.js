const { productList } = require("../productList");

exports.homeCtrlFunction = (req, res) =>{
    res.render("index");
};

exports.shopCtrlFunction = (req, res) =>{
    res.render("shop");
};

exports.handMadeEarringCtrlFunction = (req, res) =>{
    res.render("HandMadeEarring");
};

exports.handMadeLampCtrlFunction = (req, res) =>{
    res.render("HandMadeLamp");
};

exports.contactCtrlFunction = (req, res) =>{
    res.render("contact");
}

exports.checkoutCtrlFunction = (req, res) =>{
    res.render("checkout");
}

exports.aboutCtrlFunction = (req, res) =>{
    res.render("about");
}

exports.costCtrlFunction = (req, res) =>{
    try {
        res.status(200).json({
            products : productList
        })
    }
    catch (error) {
        console.log(error)
    }
}
