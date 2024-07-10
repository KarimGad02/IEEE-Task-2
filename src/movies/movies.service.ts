import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  private idCounter = 1;

  create(createMovieInput: CreateMovieInput): Movie {
    const newMovie = { id: this.idCounter++, ...createMovieInput };
    this.movies.push(newMovie);
    return newMovie;
  }

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  update(id: number, updateMovieInput: UpdateMovieInput): Movie {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex >= 0) {
      const updatedMovie = { ...this.movies[movieIndex], ...updateMovieInput };
      this.movies[movieIndex] = updatedMovie;
      return updatedMovie;
    }
    return null;
  }

  remove(id: number): boolean {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex >= 0) {
      this.movies.splice(movieIndex, 1);
      return true;
    }
    return false;
  }
}
