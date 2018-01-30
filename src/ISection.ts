/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
export default interface ISection {
  title: string
  header: string
  footer: string
  print: () => string
}
