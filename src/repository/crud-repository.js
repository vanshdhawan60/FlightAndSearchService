class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(`Something went wrong in the ${this.model.name} repository layer`);
            throw error;
        }
    }

    async delete(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId,
                },
            });
            return true;
        } catch (error) {
            console.log(`Something went wrong in the ${this.model.name} repository layer`);
            throw error;
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log(`Something went wrong in the ${this.model.name} repository layer`);
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log(`Something went wrong in the ${this.model.name} repository layer`);
            throw error;
        }
    }

    async update(modelId, data) {
        // data -> {key : value}
        try {
            const [affectedRows, updatedInstances] = await this.model.update(data, {
                where: {
                    id: modelId,
                }
            });
            if (affectedRows === 0) {
                throw new Error('No records were updated');
            }
            return updatedInstances; 
        } catch (error) {
            console.log(`Something went wrong in the ${this.model.name} repository layer`);
            throw error;
        }
    }
}

module.exports = CrudRepository;
