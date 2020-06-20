/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/seo/Seo'

const SuccessPage = ({ location }) => (
  <Layout location={{ location }} page="success">
    <SEO title="success" />
    <article>
      <Container
        sx={{
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: -100,
        }}
      >
        <h1
          sx={{ border: '10px double', borderColor: 'primary', py: 30, px: 50 }}
        >
          Success
        </h1>
        <div className="entry-content" sx={{ fontFamily: 'heading' }}>
          <p>Thank you for your submission.</p>
          <p>We will be in touch with you shortly.</p>
        </div>
      </Container>
    </article>
  </Layout>
)

export default SuccessPage
