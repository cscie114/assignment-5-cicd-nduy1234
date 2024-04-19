require("dotenv").config();
//const fetch = require("node-fetch"); 
const EleventyFetch = require("@11ty/eleventy-fetch");

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions
   try {
   const parkData= await getPark();
   parkData.data.forEach(park =>{
        createNode({
        ...park,
        id: createNodeId(park.parkCode),
        parent: null,
        children: [],
        internal: {
            type: "Park",   
            contentDigest: createContentDigest(park),
        },
        });
    });
    } catch (error) {
    console.error('Error', error);
    }
    return;
    }
 
  async function getPark() {
  const PARK_NODE_TYPE = `Park`; 
    try {
        const url = "https://developer.nps.gov/api/v1/parks?stateCode=AZ&api_key=" + process.env.NPS_API_KEY;     
        const parkData = await EleventyFetch(url, {
            duration: "1d",
            type: "json",
            directory: ".11tycache",
            fetchOptions: {
            headers:{
                "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"
            }
        }
    });  
    return parkData;                 
    } catch (error) {   
        console.error('Error', error);   
        console.log(error);       
    }   
    };

