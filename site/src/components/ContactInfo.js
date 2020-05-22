/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import { LocationIcon, PhoneIcon, MailIcon } from './Icons'

const CONTACT_QUERY = graphql`
  query {
    wp {
      themeOptions {
        info {
          address
          mail
          phone
        }
      }
    }
  }
`

export default (props) => {
  const data = useStaticQuery(CONTACT_QUERY)
  const { address, mail, phone } = data.wp.themeOptions.info
  return (
    <div sx={{ ...styles }} {...props}>
      <Flex className="contactItem">
        <PhoneIcon />
        <a href={`tel:${phone}`}>{phone}</a>
      </Flex>
      <Flex className="contactItem">
        <MailIcon sx={{ mt: 3 }} />
        <a href={`mailto:${mail}`}>{mail}</a>
      </Flex>
      <Flex className="contactItem">
        <LocationIcon />
        <Box dangerouslySetInnerHTML={{ __html: address }} />
      </Flex>
    </div>
  )
}

const styles = {
  '.contactItem': {
    mb: 20,
    svg: {
      mr: 15,
    },
    lineHeight: 1.2,
  },
}
