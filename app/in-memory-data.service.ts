// import { InMemoryDbService } from 'angular-in-memory-web-api';


// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {

//     let planningsPowder = [{
//       _id: 1,
//       startDate: "2017-02-08T07:30:00.000Z",
//       endDate: "2017-02-08T10:00:00.000Z",
//       planningType:"powder",
//       resource: { 
//         _id: 13, 
//         color: { 
//           type: "Sonderfarbe",
//           value: "Bordeaux"
//         },
//         opticalCharacter: "Matt",
//         usage: "Innen",
//         charge: "2343",
//         expiryDate: "2017-01-12T00:00:00.000Z",
//         amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//         supplier: "Bla GmbH",
//         gsb: true, 
//         qualicoat: true,
//         comment: "war offen",
//         price: 2.5,
//         totalPrice: 125,
//         status: "inserted" 
//       }
//     },{
//       _id: 2,
//       startDate: "2017-02-08T10:00:00.000Z",
//       endDate: "2017-02-08T12:00:00.000Z",
//       planningType:"powder",
//       resource: { 
//         _id: 10, 
//         color: { 
//           type: "RAL",
//           value: "4001"
//         },
//         opticalCharacter: "Matt",
//         usage: "Innen",
//         charge: "2343",
//         expiryDate: "2017-01-12T00:00:00.000Z",
//         amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//         supplier: "Bla GmbH",
//         gsb: true, 
//         qualicoat: true,
//         comment: "war offen",
//         price: 2.5,
//         totalPrice: 125,
//         status: "toBeInserted" 
//       }
//     },{
//       _id: 3,
//       startDate: "2017-02-08T12:00:00.000Z",
//       endDate: "2017-02-08T14:00:00.000Z",
//       planningType:"powder",
//       resource: { 
//         _id: 11, 
//         color: { 
//           type: "RAL",
//           value: "8001"
//         },
//         opticalCharacter: "Matt",
//         usage: "Aussen",
//         charge: "2343",
//         expiryDate: "2016-02-10T00:00:00.000Z",
//         amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//         supplier: "Bla GmbH",
//         gsb: true, 
//         qualicoat: true,
//         comment: "war offen",
//         price: 2.5,
//         totalPrice: 125,
//         status: "atCoatingMachine" 
//       }
//     }];


 
//     let powders = [
//       { _id: 10, 
//       color: { 
//         type: "RAL",
//         value: "4001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "toBeInserted" },
      
//     { _id: 11, 
//       color: { 
//         type: "RAL",
//         value: "8001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "inserted" },
//     { _id: 12, 
//       color: { 
//         type: "RAL",
//         value: "3001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 44,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "toBeAtCoatingMachine" },
      
//     { _id: 13, 
//       color: { 
//         type: "Sonderfarbe",
//         value: "Bordeaux"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "atCoatingMachine" },
//     { _id: 14, 
//       color: { 
//         type: "RAL",
//         value: "9001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "toBeAtCoatingMachine" },
      
//     { _id: 15, 
//       color: { 
//         type: "RAL",
//         value: "8000"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "atCoatingMachine" },
//     { _id: 16, 
//       color: { 
//         type: "RAL",
//         value: "2001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
      
//     { _id: 17, 
//       color: { 
//         type: "RAL",
//         value: "7005"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
//     { _id: 18, 
//       color: { 
//         type: "RAL",
//         value: "9001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
      
//     { _id: 19, 
//       color: { 
//         type: "RAL",
//         value: "5001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
//     { _id: 20, 
//       color: { 
//         type: "RAL",
//         value: "3001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
      
//     { _id: 21, 
//       color: { 
//         type: "RAL",
//         value: "8001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
//     { _id: 22, 
//       color: { 
//         type: "RAL",
//         value: "8001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },
//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
      
//     { _id: 23, 
//       color: { 
//         type: "RAL",
//         value: "9001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },

//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
//     { _id: 24, 
//       color: { 
//         type: "RAL",
//         value: "9000"
//       },
//       opticalCharacter: "Matt",
//       usage: "Innen",
//       charge: "2343",
//       expiryDate: "2017-01-12T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },

