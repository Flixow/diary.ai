import { Injectable } from '@nestjs/common';

import { PineconeClientProvider } from 'src/messages/pinecone/pinecone.provider';

@Injectable()
export class PineconeService {
  constructor(
    private readonly pineconeClientProvider: PineconeClientProvider,
  ) {}

  upsert(vectors) {
    return this.pineconeClientProvider.client.upsert({
      vectors: [vectors],
    });
  }

  async query(vector) {
    const { matches } = await this.pineconeClientProvider.client.query({
      vector,
      topK: 10,
      includeMetadata: true,
      includeValues: false,
    });

    return matches
      .filter((match) => match.score > 0.8)
      .map((match) => parseInt(match.id));
  }
}
