gdjs.Level_323Code = {};
gdjs.Level_323Code.localVariables = [];
gdjs.Level_323Code.forEachIndex2 = 0;

gdjs.Level_323Code.forEachObjects2 = [];

gdjs.Level_323Code.forEachTemporary2 = null;

gdjs.Level_323Code.forEachTotalCount2 = 0;

gdjs.Level_323Code.GDGreyBlockObjects1= [];
gdjs.Level_323Code.GDGreyBlockObjects2= [];
gdjs.Level_323Code.GDBackgroundObjects1= [];
gdjs.Level_323Code.GDBackgroundObjects2= [];
gdjs.Level_323Code.GDLaserShooterObjects1= [];
gdjs.Level_323Code.GDLaserShooterObjects2= [];
gdjs.Level_323Code.GDBallObjects1= [];
gdjs.Level_323Code.GDBallObjects2= [];
gdjs.Level_323Code.GDMirrorObjects1= [];
gdjs.Level_323Code.GDMirrorObjects2= [];
gdjs.Level_323Code.GDTrophyObjects1= [];
gdjs.Level_323Code.GDTrophyObjects2= [];
gdjs.Level_323Code.GDYouWinTextObjects1= [];
gdjs.Level_323Code.GDYouWinTextObjects2= [];
gdjs.Level_323Code.GDPortal1Objects1= [];
gdjs.Level_323Code.GDPortal1Objects2= [];
gdjs.Level_323Code.GDPortal2Objects1= [];
gdjs.Level_323Code.GDPortal2Objects2= [];
gdjs.Level_323Code.GDStarObjects1= [];
gdjs.Level_323Code.GDStarObjects2= [];


gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.Level_323Code.GDPortal1Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects = Hashtable.newFrom({"Portal2": gdjs.Level_323Code.GDPortal2Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects2});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects2Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_323Code.GDLaserShooterObjects2});
gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

};gdjs.Level_323Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Level_323Code.GDLaserShooterObjects1 */