//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" },
      
//     { _id: 25, 
//       color: { 
//         type: "RAL",
//         value: "7001"
//       },
//       opticalCharacter: "Matt",
//       usage: "Aussen",
//       charge: "2343",
//       expiryDate: "2016-02-10T00:00:00.000Z",
//       amount: {
//           stored: 20,
//           consumed: 20,
//           planned: 10
//         },

//       supplier: "Bla GmbH",
//       gsb: true, 
//       qualicoat: true,
//       comment: "war offen",
//       price: 2.5,
//       totalPrice: 125,
//       status: "stored" }
//     ];

//     let planningsEmployee = [{
//       "_id": 4,
//       "startDate": "2017-02-07T07:30:00.000Z",
//       "endDate": "2017-02-07T10:00:00.000Z",
//       "planningType":"equippingEmployee",
//       "resource": {
//       "_id": 1,
//       "firstName": "Hans",
//       "lastName": "Wurst",
//       "color": { 
//         "type": "Hex",
//         "value": "#CCC"
//       },
//     }
//     },{
//       _id: 1,
//       startDate: new Date("2017-02-07T07:30:00.000Z"),
//       endDate: new Date("2017-02-07T10:00:00.000Z"),
//       planningType:"checkingEmployee",
//       resource: {
//       _id: 1,
//       firstName: "Hans",
//       lastName: "Wurst",
//       color: { 
//         type: "Hex",
//         value: "#CCC"
//       },
//     }
//     },{
//       _id: 2,
//       startDate: new Date("2017-02-07T10:00:00.000Z"),
//       endDate: new Date("2017-02-07T12:00:00.000Z"),
//       planningType:"shippingEmployee",
//       resource: {
//       _id: 1,
//       firstName: "Hans",
//       lastName: "Wurst",
//       color: { 
//         type: "Hex",
//         value: "#CCC"
//       },
//     }
//     },{
//       _id: 3,
//       startDate: new Date("2017-02-07T12:00:00.000Z"),
//       endDate: new Date("2017-02-07T14:00:00.000Z"),
//       planningType:"packingEmployee",
//       resource: {
//       _id: 2,
//       firstName: "Peter",
//       lastName: "Maffay",
//       color: { 
//         type: "Hex",
//         value: "#B3B300"
//       },
//     }
//     }];

//     let employees = [{
//       _id: 1,
//       firstName: "Hans",
//       lastName: "Wurst",
//       color: { 
//         type: "Hex",
//         value: "#CCC"
//       },
//     },
//     {
//       _id: 2,
//       firstName: "Peter",
//       lastName: "Maffay",
//       color: { 
//         type: "Hex",
//         value: "#B3B300"
//       },
//     },
//     {
//       _id: 3,
//       firstName: "Bob",
//       lastName: "Baumeister",
//       color: { 
//         type: "Hex",
//         value: "#AA0000"
//       },
//     },
//     {
//       _id: 4,
//       firstName: "2Pac",
//       lastName: "The Cool",
//       color: { 
//         type: "Hex",
//         value: "#A0B1FF"
//       },
//     },
//     {
//       _id: 5,
//       firstName: "Manfred",
//       lastName: "Günzel",
//       color: { 
//         type: "Hex",
//         value: "#6A6A11"
//       },
//     },
//     {
//       _id: 6,
//       firstName: "Peter",
//       lastName: "Maffay 2",
//       color: { 
//         type: "Hex",
//         value: "#A022B1"
//       },
//     },{
//       _id: 7,
//       firstName: "Alfred",
//       lastName: "Alfonso",
//       color: { 
//         type: "Hex",
//         value: "#33AA33"
//       },
//     },{
//       _id: 8,
//       firstName: "Bibo",
//       lastName: "B",
//       color: { 
//         type: "Hex",
//         value: "#BBBB00"
//       },
//     },{
//       _id: 9,
//       firstName: "Jiippi",
//       lastName: "Langstrumpf",
//       color: { 
//         type: "Hex",
//         value: "#AAAAAA"
//       },
//     }];

