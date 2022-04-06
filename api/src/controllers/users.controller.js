const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

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
        
        if (!findUser) {

            const salt= await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password, salt)
    
            const findCountry = await prisma.country.findUnique({
                where: {
                    name: country            
                }
            })

            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                    countryId: findCountry.id
                }
            })
            res.status(200).json(newUser)
        } else {
            res.send('User already exists')
        }
        

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    const findUser = await prisma.user.findUnique({
        where: {
            email
        }
    })        
    
    if(!findUser) {
        res.status(400).json('Cannot find user')
    } else {

        try {

            if (await bcrypt.compare(password, findUser.password)) {
                res.json('Success')
            } else {
                res.send('Not allowed')
            }
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = { getUsers, createUser, getUserById, loginUser }