for (gdjs.Level_323Code.forEachIndex2 = 0;gdjs.Level_323Code.forEachIndex2 < gdjs.Level_323Code.GDLaserShooterObjects1.length;++gdjs.Level_323Code.forEachIndex2) {
gdjs.copyArray(gdjs.Level_323Code.GDBallObjects1, gdjs.Level_323Code.GDBallObjects2);

gdjs.Level_323Code.GDLaserShooterObjects2.length = 0;


gdjs.Level_323Code.forEachTemporary2 = gdjs.Level_323Code.GDLaserShooterObjects1[gdjs.Level_323Code.forEachIndex2];
gdjs.Level_323Code.GDLaserShooterObjects2.push(gdjs.Level_323Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects2Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityAngle((( gdjs.Level_323Code.GDLaserShooterObjects2.length === 0 ) ? 0 :gdjs.Level_323Code.GDLaserShooterObjects2[0].getAngle()) - 90, 500);
}
}}
}

}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_323Code.GDGreyBlockObjects1});
gdjs.Level_323Code.mapOfEmptyGDBallObjects = Hashtable.newFrom({"Ball": []});
gdjs.Level_323Code.asyncCallback11969148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_323Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.Level_323Code.localVariables.length = 0;
}
gdjs.Level_323Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_323Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level_323Code.asyncCallback11969148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_323Code.GDTrophyObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Level_323Code.GDStarObjects1});
gdjs.Level_323Code.asyncCallback11976236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_323Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.Level_323Code.localVariables.length = 0;
}
gdjs.Level_323Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_323Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level_323Code.asyncCallback11976236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_323Code.GDLaserShooterObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_323Code.GDTrophyObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_323Code.GDGreyBlockObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.Level_323Code.GDPortal1Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects = Hashtable.newFrom({"Portal2": gdjs.Level_323Code.GDPortal2Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_323Code.GDLaserShooterObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_323Code.GDTrophyObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_323Code.GDGreyBlockObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects = Hashtable.newFrom({"Portal2": gdjs.Level_323Code.GDPortal2Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_323Code.GDLaserShooterObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_323Code.GDTrophyObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_323Code.GDGreyBlockObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.Level_323Code.GDPortal1Objects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_323Code.GDMirrorObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_323Code.GDBallObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.Level_323Code.GDPortal1Objects1});
gdjs.Level_323Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_323Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_323Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBackgroundObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].setPosition(0,540);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].getBehavior("Resizable").setSize(20, 20);
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects, 60, 60, 30, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, 60, 60, 30, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects, 60, 60, 30, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].setZOrder(gdjs.Level_323Code.GDYouWinTextObjects1[i].getZOrder() + (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11194476);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9707772);
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
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].activateBehavior("Physics2", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].activateBehavior("Physics2", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11971108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_323Code.GDLaserShooterObjects1);
gdjs.Level_323Code.GDBallObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_323Code.GDLaserShooterObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDLaserShooterObjects1[i].getBehavior("FireBullet").Fire((gdjs.Level_323Code.GDLaserShooterObjects1[i].getPointX("")), (gdjs.Level_323Code.GDLaserShooterObjects1[i].getPointY("")), gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level_323Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9423724);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_323Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].setAngle(45);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_323Code.GDGreyBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_323Code.mapOfEmptyGDBallObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_323Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].getBehavior("Text").setText("You Lose!");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level_323Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_323Code.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11971348);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Level_323Code.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11966164);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDStarObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDStarObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDStarObjects1[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11968116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_323Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Complete_02.aac", false, 85, 0.99);
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].getBehavior("Text").setText("You Win!");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level_323Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11968772);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].setAngle(gdjs.Level_323Code.GDMirrorObjects1[i].getAngle() + (90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDBallObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_323Code.GDBallObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDBallObjects1[k] = gdjs.Level_323Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDMirrorObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDMirrorObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDMirrorObjects1[k] = gdjs.Level_323Code.GDMirrorObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDMirrorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_09.wav", false, 100, gdjs.randomFloatInRange(0.9, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDPortal1Objects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDPortal1Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDPortal1Objects1[k] = gdjs.Level_323Code.GDPortal1Objects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDPortal1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_09.wav", false, 100, gdjs.randomFloatInRange(0.9, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDPortal2Objects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDPortal2Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDPortal2Objects1[k] = gdjs.Level_323Code.GDPortal2Objects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDPortal2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_09.wav", false, 100, gdjs.randomFloatInRange(0.9, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, "Physics2", gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11969652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_01.aac", false, 50, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_323Code.GDGreyBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_323Code.GDLaserShooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_323Code.GDTrophyObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_323Code.GDGreyBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_323Code.GDLaserShooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_323Code.GDTrophyObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal1Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal2Objects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_323Code.GDGreyBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_323Code.GDLaserShooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_323Code.GDTrophyObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLaserShooterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDTrophyObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDGreyBlockObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPortal2Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPortal2Objects1[i].separateFromObjectsList(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_323Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDMirrorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDMirrorObjects1[i].putAroundObject(gdjs.Level_323Code.GDMirrorObjects1[i], 75, gdjs.randomInRange(0, 360));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_323Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal1"), gdjs.Level_323Code.GDPortal1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDBallObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortal1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11269364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Portal2"), gdjs.Level_323Code.GDPortal2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Laser effect (1).aac", false, 75, 1);
}{for(var i = 0, len = gdjs.Level_323Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDBallObjects1[i].setPosition((( gdjs.Level_323Code.GDPortal2Objects1.length === 0 ) ? 0 :gdjs.Level_323Code.GDPortal2Objects1[0].getPointX("")),(( gdjs.Level_323Code.GDPortal2Objects1.length === 0 ) ? 0 :gdjs.Level_323Code.GDPortal2Objects1[0].getPointY("")));
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

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDGreyBlockObjects1.length = 0;
gdjs.Level_323Code.GDGreyBlockObjects2.length = 0;
gdjs.Level_323Code.GDBackgroundObjects1.length = 0;
gdjs.Level_323Code.GDBackgroundObjects2.length = 0;
gdjs.Level_323Code.GDLaserShooterObjects1.length = 0;
gdjs.Level_323Code.GDLaserShooterObjects2.length = 0;
gdjs.Level_323Code.GDBallObjects1.length = 0;
gdjs.Level_323Code.GDBallObjects2.length = 0;
gdjs.Level_323Code.GDMirrorObjects1.length = 0;
gdjs.Level_323Code.GDMirrorObjects2.length = 0;
gdjs.Level_323Code.GDTrophyObjects1.length = 0;
gdjs.Level_323Code.GDTrophyObjects2.length = 0;
gdjs.Level_323Code.GDYouWinTextObjects1.length = 0;
gdjs.Level_323Code.GDYouWinTextObjects2.length = 0;
gdjs.Level_323Code.GDPortal1Objects1.length = 0;
gdjs.Level_323Code.GDPortal1Objects2.length = 0;
gdjs.Level_323Code.GDPortal2Objects1.length = 0;
gdjs.Level_323Code.GDPortal2Objects2.length = 0;
gdjs.Level_323Code.GDStarObjects1.length = 0;
gdjs.Level_323Code.GDStarObjects2.length = 0;

gdjs.Level_323Code.eventsList4(runtimeScene);
gdjs.Level_323Code.GDGreyBlockObjects1.length = 0;
gdjs.Level_323Code.GDGreyBlockObjects2.length = 0;
gdjs.Level_323Code.GDBackgroundObjects1.length = 0;
gdjs.Level_323Code.GDBackgroundObjects2.length = 0;
gdjs.Level_323Code.GDLaserShooterObjects1.length = 0;
gdjs.Level_323Code.GDLaserShooterObjects2.length = 0;
gdjs.Level_323Code.GDBallObjects1.length = 0;
gdjs.Level_323Code.GDBallObjects2.length = 0;
gdjs.Level_323Code.GDMirrorObjects1.length = 0;
gdjs.Level_323Code.GDMirrorObjects2.length = 0;
gdjs.Level_323Code.GDTrophyObjects1.length = 0;
gdjs.Level_323Code.GDTrophyObjects2.length = 0;
gdjs.Level_323Code.GDYouWinTextObjects1.length = 0;
gdjs.Level_323Code.GDYouWinTextObjects2.length = 0;
gdjs.Level_323Code.GDPortal1Objects1.length = 0;
gdjs.Level_323Code.GDPortal1Objects2.length = 0;
gdjs.Level_323Code.GDPortal2Objects1.length = 0;
gdjs.Level_323Code.GDPortal2Objects2.length = 0;
gdjs.Level_323Code.GDStarObjects1.length = 0;
gdjs.Level_323Code.GDStarObjects2.length = 0;


return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;