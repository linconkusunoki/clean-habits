import type { NextPage } from 'next'
import { Header } from '../components'
import { FormLogin } from '../components/form-login'

const Home: NextPage = () => {
  return (
    <div>
      <div className="mb-4">
        <Header />
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <FormLogin />
          </div>

          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
