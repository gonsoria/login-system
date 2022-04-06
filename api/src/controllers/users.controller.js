const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const getUsers = async (req, res) => {
    try {
        const allUsers = await prisma.user.findMany({
            include: {
                country: true
            }
        })

        res.status(200).json(allUsers)      

    } catch (error) {
        console.log(error)
        res.status(500).json(error)       
    }
}




const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await prisma.user.findMany({
            where: {
                id:Number(id)
            }
        })    
        
        res.status(200).json(user)      

    } catch (error) {
        console.log(error)
        res.status(500).json(error)       
    }
}



const createUser = async (req, res) => {
    const { email, password, name, country } = req.body;
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        const findCountry = await prisma.country.findUnique({
            where: {
                name: country            
            }
        })

        console.log(findCountry.id)
        
        if (!findUser) {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password,
                    name,
                    countryId: findCountry.id
                }
            })
            res.status(200).json(newUser)
        } else {
            res.send('el usuario ya existe')
        }
        

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { getUsers, createUser, getUserById }