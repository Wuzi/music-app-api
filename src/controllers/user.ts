import { Context } from 'koa';
import User from '../models/user';

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Display a single user.
   * GET v1/users/:id
   *
   * @param {Context} ctx Koa Context
   */
  public static async show(ctx: Context): Promise<void> {
    const user = await User.findById(ctx.params.id).populate('playlists');
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: 'Usuário não encontrado' };
      return;
    }

    ctx.body = user;
  }
}

export default UserController;
