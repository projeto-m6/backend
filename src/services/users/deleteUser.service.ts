import { prisma } from "../../prisma"

export const deleteuserService = async (id: string):Promise<void> =>{

    const user = await prisma.user.delete({
        where: {
            id
        }})
}