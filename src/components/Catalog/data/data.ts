import CasioOne from './imgs/Casio Collection Vintage/CasioVintageFront.png'
import CasioTwo from './imgs/Casio Collection Men/CasioSport.png'
import LeeCooperOne from './imgs/Lee Cooper LC07626.399/LC07626.399_1.png'
import LeeCooperTwo from './imgs/Lee Cooper LC07046.530/LC07046.530.png'
import LeeCooperThree from './imgs/Lee Cooper LC07546.390/LC07546.390.png'

export interface CatalogData {
    id: number
    name: string
    brand: string
    description: string
    price: string
    img: any
    inStock: boolean,
}

const Data:CatalogData[] = [
    {
        id: 19038501,
        name: 'Casio Collection Vintage',
        brand: 'Casio',
        description: 'Электронные часы, водозащита до 30м, пластиковое стекло',
        price: '2990',
        img: CasioOne,
        inStock: false,
    },
    {
        id: 1038758921,
        name: 'Casio Collection Men',
        brand: 'Casio',
        description: 'Электронные часы, водозащита до 100м, пластиковое стекло',
        price: '4890',
        img: CasioTwo,
        inStock: true,
    },
    {
        id: 80357784,
        name: 'Lee Cooper LC07626.399',
        brand: 'Lee Cooper',
        description: 'Кварцевые часы, водозащита до 50м, минеральное стекло',
        price: '7600',
        img: LeeCooperOne,
        inStock: true,
    },
    {
        id: 56429588290,
        name: 'Lee Cooper LC07046.530',
        brand: 'Lee Cooper',
        description: 'Кварцевые часы, водозащита до 50м, минеральное стекло',
        price: '8260',
        img: LeeCooperTwo,
        inStock: true,
    },
    {
        id: 673540563,
        name: 'Lee Cooper LC07546.390',
        brand: 'Lee Cooper',
        description: 'Кварцевые часы, водозащита до 50м, минеральное стекло',
        price: '9310',
        img: LeeCooperThree,
        inStock: true,
    }
]

export default Data