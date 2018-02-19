import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Person} from '../../shared/model/identity/person.interface';
import {IdentityService} from '../../../services/identity.service';

@Component({
  selector: 'dm-person-autocomplete',
  templateUrl: './person-autocomplete.component.html',
  styleUrls: ['./agency-autocomplete.component.scss']
})
export class PersonAutocompleteComponent implements OnChanges {

  persons: Person[];
  filteredPersons$: Observable<Person[]>;

  @Input() placeholder: string;
  @Input() innerFormControl: FormControl;

  constructor(private route: ActivatedRoute,
              private identityService: IdentityService) {
    this.innerFormControl = new FormControl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const persons$ = this.identityService.findPersons();
    persons$
      .subscribe(
        (person) => {
          this.persons = person;
          this.filteredPersons$ = this.innerFormControl.valueChanges
            .pipe(startWith(null), map(val => val ? this.filter(val) : this.persons.slice()));
        }
      );
  }

  filter(code) {
    return this.persons.filter(person => new RegExp(`^${code}`, 'gi').test(person.code));
  }

  displayFn(person) {
    return person ? person.code + ' - ' + person.name : '';
  }
}
