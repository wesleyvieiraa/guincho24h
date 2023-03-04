class State{

  constructor(dto){
    this.idState = dto.id_state;
    this.uf = dto.uf;
    this.name = dto.name;
  }
}

module.exports = State;