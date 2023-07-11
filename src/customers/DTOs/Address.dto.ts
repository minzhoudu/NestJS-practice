import { IsNotEmpty } from 'class-validator';

export class AddressDto {
  @IsNotEmpty()
  street1: string;

  street2?: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  zip: string;
}
