import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListCoomponent implements OnInit{
  //Ts can automatically determine the type of the variable on is's own
  pageTitle: string = 'My Product List';
  // set the images height and width
  imageWidth: number = 50;
  imageMargin: number = 2;

  //Set the Event listners inside the show image button
  showImage: boolean = false;

  //Set the filerby poperty default value
  // listFilter: string = 'cart';

  //using getters and setters instead of the th default value setting the private variable
  private _listFilter: string = '';


  //getters
  get listFilter(): string{
    return this._listFilter;
  }
  //setters

  set listFilter(value: string){
    this._listFilter = value;
    console.log("in setter:- ", value);
    this.filteredProducts = this.performFilter(value);
  }

  // made a property to filter the list of items
  filteredProducts: Iproduct[]=[];
  //use the interface from the Iproduct using the strong typing
  products: Iproduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2020',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png',
    },
  ];

  //Filter perform methode
  //take the filterby methode and filter the iproduct list 
  performFilter(filterby: string): Iproduct[]{
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product : Iproduct)=>
    product.productName.toLocaleLowerCase().includes(filterby));
  }

  //Event listner Methode
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  //onIntit is and interface and consist of one methode whiche we have to implement ngOninit
  ngOnInit(): void {
      console.log('in oninit mehtode');
      this.listFilter='cart';
  }
}
