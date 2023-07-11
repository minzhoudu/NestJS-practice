import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';

import { AddressDto } from './Address.dto';

export class CustomerDto {
  @IsNumberString({}, { message: 'ID mora biti string' })
  @IsNotEmpty({ message: 'ID ne sme biti prazan' })
  id: number;

  @IsEmail({}, { message: 'Email mora biti validan' })
  email: string;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => AddressDto)
  @IsNotEmptyObject()
  address: AddressDto;
}
