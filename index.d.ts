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
