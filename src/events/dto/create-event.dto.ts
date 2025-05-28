import { IsNotEmpty, IsString, IsOptional, IsObject } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  eventType: string;

  @IsOptional()
  @IsObject()
  meta?: Record<string, any>;
}
