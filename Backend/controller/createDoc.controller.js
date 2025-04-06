const Document =require('../models/Document');


exports.createDoc = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newDocument = await Document.create({
            title,
            content,
            owner: req.user.id,
        });
        
        res.json(newDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};