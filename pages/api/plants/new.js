import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) => {
	if(req.method == "POST"){
	  const { db } = await connectToDatabase();
	  const collection = db.collection('plants');
	  // Insert some documents
	  collection.insertMany([req.body
	  ], function(err, result) {
	  	console.log(result)
	  });
	}
/*
	  const movies = await db
	    .collection("movies")
	    .find({"_id": mongoose.Types.ObjectId(id)})
	    .sort({ metacritic: -1 })
	    .limit(20)
	    .toArray();
	}
	*/
  	res.status(200).json("azdazd")
}