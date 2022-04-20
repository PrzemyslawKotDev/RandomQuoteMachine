class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      generate: [
      {quote: 'Be yourself, everyone else is already taken.',
      author: 'Oscar Wilde'},
      {quote: "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.",
       author: 'Marilyn Monroe'},
      {quote: "Two things are infinite: the universe and human stupidity, and I am not sure about the universe.",
      author: 'Albert Einstein'},
      {quote: "Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.",       author: 'Bernard M. Baruch'},
      {quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it is heaven on earth.", 
       author: 'William W. Purkey'},
      {quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",           author: 'Marilyn Monroe'},
      {quote: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
       author: 'Elie Wiesel'},
      {quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      author: 'Albert Einstein'},
      {quote: "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
      author: 'Jim Henson'},
      {quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.",
      author: "J.K. Rowling"},      
      {quote : "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
      author: 'Albert Einstein'}
    ]}
  }; 
  nextQuote(){
    document.getElementById('body').classList.toggle('fade');
    setTimeout(()=> {let randomNumber=Math.floor(Math.random()*this.state.generate.length);
    if(randomNumber === this.state.number){
    randomNumber = Math.floor(Math.random()*this.state.generate.length)
    };
    this.setState({
    number: randomNumber
    });
    document.getElementById('body').classList.toggle('fade');
    }, 400)
  } 
  render(){
    return (
    <div>
     <div id="text">{this.state.generate[this.state.number].quote}</div>
      <div id="author">- {this.state.generate[this.state.number].author}</div>
        <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote"><img id="twitter" src="https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg" /></a>
        <button align="right" id="new-quote" onClick={this.nextQuote.bind(this)}>New quote</button>
    </div>
    )
  }
} 
ReactDOM.render(<RandomQuote/>, document.getElementById('quote-box'))
