import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe
} from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateUserDto } from '../../dtos/CreateUser.dto'

@Controller('users')
export class UsersController {

  @Get()
  getUsers() {
    return [{
      username: 'nigorjeanluc',
      email: 'nigorjeanluc@gmail.com'
    }]
  }

  @Get('query')
  getUsersQuery(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return [{
      username: 'nigorjeanluc',
      email: 'nigorjeanluc@gmail.com'
    }]
  }


  @Get('posts')
  getUsersPosts() {
    return [{
      username: 'nigorjeanluc',
      email: 'nigorjeanluc@gmail.com',
      posts: [
        {
          id: 1,
          title: 'Post 1',
        },
        {
          id: 2,
          title: 'Post 2',
        },
      ]
    }]
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: []
      }
    ]
  }

  // @Post()
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body)
  //   response.send('Created')
  // }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData
  }

  // @Get(':id')
  // getUserById(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.params);
  //   response.send('')
  // }

  @Get(':id/:postId')
  getUserById(@Param('id', ParseIntPipe) id: number, @Param('postId', ParseIntPipe) postId: number) {
    console.log(id, postId);
    return { id, postId }
  }
}
