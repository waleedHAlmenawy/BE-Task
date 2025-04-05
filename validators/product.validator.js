const joi = require("joi");
joi.objectId = require('joi-objectid')(joi);

const validateProduct = (productInfo) => {
    const schemaRequirements = joi.object({
        title: joi.string().min(3).max(50).required(),
        price: joi.number().required(),
        icon: joi.string().allow(null).allow('').optional(),
    });
    return schemaRequirements.validate(productInfo);
};

module.exports = validateProduct;