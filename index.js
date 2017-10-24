import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('jigsaw', () => App);


// (function () {
//     let hold = 0;
//     let tileArray = [1, 2, 3, 4, 5, 6, 7, 8];
//     let ri = new Array(15);
//     for (let i = 0; i < 15; i++) {
//         ri[i] = i;
//     }
//
//     for (let j = 0; j < 5; j++) {
//         ri.sort(function () {
//             return Math.random() - 0.5;
//         });
//         for (let i = 0; i < 15; i += 3) {
//             hold = tileArray[ri[i]];
//             tileArray[ri[i]] = tileArray[ri[i + 1]];
//             tileArray[ri[i + 1]] = tileArray[ri[i + 2]];
//             tileArray[ri[i + 2]] = hold;
//         }
//
//     }
//     console.log(tileArray);
// })();