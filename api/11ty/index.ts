import { NowRequest, NowResponse } from '@vercel/node'
import Eleventy from '@11ty/eleventy'
import { readFile } from 'fs/promises'
import { join } from 'path'

const SERVERLESS_INPUT = join(process.cwd(), "/.eleventy/input");
const SERVERLESS_OUTPUT = join(process.cwd() + '/.eleventy/output');

export default async function getPage(req: NowRequest, res: NowResponse) {
  try {
    const slug = req.query['slug'] as string
    const fileRelativePath = req.query && req.query['fileRelativePath'] as string || slug + '.html'
    const eleventy = new Eleventy(SERVERLESS_INPUT, SERVERLESS_OUTPUT);
    const data = await eleventy.init();
    const output = await eleventy.write();
    const slugContents = await readFile(join(SERVERLESS_OUTPUT, fileRelativePath), { encoding: 'utf-8' });

    res
      .json({
        status: res.statusCode,
        content: slugContents
      });
  } catch (error) {
    console.error(error);

    res
      .status(404)
      .json({
        status: res.statusCode,
        message: "Page not found"
      })
  }
}