import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FeedDocument = HydratedDocument<Feed>;

@Schema()
export class Feed {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop([Object])
  comments: {
    comment: string;
  }[];
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
