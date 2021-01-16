import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) => {

    const { db } = await connectToDatabase();
    const plants = await db
        .collection("plants")
        .find({})
        .limit(20)
        .toArray();

//    res.status(200).json(JSON.parse(JSON.stringify(plants)))
    res.status(200).json(plants)

}