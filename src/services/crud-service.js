class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const res = await this.repository.create(data);
            return res;
        } catch (error) {
            console.log(`Something went wrong in the ${this.constructor.name} service layer.`);
            throw error;  // Correctly throwing the error
        }
    }

    async update(id, data) {
        try {
            const res = await this.repository.update(id, data);
            return res;
        } catch (error) {
            console.log(`Something went wrong in the ${this.constructor.name} service layer.`);
            throw error;  // Correctly throwing the error
        }
    }

    async delete(id) {
        try {
            return await this.repository.delete(id);
        } catch (error) {
            console.log(`Something went wrong in the ${this.constructor.name} service layer.`);
            throw error;  // Correctly throwing the error
        }
    }

    async get(id) {
        try {
            const res = await this.repository.get(id);
            return res;
        } catch (error) {
            console.log(`Something went wrong in the ${this.constructor.name} service layer.`);
            throw error;  // Correctly throwing the error
        }
    }

    async getAll() {
        try {
            const res = await this.repository.getAll();
            return res;
        } catch (error) {
            console.log(`Something went wrong in the ${this.constructor.name} service layer.`);
            throw error;  // Correctly throwing the error
        }
    }
}

module.exports = CrudService;
