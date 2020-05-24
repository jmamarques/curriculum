import {Pipe, PipeTransform} from '@angular/core';
import {Skill} from '../interfaces/profile';
import {SkillEnum} from '../enums/skill.enum';

@Pipe({
  name: 'filterSkills'
})
export class FilterSkillsPipe implements PipeTransform {

  transform(value: Skill[], skill: SkillEnum): Skill[] {
    return value ? value.filter(v => v && v.type === skill) : [];

  }

}
