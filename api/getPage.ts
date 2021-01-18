import { NowRequest, NowResponse } from '@vercel/node'
import Eleventy from '@11ty/eleventy'
import Config from '../.eleventy';
import { readFile } from 'fs/promises'
import { join } from 'path'

const SERVERLESS_OUTPUT = join(process.cwd() + '/.eleventy');

export default async function getPage(req: NowRequest, res: NowResponse) {
  const slug = req.query['slug'] as string
  const fileRelativePath = req.query && req.query['fileRelativePath'] as string || slug + '.html'
  const eleventy = new Eleventy(Config.input, SERVERLESS_OUTPUT);
  const data = await eleventy.init();
  const output = await eleventy.write();
  const slugContents = await readFile(join(SERVERLESS_OUTPUT, fileRelativePath), { encoding: 'utf-8' });

  res.send(slugContents);
}