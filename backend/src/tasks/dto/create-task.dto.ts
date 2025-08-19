// import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

// export class CreateTaskDto {
//   @IsString()
//   @MaxLength(200)
//   title: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(1000)
//   description?: string;

//   @IsOptional()
//   @IsBoolean()
//   completed?: boolean;
// }
import { IsBoolean, IsOptional, IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
