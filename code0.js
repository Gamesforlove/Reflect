gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.forEachIndex2 = 0;

gdjs.Level_321Code.forEachObjects2 = [];

gdjs.Level_321Code.forEachTemporary2 = null;

gdjs.Level_321Code.forEachTotalCount2 = 0;

gdjs.Level_321Code.GDGreyBlockObjects1= [];
gdjs.Level_321Code.GDGreyBlockObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDLaserShooterObjects1= [];
gdjs.Level_321Code.GDLaserShooterObjects2= [];
gdjs.Level_321Code.GDBallObjects1= [];
gdjs.Level_321Code.GDBallObjects2= [];
gdjs.Level_321Code.GDMirrorObjects1= [];
gdjs.Level_321Code.GDMirrorObjects2= [];
gdjs.Level_321Code.GDTrophyObjects1= [];
gdjs.Level_321Code.GDTrophyObjects2= [];
gdjs.Level_321Code.GDYouWinTextObjects1= [];
gdjs.Level_321Code.GDYouWinTextObjects2= [];
gdjs.Level_321Code.GDStarObjects1= [];
gdjs.Level_321Code.GDStarObjects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaserShooterObjects2Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_321Code.GDLaserShooterObjects2});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDLaserShooterObjects1 */

for (gdjs.Level_321Code.forEachIndex2 = 0;gdjs.Level_321Code.forEachIndex2 < gdjs.Level_321Code.GDLaserShooterObjects1.length;++gdjs.Level_321Code.forEachIndex2) {
gdjs.copyArray(gdjs.Level_321Code.GDBallObjects1, gdjs.Level_321Code.GDBallObjects2);

gdjs.Level_321Code.GDLaserShooterObjects2.length = 0;


gdjs.Level_321Code.forEachTemporary2 = gdjs.Level_321Code.GDLaserShooterObjects1[gdjs.Level_321Code.forEachIndex2];
gdjs.Level_321Code.GDLaserShooterObjects2.push(gdjs.Level_321Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaserShooterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityAngle((( gdjs.Level_321Code.GDLaserShooterObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDLaserShooterObjects2[0].getAngle()) - 90, 500);
}
}}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_321Code.GDGreyBlockObjects1});
gdjs.Level_321Code.mapOfEmptyGDBallObjects = Hashtable.newFrom({"Ball": []});
gdjs.Level_321Code.asyncCallback11806548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.Level_321Code.localVariables.length = 0;
}
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level_321Code.asyncCallback11806548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_321Code.GDTrophyObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Level_321Code.GDStarObjects1});
gdjs.Level_321Code.asyncCallback11810492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}gdjs.Level_321Code.localVariables.length = 0;
}
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level_321Code.asyncCallback11810492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Level_321Code.GDBallObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaserShooterObjects1Objects = Hashtable.newFrom({"LaserShooter": gdjs.Level_321Code.GDLaserShooterObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level_321Code.GDTrophyObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGreyBlockObjects1Objects = Hashtable.newFrom({"GreyBlock": gdjs.Level_321Code.GDGreyBlockObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects = Hashtable.newFrom({"Mirror": gdjs.Level_321Code.GDMirrorObjects1});
gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_321Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_321Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBackgroundObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].setPosition(0,540);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].getBehavior("Resizable").setSize(20, 20);
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, 60, 60, 30, 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].setZOrder(gdjs.Level_321Code.GDYouWinTextObjects1[i].getZOrder() + (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11797532);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11799900);
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
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].activateBehavior("Draggable", true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].activateBehavior("Physics2", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].activateBehavior("Physics2", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11802388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_321Code.GDLaserShooterObjects1);
gdjs.Level_321Code.GDBallObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDLaserShooterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLaserShooterObjects1[i].getBehavior("FireBullet").Fire((gdjs.Level_321Code.GDLaserShooterObjects1[i].getPointX("")), (gdjs.Level_321Code.GDLaserShooterObjects1[i].getPointY("")), gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11804276);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_321Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].setAngle(45);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_321Code.GDGreyBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGreyBlockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfEmptyGDBallObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_321Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].getBehavior("Text").setText("You Lose!");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDBallObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDBallObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDBallObjects1[k] = gdjs.Level_321Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_321Code.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11807652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBallObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Level_321Code.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11808884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDStarObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDStarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStarObjects1[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11810156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWinText"), gdjs.Level_321Code.GDYouWinTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Complete_02.aac", false, 85, 0.99);
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].getBehavior("Text").setText("You Win!");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDYouWinTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDYouWinTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11811604);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].setAngle(gdjs.Level_321Code.GDMirrorObjects1[i].getAngle() + (90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMirrorObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMirrorObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMirrorObjects1[k] = gdjs.Level_321Code.GDMirrorObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMirrorObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Walk_09.wav", false, 100, gdjs.randomFloatInRange(0.9, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBallObjects1Objects, "Physics2", gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11813236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_01.aac", false, 50, gdjs.randomFloatInRange(0.95, 1.05));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyBlock"), gdjs.Level_321Code.GDGreyBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaserShooter"), gdjs.Level_321Code.GDLaserShooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level_321Code.GDTrophyObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLaserShooterObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDTrophyObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDGreyBlockObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mirror"), gdjs.Level_321Code.GDMirrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMirrorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDMirrorObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDMirrorObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMirrorObjects1[i].putAroundObject(gdjs.Level_321Code.GDMirrorObjects1[i], 75, gdjs.randomInRange(0, 360));
}
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDGreyBlockObjects1.length = 0;
gdjs.Level_321Code.GDGreyBlockObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDLaserShooterObjects1.length = 0;
gdjs.Level_321Code.GDLaserShooterObjects2.length = 0;
gdjs.Level_321Code.GDBallObjects1.length = 0;
gdjs.Level_321Code.GDBallObjects2.length = 0;
gdjs.Level_321Code.GDMirrorObjects1.length = 0;
gdjs.Level_321Code.GDMirrorObjects2.length = 0;
gdjs.Level_321Code.GDTrophyObjects1.length = 0;
gdjs.Level_321Code.GDTrophyObjects2.length = 0;
gdjs.Level_321Code.GDYouWinTextObjects1.length = 0;
gdjs.Level_321Code.GDYouWinTextObjects2.length = 0;
gdjs.Level_321Code.GDStarObjects1.length = 0;
gdjs.Level_321Code.GDStarObjects2.length = 0;

gdjs.Level_321Code.eventsList4(runtimeScene);
gdjs.Level_321Code.GDGreyBlockObjects1.length = 0;
gdjs.Level_321Code.GDGreyBlockObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDLaserShooterObjects1.length = 0;
gdjs.Level_321Code.GDLaserShooterObjects2.length = 0;
gdjs.Level_321Code.GDBallObjects1.length = 0;
gdjs.Level_321Code.GDBallObjects2.length = 0;
gdjs.Level_321Code.GDMirrorObjects1.length = 0;
gdjs.Level_321Code.GDMirrorObjects2.length = 0;
gdjs.Level_321Code.GDTrophyObjects1.length = 0;
gdjs.Level_321Code.GDTrophyObjects2.length = 0;
gdjs.Level_321Code.GDYouWinTextObjects1.length = 0;
gdjs.Level_321Code.GDYouWinTextObjects2.length = 0;
gdjs.Level_321Code.GDStarObjects1.length = 0;
gdjs.Level_321Code.GDStarObjects2.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
