const {test } = QUnit;

QUnit.module('ellenorzes()', (h) => {
    h.beforeEach(() => {
        this.lojatek = new LOJatek(0);
      //  this.loview = new LOView(0);
    });
    test('Létezik-e az ellenőrzés metódus', (assert) => {
        assert.ok(this.lojatek.ellenorzes, 'Létezik a metódus');
    });
    test('Függvény-e az ellenőrzés metódus?', (assert) => {
        assert.ok(typeof this.lojatek.ellenorzes === "function", 'Létezik a függvény');
    });
    test('Minden lámpa felkapcsolva?', (assert) => {
        this.lojatek = new LOJatek(lampak.length);
        assert.equal(this.lojatek.ellenorzes(), lampak.length);
    });
    test('Minden elem lekapcsolva', (assert) => {
        assert.equal(this.lojatek.ellenorzes(), 0);
    });
    test('kiinduláskor 5 elem felkapcsolva', (assert) => {
        this.lojatek = new LOJatek(5);
        assert.equal(this.lojatek.ellenorzes(),5);
    });
  });


  QUnit.module('szomszedokValtoztatasa()', (hook) => {
    hook.beforeEach(() => {
        this.lojatek = new LOJatek(0);
    });
    test('Létezik-e a szomszedokValtoztatasa metódus', (assert) => {
        assert.ok(lojatek.szomszedokValtoztatasa, 'Létezik a metódus');
    });
    test('Függvény-e a szomszedokValtoztatasa metódus?', (assert) => {
        assert.ok(typeof lojatek.szomszedokValtoztatasa === "function", 'Létezik a függvény');
    });
    test('Középső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(4);
        assert.equal(lampak[3].allapot,true);
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[5].allapot,true);
        assert.equal(lampak[7].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),4);
    });
    test('Bal felső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(0);
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[3].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),2);
    });
    test('Jobb felső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(2);
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[5].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),2);
    });
    test('Bal alsó lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(6);
        assert.equal(lampak[3].allapot,true);
        assert.equal(lampak[7].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),2);
    });
    test('Jobb alsó lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(8);
        assert.equal(lampak[7].allapot,true);
        assert.equal(lampak[5].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),2);
    });
    test('Jobb szélső középső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(5);
        assert.equal(lampak[2].allapot,true);
        assert.equal(lampak[4].allapot,true);
        assert.equal(lampak[8].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),3);
    });
    test('Bal szélső középső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(3);
        assert.equal(lampak[0].allapot,true);
        assert.equal(lampak[4].allapot,true);
        assert.equal(lampak[6].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),3);
    });
    test('Első sor középső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(1);
        assert.equal(lampak[0].allapot,true);
        assert.equal(lampak[2].allapot,true);
        assert.equal(lampak[4].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),3);
    });
    test('Utolsó sor középső lámpát kapcsoljuk?', (assert) => {
        this.lojatek.szomszedokValtoztatasa(7);
        assert.equal(lampak[8].allapot,true);
        assert.equal(lampak[6].allapot,true);
        assert.equal(lampak[4].allapot,true);

        assert.equal(this.lojatek.ellenorzes(),3);
    });
  });