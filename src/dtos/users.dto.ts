import {  IsString, IsNumber, IsNumberString  } from 'class-validator';

export class CreateUserDto {
  @IsNumberString()
  public salary: number;

  @IsString()
  public name: string;

  @IsString()
  public dateOfBirth: string;

  @IsString()
  public gender: string;

}
