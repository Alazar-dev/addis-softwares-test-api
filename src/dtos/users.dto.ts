import {  IsString, IsNumber,  } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  public salary: number;

  @IsString()
  public name: string;

  @IsString()
  public dateOfBirth: string;

  @IsString()
  public gender: string;

}
