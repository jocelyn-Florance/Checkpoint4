import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'filterGame',
      })
export class FilterGamePipe implements PipeTransform {

  // tslint:disable-next-line:prefer-array-literal
  transform(items: Array<any>,
            filterName: string) {
    if (items && items.length) {
      return items.filter((item) => {
        if (filterName && item.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    }

    return items;

  }

}
