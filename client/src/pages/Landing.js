import logo from '../assets/images/logo.svg'
import main from '../assets/images/main-together.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='Lookers' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Opportunity</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            labore repellat molestias illum, vitae rem quo tempora nesciunt
            inventore. Id ex autem necessitatibus, commodi asperiores iste illo
            accusantium quidem nulla!
          </p>
          <button className='btn btn-hero'>Login / Register</button>
        </div>
        <img src={main} alt="content-img" className="img main-img" />
      </div>
    </Wrapper>
  )
}
export default Landing