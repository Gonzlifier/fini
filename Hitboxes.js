function RandomEnemy() {
    var EnemyRandom = Math.round(Math.random() * 13);
    if (EnemyRandom == 0) {
        Basic();
    } else if (EnemyRandom == 1) {
        Fast();
    } else if (EnemyRandom == 2) {
        Tank();
    } else if (EnemyRandom == 3) {
        Mine();
    } else if (EnemyRandom == 4) {
        Gunner();
    } else if (EnemyRandom == 5) {
        Tank();
    } else if (EnemyRandom == 6) {
        Fly();
    } else if (EnemyRandom == 7) {
        FlyGunner();
    } else if (EnemyRandom == 8) {
        Clotty();
    } else if (EnemyRandom == 9) {
        BoomFly();
    } else if (EnemyRandom == 10) {
        FrowningGapers()
    } else if (EnemyRandom == 11) {
        Maws()
    } else if (EnemyRandom == 12) {
        RedMaws()
    } else if (EnemyRandom == 13) {
        Horfs()
    }
}
function spawnPickup() {
    var numberPickup = Math.round(Math.random() * 8);
    if (numberPickup == 0) {
        hp()
    } else if (numberPickup == 1) {
        coin();
    } else if (numberPickup == 2) {
        coin();
    } else if (numberPickup == 3) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    } else if (numberPickup == 4) {
        deploybomb();
    } else if (numberPickup == 5) {
    } else if (numberPickup == 6) {
        key();
    } else if (numberPickup == 7) {
        soulH();
    } else if (numberPickup == 8) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    }
}
function tintedSpawn() {
    var numberPickup = Math.round(Math.random() * 4);
    if (numberPickup == 0) {
        TintedsoulH();
        TintedsoulH();
    } else if (numberPickup == 1) {
        Tintedkey();
        Tintedkey();
    } else if (numberPickup == 2) {
        Tintedbomb();
        Tintedbomb();
    } else if (numberPickup == 3) {
    } else if (numberPickup == 4) {
    }
}
function targetHitD(bomb, diamond) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPD -= 1;
        }, 100);
    }
    if (EnemyHPD <= 0) {
        diamond.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPD = 8;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
        EnemyHPD -= BulletDMG;
    }
}
function targetHitR(bomb, Wabbit) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPR -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPR -= 1;
        }, 100);
    }
    if (EnemyHPR <= 0) {
        Wabbit.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPR = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitP(bomb, Slime) {
    var explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPP -= 1;
        }, 100);
    }
    if (EnemyHPP <= 0) {
        Slime.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPP = 12;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitM(bomb, mine) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPM -= BulletDMG;
    if (EnemyHPM <= 0) {
        mine.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPM = 1;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitF(bomb, fly) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPF -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPF -= 1;
        }, 100);
    }
    if (EnemyHPF <= 0) {
        fly.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPF = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS(bomb, flyshoot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPFS -= 1;
        }, 100);
    }
    if (EnemyHPFS <= 0) {
        flyshoot.disableBody(true, true);
        FlyAlive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS1(bomb, flyshoots) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS1 -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPFS1 -= 1;
        }, 100);
    }
    if (EnemyHPFS1 <= 0) {
        flyshoots.disableBody(true, true);
        Fly1Alive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS1 = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitBF(bomb, flyboom) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPBF -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPBF -= 1;
        }, 100);
    }
    if (EnemyHPBF <= 0) {
        var bombsE = bombA.create(flyboom.x, flyboom.y, 'activeBOMB');
        bombsE.setScale(3);
        setTimeout(function () {
            bombsE.disableBody(true, true);
        }, 10);
        flyboom.disableBody(true, true);
        EnemyHPBF = 7;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitMB(bomb, MulliBoom) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPMB -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPMB -= 1;
        }, 100);
    }
    if (EnemyHPBF <= 0) {
        var bombsE = bombA.create(MulliBoom.x, MulliBoom.y, 'activeBOMB');
        bombsE.setScale(3);
        setTimeout(function () {
            bombsE.disableBody(true, true);
        }, 10);
        MulliBoom.disableBody(true, true);
        EnemyHPMB = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitMAW(bomb, Maw) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPMAW -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPMAW -= 1;
        }, 100);
    }
    if (EnemyHPMAW <= 0) {
        Maw.disableBody(true, true);
        MawAlive = false;
        setTimeout(function () {
            MawAlive = true;
        }, 1000);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPMAW = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitRMAW(bomb, RedMaw) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPRMAW -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPRMAW -= 1;
        }, 100);
    }
    if (EnemyHPRMAW <= 0) {
        RedMaw.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPRMAW = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitH(bomb, Horf) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPH -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPH -= 1;
        }, 100);
    }
    if (EnemyHPH <= 0) {
        Horf.disableBody(true, true);
        HorfAlive = false;
        setTimeout(function () {
            HorfAlive = true;
        }, 1000);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPH = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitMAG(bomb, Maggot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPMAG -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPMAG -= 1;
        }, 100);
    }
    if (EnemyHPMAG <= 0) {
        Maggot.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPMAG = 4;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitGUSH(bomb, Gusher) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPGUSH -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPGUSH -= 1;
        }, 100);
    }
    if (EnemyHPGUSH <= 0) {
        Gusher.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPGUSH = 6;
        GushAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFROW(bomb, FrowningGaper) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFROW -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPFROW -= 1;
        }, 100);
    }
    if (EnemyHPFROW <= 0) {
        FrowningGaper.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFROW = 4;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitCHAR(bomb, Charger) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPCHAR -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPCHAR -= 1;
        }, 100);
    }
    if (EnemyHPCHAR <= 0) {
        Charger.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPCHAR = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitGLOB(bomb, Globin) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPGLOB -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPGLOB -= 1;
        }, 100);
    }
    if (EnemyHPGLOB <= 0) {
        Globin.disableBody(true, true);
        GooHP = 2;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPGLOB = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitC(bomb, clotty) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPC -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPC -= 1;
        }, 100);
    }
    if (EnemyHPC <= 0) {
        clotty.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPC = 4;
        ClottyAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitC1(bomb, clot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPC1 -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPC1 -= 1;
        }, 100);
    }
    if (EnemyHPC <= 0) {
        clot.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPC1 = 4;
        ClotAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitS(bomb, enemy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPS -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPS -= 1;
        }, 100);
    }
    if (EnemyHPS <= 0) {
        enemy.disableBody(true, true)
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        Shooting = false;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPS = 7;
        EnemyAlive = false
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitG(bomb, Gurgling) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    GurglingHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            GurglingHP -= 1;
        }, 100);
    }
    if (GurglingHP <= 0) {
        if (GurgExist == 0) {
            Gurgling.disableBody(true, true)
            explode.play();
            killsLeft == 0;
            killsneeded == 0;
            GurgExist++;
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
        } else if (GurgExist == 1) {
            Gurgling.disableBody(true, true)
            explode.play();
            BossTreasure();
            TrapDoor();
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
            if (DevilRoomChance == true) {
                SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
            } else if (AngelRoomChance == true) {
                SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
            }
        }
    }
}
function targetHitChase(bomb, chaser) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPChase -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPChase -= 1;
        }, 100);
    }
    if (EnemyHPChase <= 0) {
        chaser.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPChase = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitGurdy(bomb, Gurdy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    GurdyHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            GurdyHP -= 1;
        }, 100);
    }
    if (GurdyHP <= 0) {
        chaser.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        GurdyHP = 100;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitChub(bomb, Chub) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    ChubHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            ChubHP -= 1;
        }, 100);
    }
    if (ChubHP <= 0) {
        Chub.disableBody(true, true);
        explode.play();
        TrapDoor();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        ChubHP = 80;
        if (DevilRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
        } else if (AngelRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
        }
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitLoki(bomb, Loki) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    LokiHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            LokiHP -= 1;
        }, 100);
    }
    if (LokiHP <= 0) {
        Loki.disableBody(true, true);
        explode.play();
        TrapDoor();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        LokiHP = 50;
        if (DevilRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
        } else if (AngelRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
        }
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function bossHit(bomb, Boss) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('bossded');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    BossHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            BossHP -= 1;
        }, 100);
    }
    if (BossHP <= 0) {
        Boss.disableBody(true, true);
        BossTreasure();
        explode.play();
        TrapDoor();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        BossHP = 100;
        if (DevilRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
        } else if (AngelRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
        }
    }
    if (BossHP <= 75) {
        if (waveAt75 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt75 = false;
            waveAt50 = true;
        }
    }
    if (BossHP <= 50) {
        if (waveAt50 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt50 = false;
            waveAt25 = true;
        }
    }
    if (BossHP <= 25) {
        if (waveAt25 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt25 = false
        }
    }
}
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
function BulletCollide(EnemyBullet, bomb) {
    const explode = this.sound.add('pew');
    EnemyBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function BulletCollide1(FlyingBullet, bomb) {
    const explode = this.sound.add('pew');
    FlyingBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function mineHitD(mines, diamonds) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    diamonds.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitR(mines, rocks) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    rocks.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitP(mines, patrols) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    patrols.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function NoOverlap(bombs1, bombs1) {
    bombs1.disableBody(true, true);
    bombs1.disableBody(true, true);
}
function NoOverlap(bombs2, bombs2) {
    bombs2.disableBody(true, true);
    bombs2.disableBody(true, true);
}
function NoOverlap(bombs3, bombs3) {
    bombs3.disableBody(true, true);
    bombs3.disableBody(true, true);
}
function NoOverlap(bombs4, bombs4) {
    bombs4.disableBody(true, true);
    bombs4.disableBody(true, true);
}
function NoOverlap(lazerbeam, lazerbeam) {
    lazerbeam.disableBody(true, true);
    lazerbeam.disableBody(true, true);
    lazerbeam.setVisible(false);
    lazerbeam.setActive(false);
}
function bulletHit(bullets, bullets) {
    bullets.disableBody(true, true);
    var collide = this.sound.add('BC');
    collide.play();
}
function youHit(player, patrols) {
    if (Iframes == true) {
    } else if (currentSouls >= 1) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BossHitPlayer(player, Boss) {
    if (Iframes == true) {
    } else if (currentSouls > 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BulletOw(player, EnemyBullet) {
    if (Iframes == true) {
    } else if (currentSouls > 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        EnemyBullet.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls <= 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        EnemyBullet.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            EnemyBullet.disableBody(true, true)
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function Deleto(wall1, EnemyBullet) {
    EnemyBullet.disableBody(true, true)
}
function WallHit(bomb) {
    bomb.disableBody(true, true)
}
function RestartW(ResetZone, wall1) {
    wall1.disableBody(true, true);
}
function RestartP(ResetZone, Pit) {
    Pit.disableBody(true, true);
}
function Restart1(ResetZone, Door1E) {
    Door1E.disableBody(true, true);
}
function Restart2(ResetZone, Door2E) {
    Door2E.disableBody(true, true);
}
function Restart3(ResetZone, Door3E) {
    Door3E.disableBody(true, true);
}
function Restart4(ResetZone, Door4E) {
    Door4E.disableBody(true, true);
}
function Restart1W(ResetZone, Door1Wall) {
    Door1Wall.disableBody(true, true);
}
function Restart2W(ResetZone, Door2Wall) {
    Door2Wall.disableBody(true, true);
}
function Restart3W(ResetZone, Door3Wall) {
    Door3Wall.disableBody(true, true);
}
function Restart4W(ResetZone, Door4Wall) {
    Door4Wall.disableBody(true, true);
}
function RestartR(ResetZone, RoomIn) {
    RoomIn.disableBody(true, true);
}
function Restart(ResetZone, ResetDelete) {
    ResetZone.disableBody(true, true);
    ResetDelete.disableBody(true, true);
}
function CheckFly() {
    if (FlyingActive == true) {
        this.physics.world.removeCollider(qween);
        this.physics.world.removeCollider(king);
    } else if (FlyingActive == false) {
        var qween = this.physics.add.collider(player, wall1);
        var king = this.physics.add.collider(player, Pit);
        qween
        king
    }
}
function Deleto1(WallBorder, wall1) {
    wall1.disableBody(true, true)
}
function Deleto2(WallBorder, Pit) {
    Pit.disableBody(true, true)
}
function RockBoom(bombF, wall1) {
    wall1.disableBody(true, true);
    bombF.disableBody(true, true);
}
function TintedBoom(bombF, tinted) {
    const collide = this.sound.add('boom');
    collide.play();
    tintedSpawn();
    tinted.disableBody(true, true)
}
function BombOw(player, bombA) {
    currentHP -= 1;
    HPText.setText('Current Hp: ' + currentHP);
}
function ChubEatBomb(Chub, bombF) {
    bombF.disableBody(true, true);
    ChubAteBomb = true;
}
function MBexplode(player, MulliBoom) {
    MulliBoom.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    currentHP - 1;
    HPText.setText('Current Hp: ' + currentHP);
    const explode = this.sound.add('boom');
    explode.play();
}