//import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        id: "1",
        firstName: 'Saurabh',
        longitude: 'Biware',
        Country: "Deutschland",
        City: "Heidelberg",
        image_URL: "https://static.dw.com/image/51827358_303.jpg"
    },
    {
        id: "2",
        latitude: "Anand",
        longitude: "Sharan",
        Country: "Italy",
        City: "Milan",
        image_URL: "https://www.zf.com/master/media/corporate/locations_2/pics/worldwide_italy_3_2_748px.jpg"
    }
]

export const getUsers = (req, res) => {
    res.send(users)
}