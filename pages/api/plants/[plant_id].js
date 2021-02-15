import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) => {

	const plant_id = req.query.plant_id;

    const { db } = await connectToDatabase();
    await db
        .collection("plants")
        .findOne({"name":plant_id}, function(err, doc){
        	if(err)
        		throw err;

        	if(doc == null)
        		res.status(404).send('Not found');
        	else
		    	res.status(200).json(doc)
		})

//    res.status(200).json(JSON.parse(JSON.stringify(plants)))
	

}