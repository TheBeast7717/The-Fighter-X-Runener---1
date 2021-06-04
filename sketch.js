// Game States  and game modes
//States
var preplay,instruction,end;
var gameState = "preplay";

//Modes
var woodMode,countryMode,neonMode;
var gameMode = "neutral";

// Mode for shooting bullets 
var unlimitedAmmo,unlimitedAmmoImage,unlimitedAmmoGroup;
ammoMode = "limited";
ammoMeter = 330;
pwAmmoDetecter = "neutral";
var unlimitedAmmoCollectSound;




// Buttons , content Holders
// Holders
var woodHolder,woodHolderImage,woodText,woodTextImage,  countryHolder,countryHolderImage,countryText,countryTextImage,   neonHolder,neonHolderImage,neonText,neonTextImage;

// Headings
var backgroundImage;
var gameTitle,gameTitleImage;




// Buttons
var startButton,startButtonImage;
var instruction,instructionImage;
var instructionBg,instructionBgImage;
var restartButton,restartButtonImage;
var backButton,backButtonImage;
var page2Button,page2ButtonImage;

var inputButton;

//Boundaries/edges/collison detecters
var boundaryUp,boundaryDown;

var collisionPath;

var spawnSetter;// Gives a reference point to the correct spawning of elements

// The last detecter to detect if any creature is missed from being killed
var missCreatureDetecter;
var missCreatureSetter;
var missCreatureNumber = 1;



// Game Characters
var swatFighter,swatFighterRun,swatFighterJumpSound,swatFighterHurtSound;
var swatLife = 100;
var pwLife;

// Backgrounds for different game modes
var introMusic;
var woodBg , woodBgMusic;
var countryBg , countryBgMusic;
var neonBg , neonBgMusic;

// Game elements
var bullet1,bullet1Image  , bullet1Group;
var bulletNumber = 12;
var reloadBulletSound;
var emptyGunSound;
var sfPreDetecter;
var sfHurtDetecter;
var sfHurt = 1;
var healthBar,healthBarImage4,healthBarImage3,healthBarImage2,healthBarImage1;
var healthDetecter3 = swatLife/1.3;
var healthDetecter2 = swatLife/2;
var healthDetecter1 = swatLife/10;


// game elements containing numeric values
var spaceCounter = 2;

var distance = 0;

var creaturesKilled = 0;

// Enemies that can be killed and can kill
// Spider related
var spider,spiderRun,spiderAttack,spiderDie    , spiderGroup;
var spiderDieMeter = 5;
// Sg Gaurd(StoneGaurd) related
var sgGaurd,sgGaurdRun,sgGaurdAttack,sgGaurdDie  , sgGaurdGroup;
var sgGaurdDieMeter = 10;
var sgGaurdHit1,sgGaurdHit2;

// fZombie(Femal Zombie) related
var fZombie,fZombieRun,fZombieAttack,fZombieDie  , fZombieGroup;
var fZombieDieMeter = 5;

// mZombie(Male Zombie) related
var mZombie,mZombieRun,mZombieAttack,mZombieDie  , mZombieGroup;
var mZombieDieMeter =  5;

// bigDino related 
var bigDino,bigDinoGroup;
var bigDinoRun,bigDinoAttack;
bigDinoDieMeter = 25;
var bigDinoSpawnSound1,bigDinoSpawnSound2;

// Obstacles related for different modes
var obstaclePlant,obstaclePlant1Image,obstaclePlant2Image ,  obstaclePlantGroup;
var obstaclePlantDieSound;

var countryObstacle,countryObstacle1Image,countryObstacle2Image , countryObstacleGroup;
var countryObstacleDieSound;

var neonObstacle,neonObstacle1Image,neonObstacle2Image , neonObstacleGroup;
var neonObstacleDieSound;


// Power Ups in the game
var pwLife,pwLifeImage,pwLifeGroup,pwLifeSound;
var pwArrowX,pwArrowXImage,pwArrowXGroup,pwArrowContainer,pwArrowContainerImage;
var pwArrowXContGroup;
var pwArrowXMode = "off";
var PwArrowTimer = 100;
var pwArrowXSound;

// Images related to display 
var infiniteSymbol,infiniteSymbolImage;
var infiniteSymbolWhite,infiniteSymbolWhiteImage;














// Sound used in the game
var bulletShootSound;
var reloadBulletGroup;
var spiderSpawnSound,sgGaurdSpawnSound,zombieSpawnSound;
var zombieDieSound,sgGaurdDieSound,spiderDieSound;
var startSound,clickSound;
var bulletStrikeSound;

var endSound1,endScreen,endScreenImage;













function preload(){
  // State Holders - woods, country side and neon 
  woodHolderImage = loadImage("BG Woods @ Fighter X Runner.jpg");
  woodTextImage = loadImage("Fixed_Text_Woods-removebg-preview.png");

  countryHolderImage = loadImage("BG countrySide scrolling background @ Fighter X Runner.jpg");
  countryTextImage = loadImage("Fixed_Text_Country__Side-removebg-preview.png");

  neonHolderImage = loadImage("BG Neon background @ Fighter X Runner.jpg");
  neonTextImage = loadImage("Fixed_Text_Neon-removebg-preview.png");

  // Heading Images
  backgroundImage = loadImage("Background for preplay.jpg");
  gameTitleImage = loadImage("Game_Title___Fighter_X_Runner-removebg-preview.png");


  // Buttons Image
  startButtonImage = loadImage("Button Start_Image___Fighter_X_Runner-removebg-preview.png");
  restartButtonImage = loadImage("Button_Restart_Image___Fighter_X_Runner-removebg-preview-removebg-preview.png");
  instructionImage = loadImage("Button_Instructions_Image-removebg-preview 2.png");
  instructionBgImage = loadImage("Ins bg 2.jpeg");
  backButtonImage = loadImage("Button_Back_Image___Fighter_X_Runner-removebg-preview.png");
  page2ButtonImage = loadImage("BUTTON_right_arrow_image-removebg-preview.png");

  //Swat fighters running animation
  swatFighterRun = loadAnimation("SWAT_commander-2-removebg-preview.png","SWAT_commander-3-removebg-preview.png","SWAT_commander-4-removebg-preview.png","SWAT_commander_-1-removebg-preview.png");

  //Game Elements image
  bullet1Image = loadImage("GE bullet1-removebg-preview.png");

  reloadBulletImage = loadImage("PW Ammo_reload_Image-removebg-preview (1).png");


  // Loading enemies animation and images as well as sounds
  //Spider related
  spiderRun = loadImage("ENM SpiderRun Fighter X Runner_prev_ui(f).png");
  spiderAttack = loadImage("ENM SpiderAttack Fighter X Runner(f)_prev_ui.png");
  //spiderDie = loadImage("ENM SpiderDie_Fighter_X_Runner-removebg-preview.png");

  // Sg Gaurd related
  sgGaurdRun = loadAnimation("ENM Sg_Move_1-removebg-preview.png","ENM Sg_Move_2-removebg-preview.png","ENM Sg_Move_3-removebg-preview.png");
  sgGaurdAttack = loadImage("ENM Sg_Attack_1-removebg-preview.png");
  sgGaurdDie = loadImage("ENM Sg_Die_1-removebg-preview.png");
  sgGaurdHit1 = loadSound("SOUND hit 1.mp3");
  sgGaurdHit2 = loadSound("SOUND hit 2.mp3")

  //fZombie related
  fZombieRun = loadAnimation("ENM FZMove1_FZ-removebg-preview.png","ENM FZMove2_FZ-removebg-preview.png","ENM FZMove3_FZ-removebg-preview.png");
  fZombieAttack = loadImage("ENM FZAttack1_FZ-removebg-preview.png");
  fZombieDie = loadImage("ENM FZDie_FZ-removebg-preview.png");

  // mZombie related
  mZombieRun = loadAnimation("ENM MZmZombie_move_1-removebg-preview.png","ENM MZmZombie_move_2-removebg-preview.png","ENM MZmZombie_move_3-removebg-preview.png");
  mZombieAttack = loadAnimation("ENM MZMale_Zombie__Attack_1-removebg-preview.png","ENM MZMale_Zombie__Attack_2-removebg-preview.png");
  mZombieDie = loadImage("ENM MZMale_Zombie_Die_1-removebg-preview.png");

  // Loading the images of the obstacles of different modes
  // Woods obstacle
  obstaclePlant1Image = loadImage("OBS ENM_Woods_obstacle_1-removebg-preview.png");
  obstaclePlant2Image = loadImage("OBS ENM_Woods_obstacle_2-removebg-preview.png");

  // Country obstacle
  countryObstacle1Image = loadImage("OBS ENM_CountrySide_obstacle_1-removebg-preview.png");
  countryObstacle2Image = loadImage("OBS ENM_CountrySide_obstacle_2-removebg-preview.png");

  // Neon obstacle
  neonObstacle1Image = loadImage("OBS ENM_Neon_obstacle_1-removebg-preview.png");
  neonObstacle2Image = loadImage("OBS ENM_Neon_obstacle_2-removebg-preview.png");

  // Loading the health Bar Images
  healthBarImage4 = loadImage("Health_Bar__SF___4-removebg-preview.png");
  healthBarImage3 = loadImage("Health_Bar__SF__3-removebg-preview.png");
  healthBarImage2 = loadImage("Health_Bar__SF__2-removebg-preview.png");
  healthBarImage1 = loadImage("Health_Bar__SF__1-removebg-preview.png");

  endScreenImage = loadImage("End Background.jpg");

  // Images related to power ups
  pwLifeImage = loadImage("PWLife_images-removebg-preview.png");

  unlimitedAmmoImage = loadImage("Pw Infinite Bullet.png");

  pwArrowXImage = loadImage("PW_ArrowX_multi_killer-removebg-preview1.png");


  // Images to related to display
  infiniteSymbolImage = loadImage("Infinity_Image_for_unlimited_pw-removebg-preview.png");
  infiniteSymbolWhiteImage = loadImage("White_infinite_symbol-removebg-preview.png");

  pwArrowContainerImage = loadImage("Pw ArrowX infinite.png")


  







  // Sounds
  bulletShootSound = loadSound("SOUND Bullet Shooting Sound.mp3");
  reloadBulletSound = loadSound("SOUND Gun Reload Sound.mp3");
  emptyGunSound = loadSound("SOUND Empty gun sound.wav");
  unlimitedAmmoCollectSound = loadSound("PW unlimted bullet collect sound.mp3");

  swatFighterJumpSound = loadSound("SWAT Jump sound.mp3");

  spiderSpawnSound = loadSound("SOUND Spider Spawn Sound.mp3");
  sgGaurdSpawnSound = loadSound("SOUND SgGaurd Spawn Sound.mp3");
  zombieSpawnSound = loadSound("SOUND Zombie Spawn Sound.mp3");

  zombieDieSound = loadSound("SOUND Zombie Die Sound.mp3");
  sgGaurdDieSound = loadSound("SOUND Sg Gaurd Die Sound.mp3");
  spiderDieSound  = loadSound("SOUND Spider Die Sound.mp3");

  obstaclePlantDieSound = loadSound("OBS ENM  Woods obstacle die sound.mp3");
  neonObstacleDieSound = loadSound("OBS ENM  Neon obstacle die sound.mp3");
  countryObstacleDieSound = loadSound("OBS ENM Countrysid obstacle die sound 2.mp3");
 

  bigDinoRun = loadAnimation("dino_move_1-removebg-preview.png","dino_move_2-removebg-preview.png","dino_move_3-removebg-preview.png","dino_move_4-removebg-preview.png","dino_move_5-removebg-preview.png");
  bigDinoAttack = loadImage("dino_attack_1-removebg-preview.png");


  startSound = loadSound("SOUND Start Intro Sound.mp3");

  endSound1 = loadSound("SOUND End Sound.mp3");

  clickSound = loadSound("SOUND Click Sound.mp3");


  swatFighterHurtSound = loadSound("SOUND Swat touching sound (mp3cut.net).wav");
 

 
  introMusic = loadSound("SOUND Intro Action_Decisive_Move.mp3");

  woodBgMusic = loadSound("SOUND Bg Music 2 Woods Bg Music.mp3");

  countryBgMusic = loadSound("SOUND Bg Music 3 Country Bg Music.mp3");
 
  neonBgMusic = loadSound("SOUND Bg Music 1 Soft_and_Furious_-_05_-_Through_the_water_and_rain.mp3");

  // Power up(PW) related sound
  pwLifeSound = loadSound("SOUND PW LIFE GAIN.mp3");

  pwArrowXSound = loadSound("SOUND pwArroxSpawn sound.mp3");

  bulletStrikeSound = loadSound("SOUND bullet struck sound.mp3");

  bigDinoSpawnSound1 = loadSound("SOUND dino spawn sound 1.mp3");
  bigDinoSpawnSound2 = loadSound("SOUND dino spawn sound2.mp3");




}








