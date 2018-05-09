export class Starship {
  name: string;
  components = [];
  constructor(
    name = 'Default Starship'
    // engine = '',
    // tractorbeam = '',
    // sensors = '',
    // shields = '',
    // navicomputer = '',
    // comms = '',
    // escapepods = ''
  ) {
    this.name = name;
    this.components = [
      { name: 'Engine', type: 'engine', selected: false, id: 1 },
      { name: 'Tractor Beam', type: 'tractorbeam', selected: false, id: 2 },
      { name: 'Sensors', type: 'sensors', selected: false, id: 3 },
      { name: 'Shields', type: 'shields', selected: false, id: 4 },
      { name: 'Navi Computer', type: 'navicomputer', selected: false, id: 5 },
      { name: 'Comms', type: 'comms', selected: false, id: 6 },
      { name: 'Escapepods', type: 'escapepods', selected: false, id: 7 }
    ];

  }
  getName() {
    return this.name;
  }

}
