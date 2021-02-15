import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) => {
	if(req.method == "POST"){
	  const { db } = await connectToDatabase();
	  const collection = db.collection('plants');
	  // Insert some documents
	  collection.insertMany([req.body
	  ], function(err, result) {
	  	if(!err)
  			res.status(200).json(result);
	  });
	}
}