/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from '../../images/BgImage'

export const Instagram = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allInstaNode(limit: 8) {
  //       nodes {
  //         localFile {
  //           publicURL
  //           childImageSharp {
  //             fluid(maxWidth: 600, quality: 80) {
  //               ...GatsbyImageSharpFluid_noBase64
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { nodes } = data.allInstaNode

  return (
    <Grid columns={[1, 2, 2, 4]} gap={2}>
      {/* {nodes &&
        nodes.map((node, i) => (
          <Box key={i} className="itemContainer">
            <BgImage
              img={node}
              className="item"
              sx={{ minHeight: 385 }}
            ></BgImage>
          </Box>
        ))} */}
      <h3>Insta</h3>
    </Grid>
  )
}
