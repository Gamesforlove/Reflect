gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.forEachIndex2 = 0;

gdjs.TutorialCode.forEachObjects2 = [];

gdjs.TutorialCode.forEachTemporary2 = null;

gdjs.TutorialCode.forEachTotalCount2 = 0;

gdjs.TutorialCode.GDGreyBlockObjects1= [];
gdjs.TutorialCode.GDGreyBlockObjects2= [];
gdjs.TutorialCode.GDBackgroundObjects1= [];
gdjs.TutorialCode.GDBackgroundObjects2= [];
gdjs.TutorialCode.GDLaserShooterObjects1= [];
gdjs.TutorialCode.GDLaserShooterObjects2= [];
gdjs.TutorialCode.GDBallObjects1= [];
gdjs.TutorialCode.GDBallObjects2= [];
gdjs.TutorialCode.GDMirrorObjects1= [];
gdjs.TutorialCode.GDMirrorObjects2= [];
gdjs.TutorialCode.GDTrophyObjects1= [];
gdjs.TutorialCode.GDTrophyObjects2= [];
gdjs.TutorialCode.GDYouWinTextObjects1= [];
gdjs.TutorialCode.GDYouWinTextObjects2= [];
gdjs.TutorialCode.GDStarObjects1= [];
gdjs.TutorialCode.GDStarObjects2= [];
gdjs.TutorialCode.GDDragTextObjects1= [];
gdjs.TutorialCode.GDDragTextObjects2= [];
gdjs.TutorialCode.GDDragText2Objects1= [];
gdjs.TutorialCode.GDDragText2Objects2= [];


gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects2});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDLaserShooterObjects2Objects = Hashtable.newFrom({"LaserShooter": gdjs.TutorialCode.GDLaserShooterObjects2});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.TutorialCode.GDLaserShooterObjects1 */

for (gdjs.TutorialCode.forEachIndex2 = 0;gdjs.TutorialCode.forEachIndex2 < gdjs.TutorialCode.GDLaserShooterObjects1.length;++gdjs.TutorialCode.forEachIndex2) {
gdjs.copyArray(gdjs.TutorialCode.GDBallObjects1, gdjs.TutorialCode.GDBallObjects2);

gdjs.TutorialCode.GDLaserShooterObjects2.length = 0;


gdjs.TutorialCode.forEachTemporary2 = gdjs.TutorialCode.GDLaserShooterObjects1[gdjs.TutorialCode.forEachIndex2];
gdjs.TutorialCode.GDLaserShooterObjects2.push(gdjs.TutorialCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDLaserShooterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityAngle((( gdjs.TutorialCode.GDLaserShooterObjects2.length === 0 ) ? 0 :gdjs.TutorialCode.GDLaserShooterObjects2[0].getAngle()) - 90, 500);
}
}}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.TutorialCode.GDGreyBlockObjects1});
gdjs.TutorialCode.mapOfEmptyGDBallObjects = Hashtable.newFrom({"Ball": []});
gdjs.TutorialCode.asyncCallback10887044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TutorialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.TutorialCode.localVariables.length = 0;
}
gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.TutorialCode.asyncCallback10887044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.TutorialCode.GDTrophyObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.TutorialCode.GDStarObjects1});
gdjs.TutorialCode.asyncCallback9905172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TutorialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.TutorialCode.localVariables.length = 0;
}
gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.TutorialCode.asyncCallback9905172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.TutorialCode.GDBallObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDLaserShooterObjects1Objects = Hashtable.newFrom({"LaserShooter": gdjs.TutorialCode.GDLaserShooterObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.TutorialCode.GDTrophyObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.TutorialCode.GDGreyBlockObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.TutorialCode.GDMirrorObjects1});
gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.TutorialCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.TutorialCode.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBackgroundObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].setPosition(0,540);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects1[i].getBehavior("Resizable").setSize(20, 20);
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, 60, 60, 30, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].setZOrder(gdjs.TutorialCode.GDYouWinTextObjects1[i].getZOrder() + (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9860492);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sea Of Sound.ogg", true, 15, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_06.aac", false, 90, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11541940);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].activateBehavior("Physics2", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].activateBehavior("Physics2", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11539876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.TutorialCode.GDLaserShooterObjects1);
gdjs.TutorialCode.GDBallObjects1.length = 0;

