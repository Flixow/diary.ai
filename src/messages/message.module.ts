import { Module } from '@nestjs/common';
import { OpenaiService } from './openai/openai.service';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { PineconeService } from './pinecone/pinecone.service';
import { PineconeClientProvider } from 'src/messages/pinecone/pinecone.provider';

@Module({
  providers: [
    OpenaiService,
    MessagesService,
    PineconeService,
    PineconeClientProvider,
  ],
  controllers: [MessagesController],
})
export class MessageModule {}
