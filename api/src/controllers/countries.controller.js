const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getCountries = async (req, res) => {
    try {
        const allCountries = await prisma.country.findMany()
        res.status(200).json(allCountries)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports = { getCountries }