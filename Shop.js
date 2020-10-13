function spawnpickup1() {
    console.log('pickup1 loaded')
    var Random1 = Math.round(Math.random() * 3)
    if (Random1 == 0) {
        HpShop.create(450, 450, 'HPup')
    } else if (Random1 == 1) {
        BombFShop.create(450, 450, 'friendlyBOMB')
    } else if (Random1 == 2) {
        KeyShop.create(450, 450, 'Key')
    } else if (Random1 == 3) {
        SoulShop.create(450, 450, 'SoulH')
    }
    console.log(Random1)
}
function spawnpickup2() {
    console.log('pickup2 loaded')
    var Random2 = Math.round(Math.random() * 3)
    if (Random2 == 0) {
        HpShop.create(500, 450, 'HPup')
    } else if (Random2 == 1) {
        BombFShop.create(500, 450, 'friendlyBOMB')
    } else if (Random2 == 2) {
        KeyShop.create(500, 450, 'Key')
    } else if (Random2 == 3) {
        SoulShop.create(500, 450, 'SoulH')
    }
    console.log(Random2)
}
function spawnpickup3() {
    console.log('pickup3 loaded')
    var Random3 = Math.round(Math.random() * 3)
    if (Random3 == 0) {
        HpShop.create(400, 450, 'HPup')
    } else if (Random3 == 1) {
        BombFShop.create(400, 450, 'friendlyBOMB')
    } else if (Random3 == 2) {
        KeyShop.create(400, 450, 'Key')
    } else if (Random3 == 3) {
        SoulShop.create(400, 450, 'SoulH')
    }
    console.log(Random3)
}
function spawnitem() {
    console.log('item loaded')
    var Randomi = Math.round(Math.random() * 3)
    if (Randomi == 0) {
        PactShop.create(350, 450, 'pact')
    } else if (Randomi == 1) {
        BeltShop.create(350, 450, 'belt')
    } else if (Randomi == 2) {
        BinkyShop.create(350, 450, 'binky')
    } else if (Randomi == 3) {
        Blanket.create(350,450, 'tri-shot').setScale(0.8).setTint(0x0000ff);
    }
    console.log(Randomi)
}
function buyHP(player, HpShop) {
    if (currentHP < 6) {
        if (currentCoins >= 5) {
            currentHP += 1;
            HPText.setText('Current Hp:' + currentHP);
            HpShop.disableBody(true, true)
            var picked = this.sound.add('pickup');
            picked.play();
            currentCoins -= 5;
            CoinText.setText('Coins: ' + currentCoins);
        }
    }
}
function buyBOMB(player, BombFShop) {
    if (currentCoins >= 5) {
        var picked = this.sound.add('pickup');
        BombFShop.disableBody(true, true);
        picked.play();
        console.log('+1 bomb!')
        currentBombs++;
        BombText.setText('Bombs: ' + currentBombs);
        currentCoins -= 5;
        CoinText.setText('Coins: ' + currentCoins);
    }
}
function buyKEY(player, KeyShop) {
    if (currentCoins >= 5) {
        var picked = this.sound.add('pickup');
        KeyShop.disableBody(true, true);
        picked.play();
        console.log('+1 Key!')
        currentKeys++;
        KeyText.setText('Keys: ' + currentKeys);
        currentCoins -= 5;
        CoinText.setText('Coins: ' + currentCoins);
    }
}
function buySOUL(player, SoulShop) {
    if (currentCoins >= 5) {
        var picked = this.sound.add('pickup');
        SoulShop.disableBody(true, true);
        picked.play();
        console.log('+1 Key!')
        currentSouls++;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        currentCoins -= 5;
        CoinText.setText('Coins: ' + currentCoins);
    }
}
function buyPACT(player, PactShop) {
    if (currentCoins >= 15) {
        PactShop.disableBody(true, true);
        ThePact();
    }
}
function buyBELT(player, BeltShop) {
    if (currentCoins >= 15) {
        BeltShop.disableBody(true, true);
        TheBelt();
    }
}
function buyBINKY(player, BinkyShop) {
    if (currentCoins >= 15) {
        BinkyShop.disableBody(true, true);
        TheBinki();
    }
}