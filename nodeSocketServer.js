const WebSocket = require('ws');

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

plannings = [];
plannings.push({
      _id: 1,
      startDate: new Date("2017-02-01T07:00:00.000Z"),
      endDate: new Date("2017-02-01T09:30:00.000Z"),
      type:"powder",
      resource: { 
        _id: 13, 
        color: { 
          type: "Sonderfarbe",
          value: "Bordeaux"
        },
        opticalCharacter: "Matt",
        usage: "Innen",
        charge: "2343",
        expiryDate: "2017-01-12T00:00:00.000Z",
        amount: {
        	stored: 20,
        	consumed: 20,
        	planned: 10
        },
        supplier: "Bla GmbH",
        gsb: true, 
        qualicoat: true,
        comment: "war offen",
        price: 2.5,
        totalPrice: 125,
        status: "inserted" 
      }
    });
plannings.push({
      _id: 2,
      startDate: "2017-02-01T09:30:00.000Z",
      endDate: "2017-02-01T11:30:00.000Z",
      type:"powder",
      resource: { 
        _id: 10, 
        color: { 
          type: "RAL",
          value: "4001"
        },
        opticalCharacter: "Matt",
        usage: "Innen",
        charge: "2343",
        expiryDate: "2017-01-12T00:00:00.000Z",
        amount: {
          stored: 20,
          consumed: 20,
          planned: 10
        },
        supplier: "Bla GmbH",
        gsb: true, 
        qualicoat: true,
        comment: "war offen",
        price: 2.5,
        totalPrice: 125,
        status: "toBeInserted" 
      }
    });
plannings.push({
      _id: 3,
      startDate: "2017-02-01T11:30:00.000Z",
      endDate: "2017-02-01T13:30:00.000Z",
      type:"powder",
      resource: { 
        _id: 11, 
        color: { 
          type: "RAL",
          value: "8001"
        },
        opticalCharacter: "Matt",
        usage: "Aussen",
        charge: "2343",
        expiryDate: "2016-02-10T00:00:00.000Z",
        amount: {
          stored: 20,
          consumed: 20,
          planned: 10
        },
        supplier: "Bla GmbH",
        gsb: true, 
        qualicoat: true,
        comment: "war offen",
        price: 2.5,
        totalPrice: 125,
        status: "atCoatingMachine" 
      }
    });



var plannings2 = [];

plannings2.push({
      _id: 2,
      startDate: "2017-02-01T09:30:00.000Z",
      endDate: "2017-02-01T11:30:00.000Z",
      type:"powder",
      resource: { 
        _id: 10, 
        color: { 
          type: "RAL",
          value: "4001"
        },
        opticalCharacter: "Matt",
        usage: "Innen",
        charge: "2343",
        expiryDate: "2017-01-12T00:00:00.000Z",
        amount: {
          stored: 20,
          consumed: 20,
          planned: 10
        },
        supplier: "Bla GmbH",
        gsb: true, 
        qualicoat: true,
        comment: "war offen",
        price: 2.5,
        totalPrice: 125,
        status: "inserted" 
      }
    });



var options = {"binary": false};
console.log("ready");
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  console.log("connected")
  
  setTimeout(function(){
	ws.send(JSON.stringify(plannings), options, function ack(error){
		console.log("type " + typeof plannings);
		console.log("type stringified " + typeof JSON.stringify(plannings));
	  	console.log("error " + error);
	  	console.log("sent " + JSON.stringify(plannings));
	});
 	}, 2000);
  setTimeout(function(){
	ws.send(JSON.stringify(plannings2), options, function ack(error){
		console.log("type " + typeof plannings);
		console.log("type stringified " + typeof JSON.stringify(plannings));
	  	console.log("error " + error);
	  	console.log("sent " + JSON.stringify(plannings));
	});
 	}, 4000);
});

