import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: 'lax' as const,
    path: '/',
  };

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
  @Post('login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.authService.login(body);

    res.cookie('access_token', data.token, {
      ...this.cookieOptions,
      maxAge: 1000 * 60 * 60 * 24,
    });

    return {
      user: data.user,
    };
  }
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token', this.cookieOptions);

    return {
      message: 'Logout realizado com sucesso',
    };
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
