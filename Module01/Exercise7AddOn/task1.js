// case 1
class Hero {
  constructor(name, type, Hp) {
    this.name = name;
    this.type = type;
    this.hp = Hp;
  }
}
//mage
class Mage extends Hero {
  //fungsi extend memanggil class sebelum nya
  constructor(name, type, Hp, magicpower) {
    super(name, type, Hp);
    this.magicpower = magicpower;
  }
  getHeroInfo() {
    return {
      name: this.name,
      type: this.type,
      hp: this.hp,
      magicpower: this.magicpower,
    };
  }
}
//warrior
class Warrior extends Hero {
  //jd dia memanggil hero dan warrior dalam extends
  constructor(name, type, Hp, physicaldefense) {
    super(name, type, Hp);
    this.physicaldefense = physicaldefense;
  }
  getHeroInfo() {
    return {
      name: this.name,
      type: this.type,
      hp: this.hp,
      physicaldefense: this.physicaldefense,
    };
  }
}
const mage_hero = new Mage("Eudora", "electric", 1500, 500);
const warrior_hero = new Warrior("Alucard", "Demon hunter", 2500, 700);
console.log(mage_hero.getheroinfo());
console.log(warrior_hero.getheroinfo());
