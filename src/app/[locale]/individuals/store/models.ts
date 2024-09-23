export interface IProducts {
  productName: string;
  price: string;
  productDescription: string;
  productMainPictureLink: string;
  productTinyPicturesLink: Array<string>;
  productBenefitsBulletPoints: Array<string>;
  productTitle?: string;
}
