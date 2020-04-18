import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';
import { AccountsService } from 'src/app/service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
        this.accountService.statusUpdate.subscribe(
          (status: string) => alert('New status :' + status)
        );
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logForStatus(accountStatus);
  }

}
