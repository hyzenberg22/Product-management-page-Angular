import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "convertToSpaces",

})

export class ConvertToSpacesPipe implements PipeTransform{


  //as the pipetransform is an interface it need to use the method transform
  //it transforms any sspace value to the replacable charecter
  transform(value: String, charecter: string) {
    return value.replace(charecter, ' ');
  }
}
