const App = () => (
  <div>
   
    <RandomChoice choices={['red', 'green', 'yellow']} />
    

    <Animal
      name="Stevie Chicks"
      species="Silkie Chicken"
      emoji="🐔"
      isCute
    />
    <Animal name="Patrick" species="Red Fox" emoji="🦊" />
    <RandomNum />
    <RandomNum />
    <RandomNum />
    <Bouncer age={19} />
    <Bouncer age={11} />
    <Bouncer age={39} />
    

  </div>
)



ReactDOM.render(<App />, document.getElementById("root"))