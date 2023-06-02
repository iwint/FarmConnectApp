const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});
const joi = BaseJoi.extend(extension)



module.exports.formValidation = joi.object({

    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    specilization: joi.string().required(),
    // image: joi.string().required()


}).required()


module.exports.cardsValidation = joi.object({


name: joi.string().required(),
age: joi.string().required(),
experience: joi.number().required(),
location: joi.string().required(),
contact: joi.string().required(),
specilization: joi.string().required(),

email : joi.string().required()

}).required()



module.exports.reviewValidation = joi.object({

    rating : joi.number().required(),
    review : joi.string().required()
}).required()
module.exports.registerValidation = joi.object({

username: joi.string().required(),
password: joi.string().required(),
email: joi.string().required(),
isProfessional: joi.string()

}).required()

module.exports.loginValidation = joi.object({

    username: joi.string().required(),
    password: joi.string().required()

})