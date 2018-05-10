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
      { name: 'Engine', type: 'engine', selected: false, id: 1, src: '../../assets/starship_engines00.svg' },
      { name: 'Tractor Beam', type: 'tractorbeam', selected: false, id: 2, src: '../../assets/starship_tractorbeam00.svg' },
      { name: 'Sensors', type: 'sensors', selected: false, id: 3, src: '../../assets/starship_sensors00.svg' },
      { name: 'Shields', type: 'shields', selected: false, id: 4, src: '../../assets/starship_shields00.svg' },
      { name: 'Navi Computer', type: 'navicomputer', selected: false, id: 5, src: '../../assets/starship_navicomputer00.svg' },
      { name: 'Comms', type: 'comms', selected: false, id: 6, src: '../../assets/starship_comms00.svg' },
      { name: 'Escape Pods', type: 'escapepods', selected: false, id: 7, src: '../../assets/starship_escapepods00.svg' }
    ];

  }
  getName() {
    return this.name;
  }

}
