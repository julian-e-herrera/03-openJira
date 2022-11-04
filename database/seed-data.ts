
interface SeedData{
    entries:SeedEntry[]
}
interface SeedEntry{
    description:string, status: string, createdAt: number
}



export const seedData:SeedData = {
    entries:[
    {
         description: 'Pendiente-first line', status: 'pending', createdAt: Date.now()
    },
    {
         description: 'En-Progreso-seconde line', status: 'in-progress', createdAt: Date.now() - 10000
    },
    {
         description: 'Finished-trecer line', status: 'finished', createdAt: Date.now() - 188888
    },
]}