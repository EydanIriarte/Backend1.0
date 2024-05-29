const Profesor = require("../models").profesor;

class ProfesorService {
  static async getProfesores(params) {
    return await Profesor.findAll(params);
  }

  static async getProfesor(id) {
    return await Profesor.findOne({ where: { id } });
  }

  static async createProfesor(profesor) {
    return await Profesor.create({
      nombre: profesor.nombre,
      biografia: profesor.biografia,
    });
  }

  static async updateProfesor(profesor) {
    const instance = await this.getProfesor(profesor.id);

    if (!instance) return null;

    return instance.update({
      nombre: profesor.nombre,
      biografia: profesor.biografia
    });
  }

  static async deleteProfesor(id) {
    const instance = await this.getProfesor(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ProfesorService;