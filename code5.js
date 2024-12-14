gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDReflectTextObjects1= [];
gdjs.Main_32MenuCode.GDReflectTextObjects2= [];
gdjs.Main_32MenuCode.GDLevel1Objects1= [];
gdjs.Main_32MenuCode.GDLevel1Objects2= [];
gdjs.Main_32MenuCode.GDLevel2Objects1= [];
gdjs.Main_32MenuCode.GDLevel2Objects2= [];
gdjs.Main_32MenuCode.GDLevel3Objects1= [];
gdjs.Main_32MenuCode.GDLevel3Objects2= [];
gdjs.Main_32MenuCode.GDLevel4Objects1= [];
gdjs.Main_32MenuCode.GDLevel4Objects2= [];
gdjs.Main_32MenuCode.GDHowToPlayObjects1= [];
gdjs.Main_32MenuCode.GDHowToPlayObjects2= [];
gdjs.Main_32MenuCode.GDTutorialObjects1= [];
gdjs.Main_32MenuCode.GDTutorialObjects2= [];
gdjs.Main_32MenuCode.GDBallObjects1= [];
gdjs.Main_32MenuCode.GDBallObjects2= [];
gdjs.Main_32MenuCode.GDMirrorObjects1= [];
gdjs.Main_32MenuCode.GDMirrorObjects2= [];
gdjs.Main_32MenuCode.GDPortal1Objects1= [];
gdjs.Main_32MenuCode.GDPortal1Objects2= [];
gdjs.Main_32MenuCode.GDPortal2Objects1= [];
gdjs.Main_32MenuCode.GDPortal2Objects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Main_32MenuCode.GDBallObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Main_32MenuCode.GDMirrorObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Main_32MenuCode.GDBallObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.Main_32MenuCode.GDPortal1Objects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Sea Of Sound.ogg");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Walk_09.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Click_01.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Complete_02.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Coins 9.aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Laser effect (1).aac");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Confirm_06.aac");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.Main_32MenuCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel1Objects1[k] = gdjs.Main_32MenuCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.Main_32MenuCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel2Objects1[k] = gdjs.Main_32MenuCode.GDLevel2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.Main_32MenuCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel3Objects1[k] = gdjs.Main_32MenuCode.GDLevel3Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.Main_32MenuCode.GDLevel4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel4Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel4Objects1[k] = gdjs.Main_32MenuCode.GDLevel4Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.Main_32MenuCode.GDHowToPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHowToPlayObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHowToPlayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDHowToPlayObjects1[k] = gdjs.Main_32MenuCode.GDHowToPlayObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHowToPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How To Play", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Main_32MenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDTutorialObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDTutorialObjects1[k] = gdjs.Main_32MenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.Main_32MenuCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel1Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel1Objects1[k] = gdjs.Main_32MenuCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12135332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel1Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 395, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 155, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 350, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 350, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.Main_32MenuCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel1Objects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDLevel1Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel1Objects1[k] = gdjs.Main_32MenuCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12137260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel1Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 420, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 180, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 300, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 300, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.Main_32MenuCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel2Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel2Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel2Objects1[k] = gdjs.Main_32MenuCode.GDLevel2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12138868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 395, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 575, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 350, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 350, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.Main_32MenuCode.GDLevel2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel2Objects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDLevel2Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel2Objects1[k] = gdjs.Main_32MenuCode.GDLevel2Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12141012);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel2Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 420, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 600, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 300, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel2Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 300, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.Main_32MenuCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel3Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel3Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel3Objects1[k] = gdjs.Main_32MenuCode.GDLevel3Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12142740);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel3Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 395, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 995, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 350, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 350, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.Main_32MenuCode.GDLevel3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel3Objects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDLevel3Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel3Objects1[k] = gdjs.Main_32MenuCode.GDLevel3Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12144828);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel3Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 420, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 1020, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 300, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel3Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel3Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 300, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.Main_32MenuCode.GDLevel4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel4Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel4Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel4Objects1[k] = gdjs.Main_32MenuCode.GDLevel4Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12146716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel4Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 395, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 1415, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 350, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 350, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.Main_32MenuCode.GDLevel4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel4Objects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDLevel4Objects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLevel4Objects1[k] = gdjs.Main_32MenuCode.GDLevel4Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10562564);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLevel4Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectPositionYTween2("3", 420, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectPositionXTween2("2", 1440, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectWidthTween2("1", 300, "easeOutCubic", 0.25, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLevel4Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLevel4Objects1[i].getBehavior("Tween").addObjectHeightTween2("", 300, "easeOutCubic", 0.25, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Main_32MenuCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Main_32MenuCode.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects1Objects, "Physics2", gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMirrorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12186892);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_01.aac", false, 50, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Main_32MenuCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Main_32MenuCode.GDPortal1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBallObjects1Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPortal1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11709372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Main_32MenuCode.GDPortal2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Laser effect (1).aac", false, 75, 1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBallObjects1[i].setPosition((( gdjs.Main_32MenuCode.GDPortal2Objects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDPortal2Objects1[0].getPointX("")),(( gdjs.Main_32MenuCode.GDPortal2Objects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDPortal2Objects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9424404);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Main_32MenuCode.GDBallObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Sea Of Sound.ogg", true, 5, 1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(gdjs.Main_32MenuCode.GDBallObjects1[i].getBehavior("Physics2").getLinearVelocityX() + (500));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDReflectTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDReflectTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel2Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel2Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel3Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel3Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel4Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel4Objects2.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;
gdjs.Main_32MenuCode.GDMirrorObjects1.length = 0;
gdjs.Main_32MenuCode.GDMirrorObjects2.length = 0;
gdjs.Main_32MenuCode.GDPortal1Objects1.length = 0;
gdjs.Main_32MenuCode.GDPortal1Objects2.length = 0;
gdjs.Main_32MenuCode.GDPortal2Objects1.length = 0;
gdjs.Main_32MenuCode.GDPortal2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDReflectTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDReflectTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel2Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel2Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel3Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel3Objects2.length = 0;
gdjs.Main_32MenuCode.GDLevel4Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel4Objects2.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDHowToPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects2.length = 0;
gdjs.Main_32MenuCode.GDBallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBallObjects2.length = 0;
gdjs.Main_32MenuCode.GDMirrorObjects1.length = 0;
gdjs.Main_32MenuCode.GDMirrorObjects2.length = 0;
gdjs.Main_32MenuCode.GDPortal1Objects1.length = 0;
gdjs.Main_32MenuCode.GDPortal1Objects2.length = 0;
gdjs.Main_32MenuCode.GDPortal2Objects1.length = 0;
gdjs.Main_32MenuCode.GDPortal2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
