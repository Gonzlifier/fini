
function breakFast(player, breakfast) {
    const explode = this.sound.add('bump');
    explode.play();
    breakfast.disableBody(true, true);
    MaxHp++;
    currentHP++;
    HPText.setText('Current Hp: ' + currentHP);
}
function AQuarter(player, quarter) {
    const explode = this.sound.add('coingathered');
    explode.play();
    quarter.disableBody(true, true);
    currentCoins += 25;
    CoinText.setText('Coins: ' + currentCoins);
}
function v3(player, heart) {
    const explode = this.sound.add('bump');
    explode.play();
    heart.disableBody(true, true);
    MaxHp += 1;
    currentHP += 7;
    HPText.setText('Current Hp: ' + currentHP);
}
function ThePact(player, pact) {
    const explode = this.sound.add('bump');
    explode.play();
    pact.disableBody(true, true);
    BulletDMG += 0.5;
    currentSouls += 2;
    FireRate = FireRate - 70;
    SoulText.setText('Soul Hearts: ' + currentSouls);
}
function Scapular(player, scapular) {
    const explode = this.sound.add('bump');
    explode.play();
    scapular.disableBody(true, true);
    scapularActive = true;
}
function itemBrimstone(player, brimstone) {
    brimstoneActive = true;
    const explode = this.sound.add('bump');
    explode.play();
    player.setTint(0xff0000);
    brimstone.disableBody(true, true)
}
function TripleShot(player, TriShot) {
    const explode = this.sound.add('pickup');
    explode.play();
    TriShot.disableBody(true, true);
    TriShotActive = true;
    FireRate = FireRate * 1.5;
}
function HangMan(player, Hanged) {
    const explode = this.sound.add('pickup');
    explode.play();
    Hanged.disableBody(true, true);
    FlyingActive = true;
    FireRate = FireRate * 1.5;
}
function OuijiBoard(player, Spectral) {
    const explode = this.sound.add('pickup');
    explode.play();
    player.setTint(0x00ff00)
    Spectral.disableBody(true, true);
    SpectralActive = true;
}
function TheBelt(player, Belt) {
    const explode = this.sound.add('pickup');
    explode.play();
    Belt.disableBody(true, true);
    MoveDown += 30;
    MoveUp += -30;
    MoveLeft += -30;
    MoveRight += 30;
    currentSouls++;
    SoulText.setText('Soul Hearts: ' + currentSouls);
}
function TheMark(player, Mark) {
    const explode = this.sound.add('pickup');
    explode.play();
    Mark.disableBody(true, true);
    BulletDMG++;
    MoveDown += 20;
    MoveUp += -20;
    MoveLeft += -20;
    MoveRight += 20;
}
function TheSadOnion(player, SadOnion) {
    const explode = this.sound.add('pickup');
    explode.play();
    SadOnion.disableBody(true, true);
    FireRate = FireRate - 70;
}
function SkeletonKey(player, SkeleKey) {
    const explode = this.sound.add('pickup');
    explode.play();
    SkeleKey.disableBody(true, true);
    currentKeys = 99;
    KeyText.setText('Keys: ' + currentKeys);
}
function TheBinki(player, Binky) {
    const explode = this.sound.add('pickup');
    explode.play();
    Binky.disableBody(true, true);
    player.setScale(0.8);
    currentSouls++;
    SoulText.setText('Soul Hearts: ' + currentSouls);
    FireRate = FireRate - 70;
}
function Pajamas(player, PJs) {
    const explode = this.sound.add('pickup');
    explode.play();
    PJs.disableBody(true, true);
    currentSouls += 4;
    SoulText.setText('Soul Hearts: ' + currentSouls);
    currentHP += 8;
    HPText.setText('Current Hp: ' + currentHP);
}
function BooM(player, Boom) {
    const explode = this.sound.add('pickup');
    explode.play()
    Boom.disableBody(true, true)
    currentBombs += 10;
    BombText.setText('Bombs: ' + currentBombs);
}
function TheBlanket(player, Blanket) {
    Blanket.disableBody(true, true)
    const explode = this.sound.add('pickup');
    explode.play()
    currentSouls++;
    SoulText.setText('Soul Hearts: ' + currentSouls)
    BossProtect = true;
}
function WoodenSpoon(player, WSpoon) {
    WSpoon.disableBody(true, true);
    const explode = this.sound.add('pickup');
    explode.play()
    MoveDown += 30;
    MoveUp += -30;
    MoveLeft += -30;
    MoveRight += 30;
}
function TheStigma(player, Stigma) {
    Stigma.disableBody(true, true);
    const explode = this.sound.add('pickup');
    explode.play()
    MaxHp++;
    currentHP++;
    HPText.setText('Current Hp: ' + currentHP)
    BulletDMG += 0.5;
}
function TheMitre(player, Mitre) {
    Mitre.disableBody(true, true);
    SoulChance = true;
    const explode = this.sound.add('pickup');
    explode.play()
}
function CupidsArrow(player, Cupid) {
    const explode = this.sound.add('pickup');
    explode.play();
    player.setTint(0x00ff00)
    Cupid.disableBody(true, true);
    SpectralActive = true;
}
function MomsEye(player, MomEye) {
    const explode = this.sound.add('pickup');
    explode.play();
    MomEye.disableBody(true, true);
    FireBehind = true;
}
function LostContact(player, Contact) {
    const explode = this.sound.add('pickup');
    explode.play();
    Contact.disableBody(true, true);
    this.physics.add.overlap(bomb, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bomb, FlyingBullet, BulletCollide1, null, this);
}
function AnApple(player, Apple) {
    const explode = this.sound.add('pickup');
    explode.play();
    Apple.disableBody(true, true);
    RazorFireChance = true;
}
function TheFireMind(player, FireMind) {
    const explode = this.sound.add('pickup');
    explode.play();
    FireMind.disableBody(true, true);
    FireActive = true;
}