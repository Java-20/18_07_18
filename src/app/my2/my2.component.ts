import { Component} from '@angular/core';

@Component({
  selector: 'app-my2',
  templateUrl: './my2.component.html',
  styleUrls: ['./my2.component.css']
})
export class My2Component {
  title = 'Title of component';

  calc(a,b){
    return a + b;
  }

  onBtnClick(event){
    console.log(event);
  }

  changeTitle(event){
    console.log(event);
    this.title = event.target.value;
  }
}
