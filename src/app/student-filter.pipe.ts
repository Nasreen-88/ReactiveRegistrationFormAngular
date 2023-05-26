import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {
  transform(items: string[], filter: string): string[] {
    if (!filter) {
      return items;
    }
    
    filter = filter.toLowerCase();
    return items.filter(item => item.toLowerCase().includes(filter));
  }
}
