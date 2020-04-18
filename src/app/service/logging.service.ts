export class LoggingService {
    logForStatus(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}