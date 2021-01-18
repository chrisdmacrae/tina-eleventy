declare module '@11ty/eleventy' {
  class Eleventy {
    constructor(input: string, output: string)
    
    public init(): Promise<any>
    public write(): Promise<any>
  }

  export default Eleventy
}