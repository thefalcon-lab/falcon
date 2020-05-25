/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/seo/Seo'

const NotFoundPage = ({ location }) => (
  <Layout location={{ location }} page="404">
    <SEO title="404: Not found" />
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
          404
        </h1>
        <div className="entry-content" sx={{ fontFamily: 'heading' }}>
          <p>That page can't be found.</p>
          <p>It looks like nothing was found at this location.</p>
        </div>
      </Container>
    </article>
  </Layout>
)

export default NotFoundPage
