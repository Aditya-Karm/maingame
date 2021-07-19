var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91738e92-ac43-41c1-b492-d5641b98a463","04cca4e1-81c8-4dd3-8c5d-e18ca2e865c6","8b4caeb2-ad6f-4ba1-baa2-c04c7f4c080e","0fde6460-6d1d-4f5b-a691-92fd208e39b3"],"propsByKey":{"91738e92-ac43-41c1-b492-d5641b98a463":{"name":"monstertruck_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W/category_vehicles/monstertruck_07.png","frameSize":{"x":396,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Nb_h4V4_vX3NM49nk9ph4U.3pbNeBu4W/category_vehicles/monstertruck_07.png"},"04cca4e1-81c8-4dd3-8c5d-e18ca2e865c6":{"name":"hammer_diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/SVJmMRQRrzs0QjAI_KGuviL0pPMG8Nyq/category_tools/hammer_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"SVJmMRQRrzs0QjAI_KGuviL0pPMG8Nyq","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SVJmMRQRrzs0QjAI_KGuviL0pPMG8Nyq/category_tools/hammer_diamond.png"},"8b4caeb2-ad6f-4ba1-baa2-c04c7f4c080e":{"name":"axe_iron_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4/category_tools/axe_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lwswqR_k2ZuI0Z.hjkd_s17PXirGHDJ4/category_tools/axe_iron.png"},"0fde6460-6d1d-4f5b-a691-92fd208e39b3":{"name":"knife_1","sourceUrl":"assets/api/v1/animation-library/gamelab/v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq/category_tools/knife.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v0ur50B5mERzgHnqxQKhGhuSD6ZndWkq/category_tools/knife.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(250,120,420,3);
  boundary2 = createSprite(250,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("monstertruck_07_1");
  sam.scale = 0.06;
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("knife_1");
  car1.scale = 0.25;
  car1.shapeColor = "red";
  car2 = createSprite(205,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("knife_1");
  car2.scale = 0.2;
  car3 = createSprite(340,245,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("knife_1");
  car3.scale = 0.25;
  car4 = createSprite(280,255,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("knife_1");
  car4.scale = 0.2;
  
 

  car1.velocityY = 3;
  car2.velocityY = 3;
  car3.velocityY = -3;
  car4.velocityY = -3;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
 
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
if(keyDown("right")){
    sam.x = sam.x + 4;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  
 if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
