function newRoom() {
    var RandomRoom = Math.round(Math.random() * 10)
    waveAt75 = false;
    waveAt50 = false;
    waveAt25 = false;
    if (addSoulHearts == true) {
        if (currentHP == 1) {
            currentSouls++;
            SoulText.setText('Soul Hearts: ' + currentSouls)
        }
    }
    if (Entered == true) {
        if (RoomNW == true && RoomNWClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomN == true && RoomNClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomNE == true && RoomNEClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomW == true && RoomWClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomC == true && RoomCClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomE == true && RoomEClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomSW == true && RoomSWClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomS == true && RoomSClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomSE == true && RoomSEClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomNN == true && RoomNNClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomEE == true && RoomEEClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomSS == true && RoomSSClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomWW == true && RoomWWClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else if (RoomWWW == true && RoomWWWClear == true) {
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            RoomReset();
        } else {
            RoomReset();
            if (TreasurePossible == true) {
                var number = Math.round(Math.random() * 3);
                if (number <= 2) {
                    if (ShopPossible == true) {
                        var number1 = Math.round(Math.random() * 3);
                        if (number1 <= 2) {
                            if (BossPossible == true) {
                                if (BossChance > 3) {
                                    setTimeout(function () {
                                        console.log('Boss')
                                        BossRoom();
                                        BossChance = 0;
                                        BossPossible = false;
                                        currentSouls++;
                                    }, 100);
                                } else {
                                    normalRoom = true;
                                    setTimeout(function () {
                                        PreSetRoom();
                                        console.log('Room1')
                                    }, 100);
                                    BossChance++;
                                }
                            } else {
                                normalRoom = true;
                                setTimeout(function () {
                                    PreSetRoom();
                                    console.log('Room2')
                                }, 100);
                                BossChance++;
                            }
                        }
                    } else if (number1 == 3) {
                        console.log('Shop')
                        normalRoom = false;
                        shopRoom();
                        BossChance++;
                        ShopPossible = false;
                    }
                } else if (number == 3) {
                    console.log('Treasure')
                    normalRoom = false;
                    treasureRoom();
                    BossChance++;
                    TreasurePossible = false
                }
            } else if (ShopPossible == true) {
                var number1 = Math.round(Math.random() * 3);
                if (number1 <= 2) {
                    if (BossPossible == true) {
                        if (BossChance > 3) {
                            setTimeout(function () {
                                BossRoom();
                                console.log('Boss2')
                                BossChance = 0;
                                BossPossible = false;
                            }, 100);
                        } else {
                            setTimeout(function () {
                                PreSetRoom();
                                console.log('Room3')
                            }, 100);
                            BossChance++;
                        }
                    } else if (number1 == 3) {
                        normalRoom = true;
                        setTimeout(function () {
                            PreSetRoom();
                            console.log('Room4')
                        }, 100);
                        BossChance++;
                    }
                } else if (number1 == 3) {
                    normalRoom = false;
                    setTimeout(function () {
                        shopRoom();
                        console.log('Shop2')
                    }, 100);
                    ShopPossible = false;
                }
            } else if (BossPossible) {
                if (BossChance > 3) {
                    setTimeout(function () {
                        BossRoom();
                        console.log('Boss3')
                        BossChance = 0;
                        BossPossible = false;
                    }, 100);
                } else {
                    setTimeout(function () {
                        PreSetRoom();
                        console.log('Room5')
                    }, 100);
                    BossChance++;
                }
            } else {
                normalRoom = true;
                setTimeout(function () {
                    PreSetRoom();
                    console.log('Room6')
                }, 100);
                BossChance++;
            }
        }
    }
}
function door1Leave(player, Door1L) {
    if (door == true) {
        Entered = true;
        player.x = 400;
        player.y = 550;
        door = false;
        setTimeout(function () {
            if (RoomN == true) {
                newRoom();
                RoomN = false
                RoomNClear = true
                RoomNN = true;
                RoomLoad = true;
            }else if  (RoomW == true) {
                newRoom();
                RoomW = false;
                RoomWClear = true;
                RoomNW = true;
                RoomLoad = true;
            } else if (RoomC == true) {
                newRoom();
                RoomC = false;
                RoomCClear = true;
                RoomN = true;
                RoomLoad = true;
            } else if (RoomE == true) {
                newRoom();
                RoomE = false;
                RoomEClear = true;
                RoomNE = true;
                RoomLoad = true;
            } else if (RoomSW == true) {
                newRoom();
                RoomSW = false;
                RoomSWClear = true;
                RoomW = true;
                RoomLoad = true;
            } else if (RoomS == true) {
                newRoom();
                RoomS = false;
                RoomSClear = true;
                RoomC = true;
                RoomLoad = true;
            } else if (RoomSE == true) {
                newRoom();
                RoomSE = false;
                RoomSEClear = true;
                RoomE = true;
                RoomLoad = true;
            } else if (RoomSS == true) {
                newRoom();
                RoomSS = false;
                RoomSSClear = true;
                RoomS = true;
                RoomLoad = true;
            }
        }, 20);
    }
}
function door2Leave(player, Door2L) {
    if (door == true) {
        Entered = true;
        player.x = 30;
        player.y = 300;
        door = false;
        setTimeout(function () {
            if (RoomNW == true) {
                newRoom();
                RoomNW = false;
                RoomNWClear = true;
                RoomN = true;
                RoomLoad = true;
            } else if (RoomN == true) {
                newRoom();
                RoomN = false;
                RoomNClear = true;
                RoomNE = true;
                RoomLoad = true;
            } else if (RoomW == true) {
                newRoom();
                RoomW = false;
                RoomWClear = true;
                RoomC = true;
                RoomLoad = true;
            } else if (RoomC == true) {
                newRoom();
                RoomC = false;
                RoomCClear = true;
                RoomE = true;
                RoomLoad = true;
            } else if (RoomSW == true) {
                newRoom();
                RoomSW = false;
                RoomSWClear = true;
                RoomS = true;
                RoomLoad = true;
            } else if (RoomS == true) {
                newRoom();
                RoomS = false;
                RoomSClear = true;
                RoomSE = true;
                RoomLoad = true;
            } else if (RoomWW == true) {
                newRoom();
                RoomWW = false;
                RoomWWClear = true;
                RoomW = true;
                RoomLoad = true;
            } else if (RoomE == true) {
                newRoom();
                RoomE = false;
                RoomEClear = true;
                RoomEE = true;
                RoomLoad = true;
            } else if (RoomWWW == true) {
                newRoom();
                RoomWWW = false;
                RoomWWWClear = true;
                RoomWW = true;
                RoomLoad = true;
            }
        }, 20);
    }
}
function door3Leave(player, Door3L) {
    if (door == true) {
        Entered = true;
        player.x = 400;
        player.y = 80;
        door = false;
        setTimeout(function () {
            if (RoomNW == true) {
                newRoom();
                RoomNW = false;
                RoomNWClear = true;
                RoomW = true;
                RoomLoad = true;
            } else if (RoomN == true) {
                newRoom();
                RoomN = false;
                RoomNClear = true;
                RoomC = true;
                RoomLoad = true;
            } else if (RoomNE == true) {
                newRoom();
                RoomNE = false;
                RoomNEClear = true;
                RoomE = true;
                RoomLoad = true;
            } else if (RoomW == true) {
                newRoom();
                RoomW = false;
                RoomWClear = true;
                RoomSW = true;
                RoomLoad = true;
            } else if (RoomC == true) {
                newRoom();
                RoomC = false;
                RoomCClear = true;
                RoomS = true;
                RoomLoad = true;
            } else if (RoomE == true) {
                newRoom();
                RoomE = false;
                RoomEClear = true;
                RoomSE = true;
                RoomLoad = true;
            } else if (RoomNN == true) {
                newRoom();
                RoomNN = false;
                RoomNNClear = true;
                RoomN = true;
                RoomLoad = true;
            } else if (RoomS == true){
                newRoom();
                RoomS = false;
                RoomSClear = true;
                RoomSS = true;
                RoomLoad = true;
            }
        }, 20);
    }
}
function door4Leave(player, Door4L) {
    if (door == true) {
        Entered = true;
        player.x = 750;
        player.y = 300;
        door = false;
        setTimeout(function () {
            if (RoomN == true) {
                newRoom();
                RoomN = false;
                RoomNClear = true;
                RoomNW = true;
                RoomLoad = true;
            } else if (RoomNE == true) {
                newRoom();
                RoomNE = false;
                RoomNEClear = true;
                RoomN = true;
                RoomLoad = true;
            } else if (RoomC == true) {
                newRoom();
                RoomC = false;
                RoomCClear = true;
                RoomW = true;
                RoomLoad = true;
            } else if (RoomE == true) {
                newRoom();
                RoomE = false;
                RoomEClear = true;
                RoomC = true;
                RoomLoad = true;
            } else if (RoomS == true) {
                newRoom();
                RoomS = false;
                RoomSClear = true;
                RoomSW = true;
                RoomLoad = true;
            } else if (RoomSE == true) {
                newRoom();
                RoomSE = false;
                RoomSEClear = true;
                RoomS = true;
                RoomLoad = true;
            } else if (RoomEE == true) {
                newRoom();
                RoomEE = false;
                RoomEEClear = true;
                RoomE = true;
                RoomLoad = true;
            } else if (RoomW == true) {
                newRoom();
                RoomW = false;
                RoomWClear = true;
                RoomWW = true;
                RoomLoad = true;
            } else if (RoomWW == true) {
                console.log('Room leave works')
                newRoom();
                RoomWW = false;
                RoomWWClear = true;
                RoomWWW = true;
                RoomLoad = true;
            }
        }, 20);
    }
}
//-----------------------------------------------------------
function treasureRoom() {
    killsLeft -= 6;
    killsneeded -= 6;
    killText.setText('KillsLeft: ' + killsLeft);
    var noomber = Math.round(Math.random() * 16);
    if (noomber == 0) {
        FireMind.create(400, 300, 'activeBOMB').setScale(0.6).setTint(0xff0000);
    } else if (noomber == 1) {
        Binky.create(400, 300, 'binky');
    } else if (noomber == 2) {
        quarter.create(400, 300, 'quarter');
    } else if (noomber == 3) {
        SadOnion.create(400, 300, 'sadonion');
    } else if (noomber == 4) {
        Contact.create(400, 300, 'star').setScale(0.5).setTint(0xffffff);
    } else if (noomber == 5) {
        scapular.create(400, 300, 'scapular');
    } else if (noomber == 6) {
        TriShot.create(400, 300, 'tri-shot');
    } else if (noomber == 7) {
        SkeleKey.create(400, 300, 'skeleKey');
    } else if (noomber == 8) {
        Apple.create(400, 300, 'breakfast').setScale(0.4).setTint(0xff0000);
    } else if (noomber == 9) {
        Boom.create(400, 300, 'mine').setScale(0.9).setTint(0xff00ff);
    } else if (noomber == 10) {
        Stigma.create(400, 300, 'spoon').setScale(0.5).setAngle(-90).setTint(0x0f0fff);
    } else if (noomber == 11) {
        Mitre.create(400, 300);
    } else if (noomber == 12) {
        Cupid.create(400, 300, 'spoon').setScale(0.4).setAngle(-90);
    } else if (noomber == 13) {
        MomEye.create(400, 300, 'binky').setScale(0.4).setAngle(90);
    }
}
function BossTreasure() {
    var noomber = Math.round(Math.random() * 4);
    if (noomber == 0) {
        breakfast.create(400, 300, 'breakfast').setTint(0x000000);
    } else if (noomber == 1) {
        Belt.create(400, 300, 'belt');
    } else if (noomber == 2) {
        heart.create(400, 300, 'heart');
    } else if (noomber == 3) {
        PJs.create(400, 300, 'pjs');
    } else if (noomber == 4) {
        WSpoon.create(400, 300, 'spoon').setScale(0.5).setAngle(-90).setTint(0x0f0f0f);
    }
}
function shopRoom() {
    console.log('Shop room loaded')
    setTimeout(function () {
        spawnitem();
        spawnpickup1();
        spawnpickup2();
        spawnpickup3();
    }, 200);
    killsLeft -= 6;
    killsneeded -= 6;
    killText.setText('KillsLeft: ' + killsLeft);
}
function BossRoom() {
    FloorBoss();
    killsLeft += 10000;
    killsneeded += 10000;
    killText.setText('KillsLeft: ' + killsLeft);
}
function RoomReset() {
    RoomNW = false;
    RoomN = false;
    RoomNE = false;
    RoomW = false;
    RoomC = false;
    RoomE = false;
    RoomSW = false;
    RoomS = false;
    RoomSE = false;
    ResetZone.create(400, 300, 'space')
    player.setDepth(1)
    setTimeout(function () {
        ResetDelete.create(700, 10, 'bullet');
    }, 10);
}