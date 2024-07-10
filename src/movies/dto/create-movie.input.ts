import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateMovieInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  director: string;

  @Field()
  @IsString()
  releaseDate: string;
}
