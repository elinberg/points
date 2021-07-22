
import axios from 'axios';
import * as Comlink from 'comlink';
import Transformer from './assets/transformer';

const obj = {

    offload() {
        // axios.get('https://7jnlhc0616.api.quickmocker.com/transactions', {
        //     headers: {
        //         'Authorization': 'Apikey 1c35565e7226ccec84e773a6d3b890a9dc17d99f82ea4151d074802c2ccec132'
        //     }
        // })
        // .then(res => {
        //     console.log("RESPONSE", res)
        //     let transformer = new Transformer();
        //     this.dataset = transformer.getPoints(res.data)
        //     //   setData(
        //     //       dataset
        //     //   )
        // })
    }
};

Comlink.expose(obj);



onmessage = function (event) {
	//var workerResult = event.data;

	// (url) => {
	// 	console.log('WORKER SET URL', url);
	// return 'wss://stream.binance.us:9443/ws/'

	//  }


	console.log('WORKER GOT',  event.data )
    axios.get('https://7jnlhc0616.api.quickmocker.com/transactions', {
            headers: {
                'Authorization': 'Apikey 1c35565e7226ccec84e773a6d3b890a9dc17d99f82ea4151d074802c2ccec132'
            }
        })
        .then(res => {
            console.log("RESPONSE", res)
            let transformer = new Transformer();
            let dataset = transformer.getPoints(res.data)

            postMessage(dataset)
            //   setData(
            //       dataset
            //   )
        })

	//let req = JSON.parse(event.data)



};