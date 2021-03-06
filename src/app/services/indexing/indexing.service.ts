import { Injectable } from '@angular/core';
import { IndexingServiceBase } from './indexing-service-base';
import { Logger } from '../../core/logger';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class IndexingService implements IndexingServiceBase {
  private isIndexing: boolean;

  constructor(
    private logger: Logger
  ) { }

  public startIndexing(): void {
    if (this.isIndexing) {
      return;
    }

    this.logger.info('+++ STARTED INDEXING +++', 'IndexingService', 'startIndexing');

    const startedMilliseconds: number = moment().valueOf();

    // TODO

    const finishedMilliseconds: number = moment().valueOf();

    this.logger.info(
      `+++ FINISHED INDEXING (Time required: ${finishedMilliseconds - startedMilliseconds}) +++`,
      'IndexingService',
      'startIndexing');
  }
}
