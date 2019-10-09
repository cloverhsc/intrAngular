import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
  public swMemberList = [ 'Jim', 'Jeffrey', 'Ocean', 'Eunae', 'Rebecca', 'Clover' ];

  public firmwares = [
    { name: 'SMT_MBD_1.2', status: 'release' },
    { name: 'SMT_THB_1.3', status: 'beta' },
    { name: 'SFT_MBD_5.7', status: 'release' },
    { name: 'SFT_SMCI_TFC_6.0', status: 'release' },
    { name: 'SFT_SMCI_SD5_5.1', status: 'beta' },
  ];

  public myName = 'Clover';
  public model = 'SFT_SMCI';
  public account = '';

  constructor() {}

  ngOnInit() {}

  showAlert() {
    alert('clicked');
  }

  onSubmit() {
    console.log(this.account);
  }
}
