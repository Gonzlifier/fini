function DEVCLEAR() {
    KillRoom.create(400, 300, 'sky').setDepth(-2);
}
function EnemyKill1(KillRoom, diamond) {
    EnemyHPD = 0;
    diamond.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPD = 8;
}
function EnemyKill2(KillRoom, Slime) {
    EnemyHPP = 0;
    Slime.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPP = 12;
}
function EnemyKill3(KillRoom, Wabbit) {
    EnemyHPR = 0;
    Wabbit.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPR = 3;
}
function EnemyKill4(KillRoom, fly) {
    EnemyHPF = 0;
    fly.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPF = 5;
}
function EnemyKill5(KillRoom, flyshoot) {
    EnemyHPFS = 0;
    flyshoot.disableBody(true, true);
    FlyAlive = false;
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPFS = 6;
}
function EnemyKill6(KillRoom, Boss) {
    BossHP = 0;
    Boss.disableBody(true, true);
    BossTreasure();
    TrapDoor();
    killsLeft = 0;
    killsneeded = 0;
    killText.setText('KillsLeft: ' + killsLeft);
    BossHP = 100;
}
function EnemyKill7(KillRoom, Gurgling) {
    GurglingHP = 0;
    console.log('Gurgling 2 down');
    Gurgling.disableBody(true, true)
    BossTreasure();
    spawnPickup();
    TrapDoor();
    killsLeft = 0;
    killsneeded = 0;
    killText.setText('Kills Left: ' + killsLeft);
    GurglingHP = 50;
}
function EnemyKill8(KillRoom, clotty) {
    EnemyHPC = 0;
    clotty.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPC = 4;
    ClottyAlive = false;
}
function EnemyKill9(KillRoom, mine) {
    EnemyHPM = 0;
    mine.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPM = 1;
}
function EnemyKill10(KillRoom, enemy) {
    EnemyHPS = 0;
    enemy.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    Shooting = false;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPS = 7;
    EnemyAlive = false
}
function EnemyKill11(KillRoom, chaser) {
    EnemyHPChase = 0;
    chaser.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPChase = 3;
}
function EnemyKill12(KillRoom, Chub) {
    ChubHP = 0;
    Chub.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    ChubHP = 80;
}
function EnemyKill13(KillRoom, clot) {
    EnemyHPC1 = 0;
    clot.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPC1 = 4;
}
function EnemyKill14(KillRoom, flyshoots) {
    EnemyHPFS1 = 0;
    flyshoots.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPFS1 = 5;
}

function EnemyKill15(KillRoom, Loki) {
    LokiHP = 0;
    Loki.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    LokiHP = 50;
}
function EnemyKill16(KillRoom, flyboom) {
    EnemyHPBF = 0;
    flyboom.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPBF = 50;
}
function EnemyKill17(KillRoom, MulliBoom) {
    EnemyHPMB = 0;
    MulliBoom.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPMB = 6;
}
function EnemyKill18(KillRoom, Maw) {
    EnemyHPMAW = 0;
    Maw.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPMAW = 6;
}
function EnemyKill19(KillRoom, RedMaw) {
    EnemyHPRMAW = 0;
    RedMaw.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPRMAW = 6;
}
function EnemyKill20(KillRoom, Horf) {
    EnemyHPH = 0;
    Horf.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPH = 6;
}
function EnemyKill21(KillRoom, Maggot) {
    EnemyHPMAG = 0;
    Maggot.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPMAG = 6;
}
function EnemyKill22(KillRoom, Gusher) {
    EnemyHPGUSH = 0;
    Gusher.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPGUSH = 6;
}
function EnemyKill23(KillRoom, FrowningGaper) {
    EnemyHPFROW = 0;
    FrowningGaper.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPFROW = 4;
}
function EnemyKill24(KillRoom, Charger) {
    EnemyHPCHAR = 0;
    Charger.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPCHAR = 6;
}
function EnemyKill25(KillRoom, Globin) {
    EnemyHPGLOB = 0;
    Globin.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPGLOB = 6;
}