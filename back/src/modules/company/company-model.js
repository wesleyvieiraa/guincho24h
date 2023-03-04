class Company{

  constructor(dto){
    this.idCompany = dto.id_company;
    this.name      = dto.name;
    this.idState   = dto.id_state;
    this.idCity    = dto.id_city;
    
    if(dto.description)
      this.description = dto.description;
    
    this.phone = dto.phone;
  }
}

module.exports = Company;