const Document =require('../models/Document');

exports.documentById =  async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        // if (document.owner.toString() !== req.user.id) {
        //     return res.status(403).json({ message: 'Not authorized' });
        // }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
};