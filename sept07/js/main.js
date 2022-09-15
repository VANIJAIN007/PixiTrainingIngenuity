// // document.onload=()=>{
//     const game=new PIXI.Application({
//         width:800
//         height:600
//         background:0x3366FF
//     });
//     document.getElementById('game').append(game.view);
// // }

const game = new PIXI.Application({
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0xabdbe3,
});
document.getElementById("game").append(game.view);

loadAssets([
    {name:'smile',url:"./assets/smilesimage.jpg"},
    {name:'back',url:"./assets/front.png"},
    {name:'front',url:"./assets/myimage.jpg"},
    {name:'cardimage',url:"./assets/carddecksetfi.png"}
],start);
console.log(game);

const pBar=document.getElementById('bar');
const pText=document.getElementById("progress");
function preload(e){
    pBar.style.width=e.progress * 2+ "%"
    pText.innerText=e.progress+"%";
    if(e.progress===100){
        console.log("hide loader");
        setTimeout(()=>{
            document.getElementById("loader").style.display="none";
        },500);
    }
    console.log(e.progress);
}
function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}
function start(loader,resources){
    console.log("params",arguments);
    const back=PIXI.Sprite.from(resources['back'].texture);
    back.scale.set(0.1);
    back.x=150;
    // game.stage.addChild(back);

    for(var i=1;i<4;i++){
        for(var j=1;j<6;j++){
            for(k=1;k<3;k++){
            const smily=new PIXI.Texture(resources['cardimage'].texture,
            new PIXI.Rectangle(30,40,141,192*j));
            const front1=PIXI.Sprite.from(smily);
            game.stage.addChild(front1);
            }


        }
    }
    // smile.scale.set(0.3);
    

    // game.stage.add

}