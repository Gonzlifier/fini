function PreSetRoom() {
    var GenerateRoom = Math.round(Math.random() * 3)
    if (GenerateRoom == 0) {
        console.log('All Rounder');
        RandomRock();
        RandomRock1();
        Fly();
        Gunner();
        Basic();
        Fast();
        Tank();
        Basic();
    } else if (GenerateRoom == 1) {
        console.log('Fast Tanks');
        RandomRock1();
        RandomRock2();
        Pit.create(400, 450, 'pit');
        Tank();
        Tank();
        Tank();
        Fast();
        Fast();
        Gunner();
    } else if (GenerateRoom == 2) {
        console.log('pew pew');
        RandomRock3();
        RandomRock4();
        Pit.create(600, 200, 'pit');
        Gunner();
        FlyGunner();
        Tank();
        Mine();
        Fly();
        RandomEnemy();
    } else if (GenerateRoom == 3) {
        console.log('Random Room');
        RandomRock1();
        RandomRock5();
        Pit.create(400, 500, 'pit');
        Pit.create(300, 400, 'pit');
        Pit.create(200, 500, 'pit');
        Pit.create(700, 200, 'pit');
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
    }
}