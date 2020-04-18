import { EventEmitter } from '@angular/core';

export class AccountsService {
  accounts = [
    {
      name: 'Company A Account',
      status: 'active'
    },
    {
      name: 'Company B Account',
      status: 'inactive'
    }
  ];

  statusUpdate = new EventEmitter<string>();

  addAccount(names: string, statuss: string) {
    this.accounts.push({ name: names, status: statuss });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
