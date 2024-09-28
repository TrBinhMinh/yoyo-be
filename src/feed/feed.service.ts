import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feed } from './feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private feedModel: Model<Feed>) {}

  async create(createFeedDto: CreateFeedDto): Promise<Feed> {
    const createdFeed = new this.feedModel(createFeedDto);
    return createdFeed.save();
  }

  async findAll(): Promise<Feed[]> {
    return this.feedModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} feed`;
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
