import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  director: string;

  @Field()
  releaseDate: string;
}
