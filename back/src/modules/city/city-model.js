class City{

  constructor(dto){
    this.idCity = dto.id_city;
    this.idState = dto.id_state;
    this.name = dto.name;
  }
}

module.exports = City;