import {Texture,Sprite} from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import {loader} from './main.js';

let cardFrames=[];
let w=150;
let h=150;
for(i=0;i<6;i++){
    for(j=0;j<4;j++){
        cardFrames.push([i*w,j*h,w,h]);
    }
}

// export function getCard(id,frame){
//     let isClicked=false;
//     const front=document.getElementById()

// }