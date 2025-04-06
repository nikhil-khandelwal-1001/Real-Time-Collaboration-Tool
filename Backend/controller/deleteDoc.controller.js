const Document =require('../models/Document');

exports.deleteDoc = async (req, res) => {
    try {

        

        console.log("🧾 Delete route hit for ID:", req.params.id);

        const deletedDoc = await Document.findByIdAndDelete(req.params.id);

        if (!deletedDoc) {
            console.log("Document not found in DB");
            return res.status(404).json({ message: 'Document not found' });
        }

        console.log("✅ Document deleted:", deletedDoc);
        res.json({ message: 'Document deleted successfully' });
    } catch (error) {
        console.error("Server error during delete:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
};
