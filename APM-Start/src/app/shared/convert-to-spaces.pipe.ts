import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
    name: 'convertToSpaces'
})

export class ConverToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value?.replace(character, ' ');
    }
}