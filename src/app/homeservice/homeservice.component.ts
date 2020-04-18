import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/service/account.service';

@Component({
  selector: 'app-homeservice',
  templateUrl: './homeservice.component.html',
  styleUrls: ['./homeservice.component.css']
})
export class HomeserviceComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }


  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accountService.addAccount(newAccount.name, newAccount.status);
  }


  onStatusAdded(updateInfo: { id: number, newStatus: string }) {
    this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }


}
