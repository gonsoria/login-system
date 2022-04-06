const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const axios = require('axios')

const urlBase = 'https://restcountries.com/v3.1/all'

const main = async () => {
    const getCountries = await axios.get(urlBase)
    const countriesData = getCountries.data

    const formatCountries = countriesData.map(country => {
        return {
            name:country?.name?.common,
            flag:country?.flags?.png
        }
    })
    try {
        const loadCountries = await prisma.country.createMany({
            data: formatCountries,
            skipDuplicates: true
        })

        console.log(loadCountries)
    } catch (error) {
        console.log(error)
        throw error

    }

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })