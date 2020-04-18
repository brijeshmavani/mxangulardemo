import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { LoggingService } from 'src/app/service/logging.service';
import { AccountsService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logForStatus(status);
    this.accountService.statusUpdate.emit(status);
  }

}
