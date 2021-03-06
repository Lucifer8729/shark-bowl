// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/dbconnect";
import EntreMain from "../../models/index";

dbConnect();

const enform = async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const entreMain = await EntreMain.find({});

				res.status(200).json({ success: true, data: entreMain });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const entreMain = await EntreMain.create(req.body);

				res.status(201).json({ success: true, data: entreMain });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
	}
};

export default enform;
