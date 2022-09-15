import {Application, Sprite} from 'pixi.js';
import {gsap} from 'gsap';

export class Game extends Application{
    private spin:boolean;
    private sliceAngle=360/7;

    constructor(opts:any){
        super(opts);
        this.preload([
            {name:'wheel',url:'./assets/fortuneImage.png'}
        ],this.onLoad.bind(this));
        
    }
    preload(list:any[],cb:()=>{}):void{
        this.loader.add(list),
        this.loader.load(cb);
    }
    onLoad():void{
        const wheel=new Sprite(this.loader.resources['wheel'].texture);
        wheel.anchor.set(0.5);
        wheel.x=this.screen.width/2;
        wheel.y=this.screen.width/2;
        wheel.interactive=true;
        console.log(this.stage);
        this.stage.addChild(wheel);
        // wheel.interactive=true;
        // wheel.buttonMode=true;
        // this.ticker.add(()=>{
        //     if(this.spin){
                
        //     }
        // })
        // wheel.on("pointerup",(e)=>{alert('clicked');})
        wheel.buttonMode = true;
        wheel.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*7);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});
        });

    }
}

export default Application;