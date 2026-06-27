const Service = require("../models/Service");
const createService = async (req, res) => {
    const { title, description, price, image } = req.body;
    
    try {
        const service = await Service.create({
            title,
            description,
            price,
            image
        });
        res.status(201).json(service);
        } catch (error) {
            res.status(500).json({
  message: error.message
});
}
};

// Get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
        } catch (error) {
            res.status(500).json({
  message: error.message
});
}
};

//Get service by id
const getServiceById = async (req, res) => {
    const { id } = req.params;
    try{
        const service = await Service.findById(id);
        res.status(200).json(service);
        } catch (error) {
            res.status(500).json({
  message: error.message
});
        }
    };

module.exports = { createService, getServices , getServiceById };


