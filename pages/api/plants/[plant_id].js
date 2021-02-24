import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) => {

	const plant_slug = req.query.plant_id;

    const { db } = await connectToDatabase();

    switch (req.method) {
        case 'GET':
            (async () => {
              const response = await fetch('https://trefle.io/api/v1/species/'+plant_slug+'?token=neDmD4I8F-HTbUTNRvSd9ZEwnwRClCBnHwHFyBxvU3Q')
              response.json().then(function(json){
                res.status(200).json(json.data)
              }).catch(function(error){
                res.status(404).send('Not found');
              });   
            })();
/*
            await db
                .collection("plants")
                .findOne({"slug":plant_slug}, function(err, doc){
                    if(err)
                        throw err;

                    if(doc == null)
                        res.status(404).send('Not found');
                    else{

                        doc = JSON.parse(JSON.stringify(doc));
                        (async () => {
                          const response = await fetch('https://trefle.io/api/v1/species/'+doc.slug+'?token=neDmD4I8F-HTbUTNRvSd9ZEwnwRClCBnHwHFyBxvU3Q')
                          response.json().then(function(json){
                            doc.species_data = json;
                            res.status(200).json(doc)
                          }).catch(function(error){
                            res.status(404).send('Not found');
                          });   
                        })();
                    }
                    
                })
*/
        break
        case 'DELETE':
            console.log("DELETE   " + plant_slug)
            await db
                .collection("plants")
                .deleteOne({"slug":plant_slug}, function(err, doc){
                    if(err)
                        throw err;

                    if(doc.deletedCount == 0)
                        res.status(404).send('Not found');

                    console.log(doc)
                    if(doc.deletedCount == 1)
                        res.status(200).json(doc);
                });

        break
        default:
            res.status(405).end() //Method Not Allowed
        break
    }




//    res.status(200).json(JSON.parse(JSON.stringify(plants)))
	

}