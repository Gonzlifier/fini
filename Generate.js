function Basic() {
    EnemyHPD = 8;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var diamond = diamonds.create(sX, sY, 'diamond');
    var directionX = Math.random() * 360 - 180;
    var directionY = Math.random() * 360 - 180;
    diamond.setVelocityX(directionX);
    diamond.setVelocityY(directionY);
    diamond.setCollideWorldBounds(true);
    diamond.setBounce(1, 1);
};
function Fast() {
    EnemyHPR = 3;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Wabbit = rocks.create(sX, sY, 'Wabbit');
    var directionX = Math.random() * 780 - 360;
    var directionY = Math.random() * 780 - 360;
    Wabbit.setVelocityX(directionX);
    Wabbit.setVelocityY(directionY);
    Wabbit.setCollideWorldBounds(true);
    Wabbit.setBounce(1, 1);
};
function Tank() {
    EnemyHPP = 12;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Slime = patrols.create(sX, sY, 'Slime');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    Slime.setVelocityX(directionX);
    Slime.setVelocityY(directionY);
    Slime.setCollideWorldBounds(true);
    Slime.setBounce(1, 1);
}
function Mine() {
    EnemyHPM = 1;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var minez = mines.create(sX, sY, 'mine');
    minez.setCollideWorldBounds(true);
}
function Fly() {
    EnemyHPF = 5;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var flys = fly.create(sX, sY, 'fly').setScale(0.4);
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    flys.setVelocityX(directionX);
    flys.setVelocityY(directionY);
    flys.setCollideWorldBounds(true);
    flys.setBounce(1, 1);
}
function BoomFly() {
    EnemyHPBF = 7;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var flyb = fly.create(sX, sY, 'fly').setScale(0.3).setTint(0xffff00);
    flyb.setVelocityX(100);
    flyb.setVelocityY(100);
    flyb.setCollideWorldBounds(true);
    flyb.setBounce(1);
}
function Maws() {
    EnemyHPMAW = 6;
    var MawShooting = true;
    var ThisMawAlive = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Mawz = Maw.create(sX, sY, 'Maws').setTint(0x0000ff);
    Mawz.setCollideWorldBounds(true);
    Mawz.setBounce(1);
    setInterval(function () {
        Mawz.setVelocityX(player.x - Mawz.x)
        Mawz.setVelocityY(player.y - Mawz.y)
    }, 10);
    setInterval(function () {
        if (MawAlive == false) {
            MawShooting = false;
            ThisMawAlive = false;
        } else if (MawAlive == true) {
            if (ThisMawAlive == true) {
                MawShooting = true;
            } else {
                MawShooting = false;
            }
        }
        if (MawShooting == true) {
            FlyingBullets = FlyingBullet.create(Mawz.x, Mawz.y, 'bullet')
            FlyingBullets.setVelocityX(player.x - Mawz.x)
            FlyingBullets.setVelocityY(player.y - Mawz.y)
            FlyingBullets.setVisible(false);
            FlyingBullets.setActive(false)
            FlyingBullets.setVisible(true);
            FlyingBullets.setActive(true)
        } else {
        }
    }, 2000);
}
function RedMaws() {
    EnemyHPRMAW = 8;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var RedMawz = RedMaw.create(sX, sY, 'RedMaw').setTint(0x0000ff);
    RedMawz.setCollideWorldBounds(true);
    RedMawz.setBounce(1);
    setInterval(function () {
        RedMawz.setVelocityX(player.x - RedMawz.x)
        RedMawz.setVelocityY(player.y - RedMawz.y)
    }, 10);
}
function Horfs() {
    EnemyHPH = 6;
    var HorfShooting = true;
    var ThisHorfAlive = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Horfz = Horf.create(sX, sY, 'Horf').setTint(0x0000ff);
    Horfz.setCollideWorldBounds(true);
    Horfz.setBounce(1);
    setInterval(function () {
        if (HorfAlive == false) {
            HorfShooting = false;
            ThisHorfAlive = false;
        } else if (HorfAlive == true) {
            if (ThisHorfAlive == true) {
                HorfShooting = true;
            } else {
                HorfShooting = false;
            }
        }
        if (HorfShooting == true) {
            FlyingBullets = FlyingBullet.create(Horfz.x, Horfz.y, 'bullet')
            FlyingBullets.setVelocityX(player.x - Horfz.x)
            FlyingBullets.setVelocityY(player.y - Horfz.y)
            FlyingBullets.setVisible(false);
            FlyingBullets.setActive(false)
            FlyingBullets.setVisible(true);
            FlyingBullets.setActive(true)
        } else {
        }
    }, 1800);
}
function Maggots() {
    EnemyHPMAG = 4;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Maggotz = Maggot.create(sX, sY, 'RedMaw').setTint(0x0000ff);
    Maggotz.setCollideWorldBounds(true);
    Maggotz.setBounce(1);
    Maggotz.setDrag(100)
    setInterval(function () {
        var numberM = Math.round(Math.random() * 3)
        if (numberM == 0) {
            Maggotz.setVelocityY(100);
        } else if (numberM == 1) {
            Maggotz.setVelocityX(100);
        } else if (numberM == 2) {
            Maggotz.setVelocityY(-100);
        } else if (numberM == 3) {
            Maggotz.setVelocityX(-100);
        }
    }, 1200);
}
function MuliBoom() {
    EnemyHPMB = 3;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var MulliBooms = MulliBoom.create(sX, sY, 'MulliBoom').setScale(3).setTint(0xff00ff);
    MulliBooms.setCollideWorldBounds(true);
    setInterval(function () {
        MulliBooms.setVelocityX(player.x - flyshoots.x)
        MulliBooms.setVelocityY(player.y - flyshoots.y)
    }, 10);
}
function FrowningGapers() {
    EnemyHPFROW = 4;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var FrowningGaperz = FrowningGaper.create(sX, sY, 'FrowningGapers')
    FrowningGaperz.setCollideWorldBounds(true);
    setInterval(function () {
        if (player.x < FrowningGaperz.x) {
            FrowningGaperz.setVelocityX(-100);
        } else if (player.x > FrowningGaperz.x) {
            FrowningGaperz.setVelocityX(100);
        }
    }, 10);
    setInterval(function () {
        if (player.y < FrowningGaperz.y) {
            FrowningGaperz.setVelocityY(-100);
        } else if (player.y > FrowningGaperz.y) {
            FrowningGaperz.setVelocityY(100);
        }
    }, 10);
}
function Gushers() {
    EnemyHPGUSH = 6;
    GushAlive = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Gusherz = Gusher.create(sX, sY, 'Gushers')
    Gusherz.setCollideWorldBounds(true);
    Gusherz.setDrag(200)
    setInterval(function () {
        var numberz = Math.round(Math.random() * 3)
        if (GushAlive == true) {
            if (numberz == 0) {
                Gusherz.setVelocityY(70);
                var number = Math.round(Math.random() * 10)
                if (number == 1) {
                    FlyingBullets = FlyingBullet.create(Gusherz.x, Gusherz.y, 'bullet')
                    FlyingBullets.setVelocityY(120)
                }
            } else if (numberz == 1) {
                Gusherz.setVelocityX(70);
                var number = Math.round(Math.random() * 10)
                if (number == 1) {
                    FlyingBullets = FlyingBullet.create(Gusherz.x, Gusherz.y, 'bullet')
                    FlyingBullets.setVelocityX(120)
                }
            } else if (numberz == 2) {
                Gusherz.setVelocityY(-70);
                var number = Math.round(Math.random() * 10)
                if (number == 1) {
                    FlyingBullets = FlyingBullet.create(Gusherz.x, Gusherz.y, 'bullet')
                    FlyingBullets.setVelocityY(-120)
                }
            } else if (numberz == 3) {
                Gusherz.setVelocityX(-70);
                var number = Math.round(Math.random() * 10)
                if (number == 1) {
                    FlyingBullets = FlyingBullet.create(Gusherz.x, Gusherz.y, 'bullet')
                    FlyingBullets.setVelocityX(-120)
                }
            }
        }
    }, 400);
}
function Chargers() {
    EnemyHPCHAR = 4;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Chargerz = Charger.create(sX, sY, 'Charger')
    Chargerz.setCollideWorldBounds(true);
    Chargerz.setDrag(50)
    setInterval(function () {
        var numberz = Math.round(Math.random() * 3)
            if (numberz == 0) {
                Chargerz.setVelocityY(100);
            } else if (numberz == 1) {
                Chargerz.setVelocityX(100);
            } else if (numberz == 2) {
                Chargerz.setVelocityY(-100);
            } else if (numberz == 3) {
                Chargerz.setVelocityX(-100);
            }
    }, 2000);
    setInterval(function() {
        ChargerZX = Math.round(Chargerz.x)
        ChargerZY = Math.round(Chargerz.y)
        if (player.x == ChargerZX && player.x > ChargerZX) {
            Chargerz.setVelocityX(1000)
        } else if (player.x == ChargerZX && player.x < ChargerZX) {
            Chargerz.setVelocityX(-1000)
        } else if (player.y == ChargerZY && player.y > ChargerZY) {
            Chargerz.setVelocityX(-1000)
        } else if (player.y == ChargerZY && player.y < ChargerZY) {
            Chargerz.setVelocityX(-1000)
        }
    }, 10);
}
function Globins() {
    EnemyHPGLOB = 4;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Globinz = Globin.create(sX, sY, 'FrowningGapers')
    Globinz.setCollideWorldBounds(true);
    setInterval(function () {
        if (player.x < Globinz.x) {
            Globinz.setVelocityX(-100);
        } else if (player.x > Globinz.x) {
            Globinz.setVelocityX(100);
        }
    }, 10);
    setInterval(function () {
        if (player.y < Globinz.y) {
            Globinz.setVelocityY(-100);
        } else if (player.y > Globinz.y) {
            Globinzk.setVelocityY(100);
        }
    }, 10);
}
function Clotty() {
    var rollnumber = Math.round(Math.random() * 2)
    rollnumber
    if (rollnumber <= 1) {
        ClottyAlive = true;
        EnemyHPC = 4;
        var sX = Math.random() * 780;
        var sY = Math.random() * 580;
        var clottys = clotty.create(sX, sY, 'clotty').setScale(0.6).setTint(0xff0000);
        clottys.setCollideWorldBounds(true);
        clottys.setBounce(1, 1);
        clottys.setDrag(200);
        setInterval(function () {
            var number = Math.round(Math.random() * 4)
            if (ClottyAlive == true) {
                if (number == 0) {
                    clottys.setVelocityY(120);
                } else if (number == 1) {
                    clottys.setVelocityX(120);
                } else if (number == 2) {
                    clottys.setVelocityY(-120);
                } else if (number == 3) {
                    clottys.setVelocityX(-120);
                } else if (number == 4) {
                    EnemyBullet1 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                    EnemyBullet2 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                    EnemyBullet3 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                    EnemyBullet4 = EnemyBullet.create(clottys.x, clottys.y, 'bullet')
                    EnemyBullet1.setVelocityY(200);
                    EnemyBullet2.setVelocityX(200);
                    EnemyBullet3.setVelocityY(-200);
                    EnemyBullet4.setVelocityX(-200);
                }
            } else {
                clearInterval
            }
        }, 500);
    } else if (rollnumber == 2) {
        EnemyHPC1 = 4;
        ClotAlive = true;
        var sX = Math.random() * 780;
        var sY = Math.random() * 580;
        var clottyz = clotty.create(sX, sY, 'clotty').setScale(0.5).setTint(0x00ff00);
        clottyz.setCollideWorldBounds(true);
        clottyz.setBounce(1, 1);
        clottyz.setDrag(200);
        setInterval(function () {
            var number = Math.round(Math.random() * 4)
            if (ClotAlive == true) {
                if (number == 0) {
                    clottyz.setVelocityY(120);
                } else if (number == 1) {
                    clottyz.setVelocityX(120);
                } else if (number == 2) {
                    clottyz.setVelocityY(-120);
                } else if (number == 3) {
                    clottyz.setVelocityX(-120);
                } else if (number == 4) {
                    EnemyBullet1 = EnemyBullet.create(clottyz.x, clottyz.y, 'bullet')
                    EnemyBullet2 = EnemyBullet.create(clottyz.x, clottyz.y, 'bullet')
                    EnemyBullet3 = EnemyBullet.create(clottyz.x, clottyz.y, 'bullet')
                    EnemyBullet4 = EnemyBullet.create(clottyz.x, clottyz.y, 'bullet')
                    EnemyBullet1.setVelocityY(200);
                    EnemyBullet1.setVelocityX(-200);
                    EnemyBullet2.setVelocityX(200);
                    EnemyBullet2.setVelocityY(-200);
                    EnemyBullet3.setVelocityY(-200);
                    EnemyBullet3.setVelocityX(-200);
                    EnemyBullet4.setVelocityX(200);
                    EnemyBullet4.setVelocityY(200);
                }
            } else {
                clearInterval
            }
        }, 500);
    }
}
function FlyGunner() {
    var numbergenerate = Math.round(Math.random() * 2);
    numbergenerate
    if (numbergenerate <= 1) {
        EnemyHPFS = 6;
        FlyAlive = true;
        var FlyingShooting = true;
        var sX = Math.random() * 780;
        var sY = Math.random() * 580;
        var flyshoots = flyshoot.create(sX, sY, 'flyshoot').setScale(0.5).setTint(0xff0000);
        var directionX = Math.random() * 180 - 120;
        var directionY = Math.random() * 180 - 120;
        flyshoots.setVelocityX(directionX);
        flyshoots.setVelocityY(directionY);
        flyshoots.setCollideWorldBounds(true);
        flyshoots.setBounce(1, 1);
        setInterval(function () {
            if (FlyAlive == false) {
                FlyingShooting = false;
            }
            if (FlyingShooting == true) {
                FlyingBullets = FlyingBullet.create(flyshoots.x, flyshoots.y, 'bullet')
                FlyingBullets.setVelocityX(player.x - flyshoots.x)
                FlyingBullets.setVelocityY(player.y - flyshoots.y)
                FlyingBullets.setVisible(false);
                FlyingBullets.setActive(false)
                FlyingBullets.setVisible(true);
                FlyingBullets.setActive(true)
            } else {
            }
        }, 1100);
    } else if (numbergenerate == 2) {
        EnemyHPFS1 = 5;
        Fly1Alive = true;
        var Flying1Shooting = true;
        var sX = Math.random() * 780;
        var sY = Math.random() * 580;
        var flyshootz = flyshoot.create(sX, sY, 'flyshoot').setScale(0.5).setTint(0xff00ff);
        var directionX = Math.random() * 180 - 120;
        var directionY = Math.random() * 180 - 120;
        flyshootz.setVelocityX(directionX);
        flyshootz.setVelocityY(directionY);
        flyshootz.setCollideWorldBounds(true);
        flyshootz.setBounce(1, 1);
        setInterval(function () {
            if (Fly1Alive == false) {
                Flying1Shooting = false;
            }
            if (Flying1Shooting == true) {
                FlyingBulletz = FlyingBullet.create(flyshootz.x, flyshootz.y, 'bullet')
                FlyingBullets = FlyingBullet.create(flyshootz.x, flyshootz.y, 'bullet')
                FlyingBulletz.setVelocityX(player.x - flyshootz.x - 100)
                FlyingBullets.setVelocityY(player.y - flyshootz.y + 100)
                FlyingBulletz.setVisible(false);
                FlyingBulletz.setActive(false)
                FlyingBulletz.setVisible(true);
                FlyingBulletz.setActive(true)
                FlyingBullets.setVisible(false);
                FlyingBullets.setActive(false)
                FlyingBullets.setVisible(true);
                FlyingBullets.setActive(true)
            } else {
            }
        }, 1100);
    }
}
function Chaser() {
    EnemyHPChase = 3;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var chases = chaser.create(sX, sY, 'fly').setScale(0.2).setTint(0xff00ff);
    chases.setCollideWorldBounds(true);
    chases.setBounce(1, 1);
    setInterval(function () {
        chases.setVelocityX(player.x - flyshoots.x)
        chases.setVelocityY(player.y - flyshoots.y)
    }, 10);
}
function FloorBoss() {
    var number = Math.round(Math.random() * 1)
    if (LabyrinthFloor == 1) {
        if (number == 0) {
            BossHP = 100;
            killsLeft += 10000;
            killsneeded += 10000;
            waveAt75 = true;
            var Bossz = Boss.create(400, 300, 'Boss');
            var directionX = Math.random() * 360 - 180;
            var directionY = Math.random() * 360 - 180;
            Bossz.setVelocityX(directionX);
            Bossz.setVelocityY(directionY);
            Bossz.setCollideWorldBounds(true);
            Bossz.setBounce(1, 1);
        } else if (number == 1) {
            GurglingHP = 50;
            killsLeft += 10000;
            killsneeded += 10000;
            killText.setText('Kills Left: ' + killsLeft)
            var Gurgling1 = Gurgling.create(350, 300, 'Gurglings').setScale(0.5);
            var Gurgling2 = Gurgling.create(450, 300, 'Gurglings').setScale(0.5);
            Gurgling1.setDrag(200);
            Gurgling2.setDrag(200);
            Gurgling1.setCollideWorldBounds(true);
            Gurgling2.setCollideWorldBounds(true);
            Gurgling1.setBounce(0.7);
            Gurgling2.setBounce(0.7);
            setInterval(function () {
                var number = Math.round(Math.random() * 3)
                if (number == 0) {
                    Gurgling1.setVelocityY(300);
                } else if (number == 1) {
                    Gurgling1.setVelocityX(300);
                } else if (number == 2) {
                    Gurgling1.setVelocityY(-300);
                } else if (number == 3) {
                    Gurgling1.setVelocityX(-300);
                }
            }, 500);
            setInterval(function () {
                var number = Math.round(Math.random() * 3)
                if (number == 0) {
                    Gurgling2.setVelocityY(300);
                } else if (number == 1) {
                    Gurgling2.setVelocityX(300);
                } else if (number == 2) {
                    Gurgling2.setVelocityY(-300);
                } else if (number == 3) {
                    Gurgling2.setVelocityX(-300);
                }
            }, 500);
        }
    } else if (LabyrinthFloor == 2) {
        var nember = Math.round(Math.random() * 2)
        if (nember == 0) {
            ChubHP = 50;
            killsLeft += 10000;
            killsneeded += 10000;
            killText.setText('Kills Left: ' + killsLeft)
            var Chubs = Chub.create(350, 300, 'Chub').setScale(0.5);
            Chubs.setDrag(5000);
            Chubs.setCollideWorldBounds(true);
            Chubs.setBounce(0.7);
            setInterval(function () {
                var number = Math.round(Math.random() * 3)
                if (number == 0) {
                    Chubs.setVelocityY(200);
                } else if (number == 1) {
                    Chubs.setVelocityX(200);
                } else if (number == 2) {
                    Chubs.setVelocityY(-200);
                } else if (number == 3) {
                    Chubs.setVelocityX(-200);
                }
            }, 1000);
        } else if (nember == 1) {
            GurdyHP = 50;
            killsLeft += 10000;
            killsneeded += 10000;
            killText.setText('Kills Left: ' + killsLeft)
            var Gurdys = Gurdy.create(400, 200, 'Gurdy').setScale(0.5);
            Gurdys.setCollideWorldBounds(true);;
            var leX = Gurdys.x;
            var leY = Gurdys.y;
            setInterval(function () {
                var number = Math.round(Math.random() * 3)
                if (number == 0) {
                    EnemyBullet.create(leX, leY, 'bullet')
                    EnemyBullet.setVelocityY(300);
                    EnemyBullet.setVelocityX(80);

                    EnemyBullet1.create(leX, leY, 'bullet')
                    EnemyBullet1.setVelocityY(300);
                    EnemyBullet1.setVelocityX(80);

                    EnemyBullet2.create(leX, leY, 'bullet')
                    EnemyBullet2.setVelocityY(300);
                    EnemyBullet2.setVelocityX(-80);

                    EnemyBullet3.create(leX, leY, 'bullet')
                    EnemyBullet3.setVelocityY(300);
                    EnemyBullet3.setVelocityX(-160);

                    EnemyBullet4.create(leX, leY, 'bullet')
                    EnemyBullet4.setVelocityY(300);
                    EnemyBullet1.setVelocityX(160);
                } else if (number == 1) {
                    EnemyHPChase = 3;
                    var chases = chaser.create(leX - 50, leY, 'fly').setScale(0.2).setTint(0xff00ff);
                    chases.setCollideWorldBounds(true);
                    chases.setBounce(1, 1);
                    setInterval(function () {
                        chases.setVelocityX(player.x - chases.x)
                        chases.setVelocityY(player.y - chases.y)
                    }, 10);
                    var chasez = chaser.create(leX + 50, leY, 'fly').setScale(0.2).setTint(0xff00ff);
                    chasez.setCollideWorldBounds(true);
                    chasez.setBounce(1, 1);
                    setInterval(function () {
                        chasez.setVelocityX(player.x - chasez.x)
                        chasez.setVelocityY(player.y - chasez.y)
                    }, 10);
                } else if (number == 2) {
                    EnemyBullet.create(leX, leY, 'bullet').setTint(0xff0000)
                    EnemyBullet.setVelocityX(300);
                    EnemyBullet.setVelocityY(80);

                    EnemyBullet1.create(leX, leY, 'bullet')
                    EnemyBullet1.setVelocityX(300);
                    EnemyBullet1.setVelocityY(80);

                    EnemyBullet2.create(leX, leY, 'bullet')
                    EnemyBullet2.setVelocityX(300);
                    EnemyBullet2.setVelocityY(-80);

                    EnemyBullet3.create(leX, leY, 'bullet')
                    EnemyBullet3.setVelocityX(300);
                    EnemyBullet3.setVelocityY(-160);

                    EnemyBullet4.create(leX, leY, 'bullet')
                    EnemyBullet4.setVelocityX(300);
                    EnemyBullet1.setVelocityY(160);
                } else if (number == 3) {
                    EnemyBullet.create(leX, leY, 'bullet')
                    EnemyBullet.setVelocityX(-300);
                    EnemyBullet.setVelocityY(80);

                    EnemyBullet1.create(leX, leY, 'bullet')
                    EnemyBullet1.setVelocityX(-300);
                    EnemyBullet1.setVelocityY(80);

                    EnemyBullet2.create(leX, leY, 'bullet')
                    EnemyBullet2.setVelocityX(-300);
                    EnemyBullet2.setVelocityY(-80);

                    EnemyBullet3.create(leX, leY, 'bullet')
                    EnemyBullet3.setVelocityX(-300);
                    EnemyBullet3.setVelocityY(-160);

                    EnemyBullet4.create(leX, leY, 'bullet')
                    EnemyBullet4.setVelocityX(-300);
                    EnemyBullet1.setVelocityY(160);
                }
            }, 2000);
        } else if (nember == 2) {
            LokiHP = 50;
            killsLeft += 10000;
            killsneeded += 10000;
            killText.setText('Kills Left: ' + killsLeft)
            var Loki1 = Loki.create(400, 200, 'Loki');
            Loki1.setDrag(100);
            Loki1.setCollideWorldBounds(true);
            setInterval(function () {
                var number = Math.round(Math.random() * 5)
                if (number == 0) {
                    Loki1.setVelocityY(100);
                } else if (number == 1) {
                    Loki1.setVelocityX(100);
                } else if (number == 2) {
                    Loki1.setVelocityY(-100);
                } else if (number == 3) {
                    Loki1.setVelocityX(-100);
                } else if (number == 4) {
                    EnemyBullet1 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                    EnemyBullet2 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                    EnemyBullet3 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                    EnemyBullet4 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                    EnemyBullet1.setVelocityY(200);
                    EnemyBullet2.setVelocityX(200);
                    EnemyBullet3.setVelocityY(-200);
                    EnemyBullet4.setVelocityX(-200);
                    setTimeout(function () {
                        EnemyBullet1 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                        EnemyBullet2 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                        EnemyBullet3 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                        EnemyBullet4 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                        EnemyBullet1.setVelocityY(200);
                        EnemyBullet1.setVelocityX(-200);
                        EnemyBullet2.setVelocityX(200);
                        EnemyBullet2.setVelocityY(-200);
                        EnemyBullet3.setVelocityY(-200);
                        EnemyBullet3.setVelocityX(-200);
                        EnemyBullet4.setVelocityX(200);
                        EnemyBullet4.setVelocityY(200);
                        setTimeout(function () {
                            EnemyBullet1 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                            EnemyBullet2 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                            EnemyBullet3 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                            EnemyBullet4 = EnemyBullet.create(Loki1.x, Loki1.y, 'bullet')
                            EnemyBullet1.setVelocityY(200);
                            EnemyBullet2.setVelocityX(200);
                            EnemyBullet3.setVelocityY(-200);
                            EnemyBullet4.setVelocityX(-200);
                        }, 500);
                    }, 500);
                } else if (number == 5) {
                    Loki1.x = Math.round(Math.random() * 800);
                    Loki1.y = Math.round(Math.random() * 600);
                } else if (number == 6) {
                    BoomFly()
                }
            }, 1500);
        }
    }
}
function Gunner() {
    EnemyAlive = true
    var Shooting = true;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var enemys = enemy.create(sX, sY, 'Gun');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    enemys.setVelocityX(directionX);
    enemys.setVelocityY(directionY);
    enemys.setCollideWorldBounds(true);
    enemys.setBounce(1, 1);
    setInterval(function () {
        enemys.rotation = Phaser.Math.Angle.Between(enemys.x, enemys.y, player.x, player.y);
    }, 10);
    enemys.setDrag(500, 500)
    setInterval(function () {
        if (EnemyAlive == false) {
            Shooting = false;
        }
        if (Shooting == true) {
            EnemyBullets = EnemyBullet.create(enemys.x, enemys.y, 'bullet')
            EnemyBullets.setVelocityX(player.x - enemys.x)
            EnemyBullets.setVelocityY(player.y - enemys.y)
            EnemyBullets.setVisible(false);
            EnemyBullets.setActive(false)
            EnemyBullets.setVisible(true);
            EnemyBullets.setActive(true)
        } else {
        }
    }, 1000);
}
function HP() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var hpup = Hpup.create(sX, sY, 'HPup');
    hpup.setCollideWorldBounds(true);
}
function AKEY() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var pineapple = pineapples.create(sX, sY, 'Key');
    pineapple.setCollideWorldBounds(true);
}
function QUARTER() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var quarters = quarter.create(sX, sY, 'quarter');
    quarters.setCollideWorldBounds(true);
}
function THEPACT() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var pacts = pact.create(sX, sY, 'pact');
    pacts.setCollideWorldBounds(true);
}
function THEBINKI() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Binkys = Binky.create(sX, sY, 'binky').setScale(0.5);
    Binkys.setCollideWorldBounds(true);
}
function PJS() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var PJ = PJs.create(sX, sY, 'pjs').setScale(1.2).setTint(0x0000ff);
    PJ.setCollideWorldBounds(true);
}
function BOOM() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Booms = Boom.create(sX, sY, 'mine').setScale(1.2).setTint(0xff00ff);
    Booms.setCollideWorldBounds(true);
}
function BLANKET() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Blankets = Blanket.create(sX, sY, 'tri-shot').setScale(0.8).setTint(0x0000ff);
    Blankets.setCollideWorldBounds(true);
}
function TRIPLESHOT() {
    TriShot.create(400, 300, 'spoon').setScale(0.5).setAngle(-90).setTint(0x0f000f);
}
function CHASER() {
    EnemyHPChase = 3;
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var chases = chaser.create(sX, sY, 'fly').setScale(0.2).setTint(0xff00ff);
    chases.setCollideWorldBounds(true);
    chases.setBounce(1, 1);
    setInterval(function () {
        chases.setVelocityX(player.x - chases.x)
        chases.setVelocityY(player.y - chases.y)
    }, 10);
}
function GURGLING() {
    GurglingHP = 50;
    killsLeft += 10000;
    killsneeded += 10000;
    killText.setText('Kills Left: ' + killsLeft)
    var Gurgling1 = Gurgling.create(350, 300, 'Gurglings').setScale(0.5);
    var Gurgling2 = Gurgling.create(450, 300, 'Gurglings').setScale(0.5);
    Gurgling1.setDrag(200);
    Gurgling2.setDrag(200);
    Gurgling1.setCollideWorldBounds(true);
    Gurgling2.setCollideWorldBounds(true);
    Gurgling1.setBounce(0.7);
    Gurgling2.setBounce(0.7);
    setInterval(function () {
        var number = Math.round(Math.random() * 3)
        if (number == 0) {
            Gurgling1.setVelocityY(300);
        } else if (number == 1) {
            Gurgling1.setVelocityX(300);
        } else if (number == 2) {
            Gurgling1.setVelocityY(-300);
        } else if (number == 3) {
            Gurgling1.setVelocityX(-300);
        }
    }, 500);
    setInterval(function () {
        var number = Math.round(Math.random() * 3)
        if (number == 0) {
            Gurgling2.setVelocityY(300);
        } else if (number == 1) {
            Gurgling2.setVelocityX(300);
        } else if (number == 2) {
            Gurgling2.setVelocityY(-300);
        } else if (number == 3) {
            Gurgling2.setVelocityX(-300);
        }
    }, 500);
}
function LOKI() {
}
function CUPIDARROW() {
    var sX = Math.random() * 780;
    var sY = Math.random() * 580;
    var Cupids = MomEye.create(sX, sY, 'spoon').setScale(0.4).setAngle(-90);
    Cupids.setCollideWorldBounds(true);
}
function hp() {
    Hpup.create(400, 300, 'HPup');
}
function deploybomb() {
    var bombsE = bombE.create(400, 300, 'friendlyBOMB');
    bombsE.setCollideWorldBounds(true);
}
function coin() {
    melons.create(400, 300, 'Coin');
}
function key() {
    pineapples.create(400, 300, 'Key')
}
function soulH() {
    SoulHP.create(400, 300, 'SoulH')
}
function TintedsoulH() {
    SoulHP.create(tinted.x, tinted.y, 'SoulH')
}
function Tintedkey() {
    pineapples.create(tinted.x, tinted.y, 'Key')
}
function Tintedbomb() {
    bombE.create(tinted.x, tinted.y, 'friendlyBomb')
}
function RandomRock() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(200, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(200, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock1() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(300, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(300, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock2() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(500, 250, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(500, 250, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock3() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(200, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(200, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock4() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(100, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(100, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function RandomRock5() {
    var number = Math.round(Math.random() * 10)
    if (number <= 9) {
        wall1.create(300, 350, 'barriers').setScale(1.5);
    } else if (number == 10) {
        wall1.create(300, 350, 'tinted').setScale(1.5).setTint(0x0000ff);
    }
}
function TrapDoor() {
    Trapdoor.create(400, 200, 'tri-shot').setTint(0x0f0f0f);
}
function DevilAngelRoom(player, SpecialRoom) {
    if (DevilRoomChance == true) {
        var noomber = Math.round(Math.random() * 2);
        if (noomber == 0) {
            Mark.create(400, 300, 'mark');
        } else if (noomber == 1) {
            pact.create(400, 300, 'pact');
        } else if (noomber == 2) {
            brimstone.create(400, 300, 'peper');
        }
    } else if (AngleRoomChance == true) {
        var number = Math.round(Math.random() * 1)
        if (number == 0) {
            Mitre.create(400, 300);
        } else if (number == 1) {
            scapular.create(400, 300, 'scapular');
        }
    }
}