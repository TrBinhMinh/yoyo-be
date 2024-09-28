import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tbminh:yE3RZ1ptdqHyPwns@cluster0.2hzhwhw.mongodb.net/yoyo?retryWrites=true&w=majority&appName=Cluster0',
    ),
    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
