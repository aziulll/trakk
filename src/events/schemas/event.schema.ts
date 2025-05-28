import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  eventType: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;

  @Prop({ type: Object })
  meta: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