function setup() {
  createCanvas(windowWidth,windowHeight);

  

  
  // Creating the nameInput
  //nameInput = prompt("What is your Good Name :","user123") ;

  introMusic.play();
  introMusic.loop();

  //Creating the game modes backgrounds
  //Woods Bg
  woodBg = createSprite(windowWidth/2,windowHeight/2);
  woodBg.addImage(woodHolderImage);
  woodBg.visible = false;

  //Countryside Bg
  countryBg = createSprite(windowWidth/1.94,windowHeight/2.3);
  countryBg.addImage(countryHolderImage);
  countryBg.visible = false;

  //Neon bg
  neonBg = createSprite(windowWidth/2,windowHeight/2);
  neonBg.addImage(neonHolderImage);
  neonBg.visible = false;





  // Creating the state holders
  //Wood holder related 
  woodHolder = createSprite(windowWidth/7,windowHeight/1.3);
  woodHolder.addImage(woodHolderImage);
  woodHolder.scale = 0.35;

  woodText = createSprite(woodHolder.x,woodHolder.y);
  woodText.addImage(woodTextImage);
  woodText.scale = 0.7;


  //Country holder related
  countryHolder = createSprite(windowWidth/2,windowHeight/1.3);
  countryHolder.addImage(countryHolderImage);
  countryHolder.scale = 0.39;

  countryText = createSprite(countryHolder.x,countryHolder.y-10);
  countryText.addImage(countryTextImage);
  countryText.scale = 0.67;


  //Neon holder related
  neonHolder = createSprite(windowWidth/1.25,windowHeight/1.3);
  neonHolder.addImage(neonHolderImage);
  neonHolder.scale = 0.34;

  neonText = createSprite(neonHolder.x,neonHolder.y);
  neonText.addImage(neonTextImage);
  neonText.scale = 0.67;




  // Creating the headings
  gameTitle = createSprite(windowWidth/2,windowHeight/8);
  gameTitle.addImage(gameTitleImage);
  gameTitle.scale = 0.8;


  // Creating the spawn setter
  spawnSetter = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight/2);
  spawnSetter.visible = false;
  




  // Creating the Buttons

  //Start button related
  startButton = createSprite(windowWidth/2,windowHeight/2.2);
  startButton.addImage(startButtonImage);
  startButton.scale = 0.7;

  //Instruction button related
  instruction = createSprite(windowWidth/1.06,windowHeight/10);
  instruction.addImage(instructionImage);
  instruction.scale = 0.25;




  


  //Creating the swat fighter
  swatFighter = createSprite(windowWidth/10,windowHeight/1.7);
  swatFighter.addAnimation("running",swatFighterRun);
  swatFighter.visible = false;
  //swatFighter.debug = true;
  swatFighter.setCollider("rectangle",-110,0,200,swatFighter.height);

  // Creating the pre detecter of swat fighter
  sfPreDetecter = createSprite(swatFighter.x,swatFighter.y,10,80);
  sfPreDetecter.visible = false;

  // Creating the hurt detecter to detect the touch and to play the hurt sound
  sfHurtDetecter = createSprite(swatFighter.x-200,swatFighter.y,10,100);
  sfHurtDetecter.visible = false;
  

  // Creating the platform for the collision of swat fighter
  collisionPath = createSprite(windowWidth/2,windowHeight/1.19,windowWidth,10);
  collisionPath.visible = false;


  // Creating the collision boundaries
  //UP
  boundaryUp = createSprite(windowWidth/2,windowHeight/2,windowWidth,20);
  boundaryUp.visible = false;

  //Down
  boundaryDown = createSprite(windowWidth/2,windowHeight/1,windowWidth,20);
  boundaryDown.visible = false;

  // Creating the health bar
  healthBar = createSprite(windowWidth/12,windowHeight/13.5);
  healthBar.addImage("4",healthBarImage4);
  healthBar.addImage("3",healthBarImage3);
  healthBar.addImage("2",healthBarImage2);
  healthBar.addImage("1",healthBarImage1);
  healthBar.scale = 0.15;
  healthBar.visible = false;

  // Creating the end state image
  endScreen = createSprite(windowWidth/2,windowHeight/2.9);
  endScreen.addImage(endScreenImage);
  endScreen.scale = 0.76;
  endScreen.visible = false;

  // Restart Button 
  restartButton = createSprite(windowWidth/2,windowHeight/1.6);
  restartButton.addImage(restartButtonImage);
  restartButton.visible = false;
  restartButton.scale = 0.7;

  instructionBg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  instructionBg.addImage(instructionBgImage);
  instructionBg.visible = false;
  instructionBg.scale = 4.5;

  // Back button when in instructions state
  backButton = createSprite(windowWidth/17,windowHeight/1.1);
  backButton.addImage(backButtonImage);
  backButton.scale = 0.39;
  backButton.visible = false;

  page2Button = createSprite(windowWidth/1.06,windowHeight/1.11);
  page2Button.addImage(page2ButtonImage);
  page2Button.scale = 0.29;





  // Creating the missed creature detecter
  missCreatureDetecter = createSprite(windowWidth-windowWidth,windowHeight/2,4,windowHeight);
  missCreatureDetecter.shapeColor = "red";
  missCreatureDetecter.visible = false;

  // Creating the miss creature setter;
  missCreatureSetter = createSprite(windowWidth-windowWidth-300,windowHeight/2,4,windowHeight);
  missCreatureSetter.shapeColor = "blue";
  missCreatureSetter.visible = false;

  
  // Creating the input button 
  // inputButton = createButton("Enter Username");
  // inputButton.position(windowWidth/20,windowHeight/10);
  //inputButton.mousePressed(enterUserName);

  nameButton = createButton("Enter Username");
  nameButton.position(windowWidth/20,windowHeight/10);
  nameButton.mousePressed(enterUsername);
  //nameButton.visible = false;

  // Creating images related to display
  infiniteSymbol = createSprite(windowWidth/6.2,windowHeight/6.9);
  infiniteSymbol.addImage(infiniteSymbolImage);
  infiniteSymbol.scale = 0.27;
  infiniteSymbol.visible = false;

  infiniteSymbolWhite = createSprite(windowWidth/6.2,windowHeight/6.9);
  infiniteSymbolWhite.addImage(infiniteSymbolWhiteImage);
  infiniteSymbolWhite.scale = 0.6;
  infiniteSymbolWhite.visible = false;

  
  

  


  // Creating groups for enemies
  spiderGroup = new Group();
  sgGaurdGroup = new Group();
  fZombieGroup = new Group();
  mZombieGroup = new Group();
  bigDinoGroup = new Group();

  bullet1Group = new Group();
  reloadBulletGroup = new Group();

  obstaclePlantGroup = new Group();
  countryObstacleGroup = new Group();
  neonObstacleGroup = new Group();

  pwLifeGroup= new Group();
  pwArrowXContGroup = new Group(); 
  pwArrowXGroup = new Group(); 

  unlimitedAmmoGroup = new Group();


  // Arrays to store data
  let randomPreName = Math.round(random(0,999));


  nameInput = prompt("Please enter your good name:- ","Commando"+randomPreName);

  

  alert("Hello "+nameInput+" sir!!                                                                   Hope you have a brave journey!! ");
  
  



  


  

 
  
}




