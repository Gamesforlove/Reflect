gdjs.How_32To_32PlayCode = {};
gdjs.How_32To_32PlayCode.localVariables = [];
gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects1= [];
gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects2= [];
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1= [];
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects2= [];


gdjs.How_32To_32PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1[k] = gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10593372);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_06.aac", false, 90, 1);
}}

}


};

gdjs.How_32To_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects2.length = 0;

gdjs.How_32To_32PlayCode.eventsList0(runtimeScene);
gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHowToPlayTextObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGreyButtonWithShadowObjects2.length = 0;


return;

}

gdjs['How_32To_32PlayCode'] = gdjs.How_32To_32PlayCode;
