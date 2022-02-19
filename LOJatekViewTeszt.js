const {test } = QUnit;

QUnit.module('FelületTesztelés', (h) => {
  h.before(() => {
  this.jatekter = new LampakJatekter($("article"));
  //this.jatekter.
});
    test('Létrejön-e a megfelelő számú elem?', (assert)=> {
      for (let index = 0; index < 9; index++) {
        assert.ok($('article div').eq(index),'létrejött a div');
      }
    });
    test('Kattintásra megváltozik e az adott elem színe?', (assert)=> {
      for (let index = 0; index < 9; index++) {
        //kattintás esemény kiváltása
        lampak[index].elem.click();
        
        
        
    }
    });
  });