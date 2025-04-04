import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TrackerMode, TrackerMuscle, TrackerVisual } from 'src/shared/enums';

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  username?: string;

  @IsNumber()
  age?: number;

  @IsOptional()
  @IsNumber()
  experienceYears?: number;

  @IsNotEmpty()
  password: string;
}

export class CreatePresetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(TrackerMode)
  @IsNotEmpty()
  mode: TrackerMode;

  @IsEnum(TrackerMuscle)
  @IsNotEmpty()
  muscle: TrackerMuscle;

  @IsEnum(TrackerVisual)
  @IsNotEmpty()
  visual: TrackerVisual;
}
