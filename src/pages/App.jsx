import React from 'react'
import Services from '../components/Services'
import Customers from '../components/Customers'
import {Router} from '@reach/router'
import Layout from '../components/Layout'

const App = () => {
    return (
        <div>
            <Layout>
                <Router basepath="/App">
                    <Customers path="/" />
                    <Services path="/Services"></Services>
                </Router>
            </Layout>
        </div>
    )
}

export default App
