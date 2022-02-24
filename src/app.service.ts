import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private readonly apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    return `Hello World! ${this.apiKey}`;
  }
}
