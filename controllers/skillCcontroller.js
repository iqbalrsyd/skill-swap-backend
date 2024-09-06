const Skill = require('../models/skill');
const SkillCategory = require('../models/skillCategory');

exports.addSkill = async (req, res) => {
    const { skillName, description, price, category } = req.body;

    try {
        const skillCategory = await SkillCategory.findById(category);
        if(!skillCategory){
            return res.status(404).json({
                message: 'Skill category not found',
            });
        }

        const newSkill = new Skill({
            skillName,
            description,
            price, 
            category: skillcategory._id,
        });

        await newSkill.save();
        res.status(201).json({message: 'Skill added successfully', skill: newSkill});
    }catch(error){
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};


