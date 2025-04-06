
import { useState, useEffect } from 'react';
import sanityClient from '../lib/sanityClient';


export interface CardData {
    _id: string;
    title: string;
    price: number;
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
}

const useSanityCards = () => {

const [cards, setCards] = useState<CardData[]>([]);
// console.log("cardGallery posts:", cards);

useEffect(() => {
    const query = `*[_type == "card"]{
        _id,
        title,
        price,
        image
      }`;
      sanityClient.fetch<CardData[]>(query).then((data) => {
        setCards(data);
      });
}, []);


    return cards
}

export default useSanityCards