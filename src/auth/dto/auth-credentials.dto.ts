import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4, {
    message: 'O nome de usuário precisa conter no mínimo 4 carácteres.',
  })
  @MaxLength(20, {
    message: 'O nome de usuário precisa conter no máximo 20 carácteres.',
  })
  username: string;

  @IsString()
  @MinLength(8, {
    message: 'A senha precisa conter no mínimo 8 carácteres.',
  })
  @MaxLength(20, { message: 'A senha precisa conter no máximo 20 carácteres.' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha precisa conter pelo menos um caráctere minúsculo e maiúsculo, e um número ou caracter especial (ex: !, ?, #).',
  })
  password: string;
}
