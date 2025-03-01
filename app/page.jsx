import Feed from '@components/Feed';
const Home = () =>{
    return(
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center" >
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet distinctio possimus labore? Ipsam cupiditate nobis laborum, expedita quasi possimus maxime at accusamus odio cumque dolores in optio nostrum dignissimos.
        </p>
        <Feed/>
      </section>
    )
}
export default Home