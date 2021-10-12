export class Myquotes {
    title:string
    quote:string
    votes:number

    constructor (title:string , quote:string ,votes?:number){
      this.title = title
      this.quote = quote
      this.votes = votes || 0
    }
  voteUp(){
      this.votes +=1
  }
  voteDown(){
      this.votes -=1
  }
}