//     let planningsOrder = [{
//       _id: 1,
//       startDate: "2017-02-14T10:00:00.000Z",
//       endDate: "2017-02-14T12:00:00.000Z",
//       planningType:"orderPlanning",
//       resource: {
//         _id: 2,
//         customer: {
//           _id: 1,
//           customerPriority: 2,
//           name: "Xylophonia KG",
//           contact: {
//             email: "manfred@posteo.de",
//             phoneNumber: "023984234870987",
//             faxNumber: "1238971209387"
//           },
//           address: {
//             street: "Neuffener Strasse",
//             postalCode: "72664",
//             city:  "Kohlberg"
//            }
//         },
//         orderFeatures: {
//           grounding: "jupp",
//           drilling: "3x",
//           grinding: false,
//           foilEdding: false,
//           zincPlastering: true,
//           sandBlasting: false,
//           threadCovering: true,
//           onPlanninglist: true,
//           packaging: {},
//           productionDate: "2017-02-08T08:00:00.000Z",
//           deliveryDate: "2017-02-09T12:00:00.000Z",
//           effortEstimation: 120,
//           applicationRange: "Innen",
//           comment: "jupp",
//           material: "Verzinkter Stahl",
//           coating: {
//             type: "RAL",
//             value: "8001",
//             layerThickness: 200,
//             amount: 50,
//             powder: { 
//                 _id: 13, 
//                 color: { 
//                   type: "RAL",
//                   value: "8001"
//                 },
//                 opticalCharacter: "Matt",
//                 usage: "Innen",
//                 charge: "2343",
//                 expiryDate: "2017-01-12T00:00:00.000Z",
//                 amount: {
//                   stored: 20,
//                   consumed: 20,
//                   planned: 10
//                 },
//                 supplier: "Bla GmbH",
//                 gsb: true, 
//                 qualicoat: true,
//                 comment: "war offen",
//                 price: 2.5,
//                 totalPrice: 125,
//                 status: "inserted" 
//             }
//           },
//           customerCommission: "EX88A"
//         },
//         positions: [{}],
//         statusHistory: [{}],
//         status: "checking",
//         type: "order",
//         statusHistory: [{}],
//       }
//     },
//     {
//       _id: 2,
//       startDate: "2017-02-14T08:00:00.000Z",
//       endDate: "2017-02-14T10:00:00.000Z",
//       planningType:"orderPlanning",
//       resource: {
//         _id: 2,
//         customer: {
//           _id: 1 },
//         orderFeatures: {
//           grounding: "jupp",
//           drilling: "3x",
//           grinding: false,
//           foilEdding: false,
//           zincPlastering: true,
//           sandBlasting: false,
//           threadCovering: true,
//           onPlanninglist: true,
//           packaging: {},
//           productionDate: "2017-02-08T08:00:00.000Z",
//           deliveryDate: "2017-02-09T12:00:00.000Z",
//           effortEstimation: 120,
//           applicationRange: "Innen",
//           comment: "jupp",
//           material: "Verzinkter Stahl",
//           coating: {
//             type: "Sonderfarbe",
//             value: "Bordeaux",
//             layerThickness: 200,
//             amount: 50,
//             powder: { _id: 100 }
//           },
//           customerCommission: "EX88A"
//         },
//         positions: [{}],
//         statusHistory: [{}],
//         status: "supply",
//         type: "order",
//         statusHistory: [{}],
//       }
//     }];


//     let bathProtocols = [{
//       _id: 1,
//       aluminiumPickle: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       },
//       zincPickle: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       },
//       aluminiumChromating: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       },
//       zincChromating: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       },
//       degreasing: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       },
//       phosphating: {
//         date: "2017-02-11T10:00:00.000Z",
//         employee: {
//           _id: 1,
//           firstName: "Hans",
//           lastName: "Wurst",
//           color: { 
//             type: "Hex",
//             value: "#CCC"
//           },
//         },
//         temperature: 20,
//         value1: 60,
//         value2: 65,
//         value3: 70
//       }
//     }];

//     return {
//       planningsPowder,
//       powders,
//       planningsEmployee,
//       employees,
//       planningsOrder,
//       bathProtocols
//     };
//   }
// }
