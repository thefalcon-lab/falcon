/** @jsx jsx */
import { jsx, Container, Flex, Box, Grid, Button } from 'theme-ui'

export const DateFilter = ({ filter, setFilter, months, ...props }) => {
  const handleSetFilter = (e) => {
    setFilter(e.currentTarget.value)
  }
  return (
    <Box className="dateFilter" sx={{ ...styles }} {...props}>
      <h3>Date</h3>
      <Flex className="months">
        <Button
          variant="invisible"
          className={!filter ? 'month active' : 'month'}
          value="all"
          onClick={() => setFilter(null)}
        >
          <span className="checkMonth"></span>
          All Posts
        </Button>
        {months.map((month) => {
          const filterClass = month === filter ? 'month active' : 'month'
          return (
            <Button
              variant="invisible"
              className={filterClass}
              value={month}
              onClick={handleSetFilter}
            >
              <span className="checkMonth"></span>
              {month}
            </Button>
          )
        })}
        {months.length === 4 && (
          <Button
            variant="invisible"
            className={'older' === filter ? 'month active' : 'month'}
            value="older"
            onClick={handleSetFilter}
          >
            <span className="checkMonth"></span>
            older
          </Button>
        )}
      </Flex>
    </Box>
  )
}

const styles = {
  '.months': { flexDirection: 'column' },
  '.month': {
    textAlign: 'left',
    '&.active': {
      color: 'black',
    },
  },
  '.checkMonth': {
    width: 10,
    height: 10,
    borderRadius: 50,
    border: '1px solid',
    borderColor: 'grey',
    display: 'inline-block',
    mr: 10,
    '.active &': {
      border: 'none',
      bg: 'primary',
    },
  },
  '.active': {
    '.checkMonth': {
      border: 'none',
      bg: 'primary',
    },
  },
}