function draw() {
  background(backgroundImage);

  
  drawSprites();

  // Name input's criteria
  if(nameInput==="null"){
    nameInput = "Commando789";
  }

  if(nameInput===null){
  nameInput = "Commando789";
  }

  



  // if(document.myform.w.value.split(' ').length > 5)
	// {
	// 	alert("words limit exceeded");
	// 	return false;
  // }



 // text("Commander Name:- "+nameInput);

  //introMusic.play();

 

   console.log(gameState);
  // console.log(gameMode);
  

  // Constant position of the pre detecter with reference to the swat fighter 
  sfPreDetecter.x = swatFighter.x+90;
  sfPreDetecter.y = swatFighter.y;

  // Constant position of the hurt detecter with reference to the swat fighter 
  sfHurtDetecter.x = swatFighter.x-150;
  sfHurtDetecter.y = swatFighter.y;

  

 



  // Clicking on woods mode in preplay
  

  if((gameMode==="woodMode")&&gameState==="preplay"){
    textSize(25);
    fill(145, 127, 35);
    text("Game Mode:- 'Woods'",windowWidth/15,windowHeight/2.5);

  }

  
  // Clicking on country mode in preplay
  

  if((gameMode==="countryMode")&&gameState==="preplay"){
    textSize(25);
    fill(25, 109, 145);
    text("Game Mode:- 'Country Side'",windowWidth/15,windowHeight/2.5);

  }


  // Clicking on neon mode in preplay
  

  if((gameMode==="neonMode")&&gameState==="preplay"){
    textSize(25);
    fill(80, 9, 222);
    text("Game Mode:- 'Neon'",windowWidth/15,windowHeight/2.5);
    

  }



  // Clicking on the StartButton after the selection of a game mode
  // When wood mode is on 
  if(mousePressedOver(startButton)&&gameMode==="woodMode"&&gameState==="preplay"){
    gameState = "woodState";

    
    

    startSound.play();
    introMusic.stop();

    woodBgMusic.play();
    woodBgMusic.setVolume(0.7);
    woodBgMusic.loop();

    // SwatFighter Position when in wood state;
    swatFighter.x = windowWidth/12;
    swatFighter.y = windowHeight/1.6;



    // // Calling the function to take the username of the player
    // enterUserName();
  
  }


  // When country side mode is on 
  if(mousePressedOver(startButton)&&gameMode==="countryMode"&&gameState==="preplay"){
    gameState = "countryState";

    startSound.play();
    introMusic.stop();

    countryBgMusic.play();
    countryBgMusic.setVolume(0.7);
    countryBgMusic.loop();

    swatFighter.x = windowWidth/10;
    swatFighter.y = windowHeight/1.6;
   
  }

  // When instruction mode is on
  


  // When neon mode is on 
  if(mousePressedOver(startButton)&&gameMode==="neonMode"&&gameState==="preplay"){
    gameState = "neonState";

    startSound.play();
    introMusic.stop();

    neonBgMusic.play();
    neonBgMusic.setVolume(0.7);
    neonBgMusic.loop();

     // Positioning the swat fighter
     swatFighter.x = windowWidth/10;
     swatFighter.y = windowHeight/1.7;
  }

   //////////////////////////////////////////////////////////////////////////////////////////////////
   //Preplay state
   if(gameState==="preplay"){
     //Woods container true visibility
     woodHolder.visible = true;
     woodText.visible = true;

     //Countryside container true visibility
     countryHolder.visible = true;
     countryText.visible = true;

     //Neon container true visibility
     neonHolder.visible = true;
     neonText.visible = true;


     //StartButton true visibility
     startButton.visible = true;

     //Game Title true visibility
     gameTitle.visible = true;

     //Instruction true visibility
     instruction.visible = true;
     page2Button.visible = false;



     //Backgrounds false visibilty
     woodBg.visible = false;

     countryBg.visible = false;

     neonBg.visible = false;

     //Swat Fighter false visibility
     swatFighter.visible = false;

     // Setting the position of the name button according to the game states
     nameButton.position(windowWidth/20,windowHeight/10);

     textSize(25);
     fill(250,250,250);
     text("Commander Name:- "+nameInput,windowWidth/40,windowHeight/4.4);







     endScreen.visible = false;
     restartButton.visible = false;






     
   }else if(gameState!="preplay"){
     //Woods container false visibility
     woodHolder.visible = false;
     woodText.visible = false;

     //Countryside container false visibility
     countryHolder.visible = false;
     countryText.visible = false;

     //neon container false visibility
     neonHolder.visible = false;
     neonText.visible = false;


     //StartButton false visibility
     startButton.visible = false;

     //Game Title false visibility
     gameTitle.visible = false;

     //Instruction false visibility
     instruction.visible = false;

     // Setting the position of the name button according to the game states
     nameButton.position(windowWidth/-1,windowHeight/10);
     

     




   }





  //////////////////////////////////////////////////////////////////////////////////////////////////

  // Wood state after preplay
  if(gameState==="woodState"){

    //Calling functions
    

    //Calling bullets function
    spawnBullet();

    hurtSoundPlayer();

    reloadBulletX();


    // Calling functions to kill the enemies
    spiderShootBullet();
    sgGaurdShootBullet();
    fZombieShootBullet();
    mZombieShootBullet();
    bigDinoShootBullet();
    

    obstaclePlantShootBullet();

    // Calling the obstacles function
    woodObstacles();

    // Calling health Bar function 
    swatHealthBar();



    // Calling the Behaviour functions
    spiderPreDetecter();
    fZombiePreDetecter();
    mZombiePreDetecter();
    sgGaurdPreDetecter();
    bigDinoPreDetecter();

   

    //Calling enemies spawning function
    spawnSpider();
    spawnSgGaurd();
    spawnFZombie();
    spawnMZombie();
    spawnBigDino();

    // Calling the endstate
    endState();

    // Calling the power ups
    spawnSwatLife();
    spawnUnlimitedAmmo();
    spawnArrowX();

    

    // The scoring system of woodState 

    // Distance related
    distance = distance + Math.round(getFrameRate()/60);

    // Meters
    if(distance<=1000){
      fill(87, 74, 41);
      textSize(22);
      text("Distance Covered: "+distance+" m",windowWidth/4.5,windowHeight/12);
 
    }else if(distance>1000){
      textSize(22);
      fill(87, 74, 41);
      text("Distance Covered: "+Math.round(distance/1000)+" Km",windowWidth/4.5,windowHeight/12);

    }


    // Creatures killed related
    text("Creatures Killed: "+creaturesKilled,windowWidth/2.1,windowHeight/12);
   

    
    // Wood bg related
    //Appearance(Position on the screen)
    woodBg.visible = true;
    woodBg.scale = 2.7;


    //Movements
    woodBg.velocityX = -(9 + 1.5*distance/200);
    // Scrolling
    if(woodBg.x<=windowWidth/2.6){
      woodBg.x = windowWidth/1.57;
    }

    //Positioning the collision path
    collisionPath.x = windowWidth/2;
    collisionPath.y = windowHeight/1.1;


    

    swatFighter.visible = true;
    swatFighter.scale = 0.225;

    swatFighter.collide(collisionPath);

    //Swat fighter jump
    if(keyDown("space")&&swatFighter.y>=collisionPath.y-75){
      swatFighter.velocityY = -26;
      swatFighterJumpSound.play();
    }

    // Gravity
    swatFighter.velocityY = swatFighter.velocityY+1.3;


    // Acceleration for woods on pressing right key 
    if(keyDown("right")&&gameState==="woodState"){

      //Wood Bg behaviour
      woodBg.velocityX = woodBg.velocityX - 5.9;



      //swat fighter behaviour
      swatFighter.frameDelay = 2;

    //Distance increase
    distance = Math.round(distance+0.12);

    // Enemy speed related
    spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) - 5.9);
    sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) -5.9);
    fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200) -5.9);
    mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200) -5.9);
    bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);

    obstaclePlantGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);

    reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200) -5.9);

    // Power Ups(PW)
    // Life
    pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);
    pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);


    // Unlimited ammo
    unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);



    }
    else if((key!="right")&&gameState==="woodState"){

      swatFighter.frameDelay = 4;
      

      // Enemy speed related
      spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) );
      sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) );
      fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200));
      mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200));
      bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200));

      obstaclePlantGroup.setVelocityXEach(-(9 + 1.5*distance/200));

      reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200));

      // Power Ups(PW)
    // Life
      pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200));
      pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200));

      unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200));





    }

    
   

    // Behaviour of other game elements in wood state

     //Positioning the spawn setter according to the background
     spawnSetter.x = windowWidth/2;
     spawnSetter.y = windowHeight/1.22;
     spawnSetter.height = woodBg.height/20;
     //spawnSetter.visible = true;

     // Setting the velocity X of the life acc to the wood bg
     swatLife.velocityX = -(9 + 1.5*distance/200);
     



     // Enemies/obstacle touching the swat fighter (for decreasing life)
     if(swatFighter.isTouching(spiderGroup) ||swatFighter.isTouching(sgGaurdGroup) || swatFighter.isTouching(fZombieGroup) || swatFighter.isTouching(mZombieGroup) || swatFighter.isTouching(obstaclePlantGroup) || swatFighter.isTouching(bigDinoGroup)){
       swatLife = swatLife - 1.8;
     }


     // Touching Miss creature detecter
     if(missCreatureDetecter.isTouching(spiderGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(sgGaurdGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(fZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(mZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(bigDinoGroup) &&missCreatureNumber===1){
       missCreatureNumber = 0;
       swatLife = swatLife-1.4;
       swatFighterHurtSound.play();

       sgGaurdDieMeter = 10;
       bigDinoDieMeter = 25;
     }

      // For displaying text of creautre missed
      if(missCreatureNumber===0){
        textSize(30);
        fill(255,0,0);
        text("You Missed a creature",500,200);
      }
     
     // Touching miss creature setter
     if(missCreatureSetter.isTouching(spiderGroup) || missCreatureSetter.isTouching(sgGaurdGroup)  || missCreatureSetter.isTouching(fZombieGroup)  || missCreatureSetter.isTouching(mZombieGroup) || missCreatureSetter.isTouching(bigDinoGroup)){
     missCreatureNumber = 1;
     }

    


    //Displaying the user name
     textSize(25);
     text("Commander Name:- "+nameInput,windowWidth/40,windowHeight/4.4);

    

        
   
   //WoodState End
  }

 
 

  //////////////////////////////////////////////////////////////////////////////////////////////////

  // Country state after preplay
  if(gameState==="countryState"){

    //Calling functions

    //Calling bullets function
    spawnBullet();

    hurtSoundPlayer();

    reloadBulletX();
    spawnArrowX();
    

    // Calling health Bar function 
    swatHealthBar();

    // Calling functions to kill the enemies
    spiderShootBullet();
    sgGaurdShootBullet();
    fZombieShootBullet();
    mZombieShootBullet();
    bigDinoShootBullet();

    countryObstacleShootBullet();

    // Calling the Behaviour functions
    spiderPreDetecter();
    fZombiePreDetecter();
    mZombiePreDetecter();
    sgGaurdPreDetecter();
    bigDinoPreDetecter();

    

    // Calling the obstacle function for country state
    countryObstacles();

     //Calling enemies spawning function
     spawnSpider();
     spawnSgGaurd();
     spawnFZombie();
     spawnMZombie();
     spawnBigDino();

    // Calling the power ups
    spawnSwatLife();
    spawnUnlimitedAmmo();


      // The scoring system of woodState 
    // Distance related
    distance = distance + Math.round(getFrameRate()/60);

    // Meters
    if(distance<=1000){
      fill(87, 74, 41);
      textSize(22);
      text("Distance Covered: "+distance+" m",windowWidth/4.5,windowHeight/12);
 
    }else if(distance>1000){
      fill(87, 74, 41);
      textSize(22);
      text("Distance Covered: "+Math.round(distance/1000)+" Km",windowWidth/4.5,windowHeight/12);

    }

    // Creatures killed related
    text("Creatures Killed: "+creaturesKilled,windowWidth/2.1,windowHeight/12);
     
    


    //Appearance of the countrybg(Position on the screen)
    countryBg.visible = true;
    countryBg.scale = 2.8;

    //Movements
    countryBg.velocityX = -(6 + 1.5*distance/200);
    // Scrolling
    if(countryBg.x<=windowWidth/2.45){
      countryBg.x = windowWidth/1.94;
    }

    



    // Swat Fighter related
    //Position
    
    swatFighter.visible = true;
    swatFighter.scale = 0.225;


   

    //Movements
    //Up
    if(keyDown("up")){
      swatFighter.y = swatFighter.y-7;
    }

    //Down
    if(keyDown("down")){
      swatFighter.y = swatFighter.y+7;
    }

    //  //Left
    //  if(keyDown("left")){
    //   swatFighter.x = swatFighter.x-7;
    // }
    

    // //right
    // if(keyDown("right")){
    //   swatFighter.x = swatFighter.x+7;
    // }



    // Acceleration for woods on pressing right key 
    if(keyDown("right")&&gameState==="countryState"){

      //Wood Bg behaviour
      countryBg.velocityX = countryBg.velocityX - 5.9;



      //swat fighter behaviour
      swatFighter.frameDelay = 2;

    //Distance increase
    distance = Math.round(distance+0.12);

    // Enemy speed related
    spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) - 5.9);
    sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) -5.9);
    fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200) -5.9);
    mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200) -5.9);
    bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);
    

     countryObstacleGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);

     reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200) -5.9);

     // Power Ups(PW)
    // Life
    pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);
    pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);

    // Unlimited ammo
    unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);



    }
    else if((key!="right")&&gameState==="countryState"){

      swatFighter.frameDelay = 4;
      

      // Enemy speed related
      spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) );
      sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) );
      fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200));
      mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200));
      bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200));

      countryObstacleGroup.setVelocityXEach(-(9 + 1.5*distance/200));

      reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200));

      // Power Ups(PW)
    // Life
    pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200));
    pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200));

    // Unlimited ammo
    unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200));





    }



    //Positioning the spawn setter according to the background
     spawnSetter.x = windowWidth/2;
     spawnSetter.y = windowHeight/1.3;
     spawnSetter.height = woodBg.height/2.4;


     // Positioning the boundaries
     boundaryUp.y = windowHeight/2.47;
     
     boundaryDown.y = windowHeight/0.95;

     swatFighter.collide(boundaryUp);
     swatFighter.collide(boundaryDown);


     // Enemies/obstacle touching the swat fighter (for decreasing life)
     if(swatFighter.isTouching(spiderGroup) ||swatFighter.isTouching(sgGaurdGroup) || swatFighter.isTouching(fZombieGroup) || swatFighter.isTouching(mZombieGroup) || swatFighter.isTouching(countryObstacleGroup) || swatFighter.isTouching(bigDinoGroup)){
      swatLife = swatLife - 1.8;
    }

     // Calling the endstate
     endState();


     // Touching Miss creature detecter
     if(missCreatureDetecter.isTouching(spiderGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(sgGaurdGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(fZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(mZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(bigDinoGroup) &&missCreatureNumber===1){
      missCreatureNumber = 0;
      swatLife = swatLife-1.4;
      swatFighterHurtSound.play();

      sgGaurdDieMeter = 10;
       bigDinoDieMeter = 25;
    }

     // For displaying text of creautre missed
     if(missCreatureNumber===0){
       textSize(30);
       fill(255,0,0);
       text("You Missed a creature",500,200);
     }
    
    // Touching miss creature setter
    if(missCreatureSetter.isTouching(spiderGroup) || missCreatureSetter.isTouching(sgGaurdGroup)  || missCreatureSetter.isTouching(fZombieGroup)  || missCreatureSetter.isTouching(mZombieGroup) || missCreatureSetter.isTouching(bigDinoGroup)){
    missCreatureNumber = 1;
    }





     // Displaying the user name
     textSize(25);
     fill(250,250,250);
     text("Commander Name:- "+nameInput,windowWidth/40,windowHeight/4.4);



   // CountryState end
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // Neon state after preplay
  if(gameState==="neonState"){

    //Calling functions

    //Calling bullets function
    spawnBullet();

    hurtSoundPlayer();

    reloadBulletX();
    spawnArrowX();


    // Calling health Bar function 
    swatHealthBar();

    // Calling functions to kill the enemies
    spiderShootBullet();
    sgGaurdShootBullet();
    fZombieShootBullet();
    mZombieShootBullet();
    bigDinoShootBullet();

    neonObstacleShootBullet();

    // Calling the Behaviour functions
    spiderPreDetecter();
    fZombiePreDetecter();
    mZombiePreDetecter();
    sgGaurdPreDetecter();
    bigDinoPreDetecter();

    // Calling the obstacles function
    neonObstacles();


    //Calling enemies spawning function
    spawnSpider();
    spawnSgGaurd();
    spawnFZombie();
    spawnMZombie();
    spawnBigDino();

    // Calling the power ups
    spawnSwatLife();
    spawnUnlimitedAmmo();


   

    // The scoring system of woodState 
    // Distance related
    distance = distance + Math.round(getFrameRate()/60);

    // Meters
    if(distance<=1000){
      fill(166, 138, 68);
      textSize(22);
      text("Distance Covered: "+distance+" m",windowWidth/4.5,windowHeight/12);
 
    }else if(distance>1000){
      fill(166, 138, 68);
      textSize(22);
      text("Distance Covered: "+Math.round(distance/1000)+" Km",windowWidth/4.5,windowHeight/12);

    }

    // Creatures killed related
    text("Creatures Killed: "+creaturesKilled,windowWidth/2.1,windowHeight/12);


    //Appearance(Position on the screen)
    neonBg.visible = true;
    neonBg.scale = 2.4;

    //Movements
    neonBg.velocityX = -(6 +1.5*distance/200);
    // Scrolling
    if(neonBg.x<=windowWidth/2.3){
      neonBg.x = windowWidth/1.82;
    }


     // Swat Fighter related
    //Position
    swatFighter.visible = true;
    swatFighter.scale = 0.22;

    //Movements
    //Up
    if(keyDown("up")){
      swatFighter.y = swatFighter.y-7;
    }

    //Down
    if(keyDown("down")){
      swatFighter.y = swatFighter.y+7;
    }



     // Acceleration for woods on pressing right key 
     if(keyDown("right")&&gameState==="neonState"){

      //Wood Bg behaviour
      neonBg.velocityX = neonBg.velocityX - 5.9;



      //swat fighter behaviour
      swatFighter.frameDelay = 2;

    //Distance increase
    distance = Math.round(distance+0.12);

    // Enemy speed related
    spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) - 5.9);
    sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) -5.9);
    fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200) -5.9);
    mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200) -5.9);
    bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);

    neonObstacleGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);
    reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200) -5.9);

    // Power Ups(PW)
    // Life
    pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);
    pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200)-5.9);

    // Unlimited ammo
    unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200) -5.9);



    }
    else if((key!="right")&&gameState==="neonState"){

      swatFighter.frameDelay = 4;
      

      // Enemy speed related
      spiderGroup.setVelocityXEach(-(10.2 + 1.5*distance/200) );
      sgGaurdGroup.setVelocityXEach(-(10 + 1.5*distance/200) );
      fZombieGroup.setVelocityXEach(-(9.6 + 1.5* distance/200));
      mZombieGroup.setVelocityXEach(-(11.2 + 1.5* distance/200));
      bigDinoGroup.setVelocityXEach(-(8 + 1.5*distance/200));

      neonObstacleGroup.setVelocityXEach(-(9 + 1.5*distance/200));

      reloadBulletGroup.setVelocityXEach(-(8.3 + 1.5*distance/200));

      // Power Ups(PW)
    // Life
    pwLifeGroup.setVelocityXEach(-(9 + 1.5*distance/200));
    pwArrowXContGroup.setVelocityXEach(-(8 + 1.5*distance/200));

    // Unlimited ammo
    unlimitedAmmoGroup.setVelocityXEach(-(9 + 1.5*distance/200));





    }






    //Positioning the spawn setter according to the background
    spawnSetter.x = windowWidth/2;
    spawnSetter.y = windowHeight/1.24;
    spawnSetter.height = woodBg.height/1.1;


    // Positioning the boundaries
    boundaryUp.y = windowHeight/2.35;
     
    boundaryDown.y = windowHeight/1.006;

    swatFighter.collide(boundaryUp);
    swatFighter.collide(boundaryDown);

    // Enemies/obstacle touching the swat fighter (for decreasing life)
    if(swatFighter.isTouching(spiderGroup) ||swatFighter.isTouching(sgGaurdGroup) || swatFighter.isTouching(fZombieGroup) || swatFighter.isTouching(mZombieGroup) || swatFighter.isTouching(neonObstacleGroup) || swatFighter.isTouching(bigDinoGroup)){
      swatLife = swatLife - 1.8;
    }

     // Calling the endstate
     endState();



     // Touching Miss creature detecter
     if(missCreatureDetecter.isTouching(spiderGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(sgGaurdGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(fZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(mZombieGroup) &&missCreatureNumber===1 || missCreatureDetecter.isTouching(bigDinoGroup)&&missCreatureNumber===1){
      missCreatureNumber = 0;
      swatLife = swatLife-1.4;
      swatFighterHurtSound.play();

      sgGaurdDieMeter = 10;
       bigDinoDieMeter = 25;
    }

     // For displaying text of creautre missed
     if(missCreatureNumber===0){
       textSize(30);
       fill(255,0,0);
       text("You Missed a creature",500,200);
     }
    
    // Touching miss creature setter
    if(missCreatureSetter.isTouching(spiderGroup) || missCreatureSetter.isTouching(sgGaurdGroup)  || missCreatureSetter.isTouching(fZombieGroup)  || missCreatureSetter.isTouching(mZombieGroup)){
    missCreatureNumber = 1;
    }


     // Displaying the user name
     textSize(25);
     fill(207, 203, 202);
     text("Commander Name:- "+nameInput,windowWidth/40,windowHeight/4.4);





   //NeonState end 
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  
  
//Sample text
// textSize(30);
// text("SwatFighter's life = "+swatLife,200,200);

// textSize(30);
// text("Space Counter:"+spaceCounter,200,200);


















if(gameState==="instruction"){

  // Main instructions as text
  instructionBg.visible = true;

  fill(255,255,255);
  textSize(30);
  text("Welcome to the ",windowWidth/3,windowHeight/12);
  fill(168, 7, 12);
  text("' FighterX Runner ' !!",windowWidth/2,windowHeight/12);

  textSize(22);
  fill(247, 240, 240);
  text("🔴 You are a swat commander in a raw agency !! Your agency witnessed that there were some Radioactive Reactions in the ",windowWidth/30,windowHeight/5.5);
  text("       outskirts of your area , which led to the origin of some unknown microbacterias and abnormal cells !!",windowWidth/30,windowHeight/4.4);
  text("       Some days later... The scientists found that everthing was gone and upon tracing the marks... They found that .... that they ",windowWidth/30,windowHeight/3.65);
  text("       are surrounded by some creepy and horrific creatures !! ",windowWidth/30,windowHeight/3.1);
  text("🔴 And then comes your turn !!  Put on your gears , take your gun , and fearlessly clear your area out of the invasion of the",windowWidth/30,windowHeight/2.4);
  text("      creatures !!",windowWidth/30,windowHeight/2.1);
  textSize(24);
  fill(168, 7, 1);
  text("🔴 Controls:-       ",windowWidth/30,windowHeight/1.85);
  textSize(22);
  fill(247, 240, 240);
  text(" Press 'right key' to accelerate",windowWidth/6.7,windowHeight/1.85)
  text(" Use the 'space' key to jump and the up/down arrow keys to move up and down where necessary .",windowWidth/30,windowHeight/1.68);
  text(" Use the 'x' key to shoot . Keep an eye on the ammo number . Shoot wisely as you have a fixed number of bullets in your  ",windowWidth/30,windowHeight/1.55);
  text(" magazine . Try not leave any creature as it will affect yours and your area's health.          ",windowWidth/30,windowHeight/1.45);

  textSize(30);
  fill(168, 7, 1);
  text("Strategize your moves using the equipments sustainably !!",windowWidth/4.4,windowHeight/1.25);
  // text(   Remember .. You are the barrier of protection between your area and the dreadful creatures ..);
  // text("So kill each and every creature out there, also , keep an eye on your health bar as .. you have to clear the way in one go !! ",windowWidth/30,windowHeight/1.35);
  // fill(168, 7, 1);
  // text("GOOD LUCK .. Have a BRAVE JOURNEY !!",windowWidth/3,windowHeight/1.26);
  // textSize(30);
  // text("Meet you at the agency soon !!",windowWidth/2.94,windowHeight/1.17);


  // Instruction text development end
}
else if(gameState!="instruction"){
  instructionBg.visible = false;
}


// textSize(32);
// text("GameState = "+gameState,200,200);



// Ipage2 gameState

  if(gameState==="Ipage2"){
    backButton.visible = true;
    instructionBg.visible = true;


    
  textSize(22);
  fill(168, 7, 1);
  text("🔴 Beware !! :- ",windowWidth/30,windowHeight/12);

  fill(247, 240, 240);
  text("The creatures are deadly and can cause a lot of damage if missed or came in contact. It may take many bullets to kill some ",windowWidth/30,windowHeight/8);
  text("terrible creatures. Steadfast your heart as the difficulty will go on increasing as the game progress !!",windowWidth/30,windowHeight/6);

  fill(168, 7, 1);
  text("🔴 Power-ups:- ",windowWidth/30,windowHeight/4.65);

  fill(247, 240, 240);
  text("'Life'....      will regenerate your health to keep you moving on your way ! ",windowWidth/6,windowHeight/4.65);
  text("'Infinite Bullets'....   will give you unlimited bullets for some time !",windowWidth/6,windowHeight/3.85);
  text("'Arrow X'....      as a reinforcement, will clear out the creatures from the screen at one go !",windowWidth/6,windowHeight/3.3);
  text("'Ammo'....    will be provided regularly to refill you gun !",windowWidth/6,windowHeight/2.9);







  textSize(25);
  fill(168, 7, 1);
  
  text(   "Remember .. You are the barrier of protection between your area and the dreadful creatures ....",windowWidth/10,windowHeight/2);
  text("So kill each and every creature out there !!",windowWidth/3,windowHeight/1.8);

  text("Also , keep an eye on your health bar as .. you have to clear the way in one go !! ",windowWidth/6,windowHeight/1.6);
  fill(168, 7, 1);
  text("GOOD LUCK .. Have a BRAVE JOURNEY !!",windowWidth/3,windowHeight/1.26);
  textSize(30);
  text("Meet you at the agency soon !!",windowWidth/2.65,windowHeight/1.17);
  








  }

 


//Inspage 2 end














// Displaying the ammo left(remaining)
// Limited
if((gameState==="woodState" || gameState==="countryState" || gameState==="neonState")&&ammoMode==="limited"){
    fill(2, 75, 117);
    textSize(30);
    text("Ammo = "+bulletNumber,windowWidth/35,windowHeight/6);

}

// Unimited
if((gameState==="woodState" || gameState==="countryState")&&ammoMode==="unlimited"){
  infiniteSymbol.visible = true;
  // fill(2, 75, 117);
  textSize(30);
  text("Ammo = ",windowWidth/35,windowHeight/6);

}else{
  infiniteSymbol.visible = false;
}


// For neon mode
if(gameState==="neonState"&&ammoMode==="unlimited"){
  infiniteSymbolWhite.visible = true;
  fill(2, 75, 117);
  textSize(30);
  text("Ammo = ",windowWidth/35,windowHeight/6);

}else{
  infiniteSymbolWhite.visible = false;
}



if(ammoMode==="limited"){
  infiniteSymbol.visible = false;
  
}









if(gameState==="end"){
  fill(193, 205, 232)
    textSize(30);
    text("You covered "+distance+" ms and killed "+creaturesKilled+" creatures !!",windowWidth/3.95,windowHeight/12);
}


















//Draw() Ends
}

function mouseReleased(){

  // For selecting the wood Holder
  if(mouseIsOver(woodHolder)&&gameState==="preplay"){
    gameMode = "woodMode"
    clickSound.play();
  }

  // For selecting the country holder
  if(mouseIsOver(countryHolder)&&gameState==="preplay"){
    gameMode = "countryMode";
    clickSound.play();
  }

  // For selecting the neon holder
  if(mouseIsOver(neonHolder)&&gameState==="preplay"){
    gameMode = "neonMode";
    clickSound.play();
    
  }

  // For selecting the restart button
  if(mouseIsOver(restartButton)&&gameState==="end"){

    gameState = "preplay";

    clickSound.play();
    introMusic.play();

    gameMode = "neutral";
    swatLife = 100;
    distance = 0;
    creaturesKilled = 0;
    bulletNumber = 12;

    missCreatureNumber = 1;




  }


  // To the instructions state
  if(mouseIsOver(instruction)&&gameState==="preplay"){

    gameState = "instruction";
    clickSound.play();

    backButton.visible = true;
    page2Button.visible = true;
    

    




  }else if(gameState!="instruction"){
    backButton.visible = false;
    page2Button.visible = false;


    // Instruction end
  }






  // To preplay again after pressing the back butto in instruction state
  if(mouseIsOver(backButton)&&gameState==="instruction"){

    gameState = "preplay";

    backButton.visible = false;
    clickSound.play();




    // Back button end
  }


  if(mouseIsOver(backButton)&&gameState==="Ipage2"){

    gameState = "instruction";

    backButton.visible = true;
    page2Button.visible = true;
    clickSound.play();




    // Back button end
  }


  
  // Ipage 2
  
  if(mouseIsOver(page2Button)&&gameState==="instruction"){

    gameState = "Ipage2";
    page2Button.visible = false;


    clickSound.play();


  }










  // mouseReleased() end
}








function spawnBullet(){

  if(ammoMode==="limited"){
  if(keyWentDown("x")&&bulletNumber>0 ){
    bullet1 = createSprite(swatFighter.x+30,swatFighter.y-37);
    bullet1.addImage(bullet1Image);
    bullet1.scale = 0.05;
    bullet1.velocityX = 24;
    bullet1.lifetime = 200;

    bullet1Group.add(bullet1);

    bulletShootSound.play();

    bulletNumber = bulletNumber-1;

   
  }

  if(keyWentDown("x")&&bulletNumber<=0){
    emptyGunSound.play();
    
  }

  

  // if ammoMode end
  }
  
  
 


//spawnBullet() end
}


function spawnSpider(){

  if(frameCount%140===0){
    spider = createSprite(windowWidth+50,spawnSetter.y);
    spider.x = Math.round(random(windowWidth+50,windowWidth+130))
    spider.y = Math.round(random(spawnSetter.y-30,spawnSetter.y-80));
    spider.velocityX =  -(10.2 + 1.5*distance/200);

    
    spider.lifetime = 200;


    spider.addImage("running",spiderRun);
    spider.addImage("attacking",spiderAttack);
    //spider.addImage("die",spiderDie);
    spiderSpawnSound.play();

    


    //spider.debug = true;
    spider.setCollider("rectangle",0,0,80,50);
    spiderGroup.add(spider);

    // Scalling enemies

    //Scaling spider  according to the background 
    if(gameState==="woodState"){
      spider.scale = 1.25;

    }
    else if(gameState==="countryState"){
      spider.scale = 1.1;
    }
    
    










  //Frame Count() end of spider
  }
  

// spawnSpider() end
}


function spawnSgGaurd(){
  if(frameCount%195===0){
    sgGaurd = createSprite(windowWidth+50,spawnSetter.y);
    sgGaurd.x = Math.round(random(windowWidth+50,windowWidth+100))
    sgGaurd.y = Math.round(random(spawnSetter.y-20,spawnSetter.y-80));
    sgGaurd.velocityX = -(10 + 1.5*distance/200);


    sgGaurd.lifetime = 200;
    sgGaurd.frameDelay = 7;



    sgGaurd.addAnimation("running",sgGaurdRun);
    sgGaurd.addImage("attacking",sgGaurdAttack);
    sgGaurd.addImage("die",sgGaurdDie);
    sgGaurdSpawnSound.play();
    sgGaurdGroup.add(sgGaurd);



    //sgGaurd.debug = true;
    sgGaurd.setCollider("rectangle",0,0,60,100);
    


    // Scalling sg gaurd according to the background
    if(gameState==="woodState"){
      sgGaurd.scale = 1;

    }
    else if(gameState==="countryState"){
      sgGaurd.scale = 0.95;
    }












    // frameCount() end
  }


  // spawnSgGaurd() end
}


function spawnBigDino(){

  // textSize(30);
  // text(bigDinoSpawnerDestroy,200,200);
  // text(bigDinoSpawner,200,250);

  // if(creaturesKilled%4===0&&creaturesKilled>0){
  //   bigDinoSpawner = "on";
  //   bigDinoSpawnerDestroy = bigDinoSpawnerDestroy-0.1;
    
  // }

  // if(bigDinoSpawnerDestroy<=0){
  //   bigDinoSpawner = "off";
  //   bigDinoSpawnerDestroy = 1;
  // }





  if(frameCount%800===0){
    bigDino = createSprite(windowWidth+50,spawnSetter.y-10);
    bigDino.x = Math.round(random(windowWidth+100,windowWidth+200))
    bigDino.y = Math.round(random(spawnSetter.y-10,spawnSetter.y-100));
    bigDino.velocityX = -(8 + 1.5*distance/200);


    bigDino.lifetime = 200;
    bigDino.frameDelay = 7;
    bigDino.scale = 2.2;



    bigDino.addAnimation("running",bigDinoRun);
    bigDino.addImage("attacking",bigDinoAttack);
    // bigDinoSpawnSound.play();
    bigDinoSpawnSound1.play();
    bigDinoSpawnSound2.play();
    bigDinoGroup.add(bigDino);



    //bigDino.debug = true;
    bigDino.setCollider("rectangle",0,10,100,40);
    


    // // Scalling sg gaurd according to the background
    // if(gameState==="woodState"){
    //   bigDino.scale = 1;

    // }
    // else if(gameState==="countryState"){
    //   bigDino.scale = 0.95;
    // }












    // frameCount() end
  }


  // spawnbigDino() end
}




function spawnFZombie(){
  if(frameCount%240===20){
    fZombie = createSprite(windowWidth+50,spawnSetter.y);
    fZombie.x = Math.round(random(windowWidth+50,windowWidth+120))
    fZombie.y = Math.round(random(spawnSetter.y-20,spawnSetter.y-80));
    fZombie.velocityX = -(9.6 + 1.5* distance/200);


    fZombie.scale = 1.3;
    fZombie.lifetime = 200;
    fZombie.frameDelay = 6;



    fZombie.addAnimation("running",fZombieRun);
    fZombie.addImage("attacking",fZombieAttack);
    fZombie.addImage("die",fZombieDie);

    fZombieGroup.add(fZombie);
    zombieSpawnSound.play();



    //fZombie.debug = true;
    fZombie.setCollider("rectangle",0,0,60,70);
    




    // frameCount() end
  }


  // spawnFZombie() end
}



function spawnMZombie(){
  if(frameCount%270===20){
    mZombie = createSprite(windowWidth+50,spawnSetter.y);
    mZombie.x = Math.round(random(windowWidth+50,windowWidth+130))
    mZombie.y = Math.round(random(spawnSetter.y-20,spawnSetter.y-90));
    mZombie.velocityX = -(11.2 + 1.5* distance/200);


   
    mZombie.lifetime = 200;
    mZombie.frameDelay = 6;



    mZombie.addAnimation("running",mZombieRun);
    mZombie.addAnimation("attacking",mZombieAttack);
    mZombie.addImage("die",mZombieDie);

    mZombieGroup.add(mZombie);
    zombieSpawnSound.play();



   // mZombie.debug = true;
    mZombie.setCollider("rectangle",0,0,40,70);

    //Scalling according to the background
    if(gameState==="woodState"){
      mZombie.scale = 1.3;
    }else if(gameState==="countryState"){
      mZombie.scale = 1.2;
    }
    




    // frameCount() end
  }


  // spawnFZombie() end
}


function woodObstacles(){
  if(frameCount%195===0){
    obstaclePlant = createSprite(windowWidth+50,windowHeight/2);
    obstaclePlant.x = Math.round(random(windowWidth+50,windowWidth+130))
    obstaclePlant.y = Math.round(random(spawnSetter.y-20,spawnSetter.y-80));
    obstaclePlant.velocityX = -(9 + 1.5*distance/200);

    obstaclePlant.lifetime = 200;
    obstaclePlant.scale = 0.3;

    obstaclePlantGroup.add(obstaclePlant);

     woodsRandomNum = Math.round(random(1,2));

     switch(woodsRandomNum){
        case 1:
          obstaclePlant.addImage("1",obstaclePlant1Image);
          break;
          case 2:
            obstaclePlant.addImage("2",obstaclePlant2Image);


    //  Switch() end
     }
     


   //Frame count end
  }


 // woodObstacles() end
}


function countryObstacles(){

  if(frameCount%195===0){
    countryObstacle = createSprite(windowWidth+50,windowHeight/2);
    countryObstacle.x = Math.round(random(windowWidth+50,windowWidth+130))
    countryObstacle.y = Math.round(random(spawnSetter.y-20,spawnSetter.y-80));
    countryObstacle.velocityX = -(6 + 1.5*distance/200);

    countryObstacle.lifetime = 300;
    countryObstacle.scale = 0.3;

    countryObstacleGroup.add(countryObstacle);

    countryRandomNum = Math.round(random(1,2));
    switch(countryRandomNum){
      case 1:
        countryObstacle.addImage("1",countryObstacle1Image);
        break;
        case 2:
        countryObstacle.addImage("2",countryObstacle2Image);
    // Switch() end
    }
    
    

// Frame count end
}

// countryObstacles() end
}

function neonObstacles(){

  if(frameCount%155===10){
    neonObstacle = createSprite(windowWidth+50,windowHeight/2);
    neonObstacle.x = Math.round(random(windowWidth+50,windowWidth+130))
    neonObstacle.y = Math.round(random(spawnSetter.y-10,spawnSetter.y-90));
    neonObstacle.velocityX = -(6 + 1.5*distance/200);

    neonObstacle.lifetime = 300;
    neonObstacle.scale = 0.18;

    //neonObstacle.debug = true;
    neonObstacle.setCollider("rectangle",0,0,100,280);


    neonObstacleGroup.add(neonObstacle);

    neonRandomNum = Math.round(random(1,2));

    switch(neonRandomNum){
      case 1:
        neonObstacle.addImage("1",neonObstacle1Image);
        break;
        case 2:
          neonObstacle.addImage("2",neonObstacle2Image)
    }


    // Frame count end
}


// neonObstacles()end
}

function spiderPreDetecter(){
  if(spiderGroup.isTouching(sfPreDetecter)){
    spider.changeAnimation("attacking",spiderAttack);


    // If touching condition end
  }

  
  // siderPreDetecter() end
}



function fZombiePreDetecter(){
  if(fZombieGroup.isTouching(sfPreDetecter)){
    fZombie.changeAnimation("attacking",fZombieAttack);

      // If statement end
}


// fZombiePreDetecter() end
}


function mZombiePreDetecter(){
  if(mZombieGroup.isTouching(sfPreDetecter)){
    mZombie.changeAnimation("attacking",mZombieAttack);

      // If statement end
}


// fZombiePreDetecter() end
}


function sgGaurdPreDetecter(){
  if(sgGaurdGroup.isTouching(sfPreDetecter)){
    sgGaurd.changeAnimation("attacking",sgGaurdAttack);

      // If statement end
}


//  sgGaurdPreDetecter()end
}


function bigDinoPreDetecter(){
  if(bigDinoGroup.isTouching(sfPreDetecter)){
    bigDino.changeAnimation("attacking",bigDinoAttack);

      // If statement end
}


//  sgGaurdPreDetecter()end
}


function spiderShootBullet(){

  //Killing spider
  if(spiderGroup.isTouching(bullet1Group)){
    
    bullet1Group[0].destroy();

    spiderDieMeter = spiderDieMeter - 5;
    missCreatureNumber = 1;
    
  }

  


  
  

  if(spiderDieMeter<=0){
    spiderGroup.destroyEach();
    creaturesKilled = creaturesKilled +1;
    spiderDieSound.play();
    spiderSpawnSound.stop();

    spiderDieMeter = spiderDieMeter-5;
  }


  if(spiderDieMeter===-5){
    spiderDieMeter = 5;
  }
  





  



  // spiderShootBullet() end
}




function sgGaurdShootBullet(){

  if(bullet1Group.isTouching(sgGaurdGroup)){
    
    bullet1Group[0].destroy();

    sgGaurdDieMeter = sgGaurdDieMeter - 5;
    sgGaurdHit1.play();
    sgGaurdHit1.setVolume(7);
    
    sgGaurdHit2.play();
    sgGaurdHit2.setVolume(7);


    
  }

  

  if(sgGaurdDieMeter<=0){
    sgGaurdGroup.destroyEach();
    creaturesKilled = creaturesKilled +1;
    sgGaurdDieSound.play();
    sgGaurdSpawnSound.stop();

    sgGaurdDieMeter = sgGaurdDieMeter-5;
   

  }


  if(sgGaurdDieMeter===-5){
    sgGaurdDieMeter = 10;
  }
  



  // sgGaurdShootBullet() end
}


function bigDinoShootBullet(){

  if(bullet1Group.isTouching(bigDinoGroup)){
    
    bullet1Group[0].destroy();

    bigDinoDieMeter = bigDinoDieMeter - 5;
    bulletStrikeSound.play();
    bulletStrikeSound.setVolume(6);
    
  }

  

  if(bigDinoDieMeter<=0){
    bigDinoGroup.destroyEach();
    creaturesKilled = creaturesKilled +1;
    // bigDinoDieSound.play();
    // bigDinoSpawnSound.stop();

    bigDinoSpawnSound1.stop();
    bigDinoSpawnSound2.stop();
    zombieDieSound.play();

    bigDinoDieMeter = bigDinoDieMeter-5;
  }


  if(bigDinoDieMeter===-5){
    bigDinoDieMeter = 25;
  }
  



  // spiderShootBullet() end
}















function fZombieShootBullet(){

  if(bullet1Group.isTouching(fZombieGroup)){
    
    bullet1Group[0].destroy();

    fZombieDieMeter = fZombieDieMeter - 5;
    
  }

  

  if(fZombieDieMeter<=0){
    fZombieGroup.destroyEach();
    creaturesKilled = creaturesKilled +1;
    zombieDieSound.play();
    zombieSpawnSound.stop();

    fZombieDieMeter = fZombieDieMeter-5;
  }


  if(fZombieDieMeter===-5){
    fZombieDieMeter = 5;
  }
  



  // fZombieShootBullet() end
}


function mZombieShootBullet(){

  if(bullet1Group.isTouching(mZombieGroup)){
    
    bullet1Group[0].destroy();

    mZombieDieMeter = mZombieDieMeter - 5;
    
  }

  

  if(mZombieDieMeter<=0){
    mZombieGroup.destroyEach();
    creaturesKilled = creaturesKilled +1;
    zombieDieSound.play();
    zombieSpawnSound.stop();

    mZombieDieMeter = mZombieDieMeter-5;
  }


  if(mZombieDieMeter===-5){
    mZombieDieMeter = 5;
  }
  



  // mZombieShootBullet() end
}

// Creating the obstaclePlant shoot bullet when its unlimted bullet mode

function obstaclePlantShootBullet(){
  if(bullet1Group.isTouching(obstaclePlantGroup)&&ammoMode==="unlimited"){
    
    obstaclePlantGroup.destroyEach();
    bullet1Group[0].destroy();
    obstaclePlantDieSound.play();
    obstaclePlantDieSound.setVolume(1.2);
  }


  // obstaclePlantShootBullet() end
}

//Country obstacle shoot bullet
function countryObstacleShootBullet(){
  if(bullet1Group.isTouching(countryObstacleGroup)&&ammoMode==="unlimited"){
    
    countryObstacleGroup.destroyEach();
    bullet1Group[0].destroy();
    countryObstacleDieSound.play();
    countryObstacleDieSound.setVolume(1.2);

  }

  




  // obstaclePlantShootBullet() end
}

//Neon obstacle shoot bullet
function neonObstacleShootBullet(){
  if(bullet1Group.isTouching(neonObstacleGroup)&&ammoMode==="unlimited"){
    
    neonObstacleGroup.destroyEach();
    bullet1Group[0].destroy();
    neonObstacleDieSound.play();
    neonObstacleDieSound.setVolume(1.2);
  }
}






function swatHealthBar(){
  //Health Bar related
  healthBar.visible = true;

  // Changing health bar's Image upon decreament of life

  // 4
  if(swatLife>healthDetecter3){
    healthBar.changeAnimation("4",healthBarImage4);
  }


  //3
 if(swatLife<=healthDetecter3){
   healthBar.changeAnimation("3",healthBarImage3);

 }
 


 //2
 if(swatLife<=healthDetecter2){
   healthBar.changeAnimation("2",healthBarImage2);

 }
 //1
 if(swatLife<=healthDetecter1 && swatLife>=0){
   healthBar.changeAnimation("1",healthBarImage1);
   textSize(30);
   fill(171, 0, 0);
   text("Critical Health !! Less than 10%",windowWidth/3.8,windowHeight/6);
 }

//  End 0
if(swatLife<=0){
  gameState = "end";
}







//  swatHealthBar() end
}




function endState(){

  if(gameState==="end"){

    endScreen.visible = true;
    endSound1.play();

    restartButton.visible = true;

   


    woodBg.setVelocityX = 0;
    countryBg.setVelocityX= 0;
    neonBg.setVelocityX = 0;

    spiderGroup.destroyEach();
    sgGaurdGroup.destroyEach();
    fZombieGroup.destroyEach();
    mZombieGroup.destroyEach();
    bigDinoGroup.destroyEach();

    obstaclePlantGroup.destroyEach();
    countryObstacleGroup.destroyEach();
    neonObstacleGroup.destroyEach();

    bullet1Group.destroyEach();
    reloadBulletGroup.destroyEach();
    unlimitedAmmoGroup.destroyEach();

    spiderSpawnSound.stop();
    spiderDieSound.stop();

    sgGaurdSpawnSound.stop();
    sgGaurdDieSound.stop();

    zombieSpawnSound.stop();
    zombieDieSound.stop();

    bigDinoSpawnSound1.stop();
    bigDinoSpawnSound2.stop();
    zombieDieSound.stop();

    reloadBulletSound.stop();

    woodBgMusic.stop();
    countryBgMusic.stop();
    neonBgMusic.stop();

    pwArrowXGroup.destroyEach();
    pwArrowXSound.stop();

    healthBar.visible = false;

    pwLifeGroup.destroyEach();


    

    
    
    

    





    // if condition end
  }







  // endState() end
}


function reloadBulletX(){
  if(frameCount%470===0){

    reloadBullet = createSprite(windowWidth+50,spawnSetter.y);
    reloadBullet.x = Math.round(random(windowWidth+50,windowWidth+150))
    reloadBullet.y = Math.round(random(spawnSetter.y,spawnSetter.y-200));
    reloadBullet.velocityX =  -(8.3 + 1.5*distance/200);
    reloadBullet.scale = 0.18;

    
    reloadBullet.lifetime = 200;
  
    reloadBullet.addImage(reloadBulletImage);
    reloadBulletGroup.add(reloadBullet);

    //reloadBullet.debug = true;
    reloadBullet.setCollider("rectangle",0,-40,300,300);
    



  }

  // Collecting the ammo
  if(swatFighter.isTouching(reloadBulletGroup)){
    
    reloadBulletGroup.destroyEach();


    bulletNumber = 12;
    reloadBulletSound.play();


  }




  // reloadBulletGroup() end
}

function hurtSoundPlayer(){



  if(swatFighter.isTouching(spiderGroup) &&sfHurt===1 ||swatFighter.isTouching(sgGaurdGroup) &&sfHurt===1 || swatFighter.isTouching(fZombieGroup) &&sfHurt===1 || swatFighter.isTouching(mZombieGroup) &&sfHurt===1 || swatFighter.isTouching(obstaclePlantGroup)&&sfHurt===1 || swatFighter.isTouching(countryObstacleGroup)&&sfHurt===1 || swatFighter.isTouching(neonObstacleGroup)&&sfHurt===1 ||swatFighter.isTouching(bigDinoGroup)&&sfHurt===1){
    swatFighterHurtSound.play();
    
    sfHurt = 0
    
    

  }
 
//text(sfHurt,200,200);

if(sfHurtDetecter.isTouching(spiderGroup) ||sfHurtDetecter.isTouching(sgGaurdGroup)|| sfHurtDetecter.isTouching(fZombieGroup) || sfHurtDetecter.isTouching(mZombieGroup) || sfHurtDetecter.isTouching(obstaclePlantGroup) || sfHurtDetecter.isTouching(countryObstacleGroup) || sfHurtDetecter.isTouching(neonObstacleGroup) ||sfHurtDetecter.isTouching(bigDinoGroup)){

  sfHurt = 1;


}


}

function enterUsername(){
  // "Commando"+Math.round(random(1,999))
  nameInput = prompt("Please enter your good name:- ",nameInput);
}


// Functions for the power ups
function spawnSwatLife(){

  if((frameCount%350===0)&&swatLife<=20){
    pwLife = createSprite(windowWidth+50,spawnSetter.y);
    pwLife.x = Math.round(random(windowWidth+50,windowWidth+130));
    pwLife.y = Math.round(random(spawnSetter.y-30,spawnSetter.y-80));
    pwLife.velocityX =  -(12.077 + 1.5*distance/150);

    
    pwLife.lifetime = 200;
    pwLife.scale = 0.2;


   
    

    


    //pwLife .debug = true;
    pwLife.setCollider("rectangle",0,0,80,50);

    pwLifeGroup.add(pwLife);
    pwLife.addImage(pwLifeImage);


  // Frame Count() end 
  }

  // Collecting the life by the swat fighter 
  if(pwLifeGroup.isTouching(swatFighter)&&swatLife<91){
    pwLifeGroup.destroyEach();
    swatLife = swatLife+10;
    pwLifeSound.play();
  }

  
  
  
  // textSize(30);
  // text(swatLife,200,200);
  // text(swatLife/1.3,300,100);

 


  ///spawnSwatLife() end
}


function spawnUnlimitedAmmo(){

  if((frameCount%650===0)&&ammoMode==="limited"){


    unlimitedAmmo = createSprite(windowWidth+50,spawnSetter.y);
    unlimitedAmmo.x = Math.round(random(windowWidth+50,windowWidth+130));
    unlimitedAmmo.y = Math.round(random(spawnSetter.y-30,spawnSetter.y-80));
    unlimitedAmmo.velocityX =  -(12.077 + 1.5*distance/150);

    
    unlimitedAmmo.lifetime = 200;
    unlimitedAmmo.scale = 0.2;



    //unlimitedAmmo .debug = true;
    unlimitedAmmo.setCollider("rectangle",0,0,690,350);

    unlimitedAmmoGroup.add(unlimitedAmmo);
    unlimitedAmmo.addImage(unlimitedAmmoImage);
    
  }

  // Unlimited bullets touching the swat fighter
  if(unlimitedAmmoGroup.isTouching(swatFighter)){

    pwAmmoDetecter = "start";

    ammoMode = "unlimited";
    //ammoMeter = ammoMeter -1;
   unlimitedAmmoGroup.destroyEach();
   unlimitedAmmoCollectSound.play();    
  }

  // Deteting the power up usage
  if(pwAmmoDetecter==="start"){
    ammoMeter = ammoMeter-1;
  }

  if(ammoMeter<=0){
    pwAmmoDetecter = "end";
  }

  if(pwAmmoDetecter==="end"){
    ammoMode = "limited";
  }

  if(ammoMode==="limited"){
    ammoMeter = 200;
  }



  if(ammoMode==="unlimited"){
  if(keyWentDown("x")){
    bullet1 = createSprite(swatFighter.x+30,swatFighter.y-37);
    bullet1.addImage(bullet1Image);
    bullet1.scale = 0.05;
    bullet1.velocityX = 24;
    bullet1.lifetime = 200;

    bullet1Group.add(bullet1);

    bulletShootSound.play();

    //bulletNumber = bulletNumber-1;

   
  }

  //reloadBulletGroup.destroyEach();

  // if ammmo mode end
}

  


  // textSize(30);
  // text(ammoMeter,200,200);
  
  




  // spawnUnlimitedAmmo() end
}

function spawnArrowX(){


  if(frameCount%900===10){
    pwArrowContainer = createSprite(windowWidth+50,windowHeight/2);
    pwArrowContainer.x = Math.round(random(windowWidth+50,windowWidth+130))
    pwArrowContainer.y = Math.round(random(spawnSetter.y-10,spawnSetter.y-90));
    pwArrowContainer.velocityX = -(8 + 1.5*distance/200);

    pwArrowContainer.addImage(pwArrowContainerImage);

    pwArrowContainer.lifetime = 300;
    pwArrowContainer.scale = 0.2;
    pwArrowXContGroup.add(pwArrowContainer);

  }

 
  // fill("red");
  // textSize(22);
  // text("pwArrowXMode = "+pwArrowXMode,windowWidth/2,windowHeight/2);
  // text("pwArrowXTimer:- "+PwArrowTimer,windowWidth/3.4,windowHeight/2);

  




 


  if(swatFighter.isTouching(pwArrowXContGroup) ){
    pwArrowXMode = "on";
    
    pwArrowXContGroup[0].destroy();
    pwArrowXSound.play();
    pwArrowXSound.loop();
  }


  if(pwArrowXMode==="on"){

    if(frameCount%10===0){
      pwArrowX = createSprite((windowWidth/10)-300,windowHeight/2);
      pwArrowX.x = Math.round(random((windowWidth/10)-350,(windowWidth/10)-250));
      pwArrowX.y = Math.round(random((windowHeight/7.3)+20,windowHeight/1.2));
      pwArrowX.addImage(pwArrowXImage);
      pwArrowX.scale = 0.2;
      pwArrowX.velocityX = (14 + 1.5*distance/250);
      pwArrowX.lifetime = 220;
      pwArrowXGroup.add(pwArrowX);
    }
    PwArrowTimer = PwArrowTimer -0.5;



}

if(PwArrowTimer===0){
  PwArrowTimer = 100;
  pwArrowXMode = "off";
  pwArrowXSound.stop();
}



  // console.log("WindowWidth:"+windowWidth);

  // ArrowX Touching 
  // spider
  if(pwArrowXGroup.isTouching(spiderGroup)){
    spiderGroup.destroyEach();
    spiderDieSound.play();
    spiderSpawnSound.stop();
  
    pwArrowXGroup[0].destroy();
    creaturesKilled = creaturesKilled+1;
    
  }
  


  // sgGaurd
  if(pwArrowXGroup.isTouching(sgGaurdGroup)){
    sgGaurdGroup.destroyEach();
    sgGaurdDieSound.play();
    sgGaurdSpawnSound.stop();


    pwArrowXGroup[0].destroy();
    creaturesKilled = creaturesKilled+1;

  }

  // bigDino
  // bigDino
  if(pwArrowXGroup.isTouching(bigDinoGroup)){
    bigDinoGroup.destroyEach();
    zombieDieSound.play();
    bigDinoSpawnSound1.stop();
    bigDinoSpawnSound2.stop();



    pwArrowXGroup[0].destroy();
    creaturesKilled = creaturesKilled+1;

  }








  // fZombie
  if(pwArrowXGroup.isTouching(fZombieGroup)){
    fZombieGroup.destroyEach();
    zombieDieSound.play();
    zombieSpawnSound.stop();

    pwArrowXGroup[0].destroy();
    creaturesKilled = creaturesKilled+1;

  }

  // mZombie
  if(pwArrowXGroup.isTouching(mZombieGroup)){
    mZombieGroup.destroyEach();
    zombieDieSound.play();
    zombieSpawnSound.stop();

    pwArrowXGroup[0].destroy();
    creaturesKilled = creaturesKilled+1;

  }

  // plantObstacle
  if(pwArrowXGroup.isTouching(obstaclePlantGroup)){
    obstaclePlantGroup.destroyEach();
    obstaclePlantDieSound.play();
    


    pwArrowXGroup[0].destroy();


  }

  // countryObstacle
  if(pwArrowXGroup.isTouching(countryObstacleGroup)){
    countryObstacleGroup.destroyEach();
    countryObstacleDieSound.play();

    pwArrowXGroup[0].destroy();

  }

  // neonObstacle
  if(pwArrowXGroup.isTouching(neonObstacleGroup)){
    neonObstacleGroup.destroyEach();
    neonObstacleDieSound.play();

    pwArrowXGroup[0].destroy();

  }








}

