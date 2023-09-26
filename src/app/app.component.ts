import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'business-card';

   getAge = birthDate => Math.floor((new Date().valueOf() - new Date(birthDate).valueOf()) / 3.15576e+10)
}
