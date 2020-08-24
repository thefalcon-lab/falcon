/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { ProjectHeader } from '../../project'

export const BragPage = () => {
  return (
    <ProjectHeader
      title="Not to brag but..."
      sx={{ h1: { fontSize: [40, 80] } }}
    />
  )
}
