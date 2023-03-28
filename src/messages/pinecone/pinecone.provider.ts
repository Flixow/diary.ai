import 'cross-fetch/polyfill';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PineconeClient } from 'pinecone-client';

type Metadata = { id: string; values?: string[] | null };

@Injectable()
export class PineconeClientProvider {
  client: PineconeClient<Metadata>;

  constructor(private readonly configService: ConfigService) {
    this.client = new PineconeClient({
      apiKey: this.configService.get('PINECONE_API_KEY'),
      baseUrl: this.configService.get('PINECONE_BASE_URL'),
      namespace: this.configService.get('PINECONE_NAMESPACE'),
    });
  }

  getClient(): PineconeClient<Metadata> {
    return this.client;
  }
}
