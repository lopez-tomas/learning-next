type Url = string;

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string;

type TProductAtttributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
}

type TProduct = {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAtttributes;
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  length: number;
  data: TProduct[];
  error?: string
}

type Page = Url | null;

type TInfo = {
  count: number;
  pages: number;
  next: Page;
  prev: Page;
}

type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string,
    url: Url
  };
  location: {
    name: string,
    url: Url
  };
  image: Url;
  episode: Array<string>;
  url: Url;
  created: string;
}
