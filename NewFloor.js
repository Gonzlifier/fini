function NextFloor(player, Trapdoor) {
    BackDel.create(300, 300);
    Trapdoor.disableBody(true, true);
}
function NewFloor1(basement1, BackDel) {
    if (LabyrinthFloor == 1) {
        console.log('Floor2');
        LabyrinthFloor = 2;
        basement1.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(660, 60, 'Room').setScale(0.5).setDepth(3)
        basement2.create(400, 300, 'Labyrinth 2').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Explored Labyrinth 2');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor2(basement2, BackDel) {
    if (LabyrinthFloor == 2) {
        console.log('Floor3');
        LabyrinthFloor = 3;
        basement2.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(660, 220, 'Room').setScale(0.5).setDepth(3)
        basement3.create(400, 300, 'Labyrinth 3').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Ancient Labyrinth 1');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor3(basement3, BackDel) {
    if (LabyrinthFloor == 3) {
        console.log('Floor4');
        LabyrinthFloor = 4;
        basement3.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(740, 140, 'Room').setScale(0.5).setDepth(3)
        basement4.create(400, 300, 'Labyrinth 4').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Ancient Labyrinth 2');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor4(basement4, BackDel) {
    if (LabyrinthFloor == 4) {
        console.log('Floor5');
        LabyrinthFloor = 5;
        basement4.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(580, 140, 'Room').setScale(0.5).setDepth(4)
        basement5.create(400, 300, 'Labyrinth 5').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Hidden Labyrinth 1');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor5(basement5, BackDel) {
    if (LabyrinthFloor == 5) {
        console.log('Floor5');
        LabyrinthFloor = 6;
        basement5.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(540, 140, 'Room').setScale(0.5).setDepth(4)
        basement6.create(400, 300, 'Labyrinth 6').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Hidden Labyrinth 2');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}