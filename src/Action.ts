/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
export default class Action {
  protected name: string
  protected params: object

  public action(): void {
    throw new Error('Please implement `AAction#action` method')
  }
}