{for(var i = 0, len = gdjs.TutorialCode.GDLaserShooterObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDLaserShooterObjects1[i].getBehavior("FireBullet").Fire((gdjs.TutorialCode.GDLaserShooterObjects1[i].getPointX("")), (gdjs.TutorialCode.GDLaserShooterObjects1[i].getPointY("")), gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TutorialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12043716);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.TutorialCode.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].setAngle(45);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.TutorialCode.GDGreyBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDGreyBlockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TutorialCode.mapOfEmptyGDBallObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.TutorialCode.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].getBehavior("Text").setText("Tutorial Failed!");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.TutorialCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDBallObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDBallObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDBallObjects1[k] = gdjs.TutorialCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.TutorialCode.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11105212);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.TutorialCode.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8545348);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDStarObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 9.aac", false, 55, 1.01);
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8545108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.TutorialCode.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Complete_02.aac", false, 85, 0.99);
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].getBehavior("Text").setText("Tutorial Complete!");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.TutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11109732);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].setAngle(gdjs.TutorialCode.GDMirrorObjects1[i].getAngle() + (90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDMirrorObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDMirrorObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDMirrorObjects1[k] = gdjs.TutorialCode.GDMirrorObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDMirrorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DragText"), gdjs.TutorialCode.GDDragTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DragText2"), gdjs.TutorialCode.GDDragText2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_09.wav", false, 100, gdjs.randomFloatInRange(0.9, 1.1));
}{for(var i = 0, len = gdjs.TutorialCode.GDDragTextObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDDragTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDDragText2Objects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDDragText2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.TutorialCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDBallObjects1Objects, "Physics2", gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9838092);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_01.aac", false, 50, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.TutorialCode.GDGreyBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.TutorialCode.GDLaserShooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.TutorialCode.GDTrophyObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].separateFromObjectsList(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDLaserShooterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].separateFromObjectsList(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDTrophyObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].separateFromObjectsList(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].separateFromObjectsList(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDGreyBlockObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.TutorialCode.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_9546TutorialCode_9546GDMirrorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDMirrorObjects1[i].putAroundObject(gdjs.TutorialCode.GDMirrorObjects1[i], 75, gdjs.randomInRange(0, 360));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDGreyBlockObjects1.length = 0;
gdjs.TutorialCode.GDGreyBlockObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDLaserShooterObjects1.length = 0;
gdjs.TutorialCode.GDLaserShooterObjects2.length = 0;
gdjs.TutorialCode.GDBallObjects1.length = 0;
gdjs.TutorialCode.GDBallObjects2.length = 0;
gdjs.TutorialCode.GDMirrorObjects1.length = 0;
gdjs.TutorialCode.GDMirrorObjects2.length = 0;
gdjs.TutorialCode.GDTrophyObjects1.length = 0;
gdjs.TutorialCode.GDTrophyObjects2.length = 0;
gdjs.TutorialCode.GDYouWinTextObjects1.length = 0;
gdjs.TutorialCode.GDYouWinTextObjects2.length = 0;
gdjs.TutorialCode.GDStarObjects1.length = 0;
gdjs.TutorialCode.GDStarObjects2.length = 0;
gdjs.TutorialCode.GDDragTextObjects1.length = 0;
gdjs.TutorialCode.GDDragTextObjects2.length = 0;
gdjs.TutorialCode.GDDragText2Objects1.length = 0;
gdjs.TutorialCode.GDDragText2Objects2.length = 0;

gdjs.TutorialCode.eventsList4(runtimeScene);
gdjs.TutorialCode.GDGreyBlockObjects1.length = 0;
gdjs.TutorialCode.GDGreyBlockObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDLaserShooterObjects1.length = 0;
gdjs.TutorialCode.GDLaserShooterObjects2.length = 0;
gdjs.TutorialCode.GDBallObjects1.length = 0;
gdjs.TutorialCode.GDBallObjects2.length = 0;
gdjs.TutorialCode.GDMirrorObjects1.length = 0;
gdjs.TutorialCode.GDMirrorObjects2.length = 0;
gdjs.TutorialCode.GDTrophyObjects1.length = 0;
gdjs.TutorialCode.GDTrophyObjects2.length = 0;
gdjs.TutorialCode.GDYouWinTextObjects1.length = 0;
gdjs.TutorialCode.GDYouWinTextObjects2.length = 0;
gdjs.TutorialCode.GDStarObjects1.length = 0;
gdjs.TutorialCode.GDStarObjects2.length = 0;
gdjs.TutorialCode.GDDragTextObjects1.length = 0;
gdjs.TutorialCode.GDDragTextObjects2.length = 0;
gdjs.TutorialCode.GDDragText2Objects1.length = 0;
gdjs.TutorialCode.GDDragText2Objects2.length = 0;


return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
