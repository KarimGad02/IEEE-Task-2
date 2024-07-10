import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  createMovie(@Args('createMovieInput') createMovieInput: CreateMovieInput): Movie {
    return this.moviesService.create(createMovieInput);
  }

  @Query(() => [Movie], { name: 'movies' })
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => Int }) id: number): Movie {
    return this.moviesService.findOne(id);
  }

  @Mutation(() => Movie)
  updateMovie(@Args('updateMovieInput') updateMovieInput: UpdateMovieInput): Movie {
    return this.moviesService.update(updateMovieInput.id, updateMovieInput);
  }

  @Mutation(() => Boolean)
  removeMovie(@Args('id', { type: () => Int }) id: number): boolean {
    return this.moviesService.remove(id);
  }
}
