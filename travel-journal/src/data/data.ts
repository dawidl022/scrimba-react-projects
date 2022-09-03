export interface Travel {
  id: number;
  title: string;
  country: string;
  gMapsUrl: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}

const travelData: Travel[] = [
  {
    id: 1,
    title: "Mount Fuji",
    country: "Japan",
    gMapsUrl: "https://goo.gl/maps/w5RzUSRGyM8B1nTX8",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
    startDate: "2021-01-12",
    endDate: "2021-01-24",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    id: 2,
    title: "Sydney Opera House",
    country: "Australia",
    gMapsUrl: "https://goo.gl/maps/BBuWM52y8YqE9cCF8",
    imageUrl: "https://source.unsplash.com/JmuyB_LibRo",
    startDate: "2021-05-27",
    endDate: "2021-06-08",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    id: 3,
    title: "Geirangerfjord",
    country: "Norway",
    gMapsUrl: "https://goo.gl/maps/t8LMiFzbnM9h1wpA9",
    imageUrl: "https://source.unsplash.com/3PeSjpLVtLg",
    startDate: "2021-10-01",
    endDate: "2021-11-18",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
];

export default travelData;
