class Image{

  constructor(dto){
    this.idImage = dto.id_image;
    this.idCompany = dto.id_company;
    this.path = dto.path;
    this.fileName = dto.file_name;
  }
}

module.exports = Image;