var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
var game = new Phaser.Game(config);
let keyA;
let keyS;
let keyD;
let keyW;
var gameOver = false;
var player;
var rocks;
var mines;
var patrols;
var diamonds;
var enemy;
var stars1;
var stars2;
var stars3;
var stars4;
var cursors;
var text;
var Hpup;
var Dmgup;
var killsLeft = 6;
var killText;
var currentLevel = 1;
var levelText;
var currentHP = 6;
var HPText;
var titleT;
var BrimCharge = 0;
var BrimCharger = 100;
var helpme = false;
var spawn;
var spawnDelay;
var Down = 400;
var Up = -400;
var Left = -400;
var Right = 400;
var MoveDown = 250;
var MoveUp = -250;
var MoveLeft = -250;
var MoveRight = 250;
var EnemyHPD = 8;
var EnemyHPR = 3;
var EnemyHPM = 1;
var EnemyHPP = 12;
var EnemyHPS = 5;
var EnemyHPF = 5;
var EnemyHPFS = 6;
var EnemyHPFS1 = 5;
var EnemyHPBF = 7;
var EnemyHPC = 4;
var EnemyHPC1 = 4;
var EnemyHPChase = 3;
var EnemyHPMB = 6;
var EnemyHPMAW = 6;
var EnemyHPRMAW = 8;
var EnemyHPH = 6;
var EnemyHPMAG = 4;
var EnemyHPGUSH = 6;
var EnemyHPGLOB = 6;
var EnemyHPCHAR = 6;
var EnemyHPFROW = 4;
var GooHP = 2;
var BossHP = 100;
var GurglingHP = 50;
var ChubHP = 80;
var GurdyHP = 100;
var LokiHP = 50;
var MomHP = 100;
var BulletDMG = 1;
var BulletFire = 1;
var Door1L;
var Door2L;
var Door3L;
var Door4L;
var doorOpened;
var Entered = false;
var killsneeded = 6;
var door = false;
var currentBombs = 0;
var BombText;
var BombF;
var ButtonEdown = false;
var U = false;
var D = false;
var L = false;
var R = false;
var directX;
var directY;
var brimstone;
var brimstoneActive = false;
var laserfire = false;
var brimstoneCharge;
var Acess = false
var playes;
var playez;
var beamActive = false;
var beamDown = false;
var beamUp = false;
var beamLeft = false;
var beamRight = false;
var brimstonelaser = false;
var lazerbeam;
var BR = false;
var BL = false;
var BU = false;
var BD = false;
var LazerDMG = 5;
var lazerbeams;
var switch1 = false;
var getTroom = true;
var MaxHp = 6;
var SoulText;
var currentSouls = 0;
var scapularActive = false;
var addSoulHearts = false;
var BossChance = 0;
var BossMinions = false;
var waveAt75 = false;
var waveAt50 = false;
var waveAt25 = false;
var KeyText;
var currentKeys = 0;
var EnemyBullet;
var bullet;
var EnemyAlive = true;
var EnemyShootAngle;
var TriShotActive = false;
var ShotTimer = true;
var ShotReady = true;
var FireRate = 500;
var wall1;
var Pit;
var Reset = false;
var ResetZone;
var FlyingBullet;
var FlyAlive = true;
var MawAlive = true;
var HorfAlive = true;
var GushAlive = true;
var SpectralActive = false;
var FlyingActive = false;
var BombWait = false;
var RoomNW = false;
var RoomN = false;
var RoomNE = false;
var RoomW = false;
var RoomC = false;
var RoomE = false;
var RoomSW = false;
var RoomS = false;
var RoomSE = false;
var RoomNN = false;
var RoomEE = false;
var RoomSS = false;
var RoomWW = false;
var RoomWWW = false;
var RoomNWClear = false;
var RoomNClear = false;
var RoomNEClear = false;
var RoomWClear = false;
var RoomCClear = false;
var RoomEClear = false;
var RoomSWClear = false;
var RoomSClear = false;
var RoomSEClear = false;
var RoomEEClear = false;
var RoomSSClear = false;
var RoomNNClear = false;
var RoomWWClear = false;
var RoomWWWClear = false;
var Doorcheck;
var RoomLoad;
var TreasurePossible = true;
var ShopPossible = true;
var BossPossible = true;
var GurgExist = 0;
var ClottyAlive = false;
var ClotAlive = false;
var BossProtect = false;
var SoulChance = false;
var LevelText;
var Floor2MapLoad;
var LabyrinthFloor = 1;
var FireBehind = false;
var RazorFireChance = false;
var FireActive = false;
var RazorDamage = false;
var Iframes = false;
var ChubAteBomb = false;
var AngleRoomChance = false;
var DevilRoomChance = true;
var DevilRoomSkip = false;
var DevilDealTaken = false
var PlayersX;
var PlayersY;
function preload() {
    this.load.image('wall', 'http://labs.phaser.io/assets/sprites/gem.png')
    this.load.image('barriers', 'http://labs.phaser.io/assets/sprites/crate32.png')
    this.load.image('tinted', 'http://labs.phaser.io/assets/sprites/crate32.png')
    this.load.image('pit', 'http://labs.phaser.io/assets/sprites/loop.png')
    this.load.image('Room', 'http://labs.phaser.io/assets/sprites/steelbox.png')
    this.load.image('RoomIn', 'http://labs.phaser.io/assets/sprites/box-item-boxed.png')
    //-----------------------------------------------------------
    this.load.image('sky', 'http://labs.phaser.io/src/games/firstgame/assets/sky.png');
    this.load.image('Labyrinth 2', 'http://labs.phaser.io/assets/skies/sky3.png');
    this.load.image('Labyrinth 3', 'http://labs.phaser.io/assets/skies/cavern1.png');
    this.load.image('Labyrinth 4', 'http://labs.phaser.io/assets/skies/cavern2.png');
    this.load.image('Labyrinth 5', 'http://labs.phaser.io/assets/skies/nebula.jpg');
    this.load.image('Labyrinth 6', 'http://labs.phaser.io/assets/skies/space.jpg');
    this.load.image('space', 'http://labs.phaser.io/assets/skies/space.jpg');
    this.load.image('bomb', 'http://labs.phaser.io/src/games/firstgame/assets/bomb.png');
    this.load.image('Spec', 'http://labs.phaser.io/assets/sprites/rain.png');
    this.load.image('menutext', 'http://labs.phaser.io/assets/sprites/button-text.png');
    this.load.image('friendlyBOMB', 'http://labs.phaser.io/assets/sprites/red_ball.png')
    this.load.image('activeBOMB', 'http://labs.phaser.io/assets/sprites/shinyball.png')
    //-----------------------------------------------------------
    this.load.image('diamond', 'http://labs.phaser.io/assets/sprites/diamond.png');
    this.load.image('bullet', 'http://labs.phaser.io/assets/sprites/bullets/bullet7.png');
    this.load.image('Wabbit', 'http://labs.phaser.io/assets/sprites/wabbit.png');
    this.load.image('mine', 'http://labs.phaser.io/assets/sprites/mine.png');
    this.load.image('Slime', 'http://labs.phaser.io/assets/sprites/slime.png');
    this.load.image('Gun', 'http://labs.phaser.io/assets/sprites/player_handgun.png');
    this.load.image('fly', 'http://labs.phaser.io/assets/sprites/wasp.png');
    this.load.image('flyshoot', 'http://labs.phaser.io/assets/sprites/wasp.png');
    this.load.image('clotty', 'http://labs.phaser.io/assets/sprites/mushroom2.png');
    this.load.image('Boss', 'http://labs.phaser.io/assets/sprites/hotdog.png');
    this.load.image('Gurglings', 'http://labs.phaser.io/assets/sprites/brain.png');
    this.load.image('Chub', 'http://labs.phaser.io/assets/sprites/ghost.png');
    this.load.image('Gurdy', 'http://labs.phaser.io/assets/sprites/ra_dont_crack_under_pressure.png');
    this.load.image('Loki', 'http://labs.phaser.io/assets/sprites/darkwing_crazy.png');
    this.load.image('MulliBoom', 'http://labs.phaser.io/assets/sprites/clown.png');
    this.load.image('Gusher', 'http://labs.phaser.io/assets/sprites/default.png');//131231313
    this.load.image('FrowningGaper', 'http://labs.phaser.io/assets/sprites/default.png');//131231313
    this.load.image('Globins', 'http://labs.phaser.io/assets/sprites/default.png');//131231313
    this.load.image('Maggot', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('Charger', 'http://labs.phaser.io/assets/sprites/default.png'); //131231313
    this.load.image('Horf', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('Maws', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('RedMaws', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('MomLeg', 'http://labs.phaser.io/assets/sprites/gameboy_seize_color_40x60.png');
    //-----------------------------------------------------------
    this.load.image('HPup', 'http://labs.phaser.io/assets/sprites/firstaid.png');
    this.load.image('DMGup', 'http://labs.phaser.io/assets/sprites/orb-red.png');
    this.load.image('SoulH', 'http://labs.phaser.io/assets/sprites/orb-blue.png');
    this.load.image('star', 'http://labs.phaser.io/assets/sprites/bluebar.png');
    this.load.image('Coin', 'http://labs.phaser.io/assets/sprites/melon.png');
    this.load.image('Key', 'http://labs.phaser.io/assets/sprites/pineapple.png');
    //-----------------------------------------------------------
    this.load.image('peper', 'http://labs.phaser.io/assets/sprites/pepper.png');
    this.load.image('Blaser', 'http://labs.phaser.io/assets/sprites/rgblaser.png');
    this.load.image('breakfast', 'http://labs.phaser.io/assets/sprites/apple.png');
    this.load.image('quarter', 'http://labs.phaser.io/assets/sprites/purple_ball.png');
    this.load.image('heart', 'http://labs.phaser.io/assets/sprites/tomato.png');
    this.load.image('pact', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('scapular', 'http://labs.phaser.io/assets/sprites/yellow_ball.png');
    this.load.image('tri-shot', 'http://labs.phaser.io/assets/sprites/crate32.png');
    this.load.image('Hangman', 'http://labs.phaser.io/assets/sprites/onion.png');
    this.load.image('spec', 'http://labs.phaser.io/assets/sprites/bullets/bullet9.png');
    this.load.image('belt', 'http://labs.phaser.io/assets/sprites/blue_ball.png');
    this.load.image('mark', 'http://labs.phaser.io/assets/sprites/enemy-bullet.png');
    this.load.image('sadonion', 'http://labs.phaser.io/assets/sprites/onion.png');
    this.load.image('skeleKey', 'http://labs.phaser.io/assets/sprites/bullet.png');
    this.load.image('binky', 'http://labs.phaser.io/assets/sprites/eyes.png');
    this.load.image('pjs', 'http://labs.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('spoon', 'http://labs.phaser.io/assets/sprites/arrow.png');
    //-----------------------------------------------------------
    this.load.audio('BC', 'http://labs.phaser.io/assets/audio/SoundEffects/boss_hit.wav');
    this.load.audio('boom', 'http://labs.phaser.io/assets/audio/SoundEffects/explosion.mp3');
    this.load.audio('playerded', 'http://labs.phaser.io/assets/audio/SoundEffects/player_death.wav')
    this.load.audio('pickup', 'http://labs.phaser.io/assets/audio/SoundEffects/pickup.wav');
    this.load.audio('bump', 'http://labs.phaser.io/assets/audio/SoundEffects/need_cells.wav');
    this.load.audio('coingathered', 'http://labs.phaser.io/assets/audio/SoundEffects/key.wav');
    this.load.audio('bossded', 'http://labs.phaser.io/assets/audio/SoundEffects/sentry_explode.wav');
    this.load.audio('pew', 'http://labs.phaser.io/assets/audio/SoundEffects/pistol.wav');
    this.load.audio('pewpewpew', 'http://labs.phaser.io/assets/audio/SoundEffects/shotgun.wav');
    this.load.spritesheet('dude', 'http://labs.phaser.io/src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
};
function create() {
    basement1 = this.physics.add.group();
    basement2 = this.physics.add.group();
    basement3 = this.physics.add.group();
    basement4 = this.physics.add.group();
    basement5 = this.physics.add.group();
    basement6 = this.physics.add.group();
    basement1.create(400, 300, 'sky');
    this.physics.world.setBounds(0, 0, 800, 600);
    titleT = this.add.image(400, 300, 'menutext').setInteractive();
    titleT.setDepth(1);
    spawn = titleT.on('pointerdown', function () {
        helpme = true;
        setTimeout(function () {
            killsneeded -= 6;
            killsLeft -= 6;
            killText.setText('KillsLeft: ' + killsLeft)
        });
    });
    //-----------------------------------------------------------
    this.physics.pause();
    killText = this.add.text(40, 46, 'KillsLeft: 6', { fontSize: '32px', fill: '#0f0' });
    levelText = this.add.text(40, 78, 'Level: 1', { fontSize: '32px', fill: '#0f0' });
    HPText = this.add.text(40, 102, 'Current Hp: 6', { fontSize: '16px', fill: '#0f0' });
    SoulText = this.add.text(40, 114, 'Soul Hearts: 0', { fontSize: '16px', fill: '#0f0' });
    CoinText = this.add.text(40, 126, 'Coins: 0', { fontSize: '16px', fill: '#0f0' });
    BombText = this.add.text(40, 138, 'Bombs: 0', { fontSize: '16px', fill: '#0f0' });
    KeyText = this.add.text(40, 150, 'Keys: 0', { fontSize: '16px', fill: '#0f0' });
    LevelText = this.add.text(280, 200, 'Explored Labyrinth 1', { fontSize: '24px', fill: '#0f0' });
    //-----------------------------------------------------------
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    //-----------------------------------------------------------
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(400, 400, 'dude').setDepth(1);
    player.setCollideWorldBounds(true);
    killText.setDepth(2);
    levelText.setDepth(2);
    HPText.setDepth(2);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    player.setDrag(1000);
    //-----------------------------------------------------------
    WallBorder = this.physics.add.staticGroup()
    wall1 = this.physics.add.staticGroup();
    tinted = this.physics.add.staticGroup();
    Something = this.physics.add.staticGroup();
    Pit = this.physics.add.staticGroup();
    patrols = this.physics.add.group();
    mines = this.physics.add.group();
    diamonds = this.physics.add.group();
    Boss = this.physics.add.group();
    Gurgling = this.physics.add.staticGroup();
    Chub = this.physics.add.group();
    Gurdy = this.physics.add.group();
    Loki = this.physics.add.group();
    Mom = this.physics.add.group();
    rocks = this.physics.add.group();
    enemy = this.physics.add.group();
    fly = this.physics.add.group();
    chaser = this.physics.add.group();
    clotty = this.physics.add.group();
    clot = this.physics.add.group();
    flyshoot = this.physics.add.group();
    flyshoots = this.physics.add.group();
    flyboom = this.physics.add.group();
    MulliBoom = this.physics.add.group();
    Maw = this.physics.add.group();
    RedMaw = this.physics.add.group();
    Horf = this.physics.add.group();
    Maggot = this.physics.add.group();
    Globin = this.physics.add.group();
    Charger = this.physics.add.group();
    FrowningGaper = this.physics.add.group();
    Gusher = this.physics.add.group();
    EnemyBullet = this.physics.add.group();
    EnemyBullet1 = this.physics.add.group();
    EnemyBullet2 = this.physics.add.group();
    EnemyBullet3 = this.physics.add.group();
    EnemyBullet4 = this.physics.add.group();
    EnemyBullet5 = this.physics.add.group();
    FlyingBullet = this.physics.add.group();
    bombs1 = this.physics.add.group();
    bombs2 = this.physics.add.group();
    bombs3 = this.physics.add.group();
    bombs4 = this.physics.add.group();
    bomb1s = this.physics.add.group();
    bomb2s = this.physics.add.group();
    bomb3s = this.physics.add.group();
    bomb4s = this.physics.add.group();
    b1s = this.physics.add.group();
    b2s = this.physics.add.group();
    b3s = this.physics.add.group();
    b4s = this.physics.add.group();
    Specs1 = this.physics.add.group();
    Specs2 = this.physics.add.group();
    Specs3 = this.physics.add.group();
    Specs4 = this.physics.add.group();
    Spec1s = this.physics.add.group();
    Spec2s = this.physics.add.group();
    Spec3s = this.physics.add.group();
    Spec4s = this.physics.add.group();
    S1s = this.physics.add.group();
    S2s = this.physics.add.group();
    S3s = this.physics.add.group();
    S4s = this.physics.add.group();
    BackDel = this.physics.add.group();
    KillRoom = this.physics.add.group();
    //-----------------------------------------------------------
    bombE = this.physics.add.group();
    bombA = this.physics.add.group();
    bombF = this.physics.add.group();
    Hpup = this.physics.add.group();
    Dmgup = this.physics.add.group();
    melons = this.physics.add.group();
    pineapples = this.physics.add.group();
    SoulHP = this.physics.add.group();
    //-----------------------------------------------------------
    Door1L = this.add.zone(400, 70).setSize(100, 10);
    Door2L = this.add.zone(750, 300).setSize(10, 100);
    Door3L = this.add.zone(400, 530).setSize(100, 10);
    Door4L = this.add.zone(50, 300).setSize(10, 100);
    Door1E = this.physics.add.group();
    Door2E = this.physics.add.group();
    Door3E = this.physics.add.group();
    Door4E = this.physics.add.group();
    Door1Wall = this.physics.add.staticGroup();
    Door2Wall = this.physics.add.staticGroup();
    Door3Wall = this.physics.add.staticGroup();
    Door4Wall = this.physics.add.staticGroup();
    Doorcheck = Math.round(Math.random() * 8);
    if (Doorcheck == 0) {
        RoomNW = true;
    } else if (Doorcheck == 1) {
        RoomN = true;
    } else if (Doorcheck == 2) {
        RoomNE = true;
    } else if (Doorcheck == 3) {
        RoomW = true;
    } else if (Doorcheck == 4) {
        RoomC = true;
    } else if (Doorcheck == 5) {
        RoomE = true;
    } else if (Doorcheck == 6) {
        RoomSW = true;
    } else if (Doorcheck == 7) {
        RoomS = true;
    } else if (Doorcheck == 8) {
        RoomSE = true;
    }
    this.physics.world.enable(Door1L);
    this.physics.world.enable(Door2L);
    this.physics.world.enable(Door3L);
    this.physics.world.enable(Door4L);
    ResetZone = this.physics.add.group();
    ResetDelete = this.physics.add.group();
    Room = this.physics.add.group();
    Floor2Room = this.physics.add.group();
    RoomIn = this.physics.add.group();
    Trapdoor = this.physics.add.group();
    SpecialRoom = this.physics.add.group();
    //-----------------------------------------------------------
    HpShop = this.physics.add.group();
    BombFShop = this.physics.add.group();
    KeyShop = this.physics.add.group();
    SoulShop = this.physics.add.group();
    PactShop = this.physics.add.group();
    BeltShop = this.physics.add.group();
    BinkyShop = this.physics.add.group();
    //-----------------------------------------------------------
    lazerbeam = this.physics.add.group();
    brimstone = this.physics.add.group();
    breakfast = this.physics.add.group();
    quarter = this.physics.add.group();
    heart = this.physics.add.group();
    pact = this.physics.add.group();
    scapular = this.physics.add.group();
    TriShot = this.physics.add.group();
    Hanged = this.physics.add.group();
    Ouiji = this.physics.add.group();
    Belt = this.physics.add.group();
    Mark = this.physics.add.group();
    SadOnion = this.physics.add.group();
    SkeleKey = this.physics.add.group();
    Binky = this.physics.add.group();
    PJs = this.physics.add.group();
    Boom = this.physics.add.group();
    Blanket = this.physics.add.group();
    WSpoon = this.physics.add.group();
    Stigma = this.physics.add.group();
    Mitre = this.physics.add.group();
    Cupid = this.physics.add.group();
    MomEye = this.physics.add.group();
    Contact = this.physics.add.group();
    Apple = this.physics.add.group();
    FireMind = this.physics.add.group();
    //-----------------------------------------------------------
    WallBorder.create(20, 40, 'wall').setTint(0x0f0f0f);
    WallBorder.create(20, 130, 'wall').setTint(0x0f0f0f);
    WallBorder.create(20, 220, 'wall').setTint(0x0f0f0f);
    WallBorder.create(20, 400, 'wall').setTint(0x0f0f0f);
    WallBorder.create(20, 490, 'wall').setTint(0x0f0f0f);
    WallBorder.create(20, 580, 'wall').setTint(0x0f0f0f);
    //-----------------------------------------------------------
    WallBorder.create(780, 40, 'wall').setTint(0x0f0f0f);
    WallBorder.create(780, 130, 'wall').setTint(0x0f0f0f);
    WallBorder.create(780, 220, 'wall').setTint(0x0f0f0f);
    WallBorder.create(780, 400, 'wall').setTint(0x0f0f0f);
    WallBorder.create(780, 490, 'wall').setTint(0x0f0f0f);
    WallBorder.create(780, 580, 'wall').setTint(0x0f0f0f);
    //-----------------------------------------------------------
    WallBorder.create(40, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(130, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(220, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(310, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(490, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(580, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(670, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(760, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
    //-----------------------------------------------------------
    WallBorder.create(40, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(130, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(220, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(310, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(490, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(580, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(670, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    WallBorder.create(760, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
    Room.create(620, 180, 'Room').setScale(0.5).setDepth(3);
    Room.create(700, 180, 'Room').setScale(0.5).setDepth(3);
    Room.create(660, 180, 'Room').setScale(0.5).setDepth(3);
    Room.create(620, 100, 'Room').setScale(0.5).setDepth(3);
    Room.create(700, 100, 'Room').setScale(0.5).setDepth(3);
    Room.create(660, 100, 'Room').setScale(0.5).setDepth(3);
    Room.create(620, 140, 'Room').setScale(0.5).setDepth(3);
    Room.create(700, 140, 'Room').setScale(0.5).setDepth(3);
    Room.create(660, 140, 'Room').setScale(0.5).setDepth(3);
    this.physics.add.collider(bombs1, wall1, WallHit);
    this.physics.add.collider(bombs2, wall1, WallHit);
    this.physics.add.collider(bombs3, wall1, WallHit);
    this.physics.add.collider(bombs4, wall1, WallHit);
    this.physics.add.collider(bomb1s, wall1, WallHit);
    this.physics.add.collider(bomb2s, wall1, WallHit);
    this.physics.add.collider(bomb3s, wall1, WallHit);
    this.physics.add.collider(bomb4s, wall1, WallHit);
    this.physics.add.collider(b1s, wall1, WallHit);
    this.physics.add.collider(b2s, wall1, WallHit);
    this.physics.add.collider(b3s, wall1, WallHit);
    this.physics.add.collider(b4s, wall1, WallHit);
    this.physics.add.collider(SoulHP, SoulHP);
    this.physics.add.collider(pineapples, pineapples);
    this.physics.add.collider(bombE, bombE);
    this.physics.add.collider(Maw, Maw);
    this.physics.add.collider(RedMaw, RedMaw);
    this.physics.add.collider(Maw, RedMaw);
    this.physics.add.collider(Maw, chaser);
    this.physics.add.collider(RedMaw, chaser);
    this.physics.add.overlap(bombF, wall1, RockBoom, null, this);
    //-----------------------------------------------------
    this.physics.add.collider(rocks, diamonds);
    this.physics.add.collider(rocks, patrols);
    this.physics.add.collider(rocks, rocks);
    this.physics.add.collider(player, Hpup, powerUpH, null, this);
    this.physics.add.collider(player, enemy);
    this.physics.add.collider(enemy, enemy);
    this.physics.add.collider(enemy, mines);
    this.physics.add.collider(Gusher, Gusher);
    this.physics.add.collider(FrowningGaper, Gusher);
    this.physics.add.collider(player, Boss, BossHitPlayer, null, this);
    this.physics.add.collider(player, Gurgling, BossHitPlayer, null, this);
    this.physics.add.collider(player, RedMaw, BossHitPlayer, null, this);
    this.physics.add.collider(player, Chub, BossHitPlayer, null, this);
    this.physics.add.collider(player, FrowningGaper, BossHitPlayer, null, this);
    this.physics.add.collider(player, Maggot, BossHitPlayer, null, this);
    this.physics.add.collider(player, Globin, BossHitPlayer, null, this);
    this.physics.add.collider(player, Charger, BossHitPlayer, null, this);
    this.physics.add.collider(Chub, bombF, ChubEatBomb, null, this);
    this.physics.add.collider(wall1, diamonds);
    this.physics.add.collider(wall1, patrols);
    this.physics.add.collider(wall1, rocks);
    this.physics.add.collider(wall1, mines);
    this.physics.add.collider(wall1, enemy);
    this.physics.add.collider(wall1, clotty);
    this.physics.add.collider(wall1, clot);
    this.physics.add.collider(wall1, Chub);
    this.physics.add.collider(wall1, Boss);
    this.physics.add.collider(wall1, Gurgling);
    this.physics.add.collider(wall1, Loki);
    this.physics.add.collider(wall1, MulliBoom);
    this.physics.add.collider(wall1, Maw);
    this.physics.add.collider(wall1, RedMaw);
    this.physics.add.collider(wall1, Horf);
    this.physics.add.collider(wall1, Maggot);
    this.physics.add.collider(Door1Wall, diamonds);
    this.physics.add.collider(Door1Wall, patrols);
    this.physics.add.collider(Door1Wall, rocks);
    this.physics.add.collider(Door1Wall, mines);
    this.physics.add.collider(Door1Wall, enemy);
    this.physics.add.collider(Door1Wall, player);
    this.physics.add.collider(Door1Wall, fly);
    this.physics.add.collider(Door1Wall, flyshoot);
    this.physics.add.collider(Door1Wall, flyshoots);
    this.physics.add.collider(Door1Wall, flyboom);
    this.physics.add.collider(Door1Wall, Boss);
    this.physics.add.collider(Door1Wall, Gurgling);
    this.physics.add.collider(Door1Wall, clotty);
    this.physics.add.collider(Door1Wall, clot);
    this.physics.add.collider(Door1Wall, chaser);
    this.physics.add.collider(Door1Wall, Chub);
    this.physics.add.collider(Door1Wall, Loki);
    this.physics.add.collider(Door1Wall, MulliBoom);
    this.physics.add.collider(Door1Wall, Maw);
    this.physics.add.collider(Door1Wall, RedMaw);
    this.physics.add.collider(Door1Wall, Horf);
    this.physics.add.collider(Door1Wall, Maggot);
    this.physics.add.collider(Door1Wall, Globin);
    this.physics.add.collider(Door1Wall, Charger);
    this.physics.add.collider(Door1Wall, FrowningGaper);
    this.physics.add.collider(Door1Wall, Gusher);
    this.physics.add.collider(Door1Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door1Wall, EnemyBullet1, Deleto);
    this.physics.add.collider(Door1Wall, EnemyBullet2, Deleto);
    this.physics.add.collider(Door1Wall, EnemyBullet3, Deleto);
    this.physics.add.collider(Door1Wall, EnemyBullet4, Deleto);
    this.physics.add.collider(Door1Wall, EnemyBullet5, Deleto);
    this.physics.add.collider(Door1Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door2Wall, diamonds);
    this.physics.add.collider(Door2Wall, patrols);
    this.physics.add.collider(Door2Wall, rocks);
    this.physics.add.collider(Door2Wall, mines);
    this.physics.add.collider(Door2Wall, enemy);
    this.physics.add.collider(Door2Wall, player);
    this.physics.add.collider(Door2Wall, fly);
    this.physics.add.collider(Door2Wall, flyshoot);
    this.physics.add.collider(Door2Wall, flyshoots);
    this.physics.add.collider(Door2Wall, flyboom);
    this.physics.add.collider(Door2Wall, Boss);
    this.physics.add.collider(Door2Wall, Gurgling);
    this.physics.add.collider(Door2Wall, clot);
    this.physics.add.collider(Door2Wall, chaser);
    this.physics.add.collider(Door2Wall, Chub);
    this.physics.add.collider(Door2Wall, Loki);
    this.physics.add.collider(Door2Wall, MulliBoom);
    this.physics.add.collider(Door2Wall, Maw);
    this.physics.add.collider(Door2Wall, RedMaw);
    this.physics.add.collider(Door2Wall, Horf);
    this.physics.add.collider(Door2Wall, Maggot);
    this.physics.add.collider(Door2Wall, Globin);
    this.physics.add.collider(Door2Wall, Charger);
    this.physics.add.collider(Door2Wall, FrowningGaper);
    this.physics.add.collider(Door2Wall, Gusher);
    this.physics.add.collider(Door2Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door2Wall, EnemyBullet1, Deleto);
    this.physics.add.collider(Door2Wall, EnemyBullet2, Deleto);
    this.physics.add.collider(Door2Wall, EnemyBullet3, Deleto);
    this.physics.add.collider(Door2Wall, EnemyBullet4, Deleto);
    this.physics.add.collider(Door2Wall, EnemyBullet5, Deleto);
    this.physics.add.collider(Door2Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door3Wall, diamonds);
    this.physics.add.collider(Door3Wall, patrols);
    this.physics.add.collider(Door3Wall, rocks);
    this.physics.add.collider(Door3Wall, mines);
    this.physics.add.collider(Door3Wall, enemy);
    this.physics.add.collider(Door3Wall, player);
    this.physics.add.collider(Door3Wall, fly);
    this.physics.add.collider(Door3Wall, flyshoot);
    this.physics.add.collider(Door3Wall, flyshoots);
    this.physics.add.collider(Door3Wall, flyboom);
    this.physics.add.collider(Door3Wall, Boss);
    this.physics.add.collider(Door3Wall, Gurgling);
    this.physics.add.collider(Door3Wall, clotty);
    this.physics.add.collider(Door3Wall, clot);
    this.physics.add.collider(Door3Wall, chaser);
    this.physics.add.collider(Door3Wall, Chub);
    this.physics.add.collider(Door3Wall, Loki);
    this.physics.add.collider(Door3Wall, MulliBoom);
    this.physics.add.collider(Door3Wall, Maw);
    this.physics.add.collider(Door3Wall, RedMaw);
    this.physics.add.collider(Door3Wall, Horf);
    this.physics.add.collider(Door3Wall, Maggot);
    this.physics.add.collider(Door3Wall, Globin);
    this.physics.add.collider(Door3Wall, Charger);
    this.physics.add.collider(Door3Wall, FrowningGaper);
    this.physics.add.collider(Door3Wall, Gusher);
    this.physics.add.collider(Door3Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door3Wall, EnemyBullet1, Deleto);
    this.physics.add.collider(Door3Wall, EnemyBullet2, Deleto);
    this.physics.add.collider(Door3Wall, EnemyBullet3, Deleto);
    this.physics.add.collider(Door3Wall, EnemyBullet4, Deleto);
    this.physics.add.collider(Door3Wall, EnemyBullet5, Deleto);
    this.physics.add.collider(Door3Wall, FlyingBullet, Deleto);
    this.physics.add.collider(Door4Wall, diamonds);
    this.physics.add.collider(Door4Wall, patrols);
    this.physics.add.collider(Door4Wall, rocks);
    this.physics.add.collider(Door4Wall, mines);
    this.physics.add.collider(Door4Wall, enemy);
    this.physics.add.collider(Door4Wall, player);
    this.physics.add.collider(Door4Wall, fly);
    this.physics.add.collider(Door4Wall, flyshoot);
    this.physics.add.collider(Door4Wall, flyshoots);
    this.physics.add.collider(Door4Wall, flyboom);
    this.physics.add.collider(Door4Wall, Boss);
    this.physics.add.collider(Door4Wall, Gurgling);
    this.physics.add.collider(Door4Wall, clotty);
    this.physics.add.collider(Door4Wall, clot);
    this.physics.add.collider(Door4Wall, chaser);
    this.physics.add.collider(Door4Wall, Chub);
    this.physics.add.collider(Door4Wall, Loki);
    this.physics.add.collider(Door4Wall, MulliBoom);
    this.physics.add.collider(Door4Wall, Maw);
    this.physics.add.collider(Door4Wall, RedMaw);
    this.physics.add.collider(Door4Wall, Horf);
    this.physics.add.collider(Door4Wall, Maggot);
    this.physics.add.collider(Door4Wall, Globin);
    this.physics.add.collider(Door4Wall, Charger);
    this.physics.add.collider(Door4Wall, FrowningGaper);
    this.physics.add.collider(Door4Wall, Gusher);
    this.physics.add.collider(Door4Wall, EnemyBullet, Deleto);
    this.physics.add.collider(Door4Wall, EnemyBullet1, Deleto);
    this.physics.add.collider(Door4Wall, EnemyBullet2, Deleto);
    this.physics.add.collider(Door4Wall, EnemyBullet3, Deleto);
    this.physics.add.collider(Door4Wall, EnemyBullet4, Deleto);
    this.physics.add.collider(Door4Wall, EnemyBullet5, Deleto);
    this.physics.add.collider(Door4Wall, FlyingBullet, Deleto);
    this.physics.add.collider(WallBorder, diamonds);
    this.physics.add.collider(WallBorder, patrols);
    this.physics.add.collider(WallBorder, rocks);
    this.physics.add.collider(WallBorder, mines);
    this.physics.add.collider(WallBorder, enemy);
    this.physics.add.collider(WallBorder, player);
    this.physics.add.collider(WallBorder, fly);
    this.physics.add.collider(WallBorder, flyshoot);
    this.physics.add.collider(WallBorder, flyshoots);
    this.physics.add.collider(WallBorder, flyboom);
    this.physics.add.collider(WallBorder, Boss);
    this.physics.add.collider(WallBorder, Gurgling);
    this.physics.add.collider(WallBorder, clotty);
    this.physics.add.collider(WallBorder, clot);
    this.physics.add.collider(WallBorder, chaser);
    this.physics.add.collider(WallBorder, Chub);
    this.physics.add.collider(WallBorder, Loki);
    this.physics.add.collider(WallBorder, MulliBoom);
    this.physics.add.collider(WallBorder, Globin);
    this.physics.add.collider(WallBorder, Charger);
    this.physics.add.collider(WallBorder, FrowningGaper);
    this.physics.add.collider(WallBorder, Gusher);
    this.physics.add.collider(chaser, chaser);
    this.physics.add.collider(WallBorder, wall1, Deleto1);
    this.physics.add.collider(WallBorder, Pit, Deleto2);
    this.physics.add.collider(WallBorder, EnemyBullet, Deleto);
    this.physics.add.collider(WallBorder, EnemyBullet1, Deleto);
    this.physics.add.collider(WallBorder, EnemyBullet2, Deleto);
    this.physics.add.collider(WallBorder, EnemyBullet3, Deleto);
    this.physics.add.collider(WallBorder, EnemyBullet4, Deleto);
    this.physics.add.collider(WallBorder, EnemyBullet5, Deleto);
    this.physics.add.collider(WallBorder, FlyingBullet, Deleto);
    this.physics.add.overlap(wall1, player, CheckFly, null, this);
    this.physics.add.collider(wall1, EnemyBullet, Deleto);
    this.physics.add.collider(wall1, FlyingBullet, Deleto);
    this.physics.add.collider(Pit, diamonds);
    this.physics.add.collider(Pit, patrols);
    this.physics.add.collider(Pit, rocks);
    this.physics.add.collider(Pit, mines);
    this.physics.add.collider(Pit, enemy);
    this.physics.add.collider(Pit, Maggot);
    this.physics.add.collider(Pit, Globin);
    this.physics.add.collider(Pit, Charger);
    this.physics.add.collider(Pit, FrowningGaper);
    this.physics.add.collider(Pit, Gusher);
    this.physics.add.overlap(Pit, player, CheckFly, null, this);
    //-----------------------------------------------------------
    this.physics.add.overlap(bombs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs1, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs2, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs3, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs4, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs1, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs2, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs3, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs4, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs1, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs2, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs3, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs4, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs4, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs1, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bombs2, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bombs3, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bombs4, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bombs1, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs2, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs3, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs4, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bombs1, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs2, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs3, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs4, clotty, targetHitC, null, this);
    this.physics.add.overlap(bombs1, clot, targetHitC1, null, this);
    this.physics.add.overlap(bombs2, clot, targetHitC1, null, this);
    this.physics.add.overlap(bombs3, clot, targetHitC1, null, this);
    this.physics.add.overlap(bombs4, clot, targetHitC1, null, this);
    this.physics.add.overlap(bombs1, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bombs2, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bombs3, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bombs4, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bombs1, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bombs2, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bombs3, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bombs4, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bombs1, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bombs2, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bombs3, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bombs4, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bombs1, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bombs2, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bombs3, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bombs4, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bombs1, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bombs2, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bombs3, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bombs4, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bombs1, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bombs2, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bombs3, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bombs4, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bombs1, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bombs2, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bombs3, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bombs4, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bombs1, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bombs2, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bombs3, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bombs4, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bombs1, Horf, targetHitH, null, this);
    this.physics.add.overlap(bombs2, Horf, targetHitH, null, this);
    this.physics.add.overlap(bombs3, Horf, targetHitH, null, this);
    this.physics.add.overlap(bombs4, Horf, targetHitH, null, this);
    this.physics.add.overlap(bombs1, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bombs2, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bombs3, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bombs4, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bombs1, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bombs2, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bombs3, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bombs4, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bombs1, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bombs2, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bombs3, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bombs4, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bombs1, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bombs2, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bombs3, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bombs4, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bombs1, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bombs2, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bombs3, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bombs4, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bomb1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb1s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb2s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb3s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb4s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb1s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb2s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb3s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb4s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb1s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb2s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb3s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb4s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb1s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bomb2s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bomb3s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bomb4s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(bomb1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(bomb1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb4s, clotty, targetHitC, null, this);
    this.physics.add.overlap(bomb1s, clot, targetHitC1, null, this);
    this.physics.add.overlap(bomb2s, clot, targetHitC1, null, this);
    this.physics.add.overlap(bomb3s, clot, targetHitC1, null, this);
    this.physics.add.overlap(bomb4s, clot, targetHitC1, null, this);
    this.physics.add.overlap(bomb1s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bomb2s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bomb3s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bomb4s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(bomb1s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bomb2s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bomb3s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bomb4s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(bomb1s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bomb2s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bomb3s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bomb4s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(bomb1s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bomb2s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bomb3s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bomb4s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(bomb1s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bomb2s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bomb3s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bomb4s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(bomb1s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bomb2s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bomb3s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bomb4s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(bomb1s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bomb2s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bomb3s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bomb4s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(bomb1s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bomb2s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bomb3s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bomb4s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(bomb1s, Horf, targetHitH, null, this);
    this.physics.add.overlap(bomb2s, Horf, targetHitH, null, this);
    this.physics.add.overlap(bomb3s, Horf, targetHitH, null, this);
    this.physics.add.overlap(bomb4s, Horf, targetHitH, null, this);
    this.physics.add.overlap(bomb1s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bomb2s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bomb3s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bomb4s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(bomb1s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bomb2s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bomb3s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bomb4s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(bomb1s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bomb2s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bomb3s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bomb4s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(bomb1s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bomb2s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bomb3s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bomb4s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bomb1s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bomb2s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bomb3s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(bomb4s, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(b1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b1s, mines, targetHitM, null, this);
    this.physics.add.overlap(b2s, mines, targetHitM, null, this);
    this.physics.add.overlap(b3s, mines, targetHitM, null, this);
    this.physics.add.overlap(b4s, mines, targetHitM, null, this);
    this.physics.add.overlap(b1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b1s, Boss, bossHit, null, this);
    this.physics.add.overlap(b2s, Boss, bossHit, null, this);
    this.physics.add.overlap(b3s, Boss, bossHit, null, this);
    this.physics.add.overlap(b4s, Boss, bossHit, null, this);
    this.physics.add.overlap(b1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b1s, fly, targetHitF, null, this);
    this.physics.add.overlap(b2s, fly, targetHitF, null, this);
    this.physics.add.overlap(b3s, fly, targetHitF, null, this);
    this.physics.add.overlap(b4s, fly, targetHitF, null, this);
    this.physics.add.overlap(b1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b1s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(b2s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(b3s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(b4s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(b1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(b1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b4s, clotty, targetHitC, null, this);
    this.physics.add.overlap(b1s, clot, targetHitC1, null, this);
    this.physics.add.overlap(b2s, clot, targetHitC1, null, this);
    this.physics.add.overlap(b3s, clot, targetHitC1, null, this);
    this.physics.add.overlap(b4s, clot, targetHitC1, null, this);
    this.physics.add.overlap(b1s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(b2s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(b3s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(b4s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(b1s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(b2s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(b3s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(b4s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(b1s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(b2s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(b3s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(b4s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(b1s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(b2s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(b3s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(b4s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(b1s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(b2s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(b3s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(b4s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(b1s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(b2s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(b3s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(b4s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(b1s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(b2s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(b3s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(b4s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(b1s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(b2s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(b3s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(b4s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(b1s, Horf, targetHitH, null, this);
    this.physics.add.overlap(b2s, Horf, targetHitH, null, this);
    this.physics.add.overlap(b3s, Horf, targetHitH, null, this);
    this.physics.add.overlap(b4s, Horf, targetHitH, null, this);
    this.physics.add.overlap(b1s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(b2s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(b3s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(b4s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(b1s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(b2s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(b3s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(b4s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(b1s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(b2s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(b3s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(b4s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(b1s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(bomb2s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(b3s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(b4s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(b1s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(b2s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(b3s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(b4s, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombs1, bombs1, NoOverlap, null, this);
    this.physics.add.overlap(bombs2, bombs2, NoOverlap, null, this);
    this.physics.add.overlap(bombs3, bombs3, NoOverlap, null, this);
    this.physics.add.overlap(bombs4, bombs4, NoOverlap, null, this);
    this.physics.add.overlap(bomb1s, bomb1s, NoOverlap, null, this);
    this.physics.add.overlap(bomb2s, bomb2s, NoOverlap, null, this);
    this.physics.add.overlap(bomb3s, bomb3s, NoOverlap, null, this);
    this.physics.add.overlap(bomb4s, bomb4s, NoOverlap, null, this);
    this.physics.add.overlap(b1s, b1s, NoOverlap, null, this);
    this.physics.add.overlap(b2s, b2s, NoOverlap, null, this);
    this.physics.add.overlap(b3s, b3s, NoOverlap, null, this);
    this.physics.add.overlap(b4s, b4s, NoOverlap, null, this);
    this.physics.add.overlap(lazerbeam, lazerbeam, NoOverlap, null, this);
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    this.physics.add.overlap(Specs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs1, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs2, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs3, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs4, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs1, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs2, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs3, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs4, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs1, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs2, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs3, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs4, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs4, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs1, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Specs2, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Specs3, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Specs4, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Specs1, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs2, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs3, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs4, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Specs1, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs2, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs3, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs4, clotty, targetHitC, null, this);
    this.physics.add.overlap(Specs1, clot, targetHitC1, null, this);
    this.physics.add.overlap(Specs2, clot, targetHitC1, null, this);
    this.physics.add.overlap(Specs3, clot, targetHitC1, null, this);
    this.physics.add.overlap(Specs4, clot, targetHitC1, null, this);
    this.physics.add.overlap(Specs1, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Specs2, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Specs3, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Specs4, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Specs1, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Specs2, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Specs3, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Specs4, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Specs1, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Specs2, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Specs3, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Specs4, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Specs1, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Specs2, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Specs3, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Specs4, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Specs1, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Specs2, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Specs3, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Specs4, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Specs1, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Specs2, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Specs3, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Specs4, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Specs1, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Specs2, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Specs3, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Specs4, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Specs1, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Specs2, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Specs3, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Specs4, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Specs1, Horf, targetHitH, null, this);
    this.physics.add.overlap(Specs2, Horf, targetHitH, null, this);
    this.physics.add.overlap(Specs3, Horf, targetHitH, null, this);
    this.physics.add.overlap(Specs4, Horf, targetHitH, null, this);
    this.physics.add.overlap(Specs1, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Specs2, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Specs3, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Specs4, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Specs1, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Specs2, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Specs3, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Specs4, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Specs1, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Specs2, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Specs3, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Specs4, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Specs1, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Specs2, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Specs3, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Specs4, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Specs1, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Specs2, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Specs3, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Specs4, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Spec1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec1s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec2s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec3s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec4s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec1s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec2s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec3s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec4s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec1s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec2s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec3s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec4s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec1s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Spec2s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Spec3s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Spec4s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(Spec1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(Spec1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec4s, clotty, targetHitC, null, this);
    this.physics.add.overlap(Spec1s, clot, targetHitC1, null, this);
    this.physics.add.overlap(Spec2s, clot, targetHitC1, null, this);
    this.physics.add.overlap(Spec3s, clot, targetHitC1, null, this);
    this.physics.add.overlap(Spec4s, clot, targetHitC1, null, this);
    this.physics.add.overlap(Spec1s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Spec2s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Spec3s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Spec4s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(Spec1s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Spec2s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Spec3s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Spec4s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(Spec1s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Spec2s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Spec3s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Spec4s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(Spec1s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Spec2s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Spec3s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Spec4s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(Spec1s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Spec2s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Spec3s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Spec4s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(Spec1s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Spec2s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Spec3s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Spec4s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(Spec1s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Spec2s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Spec3s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Spec4s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(Spec1s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Spec2s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Spec3s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Spec4s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(Spec1s, Horf, targetHitH, null, this);
    this.physics.add.overlap(Spec2s, Horf, targetHitH, null, this);
    this.physics.add.overlap(Spec3s, Horf, targetHitH, null, this);
    this.physics.add.overlap(Spec4s, Horf, targetHitH, null, this);
    this.physics.add.overlap(Spec1s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Spec2s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Spec3s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Spec4s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(Spec1s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Spec2s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Spec3s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Spec4s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(Spec1s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Spec2s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Spec3s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Spec4s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(Spec1s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Spec2s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Spec3s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Spec4s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(Spec1s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Spec2s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Spec3s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(Spec4s, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(S1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S1s, mines, targetHitM, null, this);
    this.physics.add.overlap(S2s, mines, targetHitM, null, this);
    this.physics.add.overlap(S3s, mines, targetHitM, null, this);
    this.physics.add.overlap(S4s, mines, targetHitM, null, this);
    this.physics.add.overlap(S1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S1s, Boss, bossHit, null, this);
    this.physics.add.overlap(S2s, Boss, bossHit, null, this);
    this.physics.add.overlap(S3s, Boss, bossHit, null, this);
    this.physics.add.overlap(S4s, Boss, bossHit, null, this);
    this.physics.add.overlap(S1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S1s, fly, targetHitF, null, this);
    this.physics.add.overlap(S2s, fly, targetHitF, null, this);
    this.physics.add.overlap(S3s, fly, targetHitF, null, this);
    this.physics.add.overlap(S4s, fly, targetHitF, null, this);
    this.physics.add.overlap(S1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S4s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S1s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(S2s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(S3s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(S4s, flyshoots, targetHitFS1, null, this);
    this.physics.add.overlap(S1s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S2s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S3s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S4s, Gurgling, targetHitG, null, this);
    this.physics.add.overlap(S1s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S2s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S3s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S4s, clotty, targetHitC, null, this);
    this.physics.add.overlap(S1s, clot, targetHitC1, null, this);
    this.physics.add.overlap(S2s, clot, targetHitC1, null, this);
    this.physics.add.overlap(S3s, clot, targetHitC1, null, this);
    this.physics.add.overlap(S4s, clot, targetHitC1, null, this);
    this.physics.add.overlap(S1s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(S2s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(S3s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(S4s, chaser, targetHitChase, null, this);
    this.physics.add.overlap(S1s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(S2s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(S3s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(S4s, Chub, targetHitChub, null, this);
    this.physics.add.overlap(S1s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(S2s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(S3s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(S4s, Gurdy, targetHitGurdy, null, this);
    this.physics.add.overlap(S1s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(S2s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(S3s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(S4s, Loki, targetHitLoki, null, this);
    this.physics.add.overlap(S1s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(S2s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(S3s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(S4s, flyboom, targetHitBF, null, this);
    this.physics.add.overlap(S1s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(S2s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(S3s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(S4s, MulliBoom, targetHitMB, null, this);
    this.physics.add.overlap(S1s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(S2s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(S3s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(S4s, Maw, targetHitMAW, null, this);
    this.physics.add.overlap(S1s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(S2s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(S3s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(S4s, RedMaw, targetHitRMAW, null, this);
    this.physics.add.overlap(S1s, Horf, targetHitH, null, this);
    this.physics.add.overlap(S2s, Horf, targetHitH, null, this);
    this.physics.add.overlap(S3s, Horf, targetHitH, null, this);
    this.physics.add.overlap(S4s, Horf, targetHitH, null, this);
    this.physics.add.overlap(S1s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(S2s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(S3s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(S4s, Maggot, targetHitMAG, null, this);
    this.physics.add.overlap(S1s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(S2s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(S3s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(S4s, Gusher, targetHitGUSH, null, this);
    this.physics.add.overlap(S1s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(S2s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(S3s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(S4s, FrowningGaper, targetHitFROW, null, this);
    this.physics.add.overlap(S1s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(S2s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(S3s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(S4s, Charger, targetHitCHAR, null, this);
    this.physics.add.overlap(S1s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(S2s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(S3s, Globin, targetHitGLOB, null, this);
    this.physics.add.overlap(S4s, Globin, targetHitGLOB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Specs1, Specs1, NoOverlap, null, this);
    this.physics.add.overlap(Specs2, Specs2, NoOverlap, null, this);
    this.physics.add.overlap(Specs3, Specs3, NoOverlap, null, this);
    this.physics.add.overlap(Specs4, Specs4, NoOverlap, null, this);
    this.physics.add.overlap(Spec1s, Spec1s, NoOverlap, null, this);
    this.physics.add.overlap(Spec2s, Spec2s, NoOverlap, null, this);
    this.physics.add.overlap(Spec3s, Spec3s, NoOverlap, null, this);
    this.physics.add.overlap(Spec4s, Spec4s, NoOverlap, null, this);
    this.physics.add.overlap(S1s, S1s, NoOverlap, null, this);
    this.physics.add.overlap(S2s, S2s, NoOverlap, null, this);
    this.physics.add.overlap(S3s, S3s, NoOverlap, null, this);
    this.physics.add.overlap(S4s, S4s, NoOverlap, null, this);
    this.physics.add.overlap(player, mines, youHit, null, this);
    this.physics.add.overlap(player, diamonds, youHit, null, this);
    this.physics.add.overlap(player, patrols, youHit, null, this);
    this.physics.add.overlap(player, fly, youHit, null, this);
    this.physics.add.overlap(player, chaser, youHit, null, this);
    this.physics.add.overlap(player, flyboom, youHit, null, this);
    this.physics.add.collider(player, flyshoot);
    this.physics.add.collider(player, flyshoots);
    this.physics.add.overlap(player, EnemyBullet, BulletOw, null, this);
    this.physics.add.overlap(player, EnemyBullet1, BulletOw, null, this);
    this.physics.add.overlap(player, EnemyBullet2, BulletOw, null, this);
    this.physics.add.overlap(player, EnemyBullet3, BulletOw, null, this);
    this.physics.add.overlap(player, EnemyBullet4, BulletOw, null, this);
    this.physics.add.overlap(player, EnemyBullet5, BulletOw, null, this);
    this.physics.add.overlap(player, FlyingBullet, BulletOw, null, this);
    this.physics.add.overlap(player, bombA, BombOw, null, this);
    this.physics.add.overlap(player, MulliBoom, MBexplode, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Hpup, powerUpH, null, this);
    this.physics.add.overlap(player, Dmgup, powerUpD, null, this);
    this.physics.add.overlap(player, bombE, powerupB, null, this);
    this.physics.add.overlap(player, SoulHP, powerupSH, null, this);
    this.physics.add.overlap(player, brimstone, itemBrimstone, null, this);
    this.physics.add.overlap(player, melons, pickupC, null, this);
    this.physics.add.overlap(player, pineapples, pickupK, null, this);
    this.physics.add.overlap(player, breakfast, breakFast, null, this);
    this.physics.add.overlap(player, quarter, AQuarter, null, this);
    this.physics.add.overlap(player, heart, v3, null, this);
    this.physics.add.overlap(player, pact, ThePact, null, this);
    this.physics.add.overlap(player, scapular, Scapular, null, this);
    this.physics.add.overlap(player, TriShot, TripleShot, null, this);
    this.physics.add.overlap(player, Hanged, HangMan, null, this);
    this.physics.add.overlap(player, Ouiji, OuijiBoard, null, this);
    this.physics.add.overlap(player, Belt, TheBelt, null, this);
    this.physics.add.overlap(player, Mark, TheMark, null, this);
    this.physics.add.overlap(player, SadOnion, TheSadOnion, null, this);
    this.physics.add.overlap(player, SkeleKey, SkeletonKey, null, this);
    this.physics.add.overlap(player, Binky, TheBinki, null, this);
    this.physics.add.overlap(player, PJs, Pajamas, null, this);
    this.physics.add.overlap(player, Boom, BooM, null, this);
    this.physics.add.overlap(player, Blanket, TheBlanket, null, this);
    this.physics.add.overlap(player, WSpoon, WoodenSpoon, null, this);
    this.physics.add.overlap(player, Stigma, TheStigma, null, this);
    this.physics.add.overlap(player, Mitre, TheMitre, null, this);
    this.physics.add.overlap(player, Cupid, CupidsArrow, null, this);
    this.physics.add.overlap(player, MomEye, MomsEye, null, this);
    this.physics.add.overlap(player, Contact, LostContact, null, this);
    this.physics.add.overlap(player, Apple, AnApple, null, this);
    this.physics.add.overlap(player, FireMind, TheFireMind, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Door1E, door1Leave, null, this);
    this.physics.add.overlap(player, Door2E, door2Leave, null, this);
    this.physics.add.overlap(player, Door3E, door3Leave, null, this);
    this.physics.add.overlap(player, Door4E, door4Leave, null, this);
    this.physics.add.overlap(player, Trapdoor, NextFloor, null, this);
    this.physics.add.overlap(player, SpecialRoom, DevilAngelRoom, null, this);
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------
    this.physics.add.overlap(mines, patrols, mineHitP, null, this);
    this.physics.add.overlap(mines, rocks, mineHitR, null, this);
    this.physics.add.overlap(mines, diamonds, mineHitD, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombF, diamonds, fE, null, this);
    this.physics.add.overlap(bombF, patrols, fE, null, this);
    this.physics.add.overlap(bombF, rocks, fE, null, this);
    this.physics.add.overlap(bombF, mines, fE, null, this);
    this.physics.add.overlap(bombF, enemy, fE, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(lazerbeam, diamonds, fb, null, this);
    this.physics.add.overlap(lazerbeam, patrols, fb, null, this);
    this.physics.add.overlap(lazerbeam, rocks, fb, null, this);
    this.physics.add.overlap(lazerbeam, mines, fb, null, this);
    this.physics.add.overlap(lazerbeam, enemy, fb, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, HpShop, buyHP, null, this);
    this.physics.add.overlap(player, BombFShop, buyBOMB, null, this);
    this.physics.add.overlap(player, KeyShop, buyKEY, null, this);
    this.physics.add.overlap(player, SoulShop, buySOUL, null, this);
    this.physics.add.overlap(player, PactShop, buyPACT, null, this);
    this.physics.add.overlap(player, BeltShop, buyBELT, null, this);
    this.physics.add.overlap(player, BinkyShop, buyBINKY, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(ResetZone, wall1, RestartW, null, this);
    this.physics.add.overlap(ResetZone, Pit, RestartP, null, this);
    this.physics.add.overlap(ResetZone, Door1E, Restart1, null, this);
    this.physics.add.overlap(ResetZone, Door2E, Restart2, null, this);
    this.physics.add.overlap(ResetZone, Door3E, Restart3, null, this);
    this.physics.add.overlap(ResetZone, Door4E, Restart4, null, this);
    this.physics.add.overlap(ResetZone, Door1Wall, Restart1W, null, this);
    this.physics.add.overlap(ResetZone, Door2Wall, Restart2W, null, this);
    this.physics.add.overlap(ResetZone, Door3Wall, Restart3W, null, this);
    this.physics.add.overlap(ResetZone, Door4Wall, Restart4W, null, this);
    this.physics.add.overlap(ResetZone, RoomIn, RestartR, null, this);
    this.physics.add.collider(ResetZone, ResetDelete, Restart);
    this.physics.add.overlap(basement1, BackDel, NewFloor1, null, this);
    this.physics.add.overlap(basement2, BackDel, NewFloor2, null, this);
    this.physics.add.overlap(basement3, BackDel, NewFloor3, null, this);
    this.physics.add.overlap(basement4, BackDel, NewFloor4, null, this);
    this.physics.add.overlap(basement5, BackDel, NewFloor5, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(KillRoom, diamonds, EnemyKill1, null, this);
    this.physics.add.overlap(KillRoom, patrols, EnemyKill2, null, this);
    this.physics.add.overlap(KillRoom, rocks, EnemyKill3, null, this);
    this.physics.add.overlap(KillRoom, fly, EnemyKill4, null, this);
    this.physics.add.overlap(KillRoom, flyshoot, EnemyKill5, null, this);
    this.physics.add.overlap(KillRoom, Boss, EnemyKill6, null, this);
    this.physics.add.overlap(KillRoom, Gurgling, EnemyKill7, null, this);
    this.physics.add.overlap(KillRoom, clotty, EnemyKill8, null, this);
    this.physics.add.overlap(KillRoom, mines, EnemyKill9, null, this);
    this.physics.add.overlap(KillRoom, enemy, EnemyKill10, null, this);
    this.physics.add.overlap(KillRoom, chaser, EnemyKill11, null, this);
    this.physics.add.overlap(KillRoom, Chub, EnemyKill12, null, this);
    this.physics.add.overlap(KillRoom, clot, EnemyKill13, null, this);
    this.physics.add.overlap(KillRoom, flyshoots, EnemyKill14, null, this);
    this.physics.add.overlap(KillRoom, Loki, EnemyKill15, null, this);
    this.physics.add.overlap(KillRoom, Loki, EnemyKill16, null, this);
    this.physics.add.overlap(KillRoom, MulliBoom, EnemyKill17, null, this);
    this.physics.add.overlap(KillRoom, Maw, EnemyKill18, null, this);
    this.physics.add.overlap(KillRoom, RedMaw, EnemyKill19, null, this);
    this.physics.add.overlap(KillRoom, Horf, EnemyKill20, null, this);
    this.physics.add.overlap(KillRoom, Maggot, EnemyKill21, null, this);
    this.physics.add.overlap(KillRoom, Gusher, EnemyKill22, null, this);
    this.physics.add.overlap(KillRoom, FrowningGaper, EnemyKill23, null, this);
    this.physics.add.overlap(KillRoom, Charger, EnemyKill24, null, this);
    this.physics.add.overlap(KillRoom, Globin, EnemyKill25, null, this);
};
function update() {
    if (RoomLoad == true) {
        if (RoomNW == true) {
            console.log('NW');
            RoomIn.create(620, 100, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
        } else if (RoomN == true) {
            console.log('N');
            RoomIn.create(660, 100, 'RoomIn').setScale(0.5).setDepth(3);
            if (LabyrinthFloor >= 2) {
                Door1E.create(400, 20, 'star').setSize(100, 10);
            } else {
                Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            }
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomNE == true) {
            console.log('NE');
            RoomIn.create(700, 100, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomNN == true) {
            console.log('NN');
            RoomIn.create(660, 60, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
        } else if (RoomW == true) {
            console.log('W');
            RoomIn.create(620, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            if (LabyrinthFloor >= 5) {
                Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
            } else {
                Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
            }
        } else if (RoomWW == true) {
            console.log('WW')
            RoomIn.create(580, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3Wall.create(400, 600, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
        } else if (RoomWWW == true) {
            console.log('MOM BOSS')
            RoomIn.create(540, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3Wall.create(400, 600, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
            setInterval(function() {
                var MomLeg = Mom.create(-50, -50, 'MomLeg').setTint(0x0f0f0f).setScale(2).setAngle(90);
                var Warning = bombF.create(player.x, player.y);
                Warning;
                setTimeout(function() {
                MomLeg.x = Warning.x;
                MomLeg.y = Warning.y;
                var LegBoom = bombA.create(Warning.x, Warning.y, 'activeBOMB');
                LegBoom.setScale(3);
                setTimeout(function () {
                    LegBoom.disableBody(true, true);
                    Warning.disableBody(true, true)
                    MomLeg.setVelocityY(-800)
                    setTimeout(function() {
                        MomLeg.setVelocityY(0)
                    }, 100);
                }, 10);
            }, 1000);
            }, 7000);
        } else if (RoomC == true) {
            console.log('C');
            RoomIn.create(660, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomE == true) {
            console.log('E');
            RoomIn.create(700, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            if (LabyrinthFloor >= 4) {
                Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            } else {
                Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            }
            Door3E.create(400, 580, 'star').setSize(100, 10);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomEE == true) {
            console.log('EE');
            RoomIn.create(740, 140, 'RoomIn').setScale(0.5).setDepth(3);
            Door1Wall.create(400, 10, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3Wall.create(400, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomSW == true) {
            console.log('SW');
            RoomIn.create(620, 180, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            Door3Wall.create(400, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
        } else if (RoomS == true) {
            console.log('S');
            RoomIn.create(660, 180, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2E.create(780, 310, 'star').setAngle(90).setSize(10, 100);
            if (LabyrinthFloor >= 3) {
                Door3E.create(400, 580, 'star').setSize(100, 10);
            } else {
                Door3Wall.create(400, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
            }
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomSE == true) {
            console.log('SE');
            RoomIn.create(700, 180, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3Wall.create(400, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4E.create(20, 310, 'star').setAngle(90).setSize(10, 100);
        } else if (RoomSS == true) {
            console.log('SS');
            RoomIn.create(660, 220, 'RoomIn').setScale(0.5).setDepth(3);
            Door1E.create(400, 20, 'star').setSize(100, 10);
            Door2Wall.create(780, 310, 'wall').setTint(0x0f0f0f);
            Door3Wall.create(400, 580, 'wall').setAngle(90).setTint(0x0f0f0f);
            Door4Wall.create(20, 310, 'wall').setTint(0x0f0f0f);
        }
        RoomLoad = false;
    }
    ShootingFunction();
    if (ShotReady == false) {
        ShotReady = true
        if (TriShotActive == false) {
            var Pew = this.sound.add('pew');
            Pew.play();
        } else if (TriShotActive == true) {
            var bigPEW = this.sound.add('pewpewpew');
            bigPEW.play();
        }
        setTimeout(function () {
            ShotTimer = true
        }, FireRate);
    }
    if (EnemyHPS == 0) {
        EnemyAlive == false;
    } else {
        EnemyAlive == true;
    }
    if (scapularActive == true) {
        addSoulHearts = true;
    }
    if (brimstoneActive == true) {
        playes = player.y - 30;
        playez = player.x - 50;
        if (Acess == true) {
            brimstoneCharge = this.add.text(playez, playes, 'Charge: 0', { fontSize: '16px', fill: '#000' });
        }
        setInterval(function () {
            brimstoneCharge.setVisible(false);
            brimstoneCharge.setActive(false);
        }, 1);
    }
    if (killsneeded == 0) {
        if (normalRoom == true) {
            spawnPickup();
            door = true;
            killsneeded = 6;
        } else {
            door = true;
            killsneeded = 6;
        }
    }
    if (helpme == true) {
        titleT.setVisible(false);
        this.physics.resume();
        LevelText.setVisible(false);
        RoomLoad = true;
        spawn = true;
        helpme = false;
    }
    if (keyA.isDown && keyW.isDown) {
        player.setVelocityX(MoveLeft);
        player.setVelocityY(MoveUp);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('left', true);
    } else if (keyD.isDown && keyW.isDown) {
        player.setVelocityX(MoveRight);
        player.setVelocityY(MoveUp);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('right', true);
    } else if (keyA.isDown && keyS.isDown) {
        player.setVelocityY(MoveDown);
        player.setVelocityX(MoveLeft);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('left', true);
    } else if (keyD.isDown && keyS.isDown) {
        player.setVelocityY(MoveDown);
        player.setVelocityX(MoveRight);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('right', true);
    } else if (keyA.isDown) {
        player.setVelocityX(MoveLeft);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('left', true);
    } else if (keyD.isDown) {
        player.setVelocityX(MoveRight);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('right', true);
    } else if (keyS.isDown) {
        player.setVelocityY(MoveDown);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('down', true);
    } else if (keyW.isDown) {
        player.setVelocityY(MoveUp);
        PlayersX = Math.round(player.x);
        PlayersY = Math.round(player.y);
        player.anims.play('up', true);
    } else if (keyE.isDown) {
        if (BombWait == false) {
            BombWait = true;
            if (currentBombs >= 1) {
                currentBombs -= 1;
                BombText.setText('Bombs: ' + currentBombs);
                var bombsF = bombF.create(player.x, player.y, 'friendlyBOMB');
                setTimeout(function () {
                    var bombsE = bombA.create(bombsF.x, bombsF.y, 'activeBOMB');
                    bombsE.setScale(3);
                    setTimeout(function () {
                        bombsE.disableBody(true, true);
                        bombsF.disableBody(true, true)
                    }, 10);
                }, 2000);
                bombsF.setCollideWorldBounds(true);
            }
            setTimeout(function () {
                BombWait = false;
            }, 1000);
        }
    } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.anims.play('turn');
        U = false;
        D = false;
        L = false;
        R = false;
    }
    if (killsLeft <= 0) {
        killsLeft = 6;
        currentLevel += 1;
        levelText.setText('Level: ' + currentLevel);
        killText.setText('KillsLeft: ' + killsLeft);
        return;
    } else {
    }
    if (currentHP > MaxHp) {
        currentHP--;
        HPText.setText('Current Hp: ' + currentHP);
    }
    if (currentCoins > 99) {
        currentCoins = 99;
        CoinText.setText('Coins: ' + currentCoins);
    }
    if (currentBombs > 99) {
        currentBombs = 99;
        BombText.setText('Bombs: ' + currentBombs);
    }
    if (currentKeys > 99) {
        currentKeys = 99;
        KeyText.setText('Keys: ' + currentBombs);
    }
    if (currentHP < MaxHp) {
        DevilRoomChance = false;
    }
    if (DevilRoomSkip == true) {
        AngleRoomChance = true;
        DevilRoomSkip = false;
    }
    if (DevilDealTaken == true) {
        AngleRoomChance = false;
    }
}