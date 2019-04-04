import * as L from 'leaflet';

// declare module 'leaflet' {
    
//     export interface vectorGrid {           

//         slicer(data: any, options?: any): any;

//     }

// }

declare module 'leaflet' {

    export namespace vectorGrid {

        function slicer(data: any, options?: any): any;

    }

}